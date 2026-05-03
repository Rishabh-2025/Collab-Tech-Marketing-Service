import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-2xl font-black font-heading flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center text-white text-xs">CT</div>
                            <span className="text-white">COLLAB<span className="text-magenta">TECH</span></span>
                        </Link>
                        <p className="text-text-secondary text-sm leading-relaxed mb-8">
                            Empowering the next generation of creators and brands through data-driven influence and authentic storytelling.
                        </p>
                        <div className="flex space-x-6 text-xl">
                            <a href="#" className="text-text-secondary hover:text-magenta transition-colors"><FaTiktok /></a>
                            <a href="#" className="text-text-secondary hover:text-magenta transition-colors"><FaInstagram /></a>
                            <a href="#" className="text-text-secondary hover:text-magenta transition-colors"><FaTwitter /></a>
                            <a href="#" className="text-text-secondary hover:text-magenta transition-colors"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-heading mb-6 uppercase tracking-widest text-sm">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services" className="text-text-secondary hover:text-cyan-accent text-sm transition-colors">Campaign Strategy</Link></li>
                            <li><Link to="/services" className="text-text-secondary hover:text-cyan-accent text-sm transition-colors">Creator Matching</Link></li>
                            <li><Link to="/services" className="text-text-secondary hover:text-cyan-accent text-sm transition-colors">Content Production</Link></li>
                            <li><Link to="/services" className="text-text-secondary hover:text-cyan-accent text-sm transition-colors">Performance Analytics</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-heading mb-6 uppercase tracking-widest text-sm">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-text-secondary hover:text-yellow-accent text-sm transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="text-text-secondary hover:text-yellow-accent text-sm transition-colors">Contact</Link></li>
                            <li><a href="#" className="text-text-secondary hover:text-yellow-accent text-sm transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-text-secondary hover:text-yellow-accent text-sm transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold font-heading mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
                        <p className="text-text-secondary text-sm mb-6">Get the latest trends in the creator economy.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-card/50 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-magenta w-full"
                            />
                            <button className="bg-white text-background px-4 py-2 rounded-xl text-xs font-bold hover:bg-magenta hover:text-white transition-all">
                                JOIN
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-secondary text-xs">
                        © {new Date().getFullYear()} CollabTech Marketing Services. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-text-secondary">
                        <span>Designed for Visionaries</span>
                        <span>Built with Precision</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
