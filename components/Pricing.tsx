"use client"

import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    yearlyPrice: 24,
    description: "Ideal for solo founders and small teams just getting started with CRM.",
    features: ["Up to 3 Users", "2 GB Storage", "Core CRM Features", "1 Sales Pipeline", "Basic Email Integration"],
    popular: false,
  },
  {
    name: "Growth",
    price: 79,
    yearlyPrice: 66,
    description: "Best for scaling teams that need advanced collaboration tools.",
    features: [
      "Up to 10 Users",
      "Workflow Automation",
      "Multiple Pipelines",
      "Team Collaboration Tools",
      "Activity & Deal Reports",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    yearlyPrice: 166,
    description: "Tailored for large organizations with complex workflows.",
    features: [
      "Unlimited Users",
      "Role-Based Permissions",
      "Advanced Workflow Automation",
      "Custom Dashboards",
      "Priority Support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d4f5e9] via-[#e0f7ee] to-[#edfbf5]">
        {/* Diagonal stripes */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pricing-stripes"
              patternUnits="userSpaceOnUse"
              width="60"
              height="60"
              patternTransform="rotate(-45)"
            >
              <line x1="0" y1="0" x2="0" y2="60" stroke="#a7e8d0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-stripes)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-normal text-[#1a1a1a] leading-tight mb-4">
            Designed for
            <br />
            Sustainable Growth
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-xl mx-auto">
            Invest in a solution that scales with precision and purpose.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          className="flex justify-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex bg-[#e8f5f0] rounded-full p-1">
            <motion.button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                isMonthly ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#6b7280] hover:text-[#1a1a1a]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                !isMonthly ? "bg-white text-[#1a1a1a] shadow-sm" : "text-[#6b7280] hover:text-[#1a1a1a]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Anually
            </motion.button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 items-end">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 md:p-8 ${
                plan.popular
                  ? "shadow-xl md:-mt-4 md:pb-10 border-2 border-[#1a1a1a]"
                  : "shadow-lg border border-gray-100"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <span className="bg-[#1a1a1a] text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </motion.div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">{plan.name}</h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-4">
                <motion.span
                  className="text-4xl md:text-5xl font-semibold text-[#1a1a1a]"
                  key={isMonthly ? plan.price : plan.yearlyPrice}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ${isMonthly ? plan.price : plan.yearlyPrice}
                </motion.span>
                <span className="text-[#6b7280] text-base">/month</span>
              </div>

              {/* Description */}
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6">{plan.description}</p>

              {/* Button */}
              <motion.button
                className={`w-full py-3 px-6 rounded-full text-sm font-medium transition-all mb-8 ${
                  plan.popular
                    ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
                    : "bg-white text-[#1a1a1a] border border-[#d1d5db] hover:bg-gray-50"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                  >
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[#e0f7ee] flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Check className="w-3 h-3 text-[#10b981]" />
                    </motion.div>
                    <span className="text-[#374151] text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
