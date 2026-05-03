import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { num: "01", title: "Global Intel", desc: "We map your brand's digital footprint and identify elite expansion targets." },
        { num: "02", title: "Precision Match", desc: "Proprietary AI matches your vision with curated, high-impact creators." },
        { num: "03", title: "Content Engine", desc: "Producing viral-native content that cuts through digital noise instantly." },
        { num: "04", title: "Live Execution", desc: "Coordinating multi-platform launches with surgical precision." },
        { num: "05", title: "Real-time ROI", desc: "Granular reporting on every click, impression, and conversion." },
        { num: "06", title: "Empire Scale", desc: "Iterating on success to build your lasting digital market dominance." }
    ];

    return (
        <section className="py-24 bg-card/10 relative overflow-hidden">
            {/* Background watermark */}
            <div className="absolute right-[-10%] top-[-10%] text-[25vw] font-black text-white/[0.02] select-none pointer-events-none uppercase">Step</div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-cyan-accent font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block">The Process</span>
                    <h2 className="text-5xl md:text-7xl font-black font-heading mt-2">The <span className="text-gradient">Empire Path.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="p-10 rounded-[3rem] border border-white/5 bg-background shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] hover:border-magenta/40 transition-all duration-500 relative group overflow-hidden"
                        >
                            {/* Number Background */}
                            <div className="absolute top-[-20%] right-[-10%] text-9xl font-black text-white/[0.03] group-hover:text-magenta/[0.05] transition-colors">{step.num}</div>

                            <div className="w-14 h-14 bg-primary-gradient rounded-2xl flex items-center justify-center text-white font-black text-xl mb-8 shadow-lg">
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-white tracking-tight">{step.title}</h3>
                            <p className="text-text-secondary text-lg leading-relaxed font-light">{step.desc}</p>

                            {/* Animated line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-primary-gradient w-0 group-hover:w-full transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
