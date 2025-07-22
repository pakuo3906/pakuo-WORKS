import { ChromeGrid } from "@/components/ui/chrome-grid";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ 
  title = "CREATIVE STUDIO",
  subtitle = "Crafting digital experiences through intuition & code.",
  className = ""
}: HeroSectionProps) {
  return (
    <section id="hero" className={`h-screen w-screen ${className}`}>
      <ChromeGrid />
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-thin mb-4 tracking-[0.3em] text-white whitespace-nowrap uppercase">
          {title}
        </h1>
        <p className="text-sm md:text-base text-white/70 font-light tracking-[0.15em] pointer-events-none">
          {subtitle}
        </p>
      </div>
    </section>
  );
}