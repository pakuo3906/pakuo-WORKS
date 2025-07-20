interface FeaturesSectionProps {
  className?: string;
}

export function Features({ className = "" }: FeaturesSectionProps) {
  const features = [
    {
      title: "Interactive Grid",
      description: "10x10 responsive grid of metallic elements that react to your cursor position.",
      technical: "ExtrudeGeometry with corner radius and physical materials"
    },
    {
      title: "Ripple Physics",
      description: "Realistic wave propagation effects that spread from interaction points.",
      technical: "Distance-based scaling with configurable radius and falloff"
    },
    {
      title: "Chrome Materials",
      description: "Physically-based rendering with metallic surfaces and clearcoat finish.",
      technical: "meshPhysicalMaterial with metalness=1 and clearcoat=1"
    },
    {
      title: "Smooth Animation",
      description: "60fps interpolated animations using linear interpolation for natural motion.",
      technical: "useFrame hook with lerp factor for smooth transitions"
    },
    {
      title: "Memory Optimization",
      description: "Efficient geometry management with proper cleanup and disposal.",
      technical: "useEffect cleanup and geometry caching with useMemo"
    },
    {
      title: "Touch Support",
      description: "Responsive design that works seamlessly across all device types.",
      technical: "Raycaster-based interaction with pointer event handling"
    }
  ];

  return (
    <section id="features" className={`min-h-screen bg-gray-900 text-white py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-widest">
            Features
          </h2>
          <p className="text-xl text-white/70 font-mono tracking-wide max-w-3xl mx-auto">
            Advanced 3D interactions powered by modern web technologies.
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
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-mono text-white mb-1">60</div>
                <div className="text-sm text-white/70">FPS</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">100</div>
                <div className="text-sm text-white/70">Elements</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">&lt;1</div>
                <div className="text-sm text-white/70">Second Load</div>
              </div>
              <div>
                <div className="text-3xl font-mono text-white mb-1">0</div>
                <div className="text-sm text-white/70">Dependencies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}