"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SlideSection({ children, className = "", id }: SlideSectionProps) {
    return (
        <section
            id={id}
            className={`min-h-screen w-full flex flex-col justify-center items-center relative snap-start snap-always overflow-hidden ${className}`}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24"
            >
                {children}
            </motion.div>
        </section>
    );
}
