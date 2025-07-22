interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "beauty-salon",
    title: "美容サロンホームページ",
    description: "美容サロン向けのエレガントなホームページ。予約システム連携とモバイルファーストデザインを重視したバイブスコーディング作品。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "https://pakuo3906.github.io/beauty-salon-website/",
    githubUrl: "https://github.com/pakuo3906/beauty-salon-website"
  },
  {
    id: "pakulog",
    title: "パクログ",
    description: "日々の学習記録や技術的な発見を記録するバイブスな個人ブログ。マークダウン対応とSEO最適化を実装。",
    tech: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
    liveUrl: "https://pakuo3906.github.io/pakulog/",
    githubUrl: "https://github.com/pakuo3906/pakulog"
  }
];

interface PortfolioSectionProps {
  className?: string;
}

export function Portfolio({ className = "" }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className={`py-24 px-8 bg-black/50 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white tracking-widest">
            WORKS
          </h2>
          <p className="text-white/70 text-lg font-mono">
            バイブスで作り上げた作品集
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white/50 text-sm font-mono">
                    Preview Image
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-medium text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    className="px-4 py-2 text-sm border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-200 font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Site
                  </a>
                )}
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-200 font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}