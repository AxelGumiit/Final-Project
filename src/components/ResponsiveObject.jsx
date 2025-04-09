import { useEffect, useState } from 'react';

const ResponsiveObject = ({
  widePosition,
  narrowPosition,
  wideScale = [0.01, 0.01, 0.01],
  narrowScale = [0.008, 0.008, 0.008],
  rotation = [0, 89.5, 0],
  children,
}) => {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsNarrow(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <group
      position={isNarrow ? narrowPosition : widePosition}
      scale={isNarrow ? narrowScale : wideScale}
      rotation={rotation}
    >
      {children}
    </group>
  );
};

export default ResponsiveObject;
