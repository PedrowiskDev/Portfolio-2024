import React, { useState } from 'react';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

interface TechnologiesProps {
    title: string;
    imagens?: string[];
}

const TechnologiesProps: React.FC<TechnologiesProps> = ({ title, imagens }) => {

    const [transforms, setTransforms] = useState<{ [key: number]: { rotateX: number; rotateY: number } }>({});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const { clientX, clientY, currentTarget } = e;
        const { offsetWidth: width, offsetHeight: height } = currentTarget;
        const centerX = width / 2;
        const centerY = height / 2;
        const deltaX = (clientX - currentTarget.getBoundingClientRect().left) - centerX;
        const deltaY = (clientY - currentTarget.getBoundingClientRect().top) - centerY;
        const rotateX = -(deltaY / centerY) * 25;
        const rotateY = (deltaX / centerX) * 25;

        setTransforms((prevTransforms) => ({
            ...prevTransforms,
            [index]: { rotateX, rotateY }
        }));
    };

    const handleMouseLeave = (index: number) => {
        setTimeout(() => {
            setTransforms((prevTransforms) => ({
                ...prevTransforms,
                [index]: { rotateX: 0, rotateY: 0 }
            }));
        }, 100);
    };

    return (
        <header className="text-white py-4 px-6 flex flex-col mx-4 md:mx-20 pb-9 items-center justify-center text-center">
            <h1 className={`text-lg md:text-xl lg:text-3xl mb-5 font-bold ${Roboto_font.className}`}>
                {title}
            </h1>
            
            {imagens && (
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {imagens.map((src, index) => (
                        <motion.div
                            key={index}
                            className="relative flex-shrink-0 w-16 h-16 md:w-24 md:h-24 lg:w-44 lg:h-44 shadow-xl flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ perspective: 1000 }}
                        >
                            <motion.div
                                className="relative w-full h-full"
                                style={{ 
                                    transform: `rotateX(${transforms[index]?.rotateX || 0}deg) rotateY(${transforms[index]?.rotateY || 0}deg)`
                                }}
                                onMouseMove={(e) => handleMouseMove(e, index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <Image
                                    src={src}
                                    alt={`Imagem ${index}`}
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            )}
        </header>
    );
}

export default TechnologiesProps;
