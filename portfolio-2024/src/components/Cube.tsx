// components/Cube.tsx

import { FC } from 'react';
import styles from '../styles/cube.module.css';
import Introduction from './Introduction';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

interface CubeProps {
  handleNavigation: (direction: string) => void;
  currentFace: number; // Adicione esta prop para rastrear a face atual
}

const Cube: FC<CubeProps> = ({ handleNavigation, currentFace }) => {
  const faces = [<Introduction />, <About />, <Projects />, <Contact />];

  return (
    <div className={styles.cubeContainer}>
      <div className={styles.cube} style={{ transform: `translateY(-${currentFace * 100}vh)` }}>
        {faces.map((face, index) => (
          <div key={index} className={styles.face}>
            {face}
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <button onClick={() => handleNavigation('up')}>Up</button>
        <button onClick={() => handleNavigation('down')}>Down</button>
        <button onClick={() => handleNavigation('left')}>Left</button>
        <button onClick={() => handleNavigation('right')}>Right</button>
      </div>
    </div>
  );
};

export default Cube;
