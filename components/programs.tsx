"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Music, Beaker, Globe, Calculator, Play, ArrowRight } from "lucide-react"

const programs = [
  {
    icon: Palette,
    title: "CREATIVE_ARTS.exe",
    description: "Visual arts, crafts, and creative expression modules",
    status: "ACTIVE",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Code,
    title: "STEM_LEARNING.exe",
    description: "Programming, robotics, and technology exploration",
    status: "ACTIVE",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Music,
    title: "MUSIC_PERF.exe",
    description: "Musical instruments and performance arts training",
    status: "ACTIVE",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Beaker,
    title: "SCIENCE_LAB.exe",
    description: "Hands-on experiments and scientific discovery",
    status: "ACTIVE",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Globe,
    title: "CULTURAL_STD.exe",
    description: "World cultures, languages, and global awareness",
    status: "ACTIVE",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Calculator,
    title: "MATH_ADV.exe",
    description: "Mathematical concepts and problem-solving",
    status: "ACTIVE",
    color: "from-yellow-500 to-orange-600",
  },
]

export default function Programs() {
  const [animateHeader, setAnimateHeader] = useState(false)
  const [animatePrograms, setAnimatePrograms] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimateHeader(true), 300)
    const timer2 = setTimeout(() => setAnimatePrograms(true), 800)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section id="programs" className="py-20 px-4 bg-stone-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with unfolding animation */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            animateHeader 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900">
              <div className="font-mono text-stone-200 font-bold flex items-center justify-center gap-3">
                <span className="text-green-400 animate-pulse">●</span>
                PROGRAM_DIRECTORY
                <span className="text-green-400 animate-pulse">●</span>
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-stone-200 mb-4 font-mono">
                <span className="text-amber-400">AVAILABLE</span>_MODULES
              </h2>
              <p className="text-xl text-stone-300 font-mono">
                &gt; Specialized learning programs designed for optimal development
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-stone-400 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {programs.length} PROGRAMS LOADED
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  ALL SYSTEMS OPERATIONAL
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid with staggered animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                animatePrograms 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-12 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="group bg-stone-800 border-2 border-stone-700 hover:border-amber-400 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <CardHeader className="border-b border-stone-700 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-stone-700 border border-stone-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <program.icon className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="bg-green-400 text-stone-900 px-3 py-1 text-xs font-mono font-bold rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {program.status}
                    </div>
                  </div>
                  <CardTitle className="text-stone-200 font-mono text-lg group-hover:text-amber-400 transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-6 relative">
                  <p className="text-stone-300 font-mono text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  
                  {/* Interactive elements */}
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <button className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-mono text-sm font-bold transition-colors duration-300">
                      <Play className="w-4 h-4" />
                      LAUNCH
                    </button>
                    <button className="flex items-center gap-2 text-stone-400 hover:text-stone-300 font-mono text-sm transition-colors duration-300">
                      DETAILS
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </CardContent>

                {/* Status indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA with animation */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ${
            animatePrograms 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="bg-stone-800 border-2 border-stone-700 p-6 max-w-2xl mx-auto hover:border-amber-400 transition-colors duration-300">
            <p className="text-stone-300 font-mono text-lg mb-4">
              &gt; Ready to initialize your learning journey?
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold px-8 py-3 border-2 border-stone-900 shadow-lg hover:scale-105 transition-all duration-300">
              BROWSE_ALL_MODULES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
