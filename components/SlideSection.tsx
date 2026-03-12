"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";

interface SlideSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    showLogo?: "blue" | "white" | "none";
}

export default function SlideSection({ children, className = "", id, showLogo = "none" }: SlideSectionProps) {
    return (
        <section
            id={id}
            className={`min-h-screen w-full flex flex-col justify-center items-center relative snap-start snap-always overflow-hidden ${className}`}
        >
            {showLogo !== "none" && (
                <div className="absolute top-8 right-8 md:top-12 md:right-12 z-50 opacity-90">
                    <Image
                        src={showLogo === "blue" ? "/images/logo-blue.png" : "/images/logo-white.png"}
                        alt="Pharmsource Animal Health Logo"
                        width={90}
                        height={90}
                        className="object-contain w-16 md:w-20 lg:w-24"
                    />
                </div>
            )}
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 z-10"
            >
                {children}
            </motion.div>
        </section>
    );
}
