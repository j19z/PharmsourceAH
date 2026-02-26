"use client";

import { motion } from "framer-motion";
import SlideSection from "./SlideSection";

interface StatsSlideProps {
    data: {
        title: string;
        content: string[];
        locations?: { city: string; role: string }[];
    };
}

export default function StatsSlide({ data }: StatsSlideProps) {
    return (
        <SlideSection className="bg-primary text-white">
            <div className="flex flex-col md:flex-row gap-12 items-center">

                <div className="flex-1 space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        {data.title}
                    </motion.h2>

                    <div className="space-y-6 text-xl text-blue-100">
                        {data.content.map((text, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className="flex-1 w-full">
                    {data.locations && (
                        <div className="grid gap-6">
                            {data.locations.map((loc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                                >
                                    <h3 className="text-2xl font-bold">{loc.city}</h3>
                                    <p className="text-blue-200 uppercase tracking-widest text-sm mt-1">{loc.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </SlideSection>
    );
}
