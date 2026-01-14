import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/powerful-female-athlete-training-in-modern-gym-bri.jpg" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Empowering Women Through Fitness</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-montserrat)] text-balance leading-tight">
            Transform Your Body, <span className="text-primary">Elevate Your Life</span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty">
            Personalized training programs designed exclusively for women. Combining cutting-edge technology with
            compassionate coaching to help you achieve your fitness goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Women Transformed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
