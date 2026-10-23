export const heroFieldVertexShader = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

export const heroFieldFragmentShader = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_motion;
uniform vec3 u_thread;
uniform float u_compact;
uniform float u_pointer;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec2 mouse = u_mouse / u_resolution;
  uv.x = mix(uv.x, uv.x * 0.68 + 0.32, u_compact);
  mouse.x = mix(mouse.x, mouse.x * 0.68 + 0.32, u_compact);
  uv.y = mix(uv.y, (uv.y - 0.5) * 2.5 + 0.5, u_compact);
  mouse.y = mix(mouse.y, (mouse.y - 0.5) * 2.5 + 0.5, u_compact);
  float phase = u_time * 0.12 * u_motion;
  float mask = smoothstep(0.32, 0.62, uv.x);
  float rightFade = 1.0 - smoothstep(0.96, 1.16, uv.x);
  float light = 0.0;
  float halo = 0.0;
  float px = mix(1.0, 2.5, u_compact) / u_resolution.y;
  for (int i = 0; i < 44; i++) {
    float s = (float(i) / 43.0 - 0.5) * 2.0;
    float x = uv.x;
    float y = 0.49 + 0.13 * sin(x * 7.0 - 1.3 + phase)
      + s * (0.19 + 0.10 * sin(x * 5.8 + 1.3))
      + 0.075 * sin(x * 11.0 + s * 1.7 + phase) * smoothstep(0.32, 0.72, x);
    float slope = 0.91 * cos(x * 7.0 - 1.3 + phase)
      + s * 0.58 * cos(x * 5.8 + 1.3)
      + 0.825 * cos(x * 11.0 + s * 1.7 + phase) * smoothstep(0.32, 0.72, x);
    float d = abs(uv.y - y) / sqrt(1.0 + slope * slope);
    float weight = 0.40 + 0.60 * pow(1.0 - abs(s), 0.65);
    light += (1.0 - smoothstep(0.30 * px, 1.15 * px, d)) * weight;
    halo += exp(-d * 260.0) * weight * 0.035;
  }
  vec2 pointerDistance = (uv - mouse) * vec2(1.5, 1.0);
  float pointerLight = exp(-dot(pointerDistance, pointerDistance) * 24.0) * u_pointer;
  float strength = (min(light, 1.3) * 0.43 + min(halo, 0.65) * 0.15)
    * mask * rightFade * (0.8 + pointerLight * 0.2);
  gl_FragColor = vec4(u_thread, clamp(strength, 0.0, 1.0));
}
`;
