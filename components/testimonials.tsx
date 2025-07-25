import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "SARAH_JOHNSON",
    role: "PARENT_USER_001",
    content:
      "System optimization exceeded expectations. Child engagement metrics improved 300%. Highly recommend this learning environment.",
    rating: "★★★★★",
  },
  {
    name: "MICHAEL_CHEN",
    role: "PARENT_USER_002",
    content:
      "Project-based modules delivered exceptional results. Child successfully completed robotics certification. Outstanding mentorship protocols.",
    rating: "★★★★★",
  },
  {
    name: "LISA_RODRIGUEZ",
    role: "PARENT_USER_003",
    content:
      "Confidence algorithms worked perfectly. Shy child transformed into confident presenter. Social interaction modules highly effective.",
    rating: "★★★★★",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-stone-800 border-4 border-stone-900 shadow-2xl max-w-4xl mx-auto">
            <div className="bg-stone-700 px-6 py-3 border-b-2 border-stone-900">
              <div className="font-mono text-stone-200 font-bold">USER_FEEDBACK_LOG</div>
            </div>
            <div className="p-8">
              <h2 className="text-4xl font-bold text-stone-200 mb-4 font-mono">TESTIMONIAL_DATA</h2>
              <p className="text-xl text-stone-300 font-mono">{"Verified user experiences from our database"}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-stone-800 border-2 border-stone-700 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="bg-green-400 text-stone-900 px-2 py-1 text-xs font-mono font-bold inline-block mb-2">
                    VERIFIED
                  </div>
                  <div className="font-mono text-amber-400 text-sm">{testimonial.rating}</div>
                </div>
                <blockquote className="text-stone-300 mb-6 font-mono text-sm leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t border-stone-700 pt-4">
                  <div className="font-mono text-stone-200 font-bold text-sm">{testimonial.name}</div>
                  <div className="font-mono text-stone-400 text-xs">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
