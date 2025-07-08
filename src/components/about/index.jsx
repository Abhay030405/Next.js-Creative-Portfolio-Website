import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">

        {/* Intro Text */}
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            AI Engineer & Quant Enthusiast
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am Abhay Agarwal, passionate about building intelligent systems, 
            exploring the world of Quantitative Finance, and contributing to cutting-edge hackathons.
            With expertise in AI, Data Science, and modern web development using React.js and Next.js,
            I enjoy crafting seamless, data-driven experiences that blend technology, finance, and creativity.
          </p>
        </ItemLayout>

        {/* Stats */}
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+ <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+ <sub className="font-semibold text-base">Years of Learning</sub>
          </p>
        </ItemLayout>

        {/* GitHub Top Languages */}
        <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=Abhay030405&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="Top Languages"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout className="col-span-full md:col-span-8 !p-0">
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=Abhay030405&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        {/* Skill Icons */}
        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,java,r,tensorflow,git,github,docker,sklearn,pytorch,html,css,javascript,react,nextjs,tailwind,threejs`}
            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        {/* GitHub Streak */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <img
            className="w-full h-auto"
            src={`https://github-readme-streak-stats.herokuapp.com?user=Abhay030405&theme=dark&hide_border=true&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        {/* Featured Repo */}
        <ItemLayout className="col-span-full md:col-span-6 !p-0">
          <Link
            href="https://github.com/Abhay030405/Conway-s-Game-of-Life"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=Abhay030405&repo=Conway-s-Game-of-Life&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Featured Project"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        {/* Achievements */}
        <ItemLayout className="col-span-full text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Hackathons & Achievements
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base font-light mt-2">
            <li>Selected for Bharatiya Antariksh Hackathon 2025 - Spatial AI Track</li>
            <li>Developed Trading Strategy Backtester with live market simulation</li>
            <li>Finalist - MNNIT Hackathon 2024 (AI/ML Track)</li>
          </ul>
        </ItemLayout>

        {/* Current Learning */}
        <ItemLayout className="col-span-full">
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Currently Exploring
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base font-light mt-2">
            <li>Advanced Machine Learning & Deep Learning</li>
            <li>Quantitative Finance & Algorithmic Trading</li>
            <li>Geospatial AI & LangChain for Spatial Data</li>
          </ul>
        </ItemLayout>

        {/* Certifications */}
        <ItemLayout className="col-span-full">
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            Certifications
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base font-light mt-2">
            <li>CS50's Introduction to AI with Python - Harvard</li>
            <li>Math for Machine Learning - Coursera</li>
            <li>Quantitative Trading Fundamentals - Udemy</li>
          </ul>
        </ItemLayout>

        {/* Fun Fact */}
        <ItemLayout className="col-span-full text-center">
          <p className="font-light text-sm sm:text-base italic">
            "Beyond building projects, I love diving into financial markets, exploring AI breakthroughs, 
            and solving real-world problems through technology and collaboration."
          </p>
        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
