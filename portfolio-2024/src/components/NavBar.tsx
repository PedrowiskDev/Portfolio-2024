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
            className="fixed top-0 left-0 w-full nav-glass-effect text-white p-4 z-50 flex items-center"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                className="mr-4"
            >
                <Image src="/sun-logo.png" alt="Logo" width={100} height={100} />
            </motion.div>

            <ul className={`flex h-16 space-x-20 w-full justify-center items-center text-white text-2xl font-thin ${Roboto_font.className}`}>
                <button onClick={() => router.push('/introduction')}>
                    <li className={getNavItemClass('/introduction')}>Home</li>
                </button>
                <button onClick={() => router.push('/projects')}>
                    <li className={getNavItemClass('/projects')}>Projetos</li>
                </button>
                <button onClick={() => router.push('/about')}>
                    <li className={getNavItemClass('/about')}>Sobre Mim</li>
                </button>
                <button onClick={() => router.push('/contact')}>
                    <li className={getNavItemClass('/contact')}>Contato</li>
                </button>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
