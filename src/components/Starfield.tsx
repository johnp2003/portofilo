import { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create stars
    const starCount = 100;
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      
      canvas.appendChild(star);
      stars.push(star);
    }

    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return <div ref={canvasRef} className="starfield" aria-hidden="true" />;
};

export default Starfield;
