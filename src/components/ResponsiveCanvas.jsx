import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const ResponsiveCanvas = ({ children }) => {
  const [cameraPosition, setCameraPosition] = useState([-9, 5, 15]);

  useEffect(() => {
    const updateCamera = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCameraPosition([-6, 4, 12]); // Adjust for smaller screens
      } else {
        setCameraPosition([-9, 5, 15]); // Default
      }
    };

    updateCamera();
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: cameraPosition, fov: 25 }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </Canvas>
  );
};

export default ResponsiveCanvas;
