import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Abhay Agarwal — AI/ML Enthusiast & Data Science Explorer",
    default:
      "Abhay Agarwal — AI/ML Enthusiast & Data Science Explorer",
  },
  description:
    "I'm an aspiring Machine Learning Engineer passionate about solving real-world problems through data, intelligent systems, and efficient code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
