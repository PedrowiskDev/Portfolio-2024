import React from 'react';
import NavButton from '../components/NavButton';
import Navbar from '../components/NavBar';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col background items-center justify-center pt-18">
      <Navbar />

      <NavButton destination="/" direction="up" label="Voltar" />
      <NavButton destination="/projects" direction="right" label="Projetos" />
      <NavButton destination="/contact" direction="down" label="Contato" />
      <NavButton destination="/about" direction="left" label="Sobre Mim" />

      
    </div>
  );

}


export default Introduction;
