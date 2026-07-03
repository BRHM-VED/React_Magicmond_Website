/* ==========================================================================
   MagicMond — WebGL light-rays background
   Faithful port of the "Light Rays" effect used on the original Framer
   site (three.js r136 canvas): two ray sources above the canvas whose
   angular strength is modulated by sine waves, attenuated vertically and
   blended with premultiplied alpha. Implemented on a raw WebGL fullscreen
   quad — no three.js needed.

   Site configuration (extracted from the original page data):
     hero:  intensity 50, rays 30, reach 40, position 50, rgb(112,33,139)
     cta:   intensity 20, rays 30, reach 30, position 50, rgb(107,4,140)
   ========================================================================== */

(function () {
  "use strict";

  var VERT =
    "attribute vec2 a_pos;" +
    "void main(){gl_Position=vec4(a_pos,0.0,1.0);}";

  // Classic god-rays: strength = banded sine/cosine of the angle between
  // the fragment and each ray source, clamped by reach, faded with distance.
  var FRAG =
    "precision highp float;" +
    "uniform vec2 u_res;" +
    "uniform float u_time;" +
    "uniform vec3 u_color;" +
    "uniform float u_intensity;" +   // 0..0.5
    "uniform float u_reach;" +       // 0..0.5
    "uniform float u_speed;" +       // u_rays * 10
    "uniform vec2 u_pos1;" +
    "uniform vec2 u_pos2;" +
    "float beam(vec2 src,vec2 dir,vec2 p,float sa,float sb,float spd){" +
      "vec2 v=p-src;" +
      "float c=dot(normalize(v),dir);" +
      "float diag=length(u_res);" +
      "float w=clamp(0.45+0.15*sin(c*sa+u_time*spd)+0.3+0.2*cos(-c*sb+u_time*spd),u_reach,1.0);" +
      "return w*clamp((diag-length(v))/diag,u_reach,1.0);}" +
    "void main(){" +
      "vec2 p=vec2(gl_FragCoord.x,u_res.y-gl_FragCoord.y);" +
      "float s1=beam(u_pos1,normalize(vec2(1.0,-0.116)),p,36.2214*u_speed,21.11349*u_speed,1.5*u_speed);" +
      "float s2=beam(u_pos2,normalize(vec2(1.0,0.241)),p,22.3991*u_speed,18.0234*u_speed,1.1*u_speed);" +
      "float att=clamp(u_reach-(p.y/u_res.y)+0.5+u_intensity,0.0,1.0);" +
      "float a1=s1*att;" +
      "float a2=s2*att;" +
      "float a=a1+a2*(1.0-a1);" +
      "vec3 rgb=u_color*a1+u_color*a2;" +      // premultiplied
      "gl_FragColor=vec4(rgb,a);}";

  // data-theme presets; the homepage values are the original site's exact
  // settings, the blue/green variants match the InfraEdge/Sports pages.
  var PRESETS = {
    purple: { color: [112, 33, 139], intensity: 50, rays: 30, reach: 40, position: 50 },
    cta:    { color: [107, 4, 140],  intensity: 20, rays: 30, reach: 30, position: 50 },
    blue:   { color: [30, 70, 220],  intensity: 50, rays: 30, reach: 40, position: 50 },
    green:  { color: [24, 120, 80],  intensity: 50, rays: 30, reach: 40, position: 50 }
  };

  function initRays(canvas) {
    var cfg = PRESETS[canvas.dataset.theme] || PRESETS.purple;
    if (canvas.dataset.color) cfg = Object.assign({}, cfg, { color: canvas.dataset.color.split(",").map(Number) });
    if (canvas.dataset.intensity) cfg = Object.assign({}, cfg, { intensity: +canvas.dataset.intensity });
    if (canvas.dataset.reach) cfg = Object.assign({}, cfg, { reach: +canvas.dataset.reach });

    var gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: true });
    if (!gl) return; // old browser — page still works, just without the rays

    function compile(type, src) {
      var sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    }
    var prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    // fullscreen quad
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    var U = {};
    ["u_res", "u_time", "u_color", "u_intensity", "u_reach", "u_speed", "u_pos1", "u_pos2"].forEach(function (n) {
      U[n] = gl.getUniformLocation(prog, n);
    });

    // Same value mapping as the original component
    gl.uniform3f(U.u_color, cfg.color[0] / 255, cfg.color[1] / 255, cfg.color[2] / 255);
    gl.uniform1f(U.u_intensity, cfg.intensity / 100 * 0.5);
    gl.uniform1f(U.u_reach, cfg.reach / 100 * 0.5);
    gl.uniform1f(U.u_speed, cfg.rays / 100 * 0.3 * 10.0);

    function resize() {
      var w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w;   // pixel ratio 1, like the original renderer
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(U.u_res, w, h);
      // ray sources sit above the top edge, at/near the horizontal centre
      gl.uniform2f(U.u_pos1, cfg.position / 100 * w, -0.4 * h);
      gl.uniform2f(U.u_pos2, (cfg.position / 100 + 0.02) * w, -0.5 * h);
    }
    resize();
    window.addEventListener("resize", resize);

    var time = Math.random() * 1e4; // random start phase, like the original
    var last = 0;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function frame(now) {
      var dt = last ? now - last : 0;
      last = now;
      time += dt / 1000;              // animation.speed = 10 → 1 unit/second
      gl.uniform1f(U.u_time, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  document.querySelectorAll("canvas[data-rays], #hero-rays").forEach(initRays);
})();
