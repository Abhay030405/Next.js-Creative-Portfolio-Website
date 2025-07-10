import LoadingDemo from "@/components/LoadingDemo";

export const metadata = {
  title: "Loading Components Demo",
  description: "View all loading components that match the portfolio theme",
};

export default function LoadingDemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <LoadingDemo />
    </main>
  );
}