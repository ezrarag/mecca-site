import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-stone-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl">
          <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="font-mono text-stone-200 font-bold">ENROLLMENT_SYSTEM</div>
          </div>
          <div className="p-12 text-center">
            <div className="mb-8">
              <div className="font-mono text-green-400 text-lg mb-4">{">"} READY TO INITIALIZE?</div>
              <h2 className="text-4xl font-bold text-stone-200 mb-6 font-mono">BEGIN_LEARNING_PROTOCOL</h2>
              <p className="text-xl text-stone-300 font-mono max-w-3xl mx-auto leading-relaxed">
                Join our network of families who believe in personalized, creative education.
                <br />
                Initialize consultation to optimize your child's learning environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-stone-900 font-mono font-bold px-8 py-4 text-lg border-2 border-stone-900 shadow-lg"
              >
                <Terminal className="mr-2 w-5 h-5" />
                SCHEDULE_CONSULTATION
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-mono font-bold px-8 py-4 text-lg border-2 border-stone-400 text-stone-200 hover:bg-stone-700 bg-transparent"
              >
                CONTACT_SUPPORT
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="font-mono text-stone-400 text-sm space-y-1">
              <div>FEATURES: Personalized Learning • Creative Projects • Expert Mentorship</div>
              <div>STATUS: Accepting new connections</div>
              <div>UPTIME: 24/7 support available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
