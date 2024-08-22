import Navbar from '../components/NavBar';
import ParticlesBackground from '@/components/ParticlesBackground';
import ProjectsComponent from '@/components/ProjectsComponent';

const Projects: React.FC = () => {
    return (
        <>
            <ParticlesBackground />
            <Navbar />
            <div className="pb-1">
                <ProjectsComponent />
            </div>
        </>
        
    );
};

export default Projects;
