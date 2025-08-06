import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import ContactLanding from "@/components/contact/ContactLanding";
import SocialBar from '@/components/contact/SocialBar';

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <SocialBar />
      <ContactLanding />
    </>
  );
}
