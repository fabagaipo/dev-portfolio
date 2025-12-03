export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'WebMart',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: '/webmart.png',
      technologies: ['React', 'Django', 'PostgreSQL', 'TailwindCSS', 'Docker'],
      liveUrl: 'https://webmart-ph.vercel.app',
      githubUrl: 'https://github.com/fabagaipo/webmart',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with 3D animations, smooth transitions, and responsive design using cutting-edge web technologies.',
      image: '/portfolio.png',
      technologies: ['React', 'Three.js', 'TailwindCSS', 'Framer Motion', 'EmailJS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    // { 
    //   id: 2,
    //   title: 'Task Management App',
    //   description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
    //   image: '/api/placeholder/400/300',
    //   technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    // },
    // {
    //   id: 3,
    //   title: 'Weather Dashboard',
    //   description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and detailed meteorological data visualization.',
    //   image: '/api/placeholder/400/300',
    //   technologies: ['React', 'TypeScript', 'TailwindCSS', 'Weather API'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    // },
    {
      id: 3,
      title: 'REST API Service',
      description: 'Scalable REST API service with authentication, rate limiting, and comprehensive documentation for mobile applications.',
      image: '/restapi.png',
      technologies: ['Node.js', 'Express', 'JWT', 'Redis', 'SwaggerUI', 'Docker'],
      liveUrl: 0,
      githubUrl: '#',
    },
    // {
    //   id: 3,
    //   title: 'Social Media Dashboard',
    //   description: 'Analytics dashboard for social media management with real-time data visualization and scheduling capabilities.',
    //   image: '/api/placeholder/400/300',
    //   technologies: ['Next.js', 'Chart.js', 'Prisma', 'PostgreSQL'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    // },
    {
      id: 4,
      title: 'Ping Pong',
      description: 'Basic pingpong game made in godot',
      image: '/pong.png',
      technologies: ['Godot', 'GDScript'],
      liveUrl: 'fayasdfghjkl.itch.io/basic-pong',
      githubUrl: 'https://github.com/fabagaipo/godot-pingpong',
    },
    {
      id: 5,
      title: 'Minesweeper',
      description: 'Pure python made minesweeper game with difficulty and high scores',
      image: '/minesweeper.png',
      technologies: ['Python'],
      liveUrl: 0,
      githubUrl: 'https://github.com/fabagaipo/minesweeper',
    },
  ]
  
  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className={`mb-4 ${project.technologies.length <= 2 ? 'h-10' : 'min-h-[84px]'}`}>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  {project.liveUrl !== 0 && project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}