"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

interface Node {
  id: number;
  x: number;
  y: number;
  pulseDelay: number;
  pulseDuration: number;
  size: number;
}

interface Connection {
  id: string;
  from: number;
  to: number;
  flowDelay: number;
  flowDuration: number;
}

const COLS = 10;
const ROWS = 6;

function generateNodes(width: number, height: number): Node[] {
  const nodes: Node[] = [];
  const cellW = width / (COLS + 1);
  const cellH = height / (ROWS + 1);
  let id = 0;
  for (let r = 1; r <= ROWS; r++) {
    for (let c = 1; c <= COLS; c++) {
      const jitterX = (Math.random() - 0.5) * cellW * 0.45;
      const jitterY = (Math.random() - 0.5) * cellH * 0.45;
      nodes.push({
        id: id++,
        x: c * cellW + jitterX,
        y: r * cellH + jitterY,
        pulseDelay: Math.random() * 3.5,
        pulseDuration: 2.4 + Math.random() * 2.2,
        size: 1.2 + Math.random() * 2.2,
      });
    }
  }
  return nodes;
}

function generateConnections(nodes: Node[]): Connection[] {
  const connections: Connection[] = [];
  const seen = new Set<string>();
  const maxDistance = Math.sqrt(
    (Math.max(...nodes.map((n) => n.x)) - Math.min(...nodes.map((n) => n.x))) **
      2 /
      COLS +
      (Math.max(...nodes.map((n) => n.y)) -
        Math.min(...nodes.map((n) => n.y))) **
        2 /
        ROWS,
  ) * 1.4;

  for (let i = 0; i < nodes.length; i++) {
    const distances: { idx: number; d: number }[] = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (d < maxDistance) distances.push({ idx: j, d });
    }
    distances.sort((a, b) => a.d - b.d);
    const picks = distances.slice(0, Math.min(3, distances.length));
    for (const p of picks) {
      const key = [Math.min(i, p.idx), Math.max(i, p.idx)].join("-");
      if (seen.has(key)) continue;
      seen.add(key);
      connections.push({
        id: `c-${i}-${p.idx}`,
        from: i,
        to: p.idx,
        flowDelay: Math.random() * 4,
        flowDuration: 3.2 + Math.random() * 3,
      });
    }
  }
  return connections;
}

function useSize(ref: React.RefObject<SVGSVGElement | null>) {
  const [size, setSize] = useState({ w: 1200, h: 720 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      setSize({ w: rect.width, h: rect.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (el.parentElement) ro.observe(el.parentElement);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [ref]);
  return size;
}

export default function TechSignalBackground() {
  const reduced = usePrefersReducedMotion();
  const svgRef = React.useRef<SVGSVGElement>(null);
  const { w, h } = useSize(svgRef);

  const { nodes, connections } = useMemo(() => {
    const n = generateNodes(w, h);
    const c = generateConnections(n);
    return { nodes: n, connections: c };
  }, [w, h]);

  if (reduced) {
    return (
      <svg
        ref={svgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox={`0 0 ${w} ${h}`}
      >
        <defs>
          <radialGradient id="ts-fade-static" cx="50%" cy="50%" r="72%">
            <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.14" />
            <stop offset="65%" stopColor="var(--foreground)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width={w} height={h} fill="url(#ts-fade-static)" />
        {connections.map((con) => {
          const a = nodes[con.from];
          const b = nodes[con.to];
          return (
            <line
              key={con.id}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="var(--foreground)"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          );
        })}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="var(--foreground)"
            fillOpacity="0.1"
          />
        ))}
      </svg>
    );
  }

  return (
    <svg
      ref={svgRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox={`0 0 ${w} ${h}`}
    >
      <defs>
        <radialGradient id="ts-fade" cx="50%" cy="45%" r="78%">
          <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.08" />
          <stop offset="70%" stopColor="var(--foreground)" stopOpacity="0.02" />
          <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ts-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--foreground)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ts-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
        <filter id="ts-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width={w} height={h} fill="url(#ts-fade)" />

      <g stroke="url(#ts-line-grad)" strokeWidth="1" fill="none">
        {connections.map((con) => {
          const a = nodes[con.from];
          const b = nodes[con.to];
          return (
            <line
              key={`base-${con.id}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
            />
          );
        })}
      </g>

      <g fill="none" strokeWidth="1.6" filter="url(#ts-soft-glow)">
        {connections.map((con) => {
          const a = nodes[con.from];
          const b = nodes[con.to];
          return (
            <motion.line
              key={`flow-${con.id}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#ts-flow)"
              strokeDasharray={`${Math.hypot(b.x - a.x, b.y - a.y) * 0.25} ${
                Math.hypot(b.x - a.x, b.y - a.y) * 0.9
              }`}
              initial={{ strokeDashoffset: Math.hypot(b.x - a.x, b.y - a.y) }}
              animate={{
                strokeDashoffset: -Math.hypot(b.x - a.x, b.y - a.y),
              }}
              transition={{
                duration: con.flowDuration,
                delay: con.flowDelay,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          );
        })}
      </g>

      <g filter="url(#ts-soft-glow)">
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="var(--foreground)"
            initial={{ opacity: 0.12 }}
            animate={{ opacity: [0.12, 0.75, 0.12] }}
            transition={{
              duration: node.pulseDuration,
              delay: node.pulseDelay,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </g>

      <g>
        {nodes
          .filter((_, i) => i % 7 === 0)
          .map((node) => (
            <motion.circle
              key={`halo-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="none"
              stroke="var(--primary)"
              strokeOpacity="0.5"
              strokeWidth="1"
              initial={{ r: node.size, opacity: 0.55 }}
              animate={{
                r: [node.size, node.size * 5.5, node.size * 7.5],
                opacity: [0.55, 0.18, 0],
              }}
              transition={{
                duration: node.pulseDuration * 1.6,
                delay: node.pulseDelay + 0.4,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          ))}
      </g>
    </svg>
  );
}
