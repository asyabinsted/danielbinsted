import Cover from "@/components/home/Cover";
import Works from "@/components/home/Works";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Cover />
      <Works />
      <Footer />
    </main>
  );
}

