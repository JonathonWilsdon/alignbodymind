import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "99",
      period: "month",
      description: "Perfect for beginners ready to start their fitness journey",
      features: [
        "4 personal training sessions/month",
        "Custom workout plan",
        "Nutrition guidelines",
        "Progress tracking app",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Transform",
      price: "199",
      period: "month",
      description: "Most popular choice for serious transformation",
      features: [
        "8 personal training sessions/month",
        "Personalized meal plans",
        "Weekly check-ins",
        "Progress tracking app",
        "Priority support",
        "Small group classes included",
        "Body composition analysis",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "349",
      period: "month",
      description: "Ultimate package for maximum results and support",
      features: [
        "Unlimited personal training",
        "Custom nutrition & supplements",
        "Daily check-ins",
        "Progress tracking app",
        "24/7 support",
        "All group classes included",
        "Monthly body composition",
        "Recovery & wellness sessions",
        "Private community access",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Pricing</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-montserrat)] text-balance">
            Invest in Your <span className="text-primary">Best Self</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Flexible pricing options to fit your budget and goals. All plans include access to our mobile app and
            supportive community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 relative ${
                plan.popular ? "border-2 border-primary shadow-xl scale-105" : "border-2 hover:border-primary/50"
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-montserrat)]">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include a 7-day money-back guarantee. No long-term contracts required.
        </p>
      </div>
    </section>
  )
}
