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
    <section id="hero" className={`h-screen w-screen md:px-0 px-4 sm:px-6 ${className}`}>
      <ChromeGrid />
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center md:max-w-none md:w-auto max-w-4xl mx-auto w-full">
        <h1 className="text-2xl sm:text-4xl md:text-7xl font-thin mb-4 tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.3em] text-white md:whitespace-nowrap text-center md:text-left uppercase">
          {title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-white/70 font-light tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] pointer-events-none text-center md:text-left">
          {subtitle}
        </p>
      </div>
    </section>
  );
}