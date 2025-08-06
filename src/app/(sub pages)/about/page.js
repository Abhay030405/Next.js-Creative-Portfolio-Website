import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/components/about";
import AboutLanding from "@/components/about/AboutLanding";

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

      {/* Animated Landing Section */}
      <AboutLanding />

      {/* About Section */}
      <AboutDetails />
    </>
  );
}

