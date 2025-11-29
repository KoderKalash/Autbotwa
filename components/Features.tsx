"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function FeaturesListSection() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const inView1 = useInView(ref1, { once: true, margin: "-100px" })
  const inView2 = useInView(ref2, { once: true, margin: "-100px" })
  const inView3 = useInView(ref3, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Email Integration */}
        <div ref={ref1} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
          {/* Left Illustration */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#e8f5f0] to-[#d4ede4] rounded-3xl p-8 md:p-12 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Diagonal stripes background */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[200%] w-px bg-[#a8d5c5] origin-center rotate-[30deg]"
                    style={{ left: `${i * 10}%`, top: "-50%" }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center min-h-[300px]">
                {/* Alpha Tech Card - Top */}
                <motion.div
                  className="absolute top-4 left-8 bg-white rounded-xl shadow-sm px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                >
                  <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.31 0l-2.83-2.83M9.76 9.76L6.93 6.93" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Alpha Tech</p>
                    <p className="text-xs text-gray-500">contact@alpha.com</p>
                  </div>
                </motion.div>

                {/* Center Hub */}
                <motion.div
                  className="relative"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ transformOrigin: "center center" }}
                >
                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                    <motion.svg
                      className="w-10 h-10 text-gray-800"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      animate={{ rotate: [360, 0] }}
                      transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Lambda Solutions Card - Bottom */}
                <motion.div
                  className="absolute bottom-4 left-8 bg-white rounded-xl shadow-sm px-4 py-3 flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                >
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Lambda Solutions</p>
                    <p className="text-xs text-gray-500">contact@lambda.com</p>
                  </div>
                </motion.div>

                {/* Animated connection dots */}
                <motion.div
                  className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-orange-500"
                  animate={{ y: [-30, 30], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute bottom-1/3 left-1/2 w-2 h-2 rounded-full bg-orange-500"
                  animate={{ y: [30, -30], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.p
              className="text-[#10b981] font-semibold text-base mb-4"
              initial={{ opacity: 0 }}
              animate={inView1 ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Email Integration
            </motion.p>
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6 font-extralight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Manage Emails Without Leaving Your CRM
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Sync with your email to send, receive, and track conversations directly from the CRM.
            </motion.p>
          </motion.div>
        </div>

        {/* Feature 2: Multi-User Collaboration */}
        <div ref={ref2} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
          {/* Left Illustration */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#e8f5f0] to-[#d4ede4] rounded-3xl p-8 md:p-12 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Diagonal stripes background */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[200%] w-px bg-[#a8d5c5] origin-center rotate-[30deg]"
                    style={{ left: `${i * 10}%`, top: "-50%" }}
                  />
                ))}
              </div>

              <div className="relative z-10 min-h-[300px] flex flex-col items-center justify-center gap-6">
                {/* Delta Innovations Input */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-sm px-4 py-3 flex items-center gap-3 border border-gray-200">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                    <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">H</span>
                    </div>
                    <span className="text-gray-900 font-medium">Delta Innovations</span>
                  </div>
                  {/* Sabrina cursor */}
                  <motion.div
                    className="absolute -right-2 -top-2 flex items-center"
                    initial={{ x: 20, y: 10 }}
                    animate={
                      inView2
                        ? {
                            x: [20, 20, 0],
                            y: [10, 10, -8],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      times: [0, 0.3, 1],
                      ease: "easeOut",
                    }}
                  >
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 3.21V20.8l5.74-5.79h8.26L5.5 3.21z" />
                    </svg>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded ml-1">Sabrina</span>
                  </motion.div>
                </motion.div>

                {/* Category Dropdown */}
                <motion.div
                  className="relative bg-white rounded-xl shadow-lg p-4 w-full max-w-[240px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView2 ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  whileHover={{ boxShadow: "0 15px 40px rgba(0,0,0,0.12)" }}
                >
                  <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 mb-3">
                    <span className="text-gray-700">Category</span>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    {["Technology", "Finance", "Marketing", "Logistics"].map((cat, i) => (
                      <motion.div
                        key={cat}
                        className={`relative px-3 py-1.5 rounded border text-sm w-fit ${
                          cat === "Marketing"
                            ? "border-gray-200 bg-gray-50 text-gray-600"
                            : cat === "Logistics"
                              ? "border-orange-200 bg-orange-50 text-orange-600"
                              : "border-blue-200 bg-blue-50 text-blue-600"
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView2 ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        {cat}
                      </motion.div>
                    ))}
                  </div>

                  {/* Jessie cursor */}
                  <motion.div
                    className="absolute right-[-70px] top-[72px] flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 3.21V20.8l5.74-5.79h8.26L5.5 3.21z" />
                    </svg>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded ml-1">Jessie</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.p
              className="text-[#10b981] font-semibold text-base mb-4"
              initial={{ opacity: 0 }}
              animate={inView2 ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Multi-User Collaboration
            </motion.p>
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6 font-extralight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Empower Your Team with Real-Time Sync
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Collaborate effortlessly with your team by sharing information, notes, and real-time updates.
            </motion.p>
          </motion.div>
        </div>

        {/* Feature 3: Analytics & Reporting */}
        <div ref={ref3} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Illustration */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#e8f5f0] to-[#d4ede4] rounded-3xl p-8 md:p-12 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Diagonal stripes background */}
              <div className="absolute inset-0 opacity-30">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-[200%] w-px bg-[#a8d5c5] origin-center rotate-[30deg]"
                    style={{ left: `${i * 10}%`, top: "-50%" }}
                  />
                ))}
              </div>

              <div className="relative z-10 min-h-[350px] flex items-center justify-center">
                {/* Main Revenue Summary Card */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-6 w-[280px]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView3 ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
                >
                  <h3 className="text-gray-900 font-semibold text-sm mb-4">Revenue Summary</h3>

                  {/* Donut Chart */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="12"
                        strokeDasharray="125.6 251.2"
                        strokeDashoffset="0"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={inView3 ? { strokeDashoffset: 0 } : {}}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#1e3a5f"
                        strokeWidth="12"
                        strokeDasharray="87.9 251.2"
                        strokeDashoffset="-125.6"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={inView3 ? { strokeDashoffset: -125.6 } : {}}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="12"
                        strokeDasharray="37.7 251.2"
                        strokeDashoffset="-213.5"
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={inView3 ? { strokeDashoffset: -213.5 } : {}}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      />
                    </svg>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={inView3 ? { opacity: 1 } : {}}
                      transition={{ delay: 1.2 }}
                    >
                      <span className="text-2xl font-bold text-gray-900">$98,752</span>
                    </motion.div>
                  </div>

                  {/* Legend */}
                  <div className="flex justify-between text-center text-xs">
                    <div>
                      <p className="font-semibold text-gray-900">$49,376</p>
                      <p className="text-gray-500">New</p>
                      <p className="text-gray-500">Customers</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">$34,563</p>
                      <p className="text-gray-500">Existing</p>
                      <p className="text-gray-500">Customers</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">$14,813</p>
                      <p className="text-gray-500">Upsells</p>
                      <p className="text-gray-500">& Add-ons</p>
                    </div>
                  </div>
                </motion.div>

                {/* Small bar chart - left */}
                <motion.div
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm p-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView3 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-[10px] text-gray-500 mb-2">$15,750</p>
                  <div className="flex items-end gap-2 h-16">
                    <div className="flex flex-col items-center gap-1">
                      <motion.div
                        className="w-6 bg-blue-200 rounded-sm"
                        initial={{ height: 0 }}
                        animate={inView3 ? { height: 40 } : {}}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      />
                      <span className="text-[8px] text-gray-400">Jun</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <motion.div
                        className="w-6 bg-blue-300 rounded-sm"
                        initial={{ height: 0 }}
                        animate={inView3 ? { height: 56 } : {}}
                        transition={{ delay: 1, duration: 0.5 }}
                      />
                      <span className="text-[8px] text-gray-400">Jul</span>
                    </div>
                  </div>
                </motion.div>

                {/* Small line chart - right */}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm p-3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView3 ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="space-y-1 text-[8px] text-gray-400 mb-2">
                    <p>$60K</p>
                    <p>$40K</p>
                    <p>$20K</p>
                  </div>
                  <svg className="w-16 h-12" viewBox="0 0 60 40">
                    <motion.path
                      d="M0 35 Q15 30 30 20 T60 10"
                      fill="none"
                      stroke="#14b8a6"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={inView3 ? { pathLength: 1 } : {}}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </svg>
                  <p className="text-[8px] text-gray-400 text-right">Apr</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 60 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.p
              className="text-[#10b981] font-semibold text-base mb-4"
              initial={{ opacity: 0 }}
              animate={inView3 ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Analytics & Reporting
            </motion.p>
            <motion.h2
              className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight mb-6 font-extralight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              Understand Your Business Like Never Before
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              Get real-time insights into sales performance, customer behavior, and business growth.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
