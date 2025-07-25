"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "PROGRAMS", href: "#programs" },
    { name: "PRICING", href: "#pricing" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
    { name: "PORTAL", href: "/portal" },
  ]

  return (
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
          <button className="md:hidden text-stone-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-stone-700">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-stone-300 hover:text-amber-400 font-mono font-medium py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold border-2 border-stone-900 mt-4">
                ENROLL_NOW
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
