import React from "react";
import { Github, Linkedin, Instagram, Mail, Download, Phone, BarChart2 } from "lucide-react";

const socials = [
  {
    href: "https://github.com/Abhay030405",
    label: "GitHub",
    icon: <Github className="w-full h-auto" strokeWidth={1.5} />,
  },
  {
    href: "https://www.linkedin.com/in/abhay030405/",
    label: "LinkedIn",
    icon: <Linkedin className="w-full h-auto" strokeWidth={1.5} />,
  },
  {
    href: "https://www.kaggle.com/abhayagarwal030405",
    label: "Kaggle",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <text x="6" y="24" fontFamily="monospace" fontWeight="bold" fontSize="22" fill="#20BEFF">K</text>
      </svg>
    ),
  },
  {
    href: "https://instagram.com/abhay_030405",
    label: "Instagram",
    icon: <Instagram className="w-full h-auto" strokeWidth={1.5} />,
  },
  {
    href: "mailto:officialabhay030405@gmail.com",
    label: "Email",
    icon: <Mail className="w-full h-auto" strokeWidth={1.5} />,
  },
  {
    href: "/resume.pdf",
    label: "Download CV",
    icon: <Download className="w-full h-auto" strokeWidth={1.5} />,
  },
  {
    href: "tel:+918887752006",
    label: "Phone",
    icon: <Phone className="w-full h-auto" strokeWidth={1.5} />,
  },
];

const SocialBar = () => (
  <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
    {socials.map((s, i) => (
      <a
        key={i}
        href={s.href}
        target={s.href.startsWith('http') ? '_blank' : undefined}
        rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        aria-label={s.label}
        className="text-foreground rounded-full flex items-center justify-center custom-bg hover:text-accent transition-colors w-14 h-14 p-4"
        download={s.label === 'Download CV'}
      >
        <span className="w-full h-full flex items-center justify-center">{s.icon}</span>
      </a>
    ))}
  </div>
);

export default SocialBar; 