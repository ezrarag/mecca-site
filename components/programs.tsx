import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Music, Beaker, Globe, Calculator } from "lucide-react"

const programs = [
  {
    icon: Palette,
    title: "CREATIVE_ARTS.exe",
    description: "Visual arts, crafts, and creative expression modules",
    status: "ACTIVE",
  },
  {
    icon: Code,
    title: "STEM_LEARNING.exe",
    description: "Programming, robotics, and technology exploration",
    status: "ACTIVE",
  },
  {
    icon: Music,
    title: "MUSIC_PERF.exe",
    description: "Musical instruments and performance arts training",
    status: "ACTIVE",
  },
  {
    icon: Beaker,
    title: "SCIENCE_LAB.exe",
    description: "Hands-on experiments and scientific discovery",
    status: "ACTIVE",
  },
  {
    icon: Globe,
    title: "CULTURAL_STD.exe",
    description: "World cultures, languages, and global awareness",
    status: "ACTIVE",
  },
  {
    icon: Calculator,
    title: "MATH_ADV.exe",
    description: "Mathematical concepts and problem-solving",
    status: "ACTIVE",
  },
]

export default function Programs() {
  return (
    <section className="py-20 px-4 bg-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900">
              <div className="font-mono text-stone-200 font-bold">PROGRAM_DIRECTORY</div>
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-stone-200 mb-4 font-mono">AVAILABLE_MODULES</h2>
              <p className="text-xl text-stone-300 font-mono">
                &gt; Specialized learning programs designed for optimal development
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-stone-800 border-2 border-stone-700 hover:border-amber-400 transition-colors duration-300 shadow-lg"
            >
              <CardHeader className="border-b border-stone-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-stone-700 border border-stone-600 flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="bg-green-400 text-stone-900 px-2 py-1 text-xs font-mono font-bold">
                    {program.status}
                  </div>
                </div>
                <CardTitle className="text-stone-200 font-mono text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-stone-300 font-mono text-sm leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
