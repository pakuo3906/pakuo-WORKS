interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

// basePath対応のための画像パス生成
const getImagePath = (filename: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/pakuo-WORKS' : '';
  return `${basePath}/images/projects/${filename}`;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "beauty-salon",
    title: "美容サロンホームページ",
    description: "美容サロン向けのエレガントなホームページ。予約システム連携とモバイルファーストデザインを重視したバイブスコーディング作品。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    image: getImagePath("beauty-salon-preview.png"),
    liveUrl: "https://pakuo3906.github.io/beauty-salon-website/",
    githubUrl: "https://github.com/pakuo3906/beauty-salon-website"
  },
  {
    id: "pakulog",
    title: "パクログ",
    description: "日々の学習記録や技術的な発見を記録するバイブスな個人ブログ。マークダウン対応とSEO最適化を実装。",
    tech: ["Next.js", "TypeScript", "MDX", "Tailwind CSS"],
    image: getImagePath("pakulog-preview.png"),
    liveUrl: "https://pakulog-ey3wccmzp-pa9wos-projects.vercel.app/",
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
                <div className="w-full h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-lg mb-4 overflow-hidden relative group">
                  {item.image && item.liveUrl ? (
                    <a 
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full cursor-pointer relative"
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} preview`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {/* ホバー時のオーバーレイ */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-lg mb-1">🔗</div>
                          <div className="text-sm font-mono">View Live Site</div>
                        </div>
                      </div>
                    </a>
                  ) : item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.title} preview`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white/50 text-sm font-mono">
                        Preview Image
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-medium text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}