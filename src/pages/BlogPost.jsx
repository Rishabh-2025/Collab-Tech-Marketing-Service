import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaPlay } from 'react-icons/fa';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the post by ID
    const post = blogPosts.find(p => p.id === parseInt(id));

    useEffect(() => {
        if (!post) {
            navigate('/blog');
        } else {
            // SEO Updates
            document.title = post.metaTitle || `${post.title} | CollabTech`;

            // Update Meta Description
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.name = 'description';
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', post.metaDescription || post.excerpt);
        }
        window.scrollTo(0, 0);
    }, [id, post, navigate]);

    if (!post) return null;

    // Schema.org structured data for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "CollabTech",
            "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/logo.png" // Replace with actual logo URL
            }
        },
        "datePublished": post.date,
        "description": post.metaDescription || post.excerpt
    };

    return (
        <article className="bg-background min-h-screen pt-24 pb-16">
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
            <div className="container mx-auto px-6">

                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                    <FaArrowLeft /> Back to Insights
                </Link>

                {/* Hero Section */}
                <header>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative w-full h-[60vh] rounded-[3rem] overflow-hidden mb-12 border border-white/5"
                    >
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-4xl">
                            <span className="bg-magenta px-4 py-2 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6 inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-7xl font-black font-heading text-white mb-6 leading-[1.1]">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-6 text-sm text-white/80 font-medium uppercase tracking-wider">
                                <span className="flex items-center gap-2"><FaCalendarAlt className="text-magenta" /> {post.date}</span>
                                <span className="flex items-center gap-2"><FaUser className="text-magenta" /> {post.author}</span>
                            </div>
                        </div>
                    </motion.div>
                </header>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Main Article Content */}
                    <section className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="prose prose-2xl prose-invert max-w-none text-text-secondary font-light leading-relaxed 
                                     prose-headings:text-white prose-headings:font-black prose-headings:font-heading 
                                     prose-p:text-xl md:prose-p:text-2xl prose-p:mb-10 prose-p:leading-loose
                                     prose-h2:text-3xl md:prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:tracking-tight prose-h2:text-gradient inline-block"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </section>

                    {/* Sidebar / Collage */}
                    <aside className="lg:col-span-4 space-y-16">

                        {/* Video Card */}
                        <section>
                            <h3 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Featured Story</h3>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-card border border-white/5 rounded-[2.5rem] p-3 relative group cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=600"
                                        alt="Watch Behind the Scenes"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 group-hover:bg-magenta transition-all duration-500 scale-90 group-hover:scale-100">
                                            <FaPlay className="text-white text-2xl ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <p className="text-white text-xl font-bold leading-tight">Watch Experience</p>
                                    </div>
                                </div>
                            </motion.div>
                        </section>

                        {/* Improved Image Collage */}
                        <section>
                            <h3 className="text-white/40 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">Visual Context</h3>
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="rounded-[2rem] overflow-hidden aspect-video border border-white/5 hover:border-magenta/30 transition-colors"
                                >
                                    <img src={post.collageImages[0]} alt="Snapshot" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/5 hover:border-magenta/30 transition-colors"
                                >
                                    <img src={post.collageImages[1]} alt="Perspective" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
