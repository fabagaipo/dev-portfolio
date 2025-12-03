import { useState } from 'react'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')
  
  const skills = {
    frontend: [
      { name: 'Vue.js', level: 95, color: 'from-green-400 to-emerald-400' },
      { name: 'React', level: 85, color: 'from-blue-400 to-cyan-400' },
      { name: 'Javascript', level: 90, color: 'from-blue-500 to-blue-600' },
      { name: 'TailwindCSS', level: 92, color: 'from-purple-400 to-pink-400' },
    ],
    backend: [
      { name: 'Django', level: 90, color: 'from-green-500 to-green-600' },
      { name: 'Python', level: 90, color: 'from-blue-400 to-yellow-400' },
      { name: 'PostgreSQL', level: 85, color: 'from-blue-600 to-blue-800' },
      { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-800' },
    ],
    tools: [
      { name: 'Git', level: 95, color: 'from-orange-400 to-red-400' },
      { name: 'Docker', level: 85, color: 'from-blue-400 to-blue-600' },
      { name: 'Figma', level: 82, color: 'from-purple-400 to-pink-400' },
      { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
    ],
  }
  
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: '💻' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
  ]
  
  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-purple-500/20">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills[activeCategory].map((skill, index) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-700/50 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideIn 1s ease-out ${index * 0.1}s both`
                    }}
                  ></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Performance</h3>
            <p className="text-gray-400 text-sm">Optimized code and modern techniques for lightning-fast applications</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">Clean Design</h3>
            <p className="text-gray-400 text-sm">Beautiful, intuitive interfaces that users love to interact with</p>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold text-white mb-2">Best Practices</h3>
            <p className="text-gray-400 text-sm">Following industry standards and writing maintainable, scalable code</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}