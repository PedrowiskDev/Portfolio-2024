import React from 'react';
import NavButton from '../components/NavButton';
import Navbar from '../components/NavBar';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col background items-center justify-center pt-18">
      <Navbar />

      <NavButton destination="/" direction="up" label="Voltar" />
      <NavButton destination="/Projects" direction="right" label="Projetos" />
      <NavButton destination="/Contact" direction="down" label="Contato" />
      <NavButton destination="/About" direction="left" label="Sobre Mim" />


    </div>
  );

}


export default Introduction;
