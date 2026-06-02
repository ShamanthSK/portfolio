'use client';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Ribbons = dynamic(() => import('@/components/ui/Ribbons'), { ssr: false });

export default function CursorRibbons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9998,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Ribbons
        colors={['#7c3aed', '#2563eb', '#06b6d4']}
        baseThickness={18}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={true}
        enableShaderEffect={false}
        pointCount={50}
        baseFriction={0.92}
        baseSpring={0.025}
        backgroundColor={[0, 0, 0, 0]}
      />
    </div>
  );
}
