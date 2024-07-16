import React, { useEffect, useState } from 'react';
import BackgroundStyles from '../styles/StarBackground.module.scss';

interface BackgroundProps {
  children?: React.ReactNode;
  startFalling?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ children, startFalling = false }) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (startFalling) {
      const createStars = (count: number, size: string) => {
        return Array.from({ length: count }).map((_, i) => {
          const randomX = Math.random();
          const randomY = Math.random();
          const randomDelay = Math.random() * 10; // Delay aleatório entre 0 e 50s
          const style = {
            '--random-x': randomX,
            '--random-y': randomY,
            animationDelay: `${randomDelay}s`,
          } as React.CSSProperties;

          return (
            <div
              key={`${size}-${i}`}
              className={`${BackgroundStyles.stars} ${BackgroundStyles[size]}`}
              style={style}
            />
          );
        });
      };

      setStars([
        ...createStars(300, 'starsSmall'), // Aumentando a quantidade de estrelas pequenas
        ...createStars(150, 'starsMedium'), // Aumentando a quantidade de estrelas médias
        ...createStars(100, 'starsLarge'), // Aumentando a quantidade de estrelas grandes
      ]);
    }
  }, [startFalling]);

  return (
    <div className={BackgroundStyles.background}>
      {children}
      {stars}
    </div>
  );
};

export default Background;
