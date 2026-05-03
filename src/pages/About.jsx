import { motion } from 'framer-motion';
import { FaPlay, FaGlobe, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
    const mosaicItems = [
        { id: 1, type: 'image', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800', size: 'large' },
        { id: 2, type: 'motion', content: '+240%', label: 'Growth YoY', size: 'small' },
        { id: 3, type: 'image', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', size: 'medium' },
        { id: 4, type: 'image', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800', size: 'medium' },
        { id: 5, type: 'motion', content: '500M+', label: 'Reach Generated', size: 'small' },
        { id: 6, type: 'image', src: '/web-services.jpg', size: 'large' },
    ];

    const values = [
        { icon: <FaLightbulb />, title: "Radical Innovation", desc: "We don't follow trends; we engineer the digital shifts that become the new standard." },
        { icon: <FaGlobe />, title: "Borderless Vision", desc: "Our network spans 45+ countries, connecting global brands with hyper-local authenticity." },
        { icon: <FaRocket />, title: "Performance First", desc: "Aesthetics attract, but data converts. Every pixel we place is driven by ROI." }
    ];

    return (
        <div className="bg-background pt-24 md:pt-32 pb-24 min-h-screen overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Side-by-Side Content & Collage Section */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 mb-32">

                    {/* Left Side: Text Content */}
                    <div className="w-full lg:w-2/5 text-center lg:text-left">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-cyan-accent font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-6 inline-block"
                        >
                            Beyond the Agency
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl lg:text-8xl font-black font-heading leading-tight mb-8 md:mb-10 tracking-tighter"
                        >
                            We Build <br />
                            <span className="text-gradient">Legends.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-text-secondary font-light leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0"
                        >
                            Collab-Tech is more than a marketing service. We are the architects of digital influence, bridging the gap between raw creativity and corporate dominance.
                        </motion.p>

                        {/* Values List */}
                        <div className="space-y-6 md:space-y-8 text-left max-w-xl mx-auto lg:mx-0">
                            {values.map((v, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-5 md:gap-6 group"
                                >
                                    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center text-magenta text-lg md:text-xl group-hover:bg-magenta group-hover:text-white transition-all">
                                        {v.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-black text-white mb-1 md:mb-2">{v.title}</h3>
                                        <p className="text-text-secondary text-sm font-light leading-relaxed">{v.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Dynamic Mosaic Collage */}
                    <div className="w-full lg:w-3/5">
                        <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[600px] lg:h-[700px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="col-span-2 row-span-2 relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl"
                            >
                                <img src={mosaicItems[0].src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 flex items-center gap-4">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-magenta p-2 md:p-3 flex items-center justify-center animate-pulse"><FaPlay className="text-white text-[8px] md:text-[10px] ml-1" /></div>
                                    <span className="text-white font-bold tracking-widest uppercase text-[8px] md:text-[10px]">Innovation Hub</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-glass rounded-[1.25rem] md:rounded-[1.5rem] flex flex-col items-center justify-center p-4 md:p-6 border border-magenta/20 shadow-xl group"
                            >
                                <div className="text-2xl md:text-3xl font-black text-magenta mb-1 group-hover:scale-110 transition-transform">{mosaicItems[1].content}</div>
                                <div className="text-text-secondary text-[7px] md:text-[8px] font-bold uppercase tracking-widest">{mosaicItems[1].label}</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden border border-white/5 shadow-xl group"
                            >
                                <img src={mosaicItems[2].src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4 h-[200px] md:h-[300px] lg:h-[350px]">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-glass rounded-[1.25rem] md:rounded-[1.5rem] flex flex-col items-center justify-center p-4 md:p-6 border border-cyan-accent/20 shadow-xl group"
                            >
                                <div className="text-2xl md:text-3xl font-black text-cyan-accent mb-1 group-hover:scale-110 transition-transform">{mosaicItems[4].content}</div>
                                <div className="text-text-secondary text-[7px] md:text-[8px] font-bold uppercase tracking-widest">{mosaicItems[4].label}</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="relative rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden border border-white/5 shadow-xl group"
                            >
                                <img src={mosaicItems[5].src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;
