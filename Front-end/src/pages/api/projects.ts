import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 1,
    imageSrc: '/CardsImg/logoEscolaCriart.png',
    title: 'Escola Criart',
    description: 'Projeto de uma aplicação mobile para uma organização real, feita em grupo, no meu último semeste da faculdade',
    link: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t4-pmv-ads-2024-1-e5-orq-escola-criarte',
  },
  {
    id: 2,
    imageSrc: '/CardsImg/pedroPortfolio.png',
    title: 'Meu antigo Portfólio',
    description: 'Este é um antigo portfólio, foram usadas tecnologias como HTML, CSS e JavaScript',
    link: 'https://pedrowiskdev.github.io/',
  },
  {
    id: 3,
    imageSrc: '/CardsImg/logoPucCarona.png',
    title: 'Punch Clock Easy',
    description: 'Projeto de caronas que tem como objetivo ajudar pessoas de uma mesma faculdade a encontrarem caronas.',
    link: 'https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2023-2-ti1-2401100-pucaronas/tree/master',
  },
  {
    id: 4,
    imageSrc: '/CardsImg/logoPunshClockEasy.png',
    title: 'PUC Caronas',
    description: 'O Objetivo Geral do trabalho é apresentar uma solução e desenvolver um aplicativo mobile, no intuito de ajudar empresas a ter um controle com maior facilidade sobre a hora de entrada e saída de seu funcionário.',
    link: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-int-t2-grupo4/tree/main',
  },
  
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
