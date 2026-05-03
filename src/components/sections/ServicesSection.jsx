import { Card } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaCode, FaHashtag, FaCamera } from 'react-icons/fa';

const services = [
    {
        icon: <FaUsers />,
        title: "Influencer Marketing",
        description: "Precision-matched partnerships that drive authentic engagement and measurable impact.",
        image: "/influencer-marketing-services.jfif",
        slug: "influencer-marketing"
    },
    {
        icon: <FaChartLine />,
        title: "Digital Marketing",
        description: "Data-driven strategies across every digital touchpoint to capture and convert attention.",
        image: "/digital-marketing-services.jpg",
        slug: "digital-marketing"
    },
    {
        icon: <FaCode />,
        title: "Web Dev & SaaS",
        description: "Scalable digital architecture built for the modern economy and ultimate user experiences.",
        image: "/web-services.jpg",
        slug: "web-dev-saas"
    },
    {
        icon: <FaHashtag />,
        title: "Social Media Mktg",
        description: "Viral content strategies that keep your brand at the center of the global conversation.",
        image: "/social-media-marketing-services.jpg",
        slug: "social-media-marketing"
    },
    {
        icon: <FaCamera />,
        title: "Brand Shoots",
        description: "High-end visual production that defines your aesthetic legacy and commands authority.",
        image: "/brand-shoot-services.jpg",
        slug: "brand-shoots"
    }
];

const ServicesSection = () => {
    return (
        <section className="py-24 md:py-32 bg-[#4964970f] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-cyan-accent font-black tracking-[0.4em] uppercase text-xs mb-4 inline-block"
                    >
                        Our Strategic Capabilities
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black font-heading mt-2 mb-6 text-white">
                        Elite <span className="bg-gradient-to-r from-[#4F8CFF] to-[#A855F7] bg-clip-text text-transparent">Solutions.</span>
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto">
                        We provide the complete digital infrastructure to transform vision into market dominance.
                    </p>
                </motion.div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="services-swiper pb-12"
                    loop={true}
                >
                    {services.map((service, i) => (
                        <SwiperSlide key={i} className="pb-10">
                            <motion.div whileHover={{ scale: 1.05, y: -10 }} transition={{ duration: 0.3 }} className="h-full">
                                <Card
                                    sx={{
                                        background: "rgba(79, 140, 255, 0.04)",
                                        borderRadius: "24px",
                                        border: "1px solid rgba(79, 140, 255, 0.15)",
                                        backdropFilter: "blur(8px)",
                                        minHeight: "450px",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 16px rgba(79, 140, 255, 0.06)",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        padding: "32px 24px",
                                        color: "white",
                                        "&:hover": {
                                            background: "rgba(79, 140, 255, 0.08)",
                                            boxShadow: "0 8px 32px rgba(79, 140, 255, 0.12)",
                                            borderColor: "rgba(79, 140, 255, 0.3)",
                                        },
                                    }}
                                >
                                    {/* Centered circular image */}
                                    <motion.div
                                        className="w-full h-48 mx-auto mb-6 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center bg-gradient-to-br from-[#4F8CFF]/15 to-[#A855F7]/15"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>

                                    <div className="text-center flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold font-heading mb-2">{service.title}</h3>
                                            <p className="text-gray-400 mt-3 text-sm leading-relaxed">{service.description}</p>
                                        </div>

                                        <div className="mt-6">
                                            <Link to={`/services`} className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#4F8CFF]/20 to-[#A855F7]/20 border border-[#4F8CFF]/40 hover:bg-gradient-to-r hover:from-[#4F8CFF]/30 hover:to-[#A855F7]/30 transition-all text-sm font-semibold text-white">
                                                View More
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .services-swiper .swiper-pagination-bullet {
                    background: rgba(79, 140, 255, 0.5);
                }
                .services-swiper .swiper-pagination-bullet-active {
                    background: linear-gradient(90deg, #4F8CFF, #A855F7);
                }
                .services-swiper {
                    padding-bottom: 50px !important; 
                }
            `}</style>
        </section>
    );
};

export default ServicesSection;

