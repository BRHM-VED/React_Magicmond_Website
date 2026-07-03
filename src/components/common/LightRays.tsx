import { useRef } from 'react';
import { useLightRays, RAYS_PRESETS, type RaysConfig } from '../../hooks/useLightRays';

interface Props {
  theme?: keyof typeof RAYS_PRESETS;
  config?: RaysConfig;
  className?: string;
}

/** Animated WebGL light-rays canvas (port of the original site's hero shader). */
export function LightRays({ theme = 'purple', config, className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  useLightRays(ref, config ?? RAYS_PRESETS[theme]);
  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
export default LightRays;
