import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

function ResizeListener() {
  const { camera, gl: renderer } = useThree();

  useEffect(() => {
    const handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera, renderer]);

  return null; 
}

export default ResizeListener;
