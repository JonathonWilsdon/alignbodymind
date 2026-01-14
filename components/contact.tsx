"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@transformfitness.com",
      href: "mailto:alex@transformfitness.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Downtown Fitness Studio, New York, NY",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Contact</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-[family-name:var(--font-montserrat)] text-balance">
            Ready to Start Your <span className="text-primary">Transformation?</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Get in touch today for a free consultation. Let's discuss your goals and create a personalized plan for your
            success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your fitness goals..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-montserrat)]">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'd love to hear from you! Whether you have questions about my training programs, want to schedule a
                consultation, or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{info.label}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <Card className="p-6 bg-primary text-primary-foreground">
              <h4 className="font-bold text-lg mb-2">Free Consultation</h4>
              <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                Book a complimentary 30-minute consultation to discuss your goals and see if we're a good fit!
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Schedule Now
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
