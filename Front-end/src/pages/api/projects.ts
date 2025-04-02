import { NextApiRequest, NextApiResponse } from "next";

const projects = [
  {
    id: 1,
    imageSrc: "/CardsImg/logoFSWDonalds.png",
    title: "FSW Donalds",
    description:
      "Desenvolvi um aplicativo móvel em uma semana durante um curso gratuito promovido pelo Full Stack Club. A aplicação simula um totem de autoatendimento para fast-food, permitindo que os usuários façam pedidos de forma intuitiva.",
    link: "https://fullsstack-week.vercel.app/fsw-donalds",
  },
  {
    id: 2,
    imageSrc: "/CardsImg/logoWeatherApp.png",
    title: "Weather App",
    description:
      "Desenvolvi uma aplicação web de previsão do tempo utilizando HTML, CSS e JavaScript, integrada com a API do OpenWeather para exibir dados meteorológicos em tempo real. A aplicação permite que os usuários consultem a previsão do tempo de qualquer cidade.",
    link: "https://weather-app-tau-eight-96.vercel.app",
  },
  {
    id: 3,
    imageSrc: "/CardsImg/logoEscolaCriart.png",
    title: "Escola Criart",
    description:
      "Projeto de uma aplicação mobile para uma organização real, feita em grupo, no meu último semeste da faculdade",
    link: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-orq-escola-criarte",
  },
  {
    id: 4,
    imageSrc: "/CardsImg/pedroPortfolio.png",
    title: "Meu antigo Portfólio",
    description:
      "Este é um antigo portfólio, foram usadas tecnologias como HTML, CSS e JavaScript",
    link: "https://pedrowiskdev.github.io/",
  },
  {
    id: 5,
    imageSrc: "/CardsImg/logoPucCarona.png",
    title: "Punch Clock Easy",
    description:
      "Projeto de caronas que tem como objetivo ajudar pessoas de uma mesma faculdade a encontrarem caronas.",
    link: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-pucaronas/tree/master",
  },
  {
    id: 6,
    imageSrc: "/CardsImg/logoPunshClockEasy.png",
    title: "PUC Caronas",
    description:
      "O Objetivo Geral do trabalho é apresentar uma solução e desenvolver um aplicativo mobile, no intuito de ajudar empresas a ter um controle com maior facilidade sobre a hora de entrada e saída de seu funcionário.",
    link: "https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/tree/main",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
