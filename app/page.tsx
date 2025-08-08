'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Award, Trophy, Code, Calendar, Camera, Coffee, Mountain, Book, Music, Heart } from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)


  const heroImages = [
    "/photos/WhatsApp Image 2025-08-07 at 21.36.46.jpeg",
    "/photos/WhatsApp Image 2025-08-07 at 21.36.47.jpeg", 
    "/photos/WhatsApp Image 202c5-08-07 at 21.36.48.jpeg"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "A VS Code extension that uses machine learning to provide intelligent code suggestions and bug detection.",
      techStack: ["TypeScript", "Python", "TensorFlow", "VS Code API"],
      image: "/images/code-assistant.svg"
    },
    {
      title: "Real-time Collaboration Platform", 
      description: "A web application enabling real-time document editing and video conferencing for remote teams.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/images/collaboration-platform.svg"
    },
    {
      title: "Smart Finance Tracker",
      description: "Mobile app with AI-driven expense categorization and personalized financial insights.",
      techStack: ["React Native", "Express.js", "PostgreSQL", "Python"],
      image: "/images/finance-tracker.svg"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum with smart contracts.",
      techStack: ["Solidity", "Web3.js", "React", "Truffle"],
      image: "/images/blockchain-voting.svg"
    }
  ]

  const achievements = [
    {
      title: "HSBC Hackathon Winner",
      description: "First place winner for developing an innovative fintech solution using AI.",
      date: "2024",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Best Presentation - Spring Startup Sprint", 
      description: "Awarded for exceptional presentation skills and innovative startup pitch.",
      date: "2024",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "UI/UX Hackathon Top 3 - IIIT-H",
      description: "Secured third position in the prestigious UI/UX design hackathon.",
      date: "2023", 
      icon: <Code className="w-6 h-6" />
    }
  ]

  const personalPhotos = [
    {
      src: "/photos/WhatsApp Image 2025-08-07 at 21.36.46.jpeg",
      caption: "Weekend ride through the Western Ghats",
      icon: <Mountain className="w-4 h-4" />
    },
    {
      src: "/photos/WhatsApp Image 2025-08-07 at 21.36.47.jpeg",
      caption: "My favorite reading corner with some good coffee",
      icon: <Book className="w-4 h-4" />
    },
    {
      src: "/photos/WhatsApp Image 202c5-08-07 at 21.36.48.jpeg",
      caption: "Late night coding sessions (with way too much caffeine)",
      icon: <Coffee className="w-4 h-4" />
    },
    {
      src: "/photos/WhatsApp Image 2025cx-08-07 at 21.36.48.jpeg",
      caption: "Chasing sunsets at Srisailam",
      icon: <Camera className="w-4 h-4" />
    },
    {
      src: "/photos/WhatsApp Image 2025-cx08-07 at 21.36.48.jpeg",
      caption: "Unwinding with some music after a long day",
      icon: <Music className="w-4 h-4" />
    },
    {
      src: "/photos/WhatsApp Image 20d25-08-07 at 21.36.47.jpeg",
      caption: "Good times with the squad",
      icon: <Heart className="w-4 h-4" />
    }
  ]

  const personalInterests = [
    { text: "\"Code is poetry written in logic.\"", author: "- My coding philosophy" },
    { text: "Currently reading: 'Atomic Habits' by James Clear", author: "- Always learning" },
    { text: "Favorite playlist: Lo-fi beats while coding", author: "- Music for focus" },
    { text: "Dream destination: Japan (for the tech culture!)", author: "- Travel goals" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="flex justify-between items-center px-6 py-6">
          {/* Logo/Brand */}
          <div className="text-white text-sm font-medium tracking-wider">
            JITESH RACHAMADUGU
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Full Screen Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-40">
            <div className="text-center space-y-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                ABOUT
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                RESUME
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                PORTFOLIO
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                ACHIEVEMENTS
              </button>
              <button 
                onClick={() => scrollToSection('beyond-code')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                BEYOND CODE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-white text-3xl font-light tracking-wider hover:text-blue-400 transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight">
              JITESH RACHAMADUGU
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl font-black">
                DEVELOPER + AI
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
              I specialise in <em className="italic">innovative</em> software development and 
              AI solutions, creating fun, authentic, cutting-edge applications 
              with a modern twist.
            </p>

            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium tracking-wider border-0 rounded-none group transition-all duration-300"
            >
              LET'S BUILD SOMETHING AMAZING
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Corner Text */}
        <div className="absolute bottom-6 left-6 text-white/70 text-sm">
          since 2021
        </div>
        <div className="absolute bottom-6 right-6 text-white/70 text-sm">
          scroll for innovative solutions ↓
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                ABOUT ME
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate software developer with a deep fascination for artificial intelligence 
                  and its potential to transform how we interact with technology. My journey in tech has 
                  been driven by curiosity and a desire to build solutions that make a real difference.
                </p>
                <p>
                  Specializing in the MERN stack and AI/ML technologies, I've had the privilege of winning 
                  several hackathons, including the HSBC Hackathon and earning recognition at various 
                  prestigious competitions. I believe in the power of clean code, innovative thinking, 
                  and collaborative problem-solving.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest in machine learning research, 
                  contributing to open-source projects, or mentoring fellow developers. I'm always excited 
                  about the next challenge and the opportunity to learn something new.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <Badge 
                    key={skill} 
                    className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="/photos/WhatsApp Image 2025-08-0 x7 at 21.39.31.jpeg"
                  alt="Jitesh Rachamadugu"
                  className="w-80 h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            RESUME
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Download my complete resume to learn more about my experience,
            education, and technical skills.
          </p>
          
          <a 
            href="https://drive.google.com/file/d/1tFnaoKyTpFIGZyx-i5pcTzN9xjwn3-qJ/view?usp=drivesdk" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium tracking-wider transition-colors"
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            VIEW RESUME
          </a>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              MY WORK
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in full-stack development, 
              AI/ML implementation, and innovative problem-solving that brings ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex gap-3 justify-center">
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100 shadow-md">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black shadow-md">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              ACHIEVEMENTS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition for innovation, technical excellence, and leadership in the tech community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {achievement.title}
                </h3>
                <p className="text-blue-600 font-medium text-center mb-4">
                  {achievement.date}
                </p>
                <p className="text-gray-600 text-center leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Code Section */}
      <section id="beyond-code" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              BEYOND CODE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here's a peek into life outside of the terminal — from weekend adventures to quiet moments that keep me grounded.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {personalPhotos.map((photo, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img 
                  src={photo.src || "/placeholder.svg"} 
                  alt={photo.caption}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      {photo.icon}
                      <p className="text-sm font-medium">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Personal Interests Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {personalInterests.map((interest, index) => (
              <div 
                key={index} 
                className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <blockquote className="text-lg italic mb-2 text-gray-700">
                  {interest.text}
                </blockquote>
                <cite className="text-sm not-italic text-gray-500">
                  {interest.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage || "/placeholder.svg"} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}



      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              LET'S CONNECT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your next project to life? Let's discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                GET IN TOUCH
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">jitesh.rachamadugu50@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600">+91 7075131523</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6">FOLLOW ME</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/jitesh523" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/jitesh-rachamadugu/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:jitesh.rachamadugu50@gmail.com" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                SEND MESSAGE
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Your Name"
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg"
                  />
                  <Input
                    placeholder="Your Email"
                    type="email"
                    className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-lg resize-none"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium tracking-wider border-0 rounded-lg">
                  SEND MESSAGE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 JITESH RACHAMADUGU. ALL RIGHTS ARE RESERVED BRO.
          </p>
        </div>
      </footer>
    </div>
  )
}
