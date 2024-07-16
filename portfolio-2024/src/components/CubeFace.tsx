import React from 'react';

interface CubeFaceProps {
  faceClass: string;
  children: React.ReactNode;
}

const CubeFace: React.FC<CubeFaceProps> = ({ faceClass, children }) => {
  return (
    <div className={`cube-face ${faceClass}`}>
      {children}
    </div>
  );
};

export default CubeFace;
