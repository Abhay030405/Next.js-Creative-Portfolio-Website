"use client";

import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const achievements = [
  {
    title: "Winner of InnOdev 2k25",
    subtitle: "1st Place - NIT Allahabad",
    icon: "🥇",
    color: "from-yellow-700 to-yellow-500",
    description: "Achieved 1st place among 80+ teams in a web development competition at NIT Allahabad.",
    year: 2025,
    link: "#",
    badge: "Achievement",
  },
  {
    title: "Third Prize in Quintathalon 2k25",
    subtitle: "3rd Place - Mock Placement Event",
    icon: "🥉",
    color: "from-purple-800 to-purple-600",
    description: "Secured 3rd place in a mock placement event, which included an online assessment and technical interview.",
    year: 2025,
    link: "#",
    badge: "Achievement",
  },
  {
    title: "Winner of Dev or Die 2k24",
    subtitle: "1st Place - NIT Allahabad",
    icon: "🏆",
    color: "from-green-800 to-green-600",
    description: "Won the annual technical event for full-stack web development at NIT Allahabad.",
    year: 2024,
    link: "#",
    badge: "Achievement",
  },
];

const experiences = [
  {
    title: "Frontend Developer of Culrav Avishkar 2k25",
    description: "Developed the frontend of the official website for Culrav Avishkar 2k25, the annual cultural and technical fest of NIT Allahabad.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>",
    techStack: ["React", "Tailwind CSS", "GSAP", "Responsive Design"],
    github: "#",
    linkedin: "#",
    color: "from-blue-900 to-blue-700"
  },
  {
    title: "Frontend Developer for Weekend of Code Website",
    description: "Developed the frontend for the Weekend of Code website, a tech event organized by the CC Club.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>",
    techStack: ["React", "Tailwind CSS", "Next.js", "TypeScript"],
    github: "#",
    linkedin: "#",
    color: "from-purple-900 to-purple-700"
  },
  {
    title: "Created Official Website for Green Club MNNIT",
    description: "Developed the official website for the Green Club MNNIT using GSAP, Framer Motion, Next.js, and TypeScript.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' class='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z' /></svg>",
    techStack: ["GSAP", "Framer Motion", "Next.js", "TypeScript"],
    github: "#",
    linkedin: "#",
    color: "from-green-900 to-green-700"
  },
];

const certifications = [
  {
    name: "CS50's Introduction to AI with Python",
    issuer: "Harvard",
    image: "/certificates/cs50ai.png",
    link: "#",
  },
  {
    name: "Math for Machine Learning",
    issuer: "Coursera",
    image: "/certificates/mathml.png",
    link: "#",
  },
  {
    name: "Quantitative Trading Fundamentals",
    issuer: "Udemy",
    image: "/certificates/quanttrading.png",
    link: "#",
  },
];

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
            src={`https://skillicons.dev/icons?i=python,c,java,mysql,ai,tensorflow,pytorch,git,github,docker,sklearn,vscode,html,css,javascript`}
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
            href="https://github.com/Abhay030405/FinLLM-X"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api/pin/?username=Abhay030405&repo=FinLLM-X&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Featured Project"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        {/* Achievements as Modern Cards */}
        <ItemLayout className="col-span-full">
          <div className="w-full flex flex-col items-center">
            <p className="font-semibold text-center text-2xl sm:text-4xl mb-6">Hackathons & Events</p>
            <p className="text-center text-muted mb-8 max-w-2xl">A showcase of my accomplishments, victories, and milestones in various tech competitions and events</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 flex flex-col justify-between min-h-[260px] shadow-xl bg-transparent border border-accent/30 relative"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  {/* Icon and View Button */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{ach.icon}</span>
                    </div>
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-white/10 hover:bg-white/20 p-2 transition-colors"
                      title="View Details"
                    >
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14" />
                      </svg>
                    </a>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-1">{ach.title}</h4>
                    <p className="text-white/80 text-sm mb-1">{ach.description}</p>
                    <span className="text-xs text-white/60">{ach.subtitle}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="px-4 py-1 rounded-full bg-white/20 text-white text-xs font-semibold">{ach.badge}</span>
                    <span className="text-xs text-white/60 ml-auto">{ach.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ItemLayout>

        {/* Professional Experience as Distinct Cards */}
        <ItemLayout className="col-span-full">
          <div className="w-full flex flex-col items-center">
            <p className="font-semibold text-center text-2xl sm:text-4xl mb-6">Professional Experience</p>
            <p className="text-center text-muted mb-8 max-w-2xl">My journey through various roles and projects that have shaped my expertise</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="relative flex flex-row items-stretch rounded-2xl shadow-2xl border border-accent/40 bg-white/10 backdrop-blur-md min-h-[180px] overflow-hidden"
                >
                  {/* Left Accent Bar */}
                  <div className="w-2 bg-accent/80 absolute left-0 top-0 bottom-0" />
                  {/* Icon in Circle */}
                  <div className="flex flex-col items-center justify-center p-6 pr-0 z-10">
                    <span className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/20 text-accent text-3xl shadow-lg" dangerouslySetInnerHTML={{__html: exp.icon}} />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 pl-4 z-10">
                    <div className="mb-2">
                      <h4 className="text-xl font-bold text-foreground mb-1">{exp.title}</h4>
                      <p className="text-muted text-sm mb-2">{exp.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech, j) => (
                        <span key={j} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <a href={exp.github} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 flex items-center gap-2 text-sm text-foreground font-semibold transition-colors" title="GitHub">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-.89-.609.068-.597.068-.597 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.087 2.91.832.09-.646.35-1.087.636-1.338-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        GitHub
                      </a>
                      <a href={exp.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-white/10 hover:bg-white/20 px-4 py-2 flex items-center gap-2 text-sm text-foreground font-semibold transition-colors" title="LinkedIn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/></svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ItemLayout>

        {/* Certifications as Cards with Images */}
        <ItemLayout className="col-span-full">
          <div className="w-full flex flex-col items-center">
            <p className="font-semibold text-center text-2xl sm:text-4xl mb-6">Certifications</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  className="bg-white/10 border border-accent/30 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={cert.image || '/certificates/blank.png'}
                    alt={cert.name}
                    className="w-28 h-20 object-contain rounded mb-2 border border-white/10 bg-white/5"
                    onError={e => { e.target.src = '/certificates/blank.png'; }}
                  />
                  <h4 className="text-lg font-bold text-foreground mb-1 text-center">{cert.name}</h4>
                  <span className="text-xs text-muted mb-1">{cert.issuer}</span>
                </a>
              ))}
            </div>
          </div>
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
