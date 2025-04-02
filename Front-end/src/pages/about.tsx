import React from "react";
import Navbar from "../components/NavBar";
import { Roboto_Mono } from "next/font/google";
import ParticlesBackground from "@/components/ParticlesBackground";

const Roboto_font = Roboto_Mono({ subsets: ["latin"] });

const About: React.FC = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <div className="flex flex-col justify-center items-center pt-36 px-4 md:px-0">
        <h1
          className={`text-white text-4xl md:text-5xl font-bold ${Roboto_font.className} text-shadow-lg mb-8`}
        >
          Um pouco sobre mim
        </h1>
        <div className="glass-effect mt-12 w-full max-w-prose text-white p-8 md:p-12">
          <p className="leading-relaxed text-center text-lg md:text-xl">
            Olá! Meu nome é Pedro, e gostaria de compartilhar um pouco da minha
            trajetória. Nasci em Brasília, mas em 2008 me mudei para Minas
            Gerais, onde concluí o ensino fundamental e médio. Em junho de 2024,
            me formei em Análise e Desenvolvimento de Sistemas pela PUC Minas,
            onde desenvolvi minhas habilidades em diversas tecnologias e
            descobri minha paixão pelo desenvolvimento front-end. Agora, estou
            focado em expandir meus conhecimentos, criando aplicações que
            integram tanto o back-end quanto o front-end, sempre em busca de
            aprimorar meu aprendizado e crescer na área de desenvolvimento.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
