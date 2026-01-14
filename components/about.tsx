import { Heart, Award, Zap, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Empathy First",
      description: "Understanding your unique journey and challenges to provide personalized support.",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Certified expertise with a track record of transforming lives through fitness.",
    },
    {
      icon: Zap,
      title: "Tech-Powered",
      description: "Leveraging the latest fitness technology and data-driven insights for optimal results.",
    },
    {
      icon: Users,
      title: "Community Strong",
      description: "Building a supportive network of empowered women achieving their goals together.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/confident-female-personal-trainer-portrait-bright-.jpg"
                alt="Alex - Personal Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-sm">Years Transforming Lives</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-medium text-primary">About Me</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-montserrat)] text-balance">
              Hi, I'm Alex — Your Partner in Transformation
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a certified personal trainer specializing in women's fitness, I've dedicated my career to helping women
              discover their strength, both physical and mental. My approach combines evidence-based training methods
              with the latest fitness technology to create personalized programs that deliver real results.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I believe fitness is more than just physical transformation — it's about building confidence, resilience,
              and a community of support. Every woman deserves to feel powerful, capable, and proud of what her body can
              achieve.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <Card key={value.title} className="p-4 border-2 hover:border-primary/50 transition-colors">
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
