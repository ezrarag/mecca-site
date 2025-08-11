"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Heart, Sparkles, BookOpen, Users } from "lucide-react"

export default function Hero() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [animateFeatures, setAnimateFeatures] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setShowContent(true), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (showContent) {
      setTimeout(() => setAnimateFeatures(true), 800)
      setTimeout(() => setAnimateStats(true), 1200)
    }
  }, [showContent])

  const features = [
    { icon: Sparkles, text: "Mentorship-driven education", delay: 0 },
    { icon: BookOpen, text: "Project-based learning", delay: 100 },
    { icon: Users, text: "Creative development", delay: 200 },
    { icon: Heart, text: "Adaptive curriculum", delay: 300 },
  ]

  const stats = [
    { label: "STATUS", value: "50+ families connected", delay: 0 },
    { label: "UPTIME", value: "99.9% learning success rate", delay: 100 },
    { label: "VERSION", value: "2024.1.0", delay: 200 },
  ]

  return (
    <section id="home" className="min-h-screen bg-stone-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative badges with enhanced animations */}
      <div 
        className="absolute top-8 right-8 transform rotate-12 animate-bounce"
        style={{ animationDelay: '2s', animationDuration: '3s' }}
      >
        <div className="bg-amber-400 text-stone-900 px-4 py-2 font-mono text-sm font-bold border-2 border-stone-900 shadow-lg hover:scale-110 transition-transform duration-300">
          HONEYS
          <br />
          A+
        </div>
      </div>

      <div 
        className="absolute bottom-20 left-12 transform -rotate-12 animate-pulse"
        style={{ animationDelay: '1s', animationDuration: '4s' }}
      >
        <div className="bg-amber-400 text-stone-900 px-4 py-2 font-mono text-sm font-bold border-2 border-stone-900 shadow-lg hover:scale-110 transition-transform duration-300">
          ENRICHMENT
          <br />
          CENTER
        </div>
      </div>

      <div className="w-full max-w-6xl">
        {!showContent ? (
          /* Loading Terminal with enhanced animations */
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl animate-pulse">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-stone-200 text-stone-900 px-3 py-1 font-mono text-sm font-bold border border-stone-900">
                  HONEYS A+
                </div>
                <Terminal className="w-4 h-4 text-stone-300 animate-pulse" />
              </div>
            </div>
            <div className="p-8 font-mono text-stone-200">
              <div className="mb-4 animate-fade-in">
                <span className="text-green-400">$</span> Welcome to honeysaplus.com
              </div>
              <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="text-green-400">$</span> Initializing personalized learning environment...
              </div>
              <div className="flex items-center justify-between animate-fade-in" style={{ animationDelay: '1s' }}>
                <span>Loading progress:</span>
                <span className="text-4xl font-bold text-blue-400 transition-all duration-300 ease-out">
                  {loadingProgress}%
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Main Content with unfolding animations */
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl overflow-hidden">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-stone-200 text-stone-900 px-3 py-1 font-mono text-sm font-bold border border-stone-900">
                  HONEYS A+
                </div>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              </div>
            </div>
            <div className="p-12 text-stone-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  {/* System Ready Status */}
                  <div 
                    className="space-y-6 animate-slide-in-left"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="font-mono text-green-400 text-lg flex items-center gap-2">
                      <span className="animate-pulse">●</span> SYSTEM READY
                    </div>
                    
                    {/* Main Title with staggered reveal */}
                    <div className="space-y-2">
                      <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                        <span 
                          className="text-amber-400 animate-slide-in-left inline-block"
                          style={{ animationDelay: '0.4s' }}
                        >
                          PERSONALIZED
                        </span>
                        <br />
                        <span 
                          className="text-blue-400 animate-slide-in-left inline-block"
                          style={{ animationDelay: '0.6s' }}
                        >
                          LEARNING
                        </span>
                        <br />
                        <span 
                          className="text-stone-200 animate-slide-in-left inline-block"
                          style={{ animationDelay: '0.8s' }}
                        >
                          ENVIRONMENT
                        </span>
                      </h1>
                    </div>

                    {/* Features with staggered animations */}
                    <div className="font-mono text-stone-300 text-lg leading-relaxed space-y-3">
                      {features.map((feature, index) => (
                        <div
                          key={feature.text}
                          className={`flex items-center gap-3 transition-all duration-700 ${
                            animateFeatures 
                              ? 'translate-x-0 opacity-100' 
                              : 'translate-x-8 opacity-0'
                          }`}
                          style={{ transitionDelay: `${feature.delay}ms` }}
                        >
                          <feature.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons with enhanced animations */}
                  <div 
                    className="flex flex-col sm:flex-row gap-4 animate-slide-in-left"
                    style={{ animationDelay: '1s' }}
                  >
                    <Button
                      size="lg"
                      className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold px-8 py-4 text-lg border-2 border-stone-900 shadow-lg hover:scale-105 transition-all duration-300 group"
                    >
                      INITIALIZE_SESSION
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="font-mono font-bold px-8 py-4 text-lg border-2 border-stone-400 text-stone-200 hover:bg-stone-700 bg-transparent hover:scale-105 transition-all duration-300"
                    >
                      VIEW_PROGRAMS
                    </Button>
                  </div>

                  {/* Stats with staggered reveal */}
                  <div 
                    className="font-mono text-sm text-stone-400 space-y-2 animate-slide-in-left"
                    style={{ animationDelay: '1.2s' }}
                  >
                    {stats.map((stat, index) => (
                      <div
                        key={stat.label}
                        className={`transition-all duration-700 ${
                          animateStats 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: `${stat.delay}ms` }}
                      >
                        <span className="text-amber-400">{stat.label}:</span> {stat.value}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side image with enhanced animations */}
                <div 
                  className="relative animate-slide-in-right"
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="bg-stone-700 border-2 border-stone-600 p-6 transform rotate-2 shadow-xl hover:rotate-0 transition-transform duration-500">
                    <div className="bg-stone-200 p-4 border border-stone-400">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Children at Honeys A+"
                        className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="mt-4 font-mono text-stone-300 text-sm flex items-center gap-2">
                      <span className="text-green-400">●</span> LEARNING_SESSION.jpg
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-400 text-stone-900 p-4 font-mono font-bold border-2 border-stone-900 transform -rotate-6 shadow-lg hover:scale-110 transition-transform duration-300">
                    100%
                    <br />
                    SUCCESS
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
