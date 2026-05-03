import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ForBrands = () => {
    const benefits = [
        "Vetted network of 10,000+ elite creators",
        "Direct partnership with top 1% content voices",
        "Real-time ROI and engagement heatmaps",
        "Automated content rights and licensing"
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#4964970f]">
            <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-magenta opacity-5 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <div className="lg:w-1/2 relative order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
                            >
                                <img src="/for-brand-1.avif" alt="Influencer" className="w-full h-full object-cover" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl mt-12"
                            >
                                <img src="/for-brand-2.avif" alt="Influencer" className="w-full h-full object-cover" />
                            </motion.div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-background px-8 py-3 rounded-full font-black text-sm shadow-[0_20px_50px_rgba(255,255,255,0.3)] z-30 border-4 border-magenta animate-float">
                            🌟 Reach Untapped Markets
                        </div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="text-magenta font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block">Empowering Brands</span>
                            <h2 className="text-5xl md:text-7xl font-black font-heading mt-2 mb-10 tracking-tight leading-[0.95]">
                                Captivate <br />
                                <span className="text-gradient">Gen-Z.</span>
                            </h2>
                            <p className="text-xl text-text-secondary mb-12 font-light leading-relaxed italic">
                                "We specialize in aligning brands with creators who don't just post content, but drive movements."
                            </p>
                            <ul className="space-y-6 mb-16">
                                {benefits.map((item, index) => (
                                    <li key={index} className="flex items-center gap-5">
                                        <div className="w-6 h-6 rounded-full bg-cyan-accent/20 flex items-center justify-center">
                                            <FaCheckCircle className="text-cyan-accent text-sm" />
                                        </div>
                                        <span className="text-text-secondary font-bold text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/contact" className="group flex items-center gap-4 text-white text-2xl font-black transition-all">
                                <span className="border-b-4 border-magenta pb-2 group-hover:pr-4 transition-all transition-all">Launch Campaign</span>
                                <span className="text-magenta text-3xl group-hover:scale-125 transition-all"></span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForBrands;
