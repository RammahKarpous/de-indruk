import Card from "@/components/Card";
import FwLogo from "@/components/FwLogo";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Home() {
    return (
        <main className="">
            <header className="max-h-[900px] h-screen de-indruk-header flex flex-col items-start justify-center overflow-hidden relative">
				<div className="absolute inset-0 overlay" />
                <Navigation />

				<h1 className="text-white font-bold text-[88px] relative z-10 text-6xl lg:max-w-7xl px-5 mx-auto w-full">
					<span className="inline-block w-full max-w-3xl">Toekomst creëer je samen</span>
				</h1>
            </header>

			<section className="flex flex-wrap w-full gap-4 px-5 mx-auto mb-40 -mt-20 max-w-7xl">
				<Card category="Blog" title="Het geheim achter een sterk webdesign" styles="h-[620px] w-full lg:w-[calc(50%_-_8px)] xl:w-[calc(60%_-_8px)] col-span-3" bgColor="white">
					<div className="rounded-tl-full h-[430px] w-[430px] absolute right-0 bottom-0 card__image--blog" />
				</Card>
				
				<Card category="Vacatures" title="We zijn bij De Indruk altijd op zoek naar talent!" styles="h-[620px] w-full lg:w-[calc(50%_-_8px)] xl:w-[calc(40%_-_8px)] col-span-2" bgColor="white">
					<Image src="/vacatures-image.png" className="absolute bottom-0 right-0" height={430} width={317} alt="" />
				</Card>

				<Card 
					category="Blog" 
					title="5 manieren om je marketing te versimpelen" 
					styles="h-[440px] w-full lg:w-[calc(29.5%_-_8px)]" 
					bgColor="white" 
					hasLogo logo={<FwLogo />} />

				<Card 
					category="Blog" 
					title="De Indruk loves fietsen ❤️" 
					styles="h-[440px] w-full md:w-[calc(50%_-_8px)] lg:w-[calc(29.5%_-_8px)]" 
					bgColor="primary">
					
					<div className="absolute inset-0 card__image--fietsen -z-0"><span className="absolute inset-0"></span></div>
				</Card>

				<Card 
					category="Vraag het De Indruk" 
					title="Waar kunnen wij jou mee helpen?" 
					styles="h-[440px] col-span-3 w-full md:w-[calc(50%_-_8px)] lg:w-[calc(40%_-_8px)]" 
					bgColor="primary" />
			</section>
        </main>
    );
}
