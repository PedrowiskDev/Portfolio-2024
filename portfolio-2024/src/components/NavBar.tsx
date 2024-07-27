import { motion } from 'framer-motion';
import { Roboto_Mono } from 'next/font/google';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Roboto_font = Roboto_Mono({ subsets: ['latin'] });

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;

    const getNavItemClass = (path: string) => (
        `transition-transform transform hover:scale-110 ${pathname === path ? 'font-semibold' : 'hover:font-semibold'}`
    );

    return (
        <motion.nav
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full nav-glass-effect text-white p-4 z-50 flex items-center justify-between md:justify-center"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="mr-4 flex-shrink-0"
            >
                <Image src="/sun-logo.png" alt="Logo" width={80} height={80} />
            </motion.div>

            <ul className={`flex space-x-4 md:space-x-8 lg:space-x-16 w-full justify-center items-center text-white text-sm md:text-xl lg:text-3xl font-thin ${Roboto_font.className}`}>
                <li className={getNavItemClass('/introduction')}>
                    <button onClick={() => router.push('/introduction')}>Home</button>
                </li>
                <li className={getNavItemClass('/projects')}>
                    <button onClick={() => router.push('/projects')}>Projetos</button>
                </li>
                <li className={getNavItemClass('/about')}>
                    <button onClick={() => router.push('/about')}>Sobre Mim</button>
                </li>
                <li className={getNavItemClass('/contact')}>
                    <button onClick={() => router.push('/contact')}>Contato</button>
                </li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
