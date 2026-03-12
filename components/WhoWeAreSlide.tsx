"use client";

import { motion } from "framer-motion";
import { 
    Calendar, MapPin, ShieldCheck, PawPrint, HeartPulse, 
    Factory, Building2, Hospital, ArrowRight, Target
} from "lucide-react";
import SlideSection from "./SlideSection";

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
        <SlideSection id={data.id} className="bg-white text-secondary" showLogo="blue">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                
                {/* Text / Info Side */}
                <div className="flex-1 space-y-8 w-full">
                    <motion.h2 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-3xl md:text-5xl font-bold text-primary mb-6"
                    >
                        {data.title}
                    </motion.h2>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="space-y-8"
                    >
                        {/* Top Info Boxes - Styled like StatsGrid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300">
                                <Calendar className="w-8 h-8 text-primary mb-2" />
                                <span className="font-bold text-gray-800">{data.infoBoxes.founded}</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300">
                                <MapPin className="w-8 h-8 text-primary mb-2" />
                                <span className="font-bold text-gray-800">{data.infoBoxes.headquarters}</span>
                                <span className="text-sm text-gray-500">{data.infoBoxes.hqCity}</span>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300">
                                <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                                <span className="font-bold text-gray-800 text-sm px-2">{data.infoBoxes.type}</span>
                            </motion.div>
                        </div>

                        {/* Dual Market Focus - Styled like highlights */}
                        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg shadow-sm space-y-6">
                            <h3 className="text-xl font-bold text-primary">{data.dualMarket.title}</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <PawPrint className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{data.dualMarket.markets[0].title}</h4>
                                        <p className="text-gray-600 mt-1">{data.dualMarket.markets[0].desc}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <HeartPulse className="w-8 h-8 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-800">{data.dualMarket.markets[1].title}</h4>
                                        <p className="text-gray-600 mt-1">{data.dualMarket.markets[1].desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>

                {/* Right Visual Side */}
                <div className="flex-1 w-full flex flex-col justify-center space-y-8 lg:pl-8">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="flex items-center gap-2 text-primary font-semibold tracking-wider text-sm uppercase mb-4">
                            <Target className="w-5 h-5 shrink-0" />
                            <span>{data.valueProp.label}</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            {data.valueProp.headline}
                        </h3>

                        <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-10">
                            <span dangerouslySetInnerHTML={{ __html: data.valueProp.description }}></span>
                        </p>

                        {/* Flow Diagram - Styled cleanly */}
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                            <div className="flex flex-col items-center gap-3 text-center">
                                <Factory className="w-10 h-10 text-primary mb-1" />
                                <span className="font-semibold text-gray-800 text-sm">Manufacturers</span>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 hidden sm:block" />
                            <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 sm:hidden rotate-90" />
                            <div className="flex flex-col items-center gap-3 text-center">
                                <Building2 className="w-10 h-10 text-primary mb-1" />
                                <span className="font-semibold text-gray-800 text-sm">Pharmsource</span>
                            </div>
                            <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 hidden sm:block" />
                            <ArrowRight className="w-6 h-6 text-gray-400 shrink-0 sm:hidden rotate-90" />
                            <div className="flex flex-col items-center gap-3 text-center">
                                <Hospital className="w-10 h-10 text-primary mb-1" />
                                <span className="font-semibold text-gray-800 text-sm leading-tight">Veterinarians /<br/>Hospitals</span>
                            </div>
                        </div>
                        
                        {/* Nationwide Distribution */}
                        <div className="flex items-center justify-between mt-8 p-4 bg-primary text-white rounded-xl shadow-md">
                            <div>
                                <h3 className="font-bold">{data.distribution.title}</h3>
                                <p className="text-sm text-blue-100 mt-1">{data.distribution.desc}</p>
                            </div>
                            <div className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-full tracking-wider shrink-0 ml-4">
                                {data.distribution.badge}
                            </div>
                        </div>

                    </motion.div>
                </div>

            </div>
        </SlideSection>
    );
}
