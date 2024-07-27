import { useEffect, useState } from 'react';
import { Roboto_Mono } from 'next/font/google';
import { FaArrowDown } from "react-icons/fa6";
import Link from 'next/link';
import Background from '../components/StarBackground';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = '  Pedro Henrique Caetano Soares';
  const [isTyping, setIsTyping] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const [startFalling, setStartFalling] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setIsBlinking(true);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const fallingTimeout = setTimeout(() => {
      setStartFalling(true);
    }, 5000);

    const arrowTimeout = setTimeout(() => {
      setShowArrow(true);
    }, 6000);

    return () => {
      clearTimeout(fallingTimeout);
      clearTimeout(arrowTimeout);
    };
  }, []);

  return (
    <>
      <Background startFalling={startFalling}>
        <div className="flex flex-col items-center justify-between h-screen px-4 md:px-8 lg:px-16">
          <div className="flex-grow flex items-center justify-center text-center">
            <div className={`text-white text-3xl md:text-4xl lg:text-5xl font-thin ${Roboto_font.className}`}>
              <h1>
                {displayedText || " "}
                {isBlinking && <span className="animate-pulse mx-0">|</span>}
              </h1>
            </div>
          </div>

          {!isTyping && (
            <div
              className={`absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 transition-opacity duration-700 ${
                showArrow ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Link href="/introduction">
                <button className="transition-opacity duration-700">
                  <FaArrowDown className="h-8 w-8 md:h-11 md:w-11 bounce text-white transition-transform transform hover:scale-125 hover:text-gray-400" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </Background>
    </>
  );
}
