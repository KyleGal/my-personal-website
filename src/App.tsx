import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Your Name</h1>
          <nav className="hidden md:flex gap-6">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Skills</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
          <Button>Get In Touch</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/images/profile.jpg" alt="Image of Kyle Galvez" />
            <AvatarFallback className="text-2xl">YN</AvatarFallback>
          </Avatar>
          
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Hello, I'm Kyle
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Full Stack Developer & Problem Solver
            </p>
            <p className="max-w-2xl mx-auto text-slate-700 leading-relaxed">
              I create beautiful, functional web applications that solve real-world problems. 
              Passionate about clean code, user experience, and continuous learning.
            </p>
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="px-8">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Download Resume
            </Button>
          </div>

          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="secondary" className="px-3 py-1">React</Badge>
            <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
            <Badge variant="secondary" className="px-3 py-1">Node.js</Badge>
            <Badge variant="secondary" className="px-3 py-1">Python</Badge>
            <Badge variant="secondary" className="px-3 py-1">AWS</Badge>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Projects Preview */}
      <section className="py-20 px-4">
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

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>React</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Vue.js</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>Node.js</Badge>
                  <Badge>Python</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Express</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Tools & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Git</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Jest</Badge>
                </div>
              </CardContent>
            </Card>
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
            <Button variant="outline">Twitter</Button>
            <Button>Email Me</Button>
          </div>
          <Separator className="my-8" />
          <p className="text-sm text-slate-500">
            © 2025 Kyle Gabriel Galvez. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App