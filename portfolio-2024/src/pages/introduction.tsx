import React from 'react';
import NavButton from '../components/NavButton';
import Navbar from '../components/NavBar';
import Header from '@/components/text/header';
import TechnologiesProps from '@/components/text/technologies';

const imagens = [
  '/reactLogo.png',
  '/tailwindLogo.png',
  '/next.jsLogo.png'
];

const Introduction: React.FC = () => {
  return (
    <div className="flex background pt-18">
      <Navbar />

      <NavButton destination="/" direction="up" label="Voltar" />
      <NavButton destination="/projects" direction="right" label="Projetos" />
      <NavButton destination="/contact" direction="down" label="Contato" />
      <NavButton destination="/about" direction="left" label="Sobre Mim" />

      <div className="flex flex-col items-center justify-center w-full">
        <Header
          title="Seja bem-vindo!"
          description=" Este é o meu espaço para mostrar minhas aventuras no mundo do desenvolvimento web. Aqui, você encontrará uma coleção de projetos que refletem minha jornada e minhas habilidades. Se você está procurando inovação e qualidade, você está no lugar certo. Vamos criar algo incrível juntos!"
        />
        <TechnologiesProps
          title="Tecnologias Utilizadas:"
          imagens={imagens}
        />
      </div>


    </div>
  );
}


export default Introduction;
