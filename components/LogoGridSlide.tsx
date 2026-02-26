"use client";

import { motion } from "framer-motion";
import SlideSection from "./SlideSection";

interface LogoGridSlideProps {
    data: {
        title: string;
        description: string;
        logos: string[];
    };
}

export default function LogoGridSlide({ data }: LogoGridSlideProps) {
    return (
        <SlideSection className="bg-gray-50">
            <div className="text-center max-w-4xl mx-auto mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold text-primary mb-6"
                >
                    {data.title}
                </motion.h2>
                <p className="text-xl text-gray-600">{data.description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {data.logos.map((logo, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="aspect-video bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all cursor-default"
                    >
                        <span className="text-lg font-semibold text-gray-400 text-center">{logo}</span>
                    </motion.div>
                ))}
            </div>
        </SlideSection>
    );
}
