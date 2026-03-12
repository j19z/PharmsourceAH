"use client";

import { motion } from "framer-motion";
import { 
    Calendar, MapPin, ShieldCheck, PawPrint, HeartPulse, 
    Factory, Building2, Hospital, ArrowRight, Target
} from "lucide-react";
import SlideSection from "./SlideSection";
import Image from "next/image";

interface WhoWeAreSlideProps {
    data: {
        id: string;
        title: string;
        infoBoxes: {
            founded: string;
            headquarters: string;
            hqCity: string;
            type: string;
        };
        dualMarket: {
            title: string;
            markets: {
                title: string;
                desc: string;
            }[];
        };
        distribution: {
            title: string;
            desc: string;
            badge: string;
        };
        valueProp: {
            label: string;
            headline: string;
            description: string;
        };
    };
}

export default function WhoWeAreSlide({ data }: WhoWeAreSlideProps) {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <SlideSection id={data.id} className="bg-white text-slate-800 relative snap-start snap-always w-full min-h-screen py-24 flex items-center">
            
            {/* Top Right Logo (from screenshot) */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12 w-32 md:w-48 h-12 md:h-16 hidden md:block opacity-80">
                <Image 
                    src="/pharmsource-logo.svg" 
                    alt="PharmSource Logo" 
                    fill 
                    className="object-contain object-right"
                />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
                <motion.h2 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-4xl md:text-5xl font-extrabold text-[#174EA2] mb-12 border-b-4 border-[#174EA2] pb-4 inline-block tracking-tight"
                >
                    {data.title}
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* LEFT COLUMN */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="space-y-6 flex flex-col"
                    >
                        {/* Top Info Box */}
                        <div className="bg-[#f2f7fd] rounded-2xl p-6 md:p-8 space-y-6">
                            <div className="flex items-center gap-4 text-slate-700 font-semibold">
                                <Calendar className="w-6 h-6 text-[#174EA2] shrink-0" />
                                <span>{data.infoBoxes.founded}</span>
                            </div>
                            <div className="flex items-start gap-4 text-slate-700">
                                <MapPin className="w-6 h-6 text-[#174EA2] shrink-0 mt-1" />
                                <div>
                                    <span className="font-semibold block">{data.infoBoxes.headquarters}</span>
                                    <span className="text-sm">{data.infoBoxes.hqCity}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-slate-700 font-semibold">
                                <ShieldCheck className="w-6 h-6 text-[#174EA2] shrink-0" />
                                <span>{data.infoBoxes.type}</span>
                            </div>
                        </div>

                        {/* Dual Market Focus */}
                        <div className="bg-[#fcfdfd] border border-slate-100 shadow-sm rounded-2xl p-6 md:p-8 space-y-8 flex-grow">
                            <h3 className="text-xl font-bold text-[#174EA2] mb-2">{data.dualMarket.title}</h3>
                            
                            <div className="space-y-6">
                                {/* Animal Health */}
                                <div className="flex items-start gap-5">
                                    <div className="text-[#174EA2] shrink-0 mt-1">
                                        <PawPrint className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800">{data.dualMarket.markets[0].title}</h4>
                                        <p className="text-sm text-[#58585A] mt-1">{data.dualMarket.markets[0].desc}</p>
                                    </div>
                                </div>
                                {/* Human Health */}
                                <div className="flex items-start gap-5">
                                    <div className="text-[#174EA2] shrink-0 mt-1">
                                        <HeartPulse className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-800">{data.dualMarket.markets[1].title}</h4>
                                        <p className="text-sm text-[#58585A] mt-1">{data.dualMarket.markets[1].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nationwide Distribution */}
                        <div className="flex items-center justify-between mt-4 px-2">
                            <div>
                                <h3 className="font-bold text-slate-800">{data.distribution.title}</h3>
                                <p className="text-sm text-[#58585A] mt-1">{data.distribution.desc}</p>
                            </div>
                            <div className="bg-[#174EA2] text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider shrink-0 ml-4">
                                {data.distribution.badge}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="lg:border-l-2 lg:border-[#174EA2] lg:pl-16 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-3 text-[#174EA2] font-bold tracking-widest text-sm uppercase mb-6">
                            <Target className="w-5 h-5 shrink-0" />
                            <span>{data.valueProp.label}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight mb-6">
                            {data.valueProp.headline}
                        </h3>

                        <p className="text-lg text-[#58585A] leading-relaxed mb-12">
                            {/* Process bold text from json safely, or just render it. The image shows some bold text. I will use dangerouslySetInnerHTML to allow strong tags in JSON */}
                            <span dangerouslySetInnerHTML={{ __html: data.valueProp.description }}></span>
                        </p>

                        {/* Flow Diagram */}
                        <div className="bg-[#1e4e8c] text-white rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg shadow-blue-900/20">
                            
                            <div className="flex flex-col items-center gap-3 text-center w-full sm:w-1/3">
                                <Factory className="w-10 h-10 mb-1" />
                                <span className="font-semibold text-sm">Manufacturers</span>
                            </div>

                            <ArrowRight className="w-6 h-6 text-blue-300 shrink-0 hidden sm:block" />
                            <ArrowRight className="w-6 h-6 text-blue-300 shrink-0 sm:hidden rotate-90" />

                            <div className="flex flex-col items-center gap-3 text-center w-full sm:w-1/3">
                                <Building2 className="w-10 h-10 mb-1" />
                                <span className="font-semibold text-sm">Pharmsource</span>
                            </div>

                            <ArrowRight className="w-6 h-6 text-blue-300 shrink-0 hidden sm:block" />
                            <ArrowRight className="w-6 h-6 text-blue-300 shrink-0 sm:hidden rotate-90" />

                            <div className="flex flex-col items-center gap-3 text-center w-full sm:w-1/3">
                                <Hospital className="w-10 h-10 mb-1" />
                                <span className="font-semibold text-sm leading-tight">Veterinarians /<br/>Hospitals</span>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </SlideSection>
    );
}
