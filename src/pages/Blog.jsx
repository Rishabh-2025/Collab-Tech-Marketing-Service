import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const Blog = () => {
    const posts = blogPosts;

    useEffect(() => {
        document.title = "CollabTech Insights | Influencer Marketing & Digital Strategy Blog";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Stay updated with the latest trends in influencer marketing, data-driven strategies, and digital growth from the experts at CollabTech.');
        }
    }, []);

    return (
        <div className="bg-background min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-cyan-accent font-black tracking-[0.4em] uppercase text-xs mb-4 inline-block"
                    >
                        Insights & Updates
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black font-heading text-white mb-6"
                    >
                        Our <span className="text-gradient">Blog.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-lg max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Expert perspectives on marketing, technology, and the evolving digital landscape.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {posts.map((post, index) => (
                        <Link to={`/blog/${post.id}`} key={post.id} className="block h-full">
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-card border border-white/5 rounded-3xl overflow-hidden hover:border-magenta/30 transition-all duration-300 hover:shadow-2xl hover:shadow-magenta/10 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-background/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-text-secondary mb-4 uppercase tracking-wider font-medium">
                                        <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                                        <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
                                    </div>
                                    <h3 className="text-3xl font-black font-heading text-white mb-4 leading-tight group-hover:text-magenta transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-secondary font-light text-lg leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        Read Article <FaArrowRight className="text-magenta" />
                                    </span>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
