import React from 'react';
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

interface TechnologiesProps {
    title: string;
    imagens?: string[];
}

const TechnologiesProps: React.FC<TechnologiesProps> = ({ title, imagens }) => {
    return (
        <header className="text-white py-4 px-6 flex flex-col mx-4 md:mx-20 items-center justify-center text-center">
            <h1 className={`text-lg md:text-xl lg:text-2xl mb-5 font-bold ${Roboto_font.className}`}>
                {title}
            </h1>
            
            {imagens && (
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {imagens.map((src, index) => (
                        <div key={index} className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 lg:w-64 lg:h-64 flex items-center justify-center">
                            <Image
                                src={src}
                                alt={`Imagem ${index}`}
                                layout="intrinsic" // Usa o layout intrinsic para o ajuste de tamanho
                                width={800} // Ajuste a largura conforme necessário
                                height={800} // Ajuste a altura conforme necessário
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            )}
        </header>
    );
}

export default TechnologiesProps;
