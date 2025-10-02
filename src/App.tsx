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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold cursor-pointer hover:text-slate-600 transition-colors" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <img src="/images/favicon.png" className="w-14 h-14" alt="KG"></img>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-end">
            <Button variant="ghost" onClick={() => document.getElementById("experience")?.scrollIntoView({behavior: 'smooth'})}>Experience</Button>
            <Button variant="ghost" onClick={() => document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'})}>Projects</Button>
            <Dialog>
                <form>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="lg" className="px-8">
                      Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh]">
                    <DialogHeader>
                      <DialogTitle>Kyle's Resume</DialogTitle>
                    </DialogHeader>
                    <div className="overflow-hidden rounded-lg border">
                      <iframe
                        src="/images/Resume_KyleGalvez.pdf"
                        className="w-full h-[500px]"
                        title="Kyle Galvez Resume"
                      />
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button variant="ghost">
                        <a href="images/Resume_KyleGalvez.pdf" download="Kyle_Galvez_Resume.pdf">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                          </svg>
                        </a>
                      </Button>

                    </DialogFooter>
                  </DialogContent>
                </form>
              </Dialog>
            </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  document.getElementById("experience")?.scrollIntoView({behavior: 'smooth'})
                  setIsMobileMenuOpen(false)
                }}
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'})
                  setIsMobileMenuOpen(false)
                }}
              >
                Projects
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start">
                    Resume
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-4xl max-h-[90vh]">
                  <DialogHeader>
                    <DialogTitle>Kyle's Resume</DialogTitle>
                  </DialogHeader>
                  <div className="overflow-hidden rounded-lg border">
                    <iframe
                      src="/images/Resume_KyleGalvez.pdf"
                      className="w-full h-[400px]"
                      title="Kyle Galvez Resume"
                    />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="ghost">
                      <a href="images/Resume_KyleGalvez.pdf" download="Kyle_Galvez_Resume.pdf">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </a>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-30 px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-0">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Avatar className="md:w-72 md:h-72 w-56 h-56 mx-auto" id="profile_img">
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
          </div>
        

          <div className="max-w-2xl mx-auto text-center space-y-6 px-5 lg:pr-10 lg:pl-0">
            <p className="text-lg text-slate-700 leading-relaxed">
              My journey into software development began with a love for solving puzzles and grew into a passion for building tools that turn ideas into reality. 
              I find joy in tackling challenges, creating meaningful digital experiences, and constantly learning new ways to bring innovation to life.
              I want to use my skills to make a lasting impact by creating technology that truly improves people’s lives.
            </p>
            
            <p className="text-lg text-slate-700 leading-relaxed mb-15 md:mb-6">
              Beyond software, I live for adventure. You can find me playing volleyball, rock climbing, carving on a snowboard, or exploring new places and foods. 
              My work as a developer or the experiences I chase outdoors keep me inspired, curious, and excited for what’s ahead.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold text-slate-900">Languages</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">C/C++</Badge>
                  <Badge variant="secondary">HTML/CSS</Badge>
                </div>
              </div>

              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold text-slate-900">Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Git/Github</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Postman</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section id="experience" className="py-35 px-4 bg-slate-50 pb-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
            Experience
          </h2>
          
          <div className="space-y-8">
            {/* Recent Career Items */}
            <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ease-in-out ${
              isCareerExpanded
                ? 'opacity-0 max-h-0 overflow-hidden transform -translate-y-4'
                : 'opacity-100 max-h-[500px] transform translate-y-0'
            }`}>
              {/* Recent Education */}
              <Card id="recent_edu" className="p-6">
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

              {/* Recent Job */}
              <Card id="recent_job" className="p-6">
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
                      Built gRPC + Supabase backend; now developing cross-platform Electron app.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Expand/Collapse Button */}
            <div className="text-center mb-20">
              <Button
                variant="outline"
                onClick={() => setIsCareerExpanded(!isCareerExpanded)}
                className="px-8 transition-all duration-300"
              >
                {isCareerExpanded ? 'Show Less' : 'Expand Full Career Path'}
                <span className="ml-2">
                  {isCareerExpanded ? '↑' : '↓'}
                </span>
              </Button>
            </div>

            {/* Expanded Career Timeline */}
            <div className={`transition-all duration-2000 ease-in-out ${
              isCareerExpanded
                ? 'opacity-100 max-h-[2000px] transform translate-y-0'
                : 'opacity-0 max-h-0 overflow-hidden transform translate-y-4'
            }`}>
              <section className="pt-10 px-4 relative">
                {/* Decorative Background Logos - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/3 pointer-events-none">
                  {/* Job logos on the left */}
                  <div className="absolute -top-20 left-0 w-100 h-100 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center overflow-hidden opacity-30">
                    <img src="/images/meetsta_logo.png" alt="" className="w-full h-full object-contain opacity-50" />
                  </div>
                  <div className="absolute top-50 -left-50 w-75 h-75 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center overflow-hidden opacity-25">
                    <img src="/images/miocar_logo.png" alt="" className="w-full h-full object-contain opacity-50" />
                  </div>
                  <div className="absolute top-[300px] left-20 w-85 h-85 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center overflow-hidden opacity-30">
                    <img src="/images/cs_tutoring_logo.png" alt="" className="w-full h-full object-contain opacity-50" />
                  </div>

                  {/* School logos on the right */}
                  <div className="absolute top-[590px] left-110 w-70 h-70 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center overflow-hidden opacity-30">
                    <img src="/images/uc_davis_logo.jpeg" alt="" className="w-full h-full object-contain opacity-50" />
                  </div>
                  <div className="absolute top-[750px] left-190 w-55 h-55 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center overflow-hidden opacity-25 p-4">
                    <img src="/images/md_logo.jpg" alt="" className="w-full h-full object-contain opacity-50" />
                  </div>
                </div>

                {/* Container */}
                <div className="space-y-12 md:space-y-32 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                  {/* <!-- Current Job --> */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active md:mb-64">
                      {/* <!-- Icon --> */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-400 text-slate-500 group-[.is-active]:text-blue-600 shadow shrink-0 absolute md:left-1/2 md:-translate-x-1/2">
                          <span className="text-white text-xl">💼</span>
                      </div>
                      {/* <!-- Card --> */}
                      <div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(70%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:absolute md:left-[calc(50%+3rem)]">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                              <div className="font-bold text-slate-900">Founding Engineer (Full Stack)</div>
                              <Badge variant="outline">April 2025 - Present</Badge>
                          </div>
                          <div className="md:text-left text-slate-500">
                            Meetsta
                          </div>
                          <div className="py-2 md:text-left text-slate-500">
                            • Built a scalable backend with gRPC microservices and Supabase PostgreSQL for real-time data and growth.
                            <br></br>
                            • Developing a cross-platform desktop app with Electron, React, and TypeScript for a smooth user experience.
                          </div>
                      </div>
                  </div>

                  {/* <!-- UC Davis EcoCAR --> */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active md:mb-64">
                      {/* <!-- Icon --> */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-400 text-slate-500 group-[.is-active]:text-blue-600 shadow shrink-0 absolute md:left-1/2 md:-translate-x-1/2">
                          <span className="text-white text-xl">💼</span>
                      </div>
                      {/* <!-- Card --> */}
                      <div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(70%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:absolute md:left-[calc(50%+3rem)]">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                              <div className="font-bold text-slate-900">Lead Software Developer</div>
                              <Badge variant="outline">Oct 2024 - Aug 2025</Badge>
                          </div>
                          <div className="md:text-left text-slate-500">
                            UC Davis EcoCAR and Míocar
                          </div>
                          <div className="py-2 md:text-left text-slate-500">
                            • Built automation tools with JavaScript and Tampermonkey that streamlined bookings, license exports, and user registration, cutting workload by 90% and costs by 20%.
                            <br></br>
                            • Enhanced the frontend with custom UI injections and seamless styling to preserve the user experience while extending functionality.
                            <br></br>
                            • Co-presented MÍA, an AI-powered assistant, showcasing intelligent task automation projected to reduce manual work by 95%.
                          </div>
                          
                      </div>
                  </div>

                  {/* <!-- UC Davis Computer Science Tutoring --> */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      {/* <!-- Icon --> */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-400 text-slate-500 group-[.is-active]:text-blue-600 shadow shrink-0 absolute md:left-1/2 md:-translate-x-1/2">
                          <span className="text-white text-xl">📚</span>
                      </div>
                      {/* <!-- Card --> */}
                      <div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(70%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:absolute md:left-[calc(50%+3rem)]">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                              <div className="font-bold text-slate-900">Computer Science Tutor</div>
                              <Badge variant="outline">Oct 2024 - June 2025</Badge>
                          </div>
                          <div className="md:text-left text-slate-500">
                            UC Davis Computer Science
                          </div>
                          <div className="py-2 md:text-left text-slate-500">
                            • Tutored peers in data structures, algorithms, and systems fundamentals, improving understanding and confidence.
                            <br></br>
                            • Built mentorship and communication skills by adapting explanations to different learning styles.
                          </div>
                      </div>
                  </div>

                  {/* University */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      {/* <!-- Icon --> */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-400 text-slate-500 group-[.is-active]:text-purple-500 shadow shrink-0 absolute md:left-1/2 md:-translate-x-1/2">
                          <span className="text-green-600 font-semibold text-lg">🎓</span>
                      </div>
                      {/* <!-- Card --> */}
                      <div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(70%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:absolute md:right-[calc(50%+3rem)]">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                              <div className="font-bold text-slate-900">UC Davis</div>
                              <Badge variant="outline">Graduated 2025</Badge>
                          </div>
                          <div className="text-slate-500">
                            Bachelor of Science in Computer Science
                            <br></br>
                            Minor in Technology Management.
                          </div>
                      </div>
                  </div>

                  {/* High School */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      {/* <!-- Icon --> */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-purple-400 text-slate-500 group-[.is-active]:text-purple-500 shadow shrink-0 absolute md:left-1/2 md:-translate-x-1/2">
                          <span className="text-green-600 font-semibold text-lg">🎓</span>
                      </div>
                      {/* <!-- Card --> */}
                      <div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(70%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow md:absolute md:right-[calc(50%+3rem)]">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 sm:space-x-2 mb-1">
                              <div className="font-bold text-slate-900">Mater Dei High School</div>
                              <Badge variant="outline">Graduated 2020</Badge>
                          </div>
                          <div className="text-slate-500">
                            Honor Roll all four years. Volleyball student athlete.
                          </div>
                      </div>
                  </div>

                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-35 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">
                    <img src="/images/miocar.png" alt="Míocar"></img>
                  </span>
                </div>
                <CardTitle>Miocar Web Extension Scripts</CardTitle>
                <CardDescription>
                  This repository contains a collection of user scripts intended for use with Tampermonkey. Each script automates various tasks on the Miocar's share.car administrative portal or on related services such as MVRCheck.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Tampermonkey</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href="https://github.com/Hummaton/MioCar-WebExtension-Scripts" target="_blank" className="button-link">
                      View Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" hidden>
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Project Screenshot</span>
                </div>
                <CardTitle>Project Title 2</CardTitle>
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

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" hidden>
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Project Screenshot</span>
                </div>
                <CardTitle>Project Title 3</CardTitle>
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
            <Button variant="outline" asChild>
              <a href="https://github.com/KyleGal" target="_blank" className="button-link">GitHub</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://www.linkedin.com/in/kylegalvez/" target="_blank" className="button-link">LinkedIn</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="mailto:kgalvez.work@gmail.com" target="_blank" className="button-link">Email Me</a>
              </Button>
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