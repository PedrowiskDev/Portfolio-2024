import React from 'react';
import { motion } from 'framer-motion';
import NavButton from '../components/NavButton';
import Navbar from '../components/NavBar';
import Header from '@/components/text/header';
import TechnologiesProps from '@/components/text/technologies';
import ParticlesBackground from '@/components/ParticlesBackground';

const imagens = [
  '/reactLogo.png',
  '/tailwindcssLogo.png',
  '/nextJsLogo.png',
  '/typescriptLogo.png',
  '/scssLogo.png',
  '/cssLogo.png',
  '/javascriptLogo.png',
];

const Introduction: React.FC = () => {
  return (
    <div className="background pt-48 overflow-auto h-screen relative">
      <ParticlesBackground />
      <Navbar />

      <NavButton destination="/" direction="up" label="Voltar" />
      <NavButton destination="/projects" direction="right" label="Projetos" />
      <NavButton destination="/about" direction="left" label="Sobre Mim" />

      <div className="flex flex-col lg:gap-y-40 text-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Header
            title="Seja bem-vindo!"
            description="Este é o meu espaço para mostrar minhas aventuras no mundo do desenvolvimento web. Aqui, você encontrará uma coleção de projetos que refletem minha jornada e minhas habilidades. Se você está procurando inovação e qualidade, você está no lugar certo. Vamos criar algo incrível juntos!"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TechnologiesProps
            title="Tecnologias Utilizadas:"
            imagens={imagens}
          />
        </motion.div>
      </div>

      <NavButton 
        destination="/contact" 
        direction="down" 
        label="Contato" 
        className="fixed bottom-12 left-1/2 transform -translate-x-1/2" 
      />
    </div>
  );
}

export default Introduction;
