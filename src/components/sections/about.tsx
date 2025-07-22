interface AboutSectionProps {
  className?: string;
}

export function About({ className = "" }: AboutSectionProps) {
  return (
    <section id="about" className={`min-h-screen bg-black text-white py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-widest">
            About
          </h2>
          <p className="text-xl text-white/70 font-mono tracking-wide max-w-3xl mx-auto">
            バイブスでコーディングする男、パクお。のポートフォリオ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wider mb-4">
              Profile
            </h3>
            <div className="space-y-4 text-white/70">
              <p className="leading-relaxed">
                歯科技工士として15年間、精密さと集中力を要する仕事に従事。
                新たな可能性を求めて自ら転身を決意し、現在はウェブ制作の世界を探求中。
              </p>
              <p className="leading-relaxed">
                動画編集、ウェブデザイン、AI活用ツールなど幅広い分野に興味を持ち、
                日々新たな発見と成長を続けています。
              </p>
              <p className="leading-relaxed">
                <span className="text-white font-mono">「バイブスコーディング」</span>を信条とし、
                直感とクリエイティブな感性を大切にしながら、アプリケーション開発を学んでいます。
              </p>
              <div className="pt-4">
                <p className="text-white font-mono text-lg">
                  「パクお。AIには屈しない」
                </p>
                <p className="text-sm text-white/50 mt-2">
                  - すべてバイブス -
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wider mb-4">
              Tech Skills
            </h3>
            <div className="space-y-4">
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">Next.js & React</h4>
                <p className="text-white/70 text-sm">
                  モダンなウェブアプリケーション開発のためのフレームワーク
                </p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">TypeScript</h4>
                <p className="text-white/70 text-sm">
                  型安全性を重視した開発言語
                </p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">Tailwind CSS</h4>
                <p className="text-white/70 text-sm">
                  効率的なスタイリングのためのCSSフレームワーク
                </p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">AI活用</h4>
                <p className="text-white/70 text-sm">
                  開発プロセスを効率化するためのAIツールの活用
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}