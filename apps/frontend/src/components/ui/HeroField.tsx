"use client";

import { useEffect, useRef, useState } from "react";

import { heroFieldFragmentShader, heroFieldVertexShader } from "@/lib/heroFieldShader";

type HeroFieldProps = {
  subdued?: boolean;
};

export function HeroField({ subdued = false }: HeroFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [contextVersion, setContextVersion] = useState(0);

  useEffect(() => {
    if (subdued) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: false, depth: false, stencil: false });
    if (!canvas || !container || !gl) return;

    const shaders: WebGLShader[] = [];
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
    };
    const vertex = compileShader(gl.VERTEX_SHADER, heroFieldVertexShader);
    const fragment = compileShader(gl.FRAGMENT_SHADER, heroFieldFragmentShader);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) {
      shaders.forEach((shader) => gl.deleteShader(shader));
      if (program) gl.deleteProgram(program);
      return;
    }
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      shaders.forEach((shader) => gl.deleteShader(shader));
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = Object.fromEntries(
      ["resolution", "time", "mouse", "motion", "thread", "compact", "pointer"].map((name) => [name, gl.getUniformLocation(program, `u_${name}`)]),
    );
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let lastFrame = 0;
    let elapsed = 0;
    let visible = false;
    let menuOpen = document.body.classList.contains("menu-open");
    let pointerAttached = false;
    let contextLost = false;
    let compact = false;
    let rendererSized = false;

    const updateTheme = () => {
      const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
      const channels = [1, 3, 5].map((index) => Number.parseInt(accent.slice(index, index + 2), 16) / 255);
      gl.uniform3f(uniforms.thread, channels[0], channels[1], channels[2]);
    };

    const draw = (now: number) => {
      if (contextLost || !visible || document.hidden || menuOpen) return;
      const frameRate = finePointer.matches ? 24 : 18;
      if (reducedMotion.matches || !lastFrame || now - lastFrame >= 1000 / frameRate) {
        if (!reducedMotion.matches && lastFrame) elapsed += Math.min(now - lastFrame, 100);
        lastFrame = now;
        gl.uniform1f(uniforms.time, reducedMotion.matches ? 0 : elapsed / 1000);
        gl.uniform1f(uniforms.motion, reducedMotion.matches ? 0 : compact ? 0.18 : 0.25);
        if (reducedMotion.matches) gl.uniform1f(uniforms.pointer, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        if (container.dataset.renderer !== "webgl") container.dataset.renderer = "webgl";
      }
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(draw);
    };

    const restart = () => {
      window.cancelAnimationFrame(frame);
      lastFrame = 0;
      draw(performance.now());
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      const width = Math.max(1, Math.round(bounds.width));
      const height = Math.max(1, Math.round(bounds.height));
      const nextCompact = bounds.width < 640;
      const sizeChanged = canvas.width !== width || canvas.height !== height;
      if (rendererSized && !sizeChanged && compact === nextCompact) return false;
      if (sizeChanged) {
        canvas.width = width;
        canvas.height = height;
      }
      compact = nextCompact;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform1f(uniforms.compact, compact ? 1 : 0);
      rendererSized = true;
      restart();
      return true;
    };

    const clearPointer = () => gl.uniform1f(uniforms.pointer, 0);
    const handlePointer = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reducedMotion.matches) return;
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const inside = x >= 0 && x <= bounds.width && y >= 0 && y <= bounds.height;
      gl.uniform2f(uniforms.mouse, x * canvas.width / bounds.width, (bounds.height - y) * canvas.height / bounds.height);
      gl.uniform1f(uniforms.pointer, inside ? 1 : 0);
    };
    const updatePreferences = () => {
      if (pointerAttached) {
        window.removeEventListener("pointermove", handlePointer);
        window.removeEventListener("pointerout", clearPointer);
        pointerAttached = false;
      }
      clearPointer();
      gl.uniform1f(uniforms.motion, reducedMotion.matches ? 0 : compact ? 0.18 : 0.25);
      if (visible && !document.hidden && !menuOpen && !reducedMotion.matches && finePointer.matches) {
        window.addEventListener("pointermove", handlePointer, { passive: true });
        window.addEventListener("pointerout", clearPointer);
        pointerAttached = true;
      }
      if (!resize()) restart();
    };
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      contextLost = true;
      window.cancelAnimationFrame(frame);
      delete container.dataset.renderer;
    };
    const handleContextRestored = () => setContextVersion((version) => version + 1);

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePreferences();
    });
    const themeObserver = new MutationObserver(() => {
      updateTheme();
      restart();
    });
    const menuObserver = new MutationObserver(() => {
      const nextMenuOpen = document.body.classList.contains("menu-open");
      if (nextMenuOpen === menuOpen) return;
      menuOpen = nextMenuOpen;
      updatePreferences();
    });
    resizeObserver.observe(container);
    visibilityObserver.observe(container);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    menuObserver.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    reducedMotion.addEventListener("change", updatePreferences);
    finePointer.addEventListener("change", updatePreferences);
    document.addEventListener("visibilitychange", updatePreferences);
    canvas.addEventListener("webglcontextlost", handleContextLost);
    canvas.addEventListener("webglcontextrestored", handleContextRestored);
    updateTheme();
    updatePreferences();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      menuObserver.disconnect();
      reducedMotion.removeEventListener("change", updatePreferences);
      finePointer.removeEventListener("change", updatePreferences);
      document.removeEventListener("visibilitychange", updatePreferences);
      canvas.removeEventListener("webglcontextlost", handleContextLost);
      canvas.removeEventListener("webglcontextrestored", handleContextRestored);
      delete container.dataset.renderer;
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("pointerout", clearPointer);
      if (!contextLost) {
        shaders.forEach((shader) => gl.deleteShader(shader));
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
      }
    };
  }, [subdued, contextVersion]);

  return (
    <div ref={containerRef} aria-hidden="true" className={`hero-field h-full w-full ${subdued ? "opacity-30" : "opacity-55"}`}>
      {!subdued && <canvas ref={canvasRef} className="block h-full w-full" />}
    </div>
  );
}
