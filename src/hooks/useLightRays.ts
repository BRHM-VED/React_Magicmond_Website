import { useEffect, type RefObject } from "react";

export interface RaysConfig {
  color: [number, number, number];
  intensity: number; // 0..100 (site setting scale)
  rays: number;      // 0..100
  reach: number;     // 0..100
  position: number;  // 0..100 (horizontal, % of width)
}

/** Per-page presets — the purple/cta values are the original site's exact settings. */
export const RAYS_PRESETS: Record<string, RaysConfig> = {
  purple: { color: [112, 33, 139], intensity: 50, rays: 30, reach: 40, position: 50 },
  cta:    { color: [107, 4, 140],  intensity: 20, rays: 30, reach: 30, position: 50 },
  blue:   { color: [30, 70, 220],  intensity: 50, rays: 30, reach: 40, position: 50 },
  green:  { color: [24, 120, 80],  intensity: 50, rays: 30, reach: 40, position: 50 },
};

const VERT = "attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.0,1.0);}";

// Classic "god rays": two ray sources above the canvas, angular strength
// modulated by sine bands, vertical attenuation, premultiplied blending.
const FRAG =
  "precision highp float;" +
  "uniform vec2 u_res;uniform float u_time;uniform vec3 u_color;" +
  "uniform float u_intensity;uniform float u_reach;uniform float u_speed;" +
  "uniform vec2 u_pos1;uniform vec2 u_pos2;" +
  "float beam(vec2 src,vec2 dir,vec2 p,float sa,float sb,float spd){" +
  "vec2 v=p-src;float c=dot(normalize(v),dir);float diag=length(u_res);" +
  "float w=clamp(0.45+0.15*sin(c*sa+u_time*spd)+0.3+0.2*cos(-c*sb+u_time*spd),u_reach,1.0);" +
  "return w*clamp((diag-length(v))/diag,u_reach,1.0);}" +
  "void main(){" +
  "vec2 p=vec2(gl_FragCoord.x,u_res.y-gl_FragCoord.y);" +
  "float s1=beam(u_pos1,normalize(vec2(1.0,-0.116)),p,36.2214*u_speed,21.11349*u_speed,1.5*u_speed);" +
  "float s2=beam(u_pos2,normalize(vec2(1.0,0.241)),p,22.3991*u_speed,18.0234*u_speed,1.1*u_speed);" +
  "float att=clamp(u_reach-(p.y/u_res.y)+0.5+u_intensity,0.0,1.0);" +
  "float a1=s1*att;float a2=s2*att;float a=a1+a2*(1.0-a1);" +
  "gl_FragColor=vec4(u_color*a1+u_color*a2,a);}";

/** Renders the animated light-rays shader into the given canvas. */
export function useLightRays(canvasRef: RefObject<HTMLCanvasElement>, cfg: RaysConfig) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    gl.uniform3f(u("u_color"), cfg.color[0] / 255, cfg.color[1] / 255, cfg.color[2] / 255);
    gl.uniform1f(u("u_intensity"), (cfg.intensity / 100) * 0.5);
    gl.uniform1f(u("u_reach"), (cfg.reach / 100) * 0.5);
    gl.uniform1f(u("u_speed"), (cfg.rays / 100) * 0.3 * 10);

    const uRes = u("u_res"), uPos1 = u("u_pos1"), uPos2 = u("u_pos2"), uTime = u("u_time");
    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
      gl.uniform2f(uPos1, (cfg.position / 100) * w, -0.4 * h);
      gl.uniform2f(uPos2, (cfg.position / 100 + 0.02) * w, -0.5 * h);
    };
    resize();
    window.addEventListener("resize", resize);

    let time = Math.random() * 1e4;
    let last = 0;
    let raf = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = (now: number) => {
      const dt = last ? now - last : 0;
      last = now;
      time += dt / 1000;
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvasRef, cfg.color[0], cfg.color[1], cfg.color[2], cfg.intensity, cfg.rays, cfg.reach, cfg.position]);
}
