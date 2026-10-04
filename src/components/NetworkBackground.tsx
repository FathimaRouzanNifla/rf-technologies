import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number; // 3D depth layer (0.5 to 1.3)
  radius: number;
  colorIndex: number;
  pulsePhase: number;
  pulseSpeed: number;
  waveFreqX: number;
  waveFreqY: number;
  waveSpeed: number;
  springStiffness: number;
  damping: number;
}

interface PulsePacket {
  nodeAIndex: number;
  nodeBIndex: number;
  progress: number;
  speed: number;
  colorIndex: number;
  size: number;
}

export const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // RF Technologies brand color palette
    const colors = [
      { r: 49, g: 92, b: 255 },   // Electric Blue #315CFF
      { r: 108, g: 36, b: 232 },  // Violet #6C24E8
      { r: 200, g: 23, b: 217 },  // Magenta #C817D9
      { r: 38, g: 55, b: 200 },   // Royal Blue #2637C8
      { r: 76, g: 140, b: 255 },  // Azure Highlight
    ];

    let nodes: Node[] = [];
    let pulses: PulsePacket[] = [];
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      vx: 0,
      vy: 0,
      isActive: false,
    };

    const initNodes = () => {
      nodes = [];
      pulses = [];

      // Responsive particle count based on screen area
      const area = width * height;
      const count = Math.min(
        Math.max(Math.floor(area / (width < 640 ? 22000 : 17000)), width < 640 ? 26 : 42),
        width < 1024 ? 58 : 78
      );

      // Create a smooth distributed mesh with gentle organic jitter
      const cols = Math.ceil(Math.sqrt((count * width) / height));
      const rows = Math.ceil(count / cols);
      const stepX = width / cols;
      const stepY = height / rows;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (nodes.length >= count) break;

          const baseX = i * stepX + stepX * 0.5 + (Math.random() - 0.5) * stepX * 0.65;
          const baseY = j * stepY + stepY * 0.5 + (Math.random() - 0.5) * stepY * 0.65;
          const z = 0.55 + Math.random() * 0.65; // depth factor (0.55 = deep/slow, 1.2 = foreground/active)

          nodes.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            vx: 0,
            vy: 0,
            z,
            radius: (Math.random() * 1.3 + 1.2) * (0.8 + z * 0.35),
            colorIndex: Math.floor(Math.random() * colors.length),
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 1.2 + Math.random() * 0.8,
            waveFreqX: 0.0018 + Math.random() * 0.001,
            waveFreqY: 0.0016 + Math.random() * 0.001,
            waveSpeed: 0.35 + Math.random() * 0.25,
            springStiffness: 0.038 + z * 0.016, // subtle elastic restoring force
            damping: 0.84 + Math.random() * 0.035, // fluid damping for realistic spring recoil
          });
        }
      }

      // Initialize a few subtle light pulse packets that glide along network lines
      const packetCount = Math.min(Math.floor(nodes.length * 0.28), 12);
      for (let p = 0; p < packetCount; p++) {
        pulses.push({
          nodeAIndex: Math.floor(Math.random() * nodes.length),
          nodeBIndex: Math.floor(Math.random() * nodes.length),
          progress: Math.random(),
          speed: 0.0025 + Math.random() * 0.0035,
          colorIndex: Math.floor(Math.random() * colors.length),
          size: 1.8 + Math.random() * 1.2,
        });
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouse.isActive || mouse.targetX < -9000) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    initNodes();

    let startTime = performance.now();
    let lastTime = startTime;

    const render = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) * 0.001, 0.1);
      lastTime = currentTime;
      const elapsed = prefersReducedMotion ? 0 : (currentTime - startTime) * 0.001;

      // Soft mouse interpolation with velocity tracking
      if (mouse.isActive) {
        const prevMouseX = mouse.x;
        const prevMouseY = mouse.y;
        mouse.x += (mouse.targetX - mouse.x) * 0.18;
        mouse.y += (mouse.targetY - mouse.y) * 0.18;
        mouse.vx = Math.max(Math.min(mouse.x - prevMouseX, 30), -30);
        mouse.vy = Math.max(Math.min(mouse.y - prevMouseY, 30), -30);
      } else {
        mouse.x += (-9999 - mouse.x) * 0.1;
        mouse.y += (-9999 - mouse.y) * 0.1;
        mouse.vx = 0;
        mouse.vy = 0;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      // Connection threshold adjusted for viewports
      const maxDistance = Math.min(width, height) * 0.19 + 60;
      const mouseInteractionRadius = 180;

      // 1. Calculate continuous coordinated 3D wave motion + Spring physics for every node
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          // Coordinated multi-frequency flowing wave equations for equilibrium anchor
          const wavePrimary =
            Math.sin(node.baseX * node.waveFreqX - elapsed * node.waveSpeed + node.baseY * 0.0012) *
            26 *
            node.z;
          const waveSecondary =
            Math.cos(node.baseX * 0.0014 + elapsed * (node.waveSpeed * 0.8) - node.baseY * node.waveFreqY) *
            18 *
            node.z;
          const waveTertiary =
            Math.sin((node.baseX + node.baseY) * 0.0009 + elapsed * 0.28) * 12;

          const targetX = node.baseX + waveSecondary;
          const targetY = node.baseY + wavePrimary + waveTertiary;

          // Hooke's Law Spring Force towards equilibrium anchor: F = -k * displacement
          const springDx = targetX - node.x;
          const springDy = targetY - node.y;
          let ax = springDx * node.springStiffness;
          let ay = springDy * node.springStiffness;

          // Fluid spring interaction with cursor:
          // When cursor nears particle, apply spring repulsion + subtle wake impulse
          if (mouse.isActive) {
            const mdx = node.x - mouse.x;
            const mdy = node.y - mouse.y;
            const mDist = Math.hypot(mdx, mdy);

            if (mDist < mouseInteractionRadius && mDist > 0.001) {
              const proximityFactor = 1 - mDist / mouseInteractionRadius;
              // Smooth non-linear push force for elastic spring deflection
              const pushMagnitude = Math.pow(proximityFactor, 1.8) * 1.85 * node.z;

              ax += (mdx / mDist) * pushMagnitude;
              ay += (mdy / mDist) * pushMagnitude;

              // Gentle wake drag in cursor velocity direction for a fluid feel
              ax += mouse.vx * proximityFactor * 0.08 * node.z;
              ay += mouse.vy * proximityFactor * 0.08 * node.z;
            }
          }

          // Integrate acceleration into velocity with damping
          node.vx = (node.vx + ax) * node.damping;
          node.vy = (node.vy + ay) * node.damping;

          // Update position along spring trajectory
          node.x += node.vx;
          node.y += node.vy;
        } else {
          node.x = node.baseX;
          node.y = node.baseY;
          node.vx = 0;
          node.vy = 0;
        }
      }

      // 2. Draw connecting network lines between proximate nodes with 3D depth and mouse highlight
      const activeConnections: { i: number; j: number; dist: number }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];

          const dx = nodeA.x - nodeB.x;
          if (Math.abs(dx) > maxDistance) continue; // Early bounding check

          const dy = nodeA.y - nodeB.y;
          if (Math.abs(dy) > maxDistance) continue;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            activeConnections.push({ i, j, dist });

            // Smooth non-linear proximity fade
            const normalizedDist = dist / maxDistance;
            const proximity = Math.pow(1 - normalizedDist, 1.4);

            // Average depth between nodes gives natural z-depth atmospheric fog
            const avgZ = (nodeA.z + nodeB.z) * 0.5;

            // Cursor proximity boost for the line
            let cursorBoost = 1.0;
            if (mouse.isActive) {
              const midX = (nodeA.x + nodeB.x) * 0.5;
              const midY = (nodeA.y + nodeB.y) * 0.5;
              const mDist = Math.hypot(midX - mouse.x, midY - mouse.y);
              if (mDist < mouseInteractionRadius) {
                cursorBoost += (1 - mDist / mouseInteractionRadius) * 0.65;
              }
            }

            // Alpha tuned for readability: subtle & elegant in light, luminous in dark
            const baseAlpha = isDark ? 0.28 : 0.17;
            const lineAlpha = Math.min(proximity * baseAlpha * avgZ * cursorBoost, isDark ? 0.55 : 0.35);

            const colA = colors[nodeA.colorIndex];
            const colB = colors[nodeB.colorIndex];

            const gradient = ctx.createLinearGradient(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
            gradient.addColorStop(0, `rgba(${colA.r}, ${colA.g}, ${colA.b}, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(${colB.r}, ${colB.g}, ${colB.b}, ${lineAlpha * 0.85})`);

            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = (isDark ? 0.95 : 0.8) * avgZ;
            ctx.stroke();
          }
        }
      }

      // 3. Render subtle glowing light pulses (data signals) along connections
      if (!prefersReducedMotion && activeConnections.length > 0) {
        for (let p = 0; p < pulses.length; p++) {
          const packet = pulses[p];
          packet.progress += packet.speed;

          // When pulse finishes its journey, pick another valid active connection
          if (packet.progress >= 1.0) {
            packet.progress = 0;
            const randomConn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
            packet.nodeAIndex = randomConn.i;
            packet.nodeBIndex = randomConn.j;
            packet.colorIndex = Math.floor(Math.random() * colors.length);
          }

          const nodeA = nodes[packet.nodeAIndex];
          const nodeB = nodes[packet.nodeBIndex];

          if (nodeA && nodeB) {
            const px = nodeA.x + (nodeB.x - nodeA.x) * packet.progress;
            const py = nodeA.y + (nodeB.y - nodeA.y) * packet.progress;
            const col = colors[packet.colorIndex];

            // Soft pulse brightness envelope (fades in at start, fades out at end)
            const envelope = Math.sin(packet.progress * Math.PI);
            const pulseAlpha = (isDark ? 0.65 : 0.45) * envelope;

            // Micro soft glow trail
            ctx.beginPath();
            ctx.arc(px, py, packet.size * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${pulseAlpha * 0.25})`;
            ctx.fill();

            // Core signal dot
            ctx.beginPath();
            ctx.arc(px, py, packet.size * 0.85, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${pulseAlpha})`;
            ctx.fill();
          }
        }
      }

      // 4. Render glowing dots/particles with subtle depth and breathing glow
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const col = colors[node.colorIndex];

        // Breathing pulse phase
        const pulse = (Math.sin(elapsed * node.pulseSpeed + node.pulsePhase) + 1) * 0.5;

        // Extra glow when near cursor
        let cursorGlow = 0;
        if (mouse.isActive) {
          const mDist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
          if (mDist < mouseInteractionRadius) {
            cursorGlow = (1 - mDist / mouseInteractionRadius) * 0.4;
          }
        }

        const dotAlpha = Math.min((isDark ? 0.48 : 0.38) + pulse * 0.35 + cursorGlow, 1);
        const auraAlpha = Math.min((isDark ? 0.16 : 0.09) + pulse * 0.14 + cursorGlow * 0.3, 0.6);

        const currentRadius = node.radius * (0.95 + pulse * 0.25 + cursorGlow * 0.3);

        // Soft outer ambient aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * (isDark ? 3.4 : 2.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${auraAlpha})`;
        ctx.fill();

        // Core bright particle point
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${dotAlpha})`;
        ctx.fill();

        // Tiny pinpoint specular highlight in dark mode
        if (isDark && node.z > 0.85) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + pulse * 0.4})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Underlying Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />

      {/* Subtle radial depth gradient overlay to guarantee 100% typography contrast */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-500 ${
          theme === 'dark'
            ? 'bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(49,92,255,0.06),transparent_80%)]'
            : 'bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(49,92,255,0.03),transparent_80%)]'
        }`}
      />
    </div>
  );
};
