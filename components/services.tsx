import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Users, Video, Smartphone, Calendar, TrendingUp } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: "1-on-1 Personal Training",
      description:
        "Customized workout plans tailored to your goals, fitness level, and lifestyle. Get undivided attention and expert guidance every step of the way.",
      features: ["Personalized programs", "Form correction", "Progress tracking", "Nutrition guidance"],
    },
    {
      icon: Users,
      title: "Small Group Sessions",
      description:
        "Train with a supportive community of like-minded women. Enjoy the motivation of group energy with personalized attention.",
      features: ["Max 6 participants", "Community support", "Affordable pricing", "Fun & engaging"],
    },
    {
      icon: Video,
      title: "Online Coaching",
      description:
        "Get expert coaching from anywhere in the world. Perfect for busy schedules with flexible training times and virtual check-ins.",
      features: ["Video consultations", "Custom workout videos", "Weekly check-ins", "App-based tracking"],
    },
    {
      icon: Smartphone,
      title: "App-Based Programs",
      description:
        "Access your personalized training program through our cutting-edge mobile app. Track workouts, nutrition, and progress all in one place.",
      features: ["Exercise library", "Progress photos", "Meal planning", "Real-time feedback"],
    },
    {
      icon: Calendar,
      title: "Transformation Programs",
      description:
        "12-week intensive programs designed for maximum results. Includes training, nutrition, accountability, and community support.",
      features: ["12-week duration", "Complete nutrition plan", "Weekly accountability", "Private community"],
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Advanced training for athletes and fitness enthusiasts. Leverage data analytics and cutting-edge techniques to maximize performance.",
      features: ["Performance testing", "Data analytics", "Recovery protocols", "Sport-specific training"],
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Services</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-montserrat)] text-balance">
            Training Programs Designed for <span className="text-primary">Your Success</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose from a range of training options that fit your lifestyle, goals, and preferences. Every program is
            backed by science and delivered with care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="p-6 hover:shadow-xl transition-shadow border-2 hover:border-primary/50"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 font-[family-name:var(--font-montserrat)]">{service.title}</h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full bg-transparent">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
