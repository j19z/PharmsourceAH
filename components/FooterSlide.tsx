"use client";

import SlideSection from "./SlideSection";

interface FooterSlideProps {
    text: string;
}

export default function FooterSlide({ text }: FooterSlideProps) {
    return (
        <SlideSection className="bg-secondary text-white min-h-[50vh]">
            <div className="text-center">
                <h3 className="text-2xl md:text-4xl font-light opacity-80 max-w-2xl mx-auto leading-relaxed">
                    {text}
                </h3>
                <div className="mt-12 opacity-50 text-sm">
                    &copy; {new Date().getFullYear()} Pharmsource Animal Health. All Rights Reserved.
                </div>
            </div>
        </SlideSection>
    );
}
