import { ChromeGrid } from "@/components/ui/chrome-grid";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ 
  title = "Surface Tension",
  subtitle = "Metal that responds to touch.",
  className = ""
}: HeroSectionProps) {
  return (
    <section id="hero" className={`h-screen w-screen ${className}`}>
      <ChromeGrid />
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-widest text-white whitespace-nowrap">
          {title}
        </h1>
        <p className="text-sm md:text-base text-white/70 font-mono tracking-wide pointer-events-none">
          {subtitle}
        </p>
      </div>
    </section>
  );
}