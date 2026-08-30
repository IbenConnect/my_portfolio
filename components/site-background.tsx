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

const COLS = 11;
const ROWS = 14;

function generateNodes(width: number, height: number): Node[] {
  const nodes: Node[] = [];
  const cellW = width / (COLS + 1);
  const cellH = height / (ROWS + 1);
  let id = 0;
  for (let r = 1; r <= ROWS; r++) {
    for (let c = 1; c <= COLS; c++) {
      const jitterX = (Math.random() - 0.5) * cellW * 0.5;
      const jitterY = (Math.random() - 0.5) * cellH * 0.5;
      nodes.push({
        id: id++,
        x: c * cellW + jitterX,
        y: r * cellH + jitterY,
        pulseDelay: Math.random() * 6,
        pulseDuration: 3.4 + Math.random() * 3.4,
        size: 1.2 + Math.random() * 2.1,
      });
    }
  }
  return nodes;
}

function generateConnections(nodes: Node[]): Connection[] {
  const connections: Connection[] = [];
  const seen = new Set<string>();
  if (nodes.length < 2) return connections;
  const xs = nodes.map((n) => n.x);
  const ys = nodes.map((n) => n.y);
  const spanX = Math.max(...xs) - Math.min(...xs);
  const spanY = Math.max(...ys) - Math.min(...ys);
  const maxDistance = Math.sqrt(
    (spanX * spanX) / (COLS * 1.5) + (spanY * spanY) / (ROWS * 1.5),
  ) * 1.68;

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
        flowDelay: Math.random() * 7,
        flowDuration: 5 + Math.random() * 5.2,
      });
    }
  }
  return connections;
}

function useFullSize(ref: React.RefObject<SVGSVGElement | null>) {
  const [size, setSize] = useState({ w: 1440, h: 5200 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const w = Math.max(parent.scrollWidth, window.innerWidth || 1200);
      const h = Math.max(
        parent.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight * 5,
      );
      setSize({ w, h });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (el.parentElement) ro.observe(el.parentElement);
    window.addEventListener("resize", measure);
    const t = window.setTimeout(measure, 150);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t);
    };
  }, [ref]);
  return size;
}

export default function SiteTechSignalBackground() {
  const reduced = usePrefersReducedMotion();
  const svgRef = React.useRef<SVGSVGElement>(null);
  const { w, h } = useFullSize(svgRef);

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
          <linearGradient id="sg-fade-v-static" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.72 0.18 260)" stopOpacity="0.055" />
            <stop offset="40%" stopColor="oklch(0.70 0.16 200)" stopOpacity="0.03" />
            <stop offset="75%" stopColor="oklch(0.68 0.15 160)" stopOpacity="0.02" />
            <stop offset="100%" stopColor="oklch(0.72 0.18 260)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width={w} height={h} fill="url(#sg-fade-v-static)" />
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
              stroke="oklch(0.70 0.18 260)"
              strokeOpacity="0.036"
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
            fill="oklch(0.72 0.18 260)"
            fillOpacity="0.07"
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
        <linearGradient id="sg-fade-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.72 0.18 260)" stopOpacity="0.036" />
          <stop offset="45%" stopColor="oklch(0.70 0.16 200)" stopOpacity="0.022" />
          <stop offset="80%" stopColor="oklch(0.68 0.15 160)" stopOpacity="0.015" />
          <stop offset="100%" stopColor="oklch(0.72 0.18 260)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sg-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.70 0.18 260)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.70 0.18 260)" stopOpacity="0.13" />
          <stop offset="100%" stopColor="oklch(0.70 0.18 260)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sg-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.78 0.20 260)" stopOpacity="0" />
          <stop offset="35%" stopColor="oklch(0.74 0.18 200)" stopOpacity="0.22" />
          <stop offset="50%" stopColor="oklch(0.72 0.18 260)" stopOpacity="0.48" />
          <stop offset="65%" stopColor="oklch(0.72 0.15 160)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="oklch(0.78 0.20 260)" stopOpacity="0" />
        </linearGradient>
        <filter id="sg-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width={w} height={h} fill="url(#sg-fade-v)" />

      <g stroke="url(#sg-line-grad)" strokeWidth="1" fill="none">
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

      <g fill="none" strokeWidth="1.3" filter="url(#sg-soft-glow)">
        {connections.map((con) => {
          const a = nodes[con.from];
          const b = nodes[con.to];
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          return (
            <motion.line
              key={`flow-${con.id}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#sg-flow)"
              strokeDasharray={`${len * 0.20} ${len * 1.0}`}
              initial={{ strokeDashoffset: len }}
              animate={{ strokeDashoffset: -len }}
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

      <g filter="url(#sg-soft-glow)">
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill="oklch(0.74 0.18 260)"
            initial={{ opacity: 0.06 }}
            animate={{ opacity: [0.06, 0.40, 0.06] }}
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
          .filter((_, i) => i % 11 === 0)
          .map((node) => (
            <motion.circle
              key={`halo-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="none"
              stroke="oklch(0.72 0.18 260)"
              strokeOpacity="0.32"
              strokeWidth="1"
              initial={{ r: node.size, opacity: 0.32 }}
              animate={{
                r: [node.size, node.size * 5.0, node.size * 7.5],
                opacity: [0.32, 0.10, 0],
              }}
              transition={{
                duration: node.pulseDuration * 2.0,
                delay: node.pulseDelay + 0.7,
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
