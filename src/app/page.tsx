import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <div className="h-screen 3xl:h-[800px] flex flex-col justify-between">
        <Navbar />
        <div className="flex-1">
          <Hero />
        </div>
      </div>
    </main>
  );
}
