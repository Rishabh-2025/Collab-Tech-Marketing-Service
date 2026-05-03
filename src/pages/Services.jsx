import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaChartLine, FaCode, FaHashtag, FaCamera } from 'react-icons/fa';

const Services = () => {
    const detailedServices = [
        {
            id: 1,
            title: "Influencer Marketing",
            icon: <FaUsers />,
            description: "Forge authentic connections. We bridge the gap between world-class brands and visionary creators using data-driven matching and human-first storytelling.",
            features: [
                "ROI-Focused Creator Discovery",
                "End-to-End Campaign Management",
                "Authenticity & Sentiment Analysis",
                "Niche Audience Targeting"
            ],
            image: "/service-page/influncer-marketing.jfif",
            color: "magenta"
        },
        {
            id: 2,
            title: "Digital Marketing",
            icon: <FaChartLine />,
            description: "Dominate the digital landscape. Our performance-driven approach ensures your brand is seen, heard, and chosen across all digital touchpoints.",
            features: [
                "Full-Funnel Growth Strategy",
                "Search & Social Performance",
                "Conversion Rate Optimization",
                "Data Analytics & Insights"
            ],
            image: "/service-page/digital-marketing.jfif",
            color: "cyan-accent"
        },
        {
            id: 3,
            title: "Web Development & SaaS",
            icon: <FaCode />,
            description: "Build for the future. We design and develop high-performance web applications and SaaS solutions that scale with your business goals.",
            features: [
                "Custom SaaS Architecture",
                "High-Conversion Landing Pages",
                "UI/UX Visual Excellence",
                "Managed Hosting & Support"
            ],
            image: "/service-page/website-development.jfif",
            color: "yellow-accent"
        },
        {
            id: 4,
            title: "Social Media Marketing",
            icon: <FaHashtag />,
            description: "Own the conversation. We manage and scale your social presence through viral content strategies and community-first engagement.",
            features: [
                "Viral Content Production",
                "Community Management",
                "Platform-Specific Growth",
                "Influencer-Led Social Ads"
            ],
            image: "/service-page/social-media.jfif",
            color: "blue-accent"
        },
        {
            id: 5,
            title: "Brand Shoots",
            icon: <FaCamera />,
            description: "Visuals that command attention. Our creative team produces high-end photography and video content that defines your brand's aesthetic legacy.",
            features: [
                "Product & Lifestyle Shoots",
                "UGC-Style Content Creation",
                "Professional Color Grading",
                "Post-Production Excellence"
            ],
            image: "/service-page/brand-shoot.jfif",
            color: "magenta"
        }
    ];

    return (
        <div className="bg-background pt-32 pb-16 min-h-screen">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <h1 className="text-5xl md:text-8xl font-black font-heading mb-6">
                        Powerhouse <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed font-light">
                        We provide the complete digital infrastructure to transform vision into dominance.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {detailedServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                        >
                            <div className="lg:w-1/2">
                                <div className="text-magenta text-4xl mb-6">{service.icon}</div>
                                <h2 className="text-4xl font-black font-heading mb-6">{service.title}</h2>
                                <p className="text-lg text-text-secondary mb-8 leading-relaxed italic">
                                    "{service.description}"
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></div>
                                            <span className="text-white font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/contact" className="mt-10 inline-block bg-primary-gradient text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-all text-sm">
                                    Inquire Now
                                </Link>
                            </div>

                            <div className="lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-primary-gradient opacity-10 blur-[60px] rounded-full group-hover:opacity-20 transition-opacity"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
