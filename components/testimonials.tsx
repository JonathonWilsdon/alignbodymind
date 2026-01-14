import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Executive",
      image: "/professional-woman-smiling.png",
      content:
        "Alex transformed not just my body, but my entire mindset. Her empathetic approach and cutting-edge training methods helped me lose 30 pounds and gain confidence I never knew I had.",
      rating: 5,
    },
    {
      name: "Jessica Chen",
      role: "Entrepreneur",
      image: "/asian-woman-confident-portrait.jpg",
      content:
        "The app-based tracking and personalized programs fit perfectly into my busy schedule. Alex's expertise and support have been invaluable in my fitness journey.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "/latina-woman-happy-portrait.jpg",
      content:
        "I've tried many trainers before, but Alex's combination of technology and personal touch is unmatched. The community she's built is incredibly supportive and motivating.",
      rating: 5,
    },
    {
      name: "Rachel Thompson",
      role: "Software Engineer",
      image: "/athletic-woman-portrait.png",
      content:
        "As someone who loves data, I appreciate how Alex uses technology to track progress and optimize workouts. The results speak for themselves — I'm stronger than ever!",
      rating: 5,
    },
    {
      name: "Amanda Foster",
      role: "Nurse",
      image: "/professional-woman-smiling.png",
      content:
        "Alex's empathy and understanding of women's unique fitness challenges made all the difference. She helped me regain my strength after pregnancy and feel like myself again.",
      rating: 5,
    },
    {
      name: "Lisa Park",
      role: "Designer",
      image: "/woman-creative-portrait.jpg",
      content:
        "The transformation program exceeded all my expectations. Alex's pride in her work and genuine care for her clients shines through in every session.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-montserrat)] text-balance">
            Real Stories, Real <span className="text-primary">Transformations</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Hear from the amazing women who've transformed their lives through personalized training and unwavering
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
