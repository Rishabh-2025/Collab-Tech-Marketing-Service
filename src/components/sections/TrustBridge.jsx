import { motion } from 'framer-motion';

const TrustBridge = () => {
    const brands = [
        "GOOGLE", "META", "TIKTOK", "SHOPIFY", "SPOTIFY", "AMAZON", "ADOBE", "NETFLIX"
    ];

    const stats = [
        { label: "Global Presence", value: "45+ Countries" },
        { label: "Creator ROI", value: "3.2x Average" },
        { label: "Brand Partners", value: "500+ Trusted" }
    ];

    return (
        <section className="py-16 md:py-32 bg-background relative overflow-hidden border-y border-white/5">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-magenta/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Authority Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 md:mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-text-secondary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Infinite Logo Scroll Animation */}
                <div className="relative flex overflow-hidden py-10">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-12 md:gap-24 items-center justify-around w-[200%]"
                    >
                        {[...brands, ...brands].map((brand, index) => (
                            <span
                                key={index}
                                className="text-2xl md:text-5xl font-black font-heading text-white/10 hover:text-magenta transition-colors tracking-[0.2em] cursor-default"
                            >
                                {brand}
                            </span>
                        ))}
                    </motion.div>

                    {/* Fades for smooth edge transition */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
                </div>

                {/* Floating Micro-Badge - Hide on mobile if it clutters */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-20 top-0 w-40 h-40 border border-white/5 rounded-full hidden md:flex items-center justify-center opacity-20"
                >
                    <div className="w-2 h-2 bg-cyan-accent rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default TrustBridge;
