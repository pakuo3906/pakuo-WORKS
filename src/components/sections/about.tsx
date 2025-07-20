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
            Exploring the intersection of technology and artistry through interactive 3D experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wider mb-4">
              Technology Stack
            </h3>
            <div className="space-y-4">
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">React Three Fiber</h4>
                <p className="text-white/70 text-sm">
                  A React renderer for Three.js that brings 3D graphics to the web with declarative syntax.
                </p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">Three.js</h4>
                <p className="text-white/70 text-sm">
                  The powerful 3D library that enables complex geometries, materials, and lighting.
                </p>
              </div>
              <div className="p-4 border border-white/20 rounded-lg">
                <h4 className="font-mono text-lg mb-2 text-white">Next.js</h4>
                <p className="text-white/70 text-sm">
                  Modern React framework providing optimal performance and developer experience.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-light tracking-wider mb-4">
              Interactive Features
            </h3>
            <div className="space-y-4 text-white/70">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-white/50 mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-white font-mono">Hover Effects:</span> Each element responds to mouse interaction with smooth scaling animations.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-white/50 mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-white font-mono">Ripple Physics:</span> Surrounding elements react to create natural wave-like propagation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-white/50 mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-white font-mono">Material Design:</span> Physically-based rendering creates realistic metallic surfaces.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-white/50 mt-2 flex-shrink-0"></div>
                <p>
                  <span className="text-white font-mono">Performance:</span> Optimized for 60fps with efficient memory management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}