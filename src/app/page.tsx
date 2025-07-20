import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Contact } from "@/components/sections/contact";
import { MainLayout } from "@/components/layout/main-layout";
import { Navigation } from "@/components/ui/navigation";

export default function Home() {
  return (
    <MainLayout>
      <Navigation />
      <Hero />
      <About />
      <Features />
      <Contact />
    </MainLayout>
  );
}
