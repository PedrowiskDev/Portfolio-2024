import React from 'react';
import { useRouter } from 'next/router';
import { RiArrowUpWideLine } from "react-icons/ri";

interface NavButtonProps {
    destination: string;
    direction: 'up' | 'right' | 'down' | 'left';
    label: string;
    className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ destination, direction, label, className }) => {
    const router = useRouter();

    let rotationClass = '';
    let positionStyles: React.CSSProperties = {};
    let labelStyles: React.CSSProperties = {};

    switch (direction) {
        case 'right':
            rotationClass = 'rotate-90';
            positionStyles = { right: '1rem', top: '50%', transform: 'translateY(-50%)' };
            labelStyles = { top: 'calc(100% + 0.5rem)' };
            break;
        case 'down':
            rotationClass = 'rotate-180';
            positionStyles = { bottom: '1rem', left: '50%', transform: 'translateX(-50%)' };
            labelStyles = { top: '-2.5rem' };
            break;
        case 'left':
            rotationClass = '-rotate-90';
            positionStyles = { left: '1rem', top: '50%', transform: 'translateY(-50%)' };
            labelStyles = { top: 'calc(100% + 0.5rem)' };
            break;
        case 'up':
            rotationClass = '';
            positionStyles = { top: '8rem', left: '50%', transform: 'translateX(-50%)' };
            labelStyles = { top: 'calc(100% + 0.5rem)' };
            break;
        default:
            rotationClass = '';
            positionStyles = { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
            labelStyles = {};
    }

    return (
        <button
            onClick={() => router.push(destination)}
            className={`transition-transform text-white transform hover:scale-125 hover:font-semibold fixed z-50 button-hover mb-8 ${rotationClass} ${className}`}
            style={{ ...positionStyles }}
        >
            <RiArrowUpWideLine className={`text-sm md:text-4xl lg:text-5xl ${rotationClass}`} />
            <span
                className={`absolute text-lg cursor-pointer opacity-0 transition-opacity duration-300 hover-span`}
                style={{ ...labelStyles, left: '50%', transform: 'translateX(-50%)' }}
            >
                {label}
            </span>
        </button>
    );
};

export default NavButton;
