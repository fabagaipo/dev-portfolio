export default function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a full stack developer with a keen eye for design and a love for creating seamless user experiences. With expertise in modern web technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started with curiosity and has evolved into a career focused on building applications and debugging. I enjoy staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-gray-400">Coffee Cups</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Frontend Development</h4>
                    <p className="text-gray-400 text-sm">Creating responsive, interactive user interfaces with Vue, React, and modern CSS frameworks</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Backend Development</h4>
                    <p className="text-gray-400 text-sm">Building robust APIs and server-side applications with Django, Python, and database systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}