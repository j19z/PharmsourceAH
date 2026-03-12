"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlideSection from "./SlideSection";

interface ContentSlideProps {
    data: {
        title: string;
        content: string[];
        stats?: { label: string; value: string }[];
        image?: string;
        highlight?: string;
        growthStat?: string;
    };
    isReversed?: boolean; // Option to swap text/image side
}

export default function ContentSlide({ data, isReversed = false }: ContentSlideProps) {
    return (
        <SlideSection className="bg-white text-secondary" showLogo="blue">
            <div className={`flex flex-col md:flex-row gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>

                {/* Text Side */}
                <div className="flex-1 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-primary"
                    >
                        {data.title}
                    </motion.h2>

                    <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-600">
                        {data.content.map((paragraph, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {data.highlight && (
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg shadow-sm"
                        >
                            <p className="font-semibold text-primary text-lg">{data.highlight}</p>
                            {data.growthStat && (
                                <p className="mt-2 text-2xl font-bold text-gray-800">{data.growthStat}</p>
                            )}
                        </motion.div>
                    )}

                    {data.stats && (
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            {data.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(23, 78, 162, 0.2)" }}
                                    className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100 transition-all duration-300"
                                >
                                    <p className="text-3xl font-bold text-primary">{stat.value}</p>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Image/Visual Side */}
                <div className="flex-1 w-full h-[400px] md:h-[600px] relative">
                    <div className="absolute inset-0 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Placeholder for missing image */}
                        {data.image ? (
                            <div className="relative w-full h-full">
                                <Image
                                    src={data.image}
                                    alt="Section Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-gradient-to-tr from-gray-100 to-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 font-mono">Visual Placeholder</span>
                            </div>
                        )}
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </SlideSection>
    );
}
