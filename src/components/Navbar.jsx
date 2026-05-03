import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'bg-background/70 backdrop-blur-lg shadow-lg py-2 border-b border-white/5' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-black font-heading tracking-tighter flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-lg bg-primary-gradient flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                                CT
                            </div>
                            <div className="flex flex-col -space-y-1">
                                <span className="text-white text-xl">COLLAB<span className="text-magenta">TECH</span></span>
                                <span className="text-[10px] tracking-[0.25em] text-text-secondary font-sans font-bold">MARKETING</span>
                            </div>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-10">
                            <Link to="/" className="text-text-secondary hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Home</Link>
                            <Link to="/services" className="text-text-secondary hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Services</Link>
                            {/* <Link to="/blog" className="text-text-secondary hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">Blog</Link> */}
                            <Link to="/about" className="text-text-secondary hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">About</Link>
                            <Link to="/contact" className="bg-primary-gradient hover:shadow-[0_0_20px_rgba(224,32,177,0.4)] text-white px-8 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-card inline-flex items-center justify-center p-3 rounded-xl text-text-secondary hover:text-white focus:outline-none translate-y-[-2px]"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen border-b border-white/5 bg-background shadow-2xl' : 'max-h-0'}`} id="mobile-menu">
                <div className="px-4 pt-4 pb-8 space-y-4">
                    <Link to="/" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-lg font-bold text-white hover:bg-white/5">Home</Link>
                    <Link to="/services" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-lg font-bold text-white hover:bg-white/5">Services</Link>
                    <Link to="/blog" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-lg font-bold text-white hover:bg-white/5">Blog</Link>
                    <Link to="/about" onClick={toggleMenu} className="block px-4 py-3 rounded-xl text-lg font-bold text-white hover:bg-white/5">About</Link>
                    <div className="pt-4">
                        <Link to="/contact" onClick={toggleMenu} className="block w-full text-center bg-primary-gradient text-white py-4 rounded-xl font-bold text-lg">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
