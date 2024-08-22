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
    link: 'https://link-to-project-2.com',
  },
  
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}
