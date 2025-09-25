import { useState } from 'react'
import './App.css'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function App() {
  const [isCareerExpanded, setIsCareerExpanded] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Kyle Galvez</h1>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
          <Button>Get In Touch</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto" id="profile_img">
            <AvatarImage className="object-cover object-top" src="/images/profile.jpg" alt="Image of Kyle Galvez" />
            <AvatarFallback className="text-2xl">KG</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Hello, I'm Kyle
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Software Developer
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="outline" size="lg" className="px-8" onClick={() => document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'})}>
              View My Work
            </Button>
            
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="px-8">
                    Download Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>Kyle's Resume</DialogTitle>
                  </DialogHeader>
                  <div className="overflow-hidden rounded-lg border">
                    <iframe 
                      src="images/Resume_KyleGalvez.pdf" 
                      className="w-full h-[500px]"
                      title="Kyle Galvez Resume"/>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="ghost">
                      <a href="images/Resume_KyleGalvez.pdf" download="Kyle_Galvez_Resume.pdf">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </a>
                    </Button>
                    
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>

        </div>
      </section>

      <Separator className="my-12" />
      
      {/* About Me Section */}
      <section id="about_me" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                I'm a passionate software developer with a love for creating innovative solutions 
                and building meaningful digital experiences. With expertise in modern web technologies, 
                I enjoy tackling complex problems and turning ideas into reality.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Technologies I Love</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">AWS</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Currently Available</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold">Let's Work Together</h3>
                  <p className="text-slate-600">
                    I'm always interested in discussing new opportunities, 
                    collaborating on exciting projects, or simply connecting with fellow developers.
                  </p>
                  
                  <Button className="w-full mt-4">
                    Start a Conversation
                  </Button>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">Quick Facts</h3>
                  <div className="space-y-2 text-sm text-slate-700">
                    <div className="flex justify-between">
                      <span>☕ Coffee consumed today:</span>
                      <span className="font-medium">3 cups</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🎯 Current focus:</span>
                      <span className="font-medium">Full-stack development</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🌱 Learning:</span>
                      <span className="font-medium">AI/ML integration</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-slate-500 text-sm">Project Screenshot</span>
                  </div>
                  <CardTitle>Project Title {project}</CardTitle>
                  <CardDescription>
                    A brief description of what this project does and the problems it solves.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Code
                    </Button>
                    <Button size="sm" className="flex-1">
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Career Path Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Career Path
          </h2>
          
          <div className="space-y-8">
            {/* Recent Career Items */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Job */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-lg">💼</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">Meetsta</h3>
                      <Badge variant="outline">April 2025 - Present</Badge>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">Founding Engineer (Full Stack)</p>
                    <p className="text-slate-700">
                      Building scalable web applications and leading frontend architecture decisions.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Recent Education */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-semibold text-lg">🎓</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">Computer Science</h3>
                      <Badge variant="outline">2020 - 2025</Badge>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">UC Davis</p>
                    <p className="text-slate-700">
                      Bachelor of Science in Computer Science with minor in Technology Management.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Expand Button */}
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => setIsCareerExpanded(!isCareerExpanded)}
                className="px-8"
              >
                {isCareerExpanded ? 'Show Less' : 'Expand Full Career Path'}
                <span className="ml-2">
                  {isCareerExpanded ? '↑' : '↓'}
                </span>
              </Button>
            </div>

            {/* Expanded Career Timeline - Zoom Out View */}
            {isCareerExpanded && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300">
                <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                  {/* Header */}
                  <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Career Journey</h3>
                      <p className="text-slate-600">From beginner to professional developer</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setIsCareerExpanded(false)}
                      className="text-slate-500 hover:text-slate-700"
                    >
                      ✕
                    </Button>
                  </div>

                  {/* Scrollable Timeline */}
                  <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
                    <div className="relative">
                      {/* Continuous timeline line */}
                      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 to-slate-400 rounded-full"></div>
                      
                      <div className="space-y-12">
                        {/* Current Position */}
                        <div className="relative flex items-start gap-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                            <span className="text-white text-xl">💼</span>
                          </div>
                          <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">Software Developer</h4>
                                <p className="text-blue-600 font-semibold">Meetsta</p>
                              </div>
                              <Badge className="bg-blue-100 text-blue-700 border-blue-200">April 2025 - Present</Badge>
                            </div>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                              Building scalable web applications and leading frontend architecture decisions. 
                              Developing innovative solutions for modern web technologies and user experiences.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">React</Badge>
                              <Badge variant="secondary">TypeScript</Badge>
                              <Badge variant="secondary">Team Leadership</Badge>
                              <Badge variant="secondary">Architecture</Badge>
                            </div>
                          </Card>
                        </div>

                        {/* Previous Job */}
                        <div className="relative flex items-start gap-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                            <span className="text-white text-xl">💻</span>
                          </div>
                          <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">Frontend Developer</h4>
                                <p className="text-purple-600 font-semibold">Startup Co.</p>
                              </div>
                              <Badge className="bg-purple-100 text-purple-700 border-purple-200">2022 - 2023</Badge>
                            </div>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                              Developed responsive web applications and implemented modern UI/UX designs. Collaborated closely with design teams 
                              to bring creative visions to life while maintaining high performance standards.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">Vue.js</Badge>
                              <Badge variant="secondary">CSS3</Badge>
                              <Badge variant="secondary">Figma</Badge>
                              <Badge variant="secondary">SCSS</Badge>
                            </div>
                          </Card>
                        </div>

                        {/* Education */}
                        <div className="relative flex items-start gap-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                            <span className="text-white text-xl">🎓</span>
                          </div>
                          <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">Bachelor of Science in Computer Science</h4>
                                <p className="text-green-600 font-semibold">UC Davis</p>
                              </div>
                              <Badge className="bg-green-100 text-green-700 border-green-200">2019 - 2023</Badge>
                            </div>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                              Graduated with Bachelor of Science in Computer Science and minor in Technology Management. 
                              Specialized in software engineering, data structures, and algorithms with additional focus on project management and technology strategy.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">Java</Badge>
                              <Badge variant="secondary">Python</Badge>
                              <Badge variant="secondary">Database Design</Badge>
                              <Badge variant="secondary">Algorithms</Badge>
                              <Badge variant="secondary">Technology Management</Badge>
                            </div>
                          </Card>
                        </div>

                        {/* Internship */}
                        <div className="relative flex items-start gap-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                            <span className="text-white text-xl">🚀</span>
                          </div>
                          <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">Software Engineering Intern</h4>
                                <p className="text-orange-600 font-semibold">Big Tech Corp</p>
                              </div>
                              <Badge className="bg-orange-100 text-orange-700 border-orange-200">Summer 2022</Badge>
                            </div>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                              Contributed to mobile application development and gained experience in agile methodologies. 
                              Worked on feature development and bug fixes while learning industry best practices.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">React Native</Badge>
                              <Badge variant="secondary">Node.js</Badge>
                              <Badge variant="secondary">Agile</Badge>
                              <Badge variant="secondary">Git</Badge>
                            </div>
                          </Card>
                        </div>

                        {/* First Programming Experience */}
                        <div className="relative flex items-start gap-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                            <span className="text-white text-xl">⚡</span>
                          </div>
                          <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">First Programming Class</h4>
                                <p className="text-indigo-600 font-semibold">University Introduction Course</p>
                              </div>
                              <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">2020</Badge>
                            </div>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                              The spark that ignited my passion for programming. Built my first "Hello World" program and discovered 
                              the joy of solving problems through code.
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="secondary">Python</Badge>
                              <Badge variant="secondary">Problem Solving</Badge>
                              <Badge variant="secondary">Logic</Badge>
                            </div>
                          </Card>
                        </div>

                        {/* High School */}
                        <div className="relative flex items-start gap-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                            <span className="text-white text-xl">🏫</span>
                          </div>
                          <Card className="flex-1 p-6 shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h4 className="text-xl font-bold text-slate-900">High School Diploma</h4>
                                <p className="text-slate-600 font-semibold">Local High School</p>
                              </div>
                              <Badge className="bg-slate-100 text-slate-700 border-slate-200">2015 - 2019</Badge>
                            </div>
                            <p className="text-slate-700 leading-relaxed">
                              Where it all began. Discovered a love for mathematics and problem-solving that would later 
                              lead to my passion for programming and software development.
                            </p>
                          </Card>
                        </div>
                      </div>
                    </div>

                    {/* Footer note */}
                    <div className="text-center mt-12 py-6 border-t">
                      <p className="text-slate-500 text-sm">
                        Every step has been a learning experience 🚀
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-xl font-semibold">Let's Connect</h3>
          <p className="text-slate-600">
            Always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline">GitHub</Button>
            <Button variant="outline">LinkedIn</Button>
            <Button>Email Me</Button>
          </div>
          <Separator className="my-8" />
          <p className="text-sm text-slate-500">
            © 2025 Kyle Gabriel Galvez. Built with React, Shadcn, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App