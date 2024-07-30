import React from 'react';
import Navbar from '../components/NavBar';
import { Roboto_Mono } from 'next/font/google';
import ParticlesBackground from '@/components/ParticlesBackground';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

const About: React.FC = () => {
    return (
        <div>
            <ParticlesBackground />
            <Navbar />
            <div className='flex flex-col justify-center items-center pt-40'>
                <h1 className={`text-white text-5xl ${Roboto_font.className} text-shadow-lg`}>Um pouco sobre mim</h1>
            </div>
        </div>
    );
};

export default About;
