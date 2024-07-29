import React from 'react';
import { Roboto_Mono } from 'next/font/google';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

interface HeaderProps {
    title: string;
    description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
    return (
        <header className="text-white py-4 px-6 flex flex-col  mx-20 items-center justify-center text-center">
            <h1 className={`text-3xl md:text-4xl lg:text-5xl mb-11 font-bold ${Roboto_font.className}`}>
                {title}
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl mb-9 mt-2">
                {description}
            </p>
        </header>
    );
}

export default Header;
