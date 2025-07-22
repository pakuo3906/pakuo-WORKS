interface FeaturesSectionProps {
  className?: string;
}

export function Features({ className = "" }: FeaturesSectionProps) {
  const features = [
    {
      title: "脱WordPress",
      description: "重いWordPressから解放された、軽量で柔軟性の高いモダンなウェブサイトを制作。ClaudeCode時代の新常識を提案します。",
      technical: "Modern stack beyond traditional CMS"
    },
    {
      title: "バイブスコーディング",
      description: "直感とクリエイティブな感性を大切にした開発アプローチ。技術的な厳密さよりも、自然な流れとバイブスを重視します。",
      technical: "Intuition-driven development process"
    },
    {
      title: "Headless CMS活用",
      description: "従来のWordPressでもなく、複雑なフルスタックでもない「第三の選択肢」として、Headless CMSを活用したサイト制作。",
      technical: "Headless CMS + Static Generation"
    },
    {
      title: "AI活用開発",
      description: "Claude Codeを始めとしたAI技術を効果的に組み合わせて、開発プロセスを効率化し、革新的なソリューションを提供します。",
      technical: "Claude Code era development workflow"
    },
    {
      title: "軽量・高速サイト",
      description: "WordPressの重さから解放された、読み込みが早く、SEOに強い高性能なウェブサイトを制作します。",
      technical: "Static generation + CDN optimization"
    },
    {
      title: "カスタム開発",
      description: "テンプレートに縛られない、完全オリジナルのデザインとUXを提供。歯科技工士時代の精密さで細部まで作り込みます。",
      technical: "Custom design with precision craftsmanship"
    }
  ];

  return (
    <section id="features" className={`min-h-screen bg-gray-900 text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-widest">
            Services
          </h2>
          <p className="text-xl text-white/70 font-light tracking-wide max-w-3xl mx-auto">
            脱WordPressを掲げ、ClaudeCode時代の新常識を提案するウェブ制作サービス
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5"
            >
              <div className="mb-4">
                <h3 className="text-xl font-light tracking-wider mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs font-mono text-white/50">
                    {feature.technical}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 border border-white/20 rounded-lg">
            <h3 className="text-2xl font-light tracking-wider mb-4">
              実績・経験
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-mono text-white mb-1">15</div>
                <div className="text-sm text-white/70">年の経験</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">2</div>
                <div className="text-sm text-white/70">制作実績</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">100%</div>
                <div className="text-sm text-white/70">バイブス</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">∞</div>
                <div className="text-sm text-white/70">学習意欲</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}