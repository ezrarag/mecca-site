"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Terminal, Heart } from "lucide-react"

export default function ContactPage() {
  const [animateContent, setAnimateContent] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  useEffect(() => {
    const timer = setTimeout(() => setAnimateContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-stone-200 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            animateContent 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900">
              <div className="font-mono text-stone-200 font-bold flex items-center justify-center gap-3">
                <span className="text-green-400 animate-pulse">●</span>
                CONTACT_TERMINAL
                <span className="text-green-400 animate-pulse">●</span>
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-4xl font-bold text-stone-200 mb-4 font-mono">
                <span className="text-amber-400">INITIATE</span>_COMMUNICATION
              </h1>
              <p className="text-xl text-stone-300 font-mono">
                &gt; Connect with our learning system administrators
              </p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm text-stone-400 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  SYSTEM_READY
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  ENCRYPTED_CHANNEL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              animateContent 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Card className="bg-stone-800 border-2 border-stone-700 shadow-xl">
              <CardHeader className="border-b border-stone-700">
                <CardTitle className="text-stone-200 font-mono text-xl flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-amber-400" />
                  SYSTEM_INFO
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-stone-700 rounded-lg border border-stone-600 hover:border-amber-400 transition-colors duration-300">
                    <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <div className="font-mono text-stone-400 text-sm">PRIMARY_EMAIL</div>
                      <div className="font-mono text-stone-200 font-bold text-lg">info@honeys.center</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-stone-700 rounded-lg border border-stone-600 hover:border-amber-400 transition-colors duration-300">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <div className="font-mono text-stone-400 text-sm">VOICE_CHANNEL</div>
                      <div className="font-mono text-stone-200 font-bold text-lg">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-stone-700 rounded-lg border border-stone-600 hover:border-amber-400 transition-colors duration-300">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-stone-900" />
                    </div>
                    <div>
                      <div className="font-mono text-stone-400 text-sm">PHYSICAL_LOCATION</div>
                      <div className="font-mono text-stone-200 font-bold text-lg">123 Learning Street<br />Education City, EC 12345</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-600">
                  <div className="font-mono text-stone-400 text-sm mb-2">SYSTEM_STATUS:</div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="font-mono text-green-400 text-sm">ONLINE_24/7</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
                    <span className="font-mono text-blue-400 text-sm">RESPONSE_TIME: &lt;2H</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div 
            className={`transition-all duration-1000 ${
              animateContent 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Card className="bg-stone-800 border-2 border-stone-700 shadow-xl">
              <CardHeader className="border-b border-stone-700">
                <CardTitle className="text-stone-200 font-mono text-xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-amber-400" />
                  MESSAGE_COMPOSER
                </CardTitle>
              </CardContent>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-stone-300 text-sm mb-2">
                        USER_NAME
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-stone-700 border-stone-600 text-stone-200 font-mono focus:border-amber-400 focus:ring-amber-400"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-stone-300 text-sm mb-2">
                        EMAIL_ADDRESS
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-stone-700 border-stone-600 text-stone-200 font-mono focus:border-amber-400 focus:ring-amber-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-stone-300 text-sm mb-2">
                      SUBJECT_LINE
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-stone-700 border-stone-600 text-stone-200 font-mono focus:border-amber-400 focus:ring-amber-400"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-stone-300 text-sm mb-2">
                      MESSAGE_CONTENT
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-stone-700 border-stone-600 text-stone-200 font-mono focus:border-amber-400 focus:ring-amber-400 resize-none"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold py-4 text-lg border-2 border-stone-900 shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    TRANSMIT_MESSAGE
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Status */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ${
            animateContent 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-12 opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="bg-stone-800 border-2 border-stone-700 p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-red-400 fill-current animate-pulse" />
              <span className="font-mono text-stone-300 text-lg">THANK_YOU_FOR_CONNECTING</span>
              <Heart className="w-6 h-6 text-red-400 fill-current animate-pulse" />
            </div>
            <p className="font-mono text-stone-400 text-sm">
              &gt; We'll respond within 2 hours during business hours
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
