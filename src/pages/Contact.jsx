import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // Initialize EmailJS with your Public Key
        emailjs.init("5wvp6HAzWl9Axoo4r");
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // 1. Send message to Admin
            await emailjs.send(
                "service_ihkpwmx",
                "template_hdemdp5",
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                }
            );

            // 2. Auto Reply to User
            await emailjs.send(
                "service_ihkpwmx",
                "template_vk9fq4q",
                {
                    from_name: form.name,
                    to_email: form.email,
                    message: form.message,
                }
            );

            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });

            // Hide success message after 4 seconds
            setTimeout(() => setSubmitted(false), 4000);
        } catch (err) {
            console.error(err);
            setError("❌ Email failed. Please try again.");
        }

        setLoading(false);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "collabteach.marketingservices@gmail.com, collabtechmarketingservices@gmail.com"
        },
        {
            icon: <FaPhone />,
            label: "Phone",
            value: "+91 9711763565"
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "India"
        },
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-background min-h-screen">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-magenta/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <motion.span className="text-cyan-accent font-black tracking-[0.4em] uppercase text-xs mb-6 inline-block">
                        Propel Your Brand
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black font-heading leading-tight mb-8">
                        Get In <span className="text-gradient">Touch.</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
                        Let's engineer the future of your digital dominance together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-black font-heading text-white mb-10">Direct Channels</h3>
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 10 }}
                                className="flex gap-6 p-8 rounded-3xl bg-card border border-white/5 hover:border-magenta/30 transition-all shadow-2xl"
                            >
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center text-white text-2xl">
                                    {info.icon}
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-black text-white text-lg mb-2 uppercase tracking-widest text-[10px] opacity-50">{info.label}</h3>
                                    <p className="text-text-secondary font-medium break-words leading-relaxed">{info.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-10 rounded-[3rem] bg-card/40 backdrop-blur-xl border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
                        >
                            <h3 className="text-3xl font-black font-heading text-white mb-4">Send a Message</h3>

                            {/* Alert Messages */}
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 flex items-center gap-3 font-medium"
                                >
                                    <FaCheckCircle className="flex-shrink-0" />
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 flex items-center gap-3 font-medium"
                                >
                                    <FaExclamationCircle className="flex-shrink-0" />
                                    <span>{error}</span>
                                </motion.div>
                            )}

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-4">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    disabled={loading}
                                    className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-all disabled:opacity-50"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-4">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    disabled={loading}
                                    className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-all disabled:opacity-50"
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary ml-4">Your Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="How can we help?"
                                    value={form.message}
                                    disabled={loading}
                                    className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent transition-all disabled:opacity-50 resize-none"
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={loading}
                                className="mt-4 bg-primary-gradient text-white font-black py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(224,32,177,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(224,32,177,0.7)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                <span className="group-hover:tracking-widest transition-all duration-300">
                                    {loading ? "Transmitting..." : "Send Message"}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
