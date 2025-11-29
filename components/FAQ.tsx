"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "How do I get started with Custo?",
    answer:
      "Getting started is easy! Simply sign up for a free trial, and our onboarding wizard will guide you through setting up your first pipeline, importing contacts, and customizing your workspace.",
  },
  {
    question: "Can I manage multiple pipelines at once?",
    answer:
      "Yes! Custo allows you to create and manage multiple sales pipelines simultaneously. You can customize each pipeline with different stages and track deals across all of them from a single dashboard.",
  },
  {
    question: "Can I import data from spreadsheets or another CRM?",
    answer:
      "Absolutely. Custo supports importing data from CSV files, Excel spreadsheets, and direct migrations from popular CRMs like Salesforce, HubSpot, and Pipedrive.",
  },
  {
    question: "Will I lose data if I downgrade my plan?",
    answer:
      "No, your data is always safe. If you downgrade, you'll retain all your existing data but may lose access to certain premium features. You can upgrade again anytime to restore full functionality.",
  },
  {
    question: "Is there a free trial available before subscribing?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features. No credit card required to start your trial.",
  },
  {
    question: "What types of businesses can use Custo?",
    answer:
      "Custo is designed for businesses of all sizes, from solo entrepreneurs to large enterprises. It's particularly well-suited for sales teams, agencies, consultancies, and any business that manages customer relationships.",
  },
  {
    question: "How does Custo handle data backups?",
    answer:
      "We perform automatic daily backups of all your data. Your information is stored securely in encrypted cloud servers with 99.9% uptime guarantee and disaster recovery protocols.",
  },
  {
    question: "How often is Custo updated with new features?",
    answer:
      "We release new features and improvements on a regular basis, typically every 2-4 weeks. All updates are automatic and included in your subscription at no extra cost.",
  },
]

export function FaqCtaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const leftFaqs = faqs.slice(0, 4)
  const rightFaqs = faqs.slice(4, 8)

  return (
    <>
      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1a1a2e] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6b7280] text-base md:text-lg">Find quick answers to common questions about Custo.</p>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {/* Left Column */}
            <div>
              {leftFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 flex items-start gap-4 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-gray-400 mt-0.5">
                      {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                    <span className="text-[#1a1a2e] font-medium text-[20px]">{faq.question}</span>
                  </button>
                  {openIndex === index && (
                    <div className="pb-5 pl-8 text-[#6b7280] text-lg leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightFaqs.map((faq, index) => (
                <div key={index + 4} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFaq(index + 4)}
                    className="w-full py-5 flex items-start gap-4 text-left hover:opacity-70 transition-opacity"
                  >
                    <span className="text-gray-400 mt-0.5">
                      {openIndex === index + 4 ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                    <span className="text-[#1a1a2e] font-medium text-[20px]">{faq.question}</span>
                  </button>
                  {openIndex === index + 4 && (
                    <div className="pb-5 pl-8 text-[#6b7280] text-lg leading-relaxed">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
        <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden">
          {/* Background with gradient and stripes */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#a8e6cf] via-[#b8f0d8] to-[#c8f4e0]">
            {/* Diagonal stripes pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
              <defs>
                <pattern
                  id="ctaStripes"
                  patternUnits="userSpaceOnUse"
                  width="60"
                  height="60"
                  patternTransform="rotate(-55)"
                >
                  <line x1="0" y1="0" x2="0" y2="60" stroke="#7dd3a8" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaStripes)" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 py-20 md:py-28 px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-4">
              Start Growing with Custo Now
            </h2>
            <p className="text-[#4a5568] text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Take control of your sales pipeline, automate tasks, and build
              <br className="hidden md:block" />
              stronger customer relationships with ease.
            </p>
            <button className="bg-[#1a1a2e] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#2d2d44] transition-colors">
              Start for Free
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
