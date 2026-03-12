import fs from 'fs';
import path from 'path';
import HeroSlide from '@/components/HeroSlide';
import ContentSlide from '@/components/ContentSlide';
import WhoWeAreSlide from '@/components/WhoWeAreSlide';
import LogoGridSlide from '@/components/LogoGridSlide';
import StatsSlide from '@/components/StatsSlide';
import FooterSlide from '@/components/FooterSlide';

// Force dynamic rendering to ensure file read works in dev/build
export const dynamic = 'force-dynamic';

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'content.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}

export default async function Home() {
    const data = await getData();

    return (
        <main className="snap-y snap-mandatory h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth">
            {data.slides.map((slide: any, index: number) => {
                switch (slide.type) {
                    case 'hero':
                        return <HeroSlide key={slide.id} data={slide} />;

                    case 'who_we_are':
                        return <WhoWeAreSlide key={slide.id} data={slide} />;

                    case 'content':
                        // Alternate layout direction for visual interest
                        const isReversed = index % 2 !== 0;
                        return <ContentSlide key={slide.id} data={slide} isReversed={isReversed} />;

                    case 'logos':
                        return <LogoGridSlide key={slide.id} data={slide} />;

                    case 'stats_grid':
                        return <StatsSlide key={slide.id} data={slide} />;

                    case 'list':
                        // Reuse ContentSlide for lists for now, formatted as paragraphs
                        // Or create a specific ListSlide if needed. 
                        // Mapping items to content for simple reuse:
                        const listData = {
                            ...slide,
                            content: slide.items // Naive mapping, ContentSlide expects strings.
                            // We might need to adjust ContentSlide to handle 'items' or pre-process here.
                        };
                        // Let's actually just use ContentSlide but join the items or pass them as content
                        // Better: Let's make a quick adjustment to ContentSlide to handle 'items' or formatting?
                        // For now, let's map items to content content so it renders.
                        return <ContentSlide key={slide.id} data={{
                            ...slide,
                            content: slide.items
                        }} />;

                    case 'footer':
                        return <FooterSlide key={slide.id} text={slide.text} />;

                    default:
                        return null;
                }
            })}
        </main>
    );
}
