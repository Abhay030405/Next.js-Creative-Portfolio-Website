import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's projects page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      {/* 🌟 3D Model on Top */}
      <div className="fixed top-0 left-0 w-full flex items-start justify-center z-10 h-[250px]">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>

      {/* 🧩 Projects Section */}
      <div className="mt-[250px] relative z-0 pb-16">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}
