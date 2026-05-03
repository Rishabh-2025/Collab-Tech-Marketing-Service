import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A1C3A] to-[#0F1020]"></div>

            {/* Background elements */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-magenta opacity-10 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-accent opacity-10 blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-heading mb-8 leading-tight tracking-tighter">
                        Ready to Ignite Your <br />
                        <span className="text-transparent bg-clip-text bg-primary-gradient">Digital Presence?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Join the hundreds of brands and creators who are already shaping the future of influencer marketing with Collab-Tech.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="/contact" className="bg-cta hover:bg-opacity-90 text-white text-lg font-semibold px-10 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,138,0,0.5)] w-full sm:w-auto">
                            Get Started Now
                        </Link>
                        <Link to="/about" className="bg-transparent border border-white/20 hover:bg-white/5 text-white text-lg font-semibold px-10 py-4 rounded-xl transition-all w-full sm:w-auto">
                            Learn More
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
