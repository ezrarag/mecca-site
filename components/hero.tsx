"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, Heart } from "lucide-react"

export default function Hero() {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)

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

  return (
    <section className="min-h-screen bg-stone-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative badges */}
      <div className="absolute top-8 right-8 transform rotate-12">
        <div className="bg-amber-400 text-stone-900 px-4 py-2 font-mono text-sm font-bold border-2 border-stone-900 shadow-lg">
          HONEYS
          <br />
          A+
        </div>
      </div>

      <div className="absolute bottom-20 left-12 transform -rotate-12">
        <div className="bg-amber-400 text-stone-900 px-4 py-2 font-mono text-sm font-bold border-2 border-stone-900 shadow-lg">
          ENRICHMENT
          <br />
          CENTER
        </div>
      </div>

      <div className="w-full max-w-6xl">
        {!showContent ? (
          /* Loading Terminal */
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl">
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
                <Terminal className="w-4 h-4 text-stone-300" />
              </div>
            </div>
            <div className="p-8 font-mono text-stone-200">
              <div className="mb-4">
                <span className="text-green-400">$</span> Welcome to honeysaplus.com
              </div>
              <div className="mb-8">
                <span className="text-green-400">$</span> Initializing personalized learning environment...
              </div>
              <div className="flex items-center justify-between">
                <span>Loading progress:</span>
                <span className="text-4xl font-bold text-blue-400">{loadingProgress}%</span>
              </div>
            </div>
          </div>
        ) : (
          /* Main Content */
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl">
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
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </div>
            </div>
            <div className="p-12 text-stone-200">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="font-mono text-green-400 text-lg">{">"} SYSTEM READY</div>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="text-amber-400">PERSONALIZED</span>
                      <br />
                      <span className="text-blue-400">LEARNING</span>
                      <br />
                      <span className="text-stone-200">ENVIRONMENT</span>
                    </h1>
                    <div className="font-mono text-stone-300 text-lg leading-relaxed">
                      <div className="mb-2">
                        <span className="text-green-400">{">"}</span> Mentorship-driven education
                      </div>
                      <div className="mb-2">
                        <span className="text-green-400">{">"}</span> Project-based learning
                      </div>
                      <div className="mb-2">
                        <span className="text-green-400">{">"}</span> Creative development
                      </div>
                      <div>
                        <span className="text-green-400">{">"}</span> Adaptive curriculum
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold px-8 py-4 text-lg border-2 border-stone-900 shadow-lg"
                    >
                      INITIALIZE_SESSION
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="font-mono font-bold px-8 py-4 text-lg border-2 border-stone-400 text-stone-200 hover:bg-stone-700 bg-transparent"
                    >
                      VIEW_PROGRAMS
                    </Button>
                  </div>

                  <div className="font-mono text-sm text-stone-400 space-y-1">
                    <div>STATUS: 50+ families connected</div>
                    <div>UPTIME: 99.9% learning success rate</div>
                    <div>VERSION: 2024.1.0</div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-stone-700 border-2 border-stone-600 p-6 transform rotate-2 shadow-xl">
                    <div className="bg-stone-200 p-4 border border-stone-400">
                      <img
                        src="/placeholder.svg?height=300&width=400"
                        alt="Children at Honeys A+"
                        className="w-full h-64 object-cover grayscale"
                      />
                    </div>
                    <div className="mt-4 font-mono text-stone-300 text-sm">{">"} LEARNING_SESSION.jpg</div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-400 text-stone-900 p-4 font-mono font-bold border-2 border-stone-900 transform -rotate-6 shadow-lg">
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
    </section>
  )
}
