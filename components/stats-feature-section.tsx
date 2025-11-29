"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Calendar } from "lucide-react"

function useCountUp(end: number, duration = 2, inView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [end, duration, inView])

  return count
}

import { useState, useEffect } from "react"

export function StatsFeaturesSection() {
  const statsRef = useRef(null)
  const featuresRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" })
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" })

  const usersCount = useCountUp(10, 2, statsInView)
  const salesCount = useCountUp(30, 2, statsInView)
  const dealsCount = useCountUp(1, 2, statsInView)

  return (
    <section className="bg-white py-16 md:py-24">
      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        className="max-w-5xl mx-auto px-6 mb-20"
        initial={{ opacity: 0, y: 40 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[#10b981] text-[36px] md:text-[42px] font-semibold mb-2">{usersCount}K+</p>
            <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1">Users Worldwide</p>
            <p className="text-[#888] text-[13px] leading-relaxed max-w-[200px] mx-auto">
              Businesses trust Custo to streamline sales and manage customer relationships.
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[#10b981] text-[36px] md:text-[42px] font-semibold mb-2">{salesCount}%</p>
            <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1">Faster Sales Cycles</p>
            <p className="text-[#888] text-[13px] leading-relaxed max-w-[200px] mx-auto">
              Optimize your sales process and close deals more efficiently with automated workflows.
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[#10b981] text-[36px] md:text-[42px] font-semibold mb-2">${dealsCount}B</p>
            <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1">in Deals Closed</p>
            <p className="text-[#888] text-[13px] leading-relaxed max-w-[200px] mx-auto">
              Track high-value opportunities and drive revenue growth effortlessly.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div ref={featuresRef} className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] md:text-[32px] font-serif font-medium text-[#1a1a1a] mb-3">
            Elevate Business Growth
          </h2>
          <p className="text-[#666] text-[15px]">
            Scale your business effortlessly with a powerful and intuitive CRM solutions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Task Automation Card */}
          <motion.div
            className="bg-[#fafafa] rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -40 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            {/* Mockup UI */}
            <div className="mb-6 space-y-3">
              {/* New Lead Added */}
              <motion.div
                className="bg-white rounded-lg p-3 shadow-sm border border-[#eee]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#dcfce7] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#10b981]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-[#1a1a1a]">New Lead Added</span>
                      <span className="text-[10px] px-2 py-0.5 bg-[#dcfce7] text-[#10b981] rounded">Trigger</span>
                    </div>
                    <p className="text-[11px] text-[#888] mt-0.5">A new lead is added to the CRM</p>
                  </div>
                </div>
                {/* Connector Line */}
                <div className="flex justify-center my-2">
                  <motion.div
                    className="w-0.5 h-4 bg-[#e5e5e5]"
                    initial={{ scaleY: 0 }}
                    animate={featuresInView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  />
                </div>
                <div className="flex justify-center">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#ef4444]"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                  />
                </div>
              </motion.div>

              {/* Assign Lead */}
              <motion.div
                className="bg-white rounded-lg p-3 shadow-sm border border-[#eee]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#666]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-medium text-[#1a1a1a]">Assign Lead</span>
                      <span className="text-[10px] px-2 py-0.5 bg-[#f0f0f0] text-[#666] rounded">Action</span>
                    </div>
                    <p className="text-[11px] text-[#888] mt-0.5">Assign the lead to the sales team</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Feature Label */}
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <div>
                <p className="text-[15px] font-semibold text-[#1a1a1a]">Task Automation</p>
                <p className="text-[13px] text-[#888]">Automate follow-ups to reduce manual work.</p>
              </div>
            </div>
          </motion.div>

          {/* Meeting Organizer Card */}
          <motion.div
            className="bg-[#fafafa] rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          >
            {/* Mockup UI */}
            <div className="mb-6">
              <motion.div
                className="bg-white rounded-lg p-4 shadow-sm border border-[#eee]"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-medium text-[#1a1a1a]">Create Meeting</span>
                  <button className="text-[#999] hover:text-[#666]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Starting on */}
                <div className="mb-3">
                  <p className="text-[11px] text-[#888] mb-1.5">Starting on</p>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-[#f5f5f5] rounded-lg px-3 py-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#888]" />
                      <span className="text-[13px] text-[#1a1a1a]">Mon, Mar 17</span>
                    </div>
                    <div className="bg-[#f5f5f5] rounded-lg px-3 py-2">
                      <span className="text-[13px] text-[#1a1a1a]">11:00</span>
                    </div>
                  </div>
                </div>

                {/* Repeat */}
                <div className="mb-4">
                  <p className="text-[11px] text-[#888] mb-1.5">Repeat</p>
                  <div className="bg-[#f5f5f5] rounded-lg px-3 py-2 inline-flex items-center gap-2">
                    <span className="text-[13px] text-[#1a1a1a]">Weekly</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    className="flex-1 bg-[#1a1a1a] text-white text-[13px] font-medium py-2 rounded-lg hover:bg-[#333] transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Confirm
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-[#f5f5f5] text-[#1a1a1a] text-[13px] font-medium py-2 rounded-lg hover:bg-[#eee] transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Feature Label */}
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <Calendar className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <p className="text-[15px] font-semibold text-[#1a1a1a]">Meeting Organizer</p>
                <p className="text-[13px] text-[#888]">Manage deals at every stage faster.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
