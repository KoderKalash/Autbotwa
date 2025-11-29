"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Leah Mendoza",
    role: "Operations Manager",
    company: "Orbitcloud",
    quote:
      "From day one, Custo has simplified how we work. The real-time updates, shared notes, and smart deal tracking have saved us countless hours. It's the kind of CRM that just works—and makes you wonder how you managed before using it.",
    image: "/professional-woman-with-dark-curly-hair-black-and-.jpg",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Sales Director",
    company: "TechFlow Inc",
    quote:
      "Custo transformed our sales pipeline completely. We've seen a 40% increase in deal closures since switching. The email integration alone has saved our team hours every week. Absolutely essential for any growing sales team.",
    image: "/professional-asian-man-in-suit-black-and-white-por.jpg",
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "CEO",
    company: "StartupHub",
    quote:
      "As a startup founder, I needed a CRM that could scale with us. Custo delivered beyond expectations. The analytics dashboard gives me instant visibility into our business health, and my team adopted it within days.",
    image: "/professional-blonde-woman-executive-black-and-whit.jpg",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Development Lead",
    company: "GlobalReach",
    quote:
      "The collaboration features in Custo are game-changing. Our remote team stays perfectly synced, and the real-time updates mean nothing falls through the cracks. It's become the backbone of our entire operation.",
    image: "/professional-man-with-beard-black-and-white-portra.jpg",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Customer Success Manager",
    company: "CloudServe",
    quote:
      "I've used many CRMs over the years, but Custo stands out for its intuitive design and powerful automation. Setting up workflows took minutes, not hours. Our customer retention has improved significantly since we started using it.",
    image: "/professional-latina-woman-smiling-black-and-white-.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            Real Stories from Real Users
          </h2>
          <p className="text-[#6b7280] text-lg max-w-3xl mx-auto">
            Hear how Custo has helped businesses close more deals, collaborate better, and stay organized.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-4 lg:-left-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" />
          </button>

          {/* Testimonial Card */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto px-12 md:px-16">
            {/* Image with Play Button */}
            <div className="relative flex-shrink-0 w-64 md:w-80 h-80 md:h-96 rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover grayscale"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <Play className="w-6 h-6 md:w-7 md:h-7 text-[#1a1a1a] ml-1" fill="#1a1a1a" />
                </button>
              </div>
            </div>

            {/* Review Card */}
            <div className="flex-1 bg-white rounded-2xl border border-[#e5e7eb] p-6 md:p-8 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#374151] text-base md:text-lg leading-relaxed mb-6">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1a1a1a] text-lg">{currentTestimonial.name}</p>
                <p className="text-[#6b7280] text-sm">
                  {currentTestimonial.role}, {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-4 lg:-right-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#e5e7eb] bg-white flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5 text-[#1a1a1a]" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#1a1a1a]" : "bg-[#d1d5db]"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
