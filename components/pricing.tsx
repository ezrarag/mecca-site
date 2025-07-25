import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "BASIC_PLAN",
    price: 200,
    description: "Entry-level learning environment",
    features: [
      "2 sessions/week",
      "Basic progress tracking",
      "Parent communication",
      "Learning materials access",
      "Monthly reports",
    ],
    status: "AVAILABLE",
  },
  {
    name: "PRO_PLAN",
    price: 400,
    description: "Enhanced learning experience",
    features: [
      "4 sessions/week",
      "Advanced tracking",
      "Weekly consultations",
      "Project-based learning",
      "Bi-weekly reports",
      "Workshop access",
      "Peer collaboration",
    ],
    status: "RECOMMENDED",
  },
  {
    name: "PREMIUM_PLAN",
    price: 600,
    description: "Maximum personalization protocol",
    features: [
      "Daily sessions available",
      "Real-time tracking",
      "1-on-1 mentorship",
      "Custom pathways",
      "Weekly reports",
      "Priority access",
      "Leadership development",
      "College prep guidance",
    ],
    status: "ENTERPRISE",
  },
]

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900">
              <div className="font-mono text-stone-200 font-bold">SUBSCRIPTION_MANAGER</div>
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-stone-200 mb-4 font-mono">PRICING_STRUCTURE</h2>
              <p className="text-xl text-stone-300 font-mono">{">"} Select optimal learning configuration</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`bg-stone-800 border-2 shadow-xl ${
                tier.status === "RECOMMENDED" ? "border-amber-400" : "border-stone-700"
              }`}
            >
              <CardHeader className="border-b border-stone-700">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-stone-200 font-mono text-xl">{tier.name}</CardTitle>
                  <div
                    className={`px-2 py-1 text-xs font-mono font-bold ${
                      tier.status === "RECOMMENDED"
                        ? "bg-amber-400 text-stone-900"
                        : tier.status === "ENTERPRISE"
                          ? "bg-blue-400 text-stone-900"
                          : "bg-green-400 text-stone-900"
                    }`}
                  >
                    {tier.status}
                  </div>
                </div>
                <div className="font-mono">
                  <span className="text-4xl font-bold text-stone-200">${tier.price}</span>
                  <span className="text-stone-400">/month</span>
                </div>
                <p className="text-stone-300 font-mono text-sm mt-4">{tier.description}</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 font-mono text-sm">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-stone-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-3 font-mono font-bold border-2 ${
                    tier.status === "RECOMMENDED"
                      ? "bg-amber-400 hover:bg-amber-500 text-stone-900 border-stone-900"
                      : "bg-stone-700 hover:bg-stone-600 text-stone-200 border-stone-600"
                  }`}
                >
                  INITIALIZE_{tier.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl">
          <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900">
            <div className="font-mono text-stone-200 font-bold">ADAPTIVE_LEARNING_MODULE</div>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-stone-200 mb-4 font-mono">AI_ENHANCEMENT_PACKAGE</h3>
            <p className="text-stone-300 mb-6 font-mono">{">"} Advanced adaptive learning algorithms for any plan</p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl font-bold text-blue-400 font-mono">+$100</span>
              <span className="text-stone-400 font-mono">/month</span>
            </div>
            <Button className="bg-blue-400 hover:bg-blue-500 text-stone-900 font-mono font-bold border-2 border-stone-900">
              ADD_TO_PLAN
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
