"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlideSection from "./SlideSection";

interface HeroSlideProps {
    data: {
        title: string;
        subtitle: string;
        backgroundImage?: string;
    };
}

export default function HeroSlide({ data }: HeroSlideProps) {
    return (
        <section
            id="hero"
            className="bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden min-h-screen w-full flex flex-col justify-center items-center snap-start snap-always"
        >
            {/* Background Image - Outside the motion.div to prevent containing block resizing bug */}
            {data.backgroundImage ? (
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
                    <Image
                        src={data.backgroundImage}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            ) : (
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid-pattern.svg')]"></div>
            )}

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/80 to-blue-900/90 mix-blend-multiply"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 text-center flex flex-col items-center"
            >
                {/* Logo */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="relative w-[90vw] md:w-[700px] lg:w-[900px] h-[150px] md:h-[250px] lg:h-[350px]">
                        <Image
                            src="/pharmsource-logo.png"
                            alt="PharmSource Animal Health Logo"
                            fill
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                >
                    {data.title}
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl font-light text-blue-100"
                >
                    {data.subtitle}
                </motion.p>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -bottom-16 md:-bottom-24 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
