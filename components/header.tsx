"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "HOME", href: "#home", active: true },
    { name: "PROGRAMS", href: "#programs" },
    { name: "PRICING", href: "#pricing" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "/contact" },
    { name: "PORTAL", href: "/portal" },
  ]

  return (
    <>
      <header className="bg-stone-800 border-b-4 border-stone-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-400 text-stone-900 px-3 py-2 font-mono text-sm font-bold border-2 border-stone-900">
                HONEYS
                <br />
                A+
              </div>
              <div>
                <h1 className="text-xl font-bold text-stone-200 font-mono">LEARNING_SYSTEM</h1>
                <p className="text-xs text-stone-400 font-mono">v2024.1.0</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-stone-300 hover:text-amber-400 font-mono font-medium transition-colors text-sm"
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold border-2 border-stone-900">
                ENROLL_NOW
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-stone-200 hover:text-amber-400 transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Background with grain texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Vertical Colored Stripes */}
          <div className="absolute left-0 top-0 h-full flex">
            <div className="w-4 bg-stone-100"></div>
            <div className="w-8 bg-amber-400"></div>
            <div className="w-8 bg-red-500"></div>
          </div>

          {/* Logo Overlay on Stripes */}
          <div className="absolute left-2 top-8 z-10">
            <div className="bg-white rounded-full p-3 border border-stone-900 shadow-lg">
              <div className="text-center">
                <div className="text-xs font-bold text-stone-900">STD</div>
                <div className="text-lg font-bold text-stone-900">HONEYS</div>
                <div className="text-xs font-bold text-stone-900">A+</div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white hover:text-amber-400 transition-colors z-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Menu */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <nav className="text-center space-y-8">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className="group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <a
                    href={item.href}
                    className={`block text-2xl font-light tracking-wider transition-all duration-300 ${
                      item.active 
                        ? 'text-amber-400 italic font-medium' 
                        : 'text-stone-200 hover:text-amber-400'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.active && (
                    <div className="w-0 group-hover:w-full h-0.5 bg-amber-400 transition-all duration-500 mx-auto mt-2"></div>
                  )}
                </div>
              ))}
              
              {/* Enroll Button */}
              <div 
                className="pt-8"
                style={{
                  animationDelay: `${navigation.length * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <Button 
                  className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold border-2 border-stone-900 px-8 py-4 text-lg shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ENROLL_NOW
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
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
      `}</style>
    </>
  )
}
