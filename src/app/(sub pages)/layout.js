import HomeBtn from "@/components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex flex-col items-center px-8 xs:px-16 lg:px-32 py-20">
      <HomeBtn />
      {children}
    </main>
  );
}
