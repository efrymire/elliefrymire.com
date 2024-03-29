'use client'

import { useEffect, useRef, useState } from 'react'
import { pointer, randomUniform, forceSimulation,
  forceX,
  forceY,
  forceCollide,
  forceManyBody,
  scaleOrdinal,
  schemeTableau10,
  schemeYlGnBu,
  schemeSpectral,
} from 'd3';
import styles from './force.module.scss'

export default function Force() {
  const canvasRef = useRef(null)
  const [alpha, setAlpha] = useState(0.2)
  const [vel, setVel] = useState(0.1)

  const width = 1200;
  const height = width;
  const color = scaleOrdinal(schemeYlGnBu[9].reverse());
  const k = width / 200;
  const r = randomUniform(k, k * 2);
  const n = 7;
  const data = Array.from({length: 200}, (_, i) => ({r: r(), group: i && (i % n + 1)}));
  const nodes = data.map(Object.create);

  const simulation = forceSimulation(nodes)
      .alphaTarget(alpha) // stay hot
      .velocityDecay(vel) // low friction
      .force("x", forceX().strength(0.01))
      .force("y", forceY().strength(0.01))
      .force("collide", forceCollide().radius(d => d.r + 1).iterations(3))
      .force("charge", forceManyBody().strength((d, i) => i ? 0 : -width * 2 / 3))

  const draw = (context) => {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    for (let i = 1; i < nodes.length; ++i) {
      const d = nodes[i];
      context.beginPath();
      context.moveTo(d.x + d.r, d.y);
      context.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
      context.fillStyle = color(d.group);
      // context.shadowBlur = 10;
      // context.shadowColor = color(d.group);
      context.fill();
    }
    context.restore();
  }
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let animationFrameId;

    const hoverHandler = (ev) => {
      const [x, y] = pointer(ev);
      nodes[0].fx = x - width / 2;
      nodes[0].fy = y - height / 2;
      draw(context)
    };

    const render = (ev) => {
      draw(context)
      animationFrameId = window.requestAnimationFrame(render)
    }

    animationFrameId = window.requestAnimationFrame(render);
    canvas.addEventListener('mousemove', hoverHandler);


    return () => {
      canvas.removeEventListener('mousemove', hoverHandler);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (<div className={styles.container}>
      <canvas 
        className={styles.canvas}
        ref={canvasRef}
        width={width}
        height={height}
      ></canvas>
    </div>)
}
