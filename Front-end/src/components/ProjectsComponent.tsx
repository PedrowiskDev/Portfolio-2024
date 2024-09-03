import React, { useEffect, useState } from 'react';
import Card from './Cards';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ProjectsComponent: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const apiUrl = process.env.NODE_ENV === 'production'
      ? '/api/projects'  // Rota relativa para produção
      : 'http://localhost:3000/api/projects';  // Rota completa para desenvolvimento
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error('Error fetching projects:', error.message);
        console.error('Error details:', error);
      });
  }, []);
  
  
  

  return (
    <motion.nav
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid m-20 mt-36 sm:mt-36 sm:gap-x-5 md:mt-36 md:gap-x-8 lg:m-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 justify-items-center">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 1 }} // Atraso incremental
          >
            <Card
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default ProjectsComponent;
