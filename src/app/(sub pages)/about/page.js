import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Portfolio background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* 3D Model */}
      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      {/* Text Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          
          {/* Name - Ensure one line and scaling */}
          <h1 className="font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-accent whitespace-nowrap">
            Abhay Agarwal
          </h1>

          {/* Updated Subtitle */}
          <p className="font-light text-foreground text-base sm:text-lg mt-2">
            AI Explorer | Quant Aspirant | Hackathon Enthusiast
          </p>
          <p className="font-light text-foreground text-base sm:text-lg mt-2">
            I'm Abhay Agarwal, an aspiring AI Engineer and Quantitative Researcher driven by curiosity and problem-solving. I enjoy building intelligent systems that combine data, algorithms, and logic to solve real-world challenges. From machine learning to quantitative models, I focus on developing practical, data-driven solutions with a strong foundation in mathematics and technology
          </p>
        </div>
      </div>

      {/* About Section */}
      <AboutDetails />
    </>
  );
}

