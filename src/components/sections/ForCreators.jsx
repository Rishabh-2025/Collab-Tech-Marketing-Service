import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ForCreators = () => {
    return (
        <section className="py-16 bg-card/10 relative overflow-hidden">
            {/* Gradient Accent */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-accent opacity-10 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-6">
                <div className="bg-glass rounded-3xl p-8 md:p-16 border border-white/5 relative overflow-hidden group">
                    {/* Background Animation simulation */}
                    <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>

                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                        <div className="lg:w-1/2">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-yellow-accent font-black tracking-[0.3em] uppercase text-xs"
                            >
                                For the Visionaries
                            </motion.span>
                            <h2 className="text-4xl md:text-6xl font-black font-heading mt-4 mb-8 leading-tight tracking-tight">
                                Turn Your <span className="text-gradient">Content</span> <br />
                                Into a Business
                            </h2>
                            <p className="text-xl text-text-secondary mb-10 leading-relaxed font-light">
                                Join our elite network of 5,000+ creators. We don't just find you deals; we scale your brand and manage your legacy.
                            </p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="flex flex-col sm:flex-row gap-8 items-center"
                            >
                                <Link to="/contact" className="w-full sm:w-auto bg-white text-background px-10 py-5 rounded-2xl font-black text-lg hover:bg-magenta hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:scale-105 text-center">
                                    Apply to Join Network
                                </Link>
                                <div className="flex -space-x-4 items-center">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden bg-card">
                                            <img src={`https://i.pravatar.cc/100?img=${10 + i}`} alt="Creator" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                    <span className="ml-6 text-text-secondary font-medium text-sm">+5k Creators</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        rotate: [0, 5, -5, 0],
                                        y: [0, -10, 10, 0]
                                    }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                    className="relative z-10 glass-card rounded-2xl p-4 border-white/10 shadow-2xl"
                                >
                                    <img
                                        src="/creator.png"
                                        className="rounded-xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                                        alt="Creator Space"
                                    />
                                    {/* Abstract Overlay UI */}
                                    <div className="absolute top-8 right-8 bg-magenta text-white px-4 py-1 rounded-full text-xs font-bold animate-bounce">
                                        New Campaign!
                                    </div>
                                </motion.div>

                                {/* Orbiting Elements */}
                                <div className="absolute -top-10 -left-10 w-24 h-24 bg-magenta/20 blur-2xl rounded-full"></div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-accent/20 blur-2xl rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForCreators;
