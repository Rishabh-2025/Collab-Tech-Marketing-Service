import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const SampleCampaign = () => {
    return (
        <section className="py-24 bg-card/20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-cta font-semibold tracking-wider uppercase text-sm">Success Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mt-4">
                        Campaigns that <span className="text-transparent bg-clip-text bg-primary-gradient">Convert</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Phone Mockup 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: -6 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-72 bg-white text-black rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-800 relative z-10 hidden md:block"
                    >
                        <div className="bg-gray-100 h-full rounded-[2rem] overflow-hidden relative">
                            {/* Header */}
                            <div className="flex items-center p-4 border-b border-gray-200">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                                <div className="ml-2">
                                    <div className="h-3 w-20 bg-gray-300 rounded mb-1"></div>
                                    <div className="h-2 w-12 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="aspect-[3/4] bg-gray-200 w-full relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <video
                                        src="/left-video.mp4"   
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="p-4">
                                <div className="flex space-x-3 text-xl text-gray-600 mb-3">
                                    <FaHeart className="text-red-500" /> <FaComment /> <FaShare />
                                </div>
                                <div className="h-3 w-3/4 bg-gray-300 rounded mb-2"></div>
                                <div className="h-3 w-1/2 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <div className="relative z-20 max-w-lg">
                        <div className="bg-card border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
                            <h3 className="text-2xl font-bold font-heading mb-6">TechLaunch Summer Campaign</h3>
                            <p className="text-textSecondary mb-8 text-sm">
                                We partnered with 50 tech influencers to launch the new X-Series gadget. The campaign generated viral buzz and drove record-breaking pre-orders.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-cta mb-1">2.5M+</div>
                                    <div className="text-textSecondary text-xs uppercase tracking-wider">Impressions</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-cta mb-1">4.8%</div>
                                    <div className="text-textSecondary text-xs uppercase tracking-wider">Engagement Rate</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-cta mb-1">15k+</div>
                                    <div className="text-textSecondary text-xs uppercase tracking-wider">Clicks</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl">
                                    <div className="text-3xl font-bold text-cta mb-1">3.2x</div>
                                    <div className="text-textSecondary text-xs uppercase tracking-wider">ROI</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotate: 6 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-72 bg-white text-black rounded-[2.5rem] p-4 shadow-2xl border-8 border-gray-800 relative z-10 hidden md:block"
                    >
                        <div className="bg-gray-100 h-full rounded-[2rem] overflow-hidden relative">
                            {/* Header */}
                            <div className="flex items-center p-4 border-b border-gray-200">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-teal-500"></div>
                                <div className="ml-2">
                                    <div className="h-3 w-24 bg-gray-300 rounded mb-1"></div>
                                    <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="aspect-[3/4] bg-gray-200 w-full relative">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <video
                                        src="/right-video.mp4"   // keep your video inside public folder
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="p-4">
                                <div className="flex space-x-3 text-xl text-gray-600 mb-3">
                                    <FaHeart /> <FaComment /> <FaShare />
                                </div>
                                <div className="h-3 w-full bg-gray-300 rounded mb-2"></div>
                                <div className="h-3 w-2/3 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SampleCampaign;
