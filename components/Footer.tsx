"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export function FooterSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.05 },
    }),
  }

  return (
    <motion.footer
      ref={ref}
      className="px-2 pb-2 pt-2"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Footer container with rounded corners and green top border */}
      <div className="bg-[#1a2e35] rounded-3xl relative overflow-hidden">
        {/* Mint green top border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7dd3c0] via-[#a5e6d0] to-[#7dd3c0]"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Diagonal geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="footerDiagonals" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0 50 L50 0 M50 100 L100 50"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-white"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerDiagonals)" />
          </svg>
        </div>

        {/* Large geometric shapes */}
        <motion.div
          className="absolute left-0 top-1/4 w-64 h-64 border border-white/10 rotate-45 -translate-x-1/2"
          animate={{ rotate: [45, 50, 45] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 top-1/2 w-48 h-48 border border-white/10 rotate-12"
          animate={{ rotate: [12, 18, 12] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
        />

        <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-16 pb-8">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
            {/* Left side - Logo and description */}
            <motion.div
              className="max-w-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Logo */}
              <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
                <div className="w-8 h-8 relative">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="white" strokeWidth="2" fill="none" />
                    <path
                      d="M16 8L22 11.5V18.5L16 22L10 18.5V11.5L16 8Z"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
                <span className="text-white text-xl font-semibold">Custo</span>
              </motion.div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Simplify customer relationships and
                <br />
                scale your business with Custo.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Link
                      href="#"
                      className="w-9 h-9 rounded-full bg-[#2a3f47] flex items-center justify-center hover:bg-[#3a4f57] transition-colors"
                    >
                      <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                        <Icon className="w-4 h-4 text-white" />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Link columns */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3">
                  {["Benefits", "Features", "Testimonials", "FAQs"].map((link, i) => (
                    <motion.li
                      key={link}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                        <motion.span whileHover={{ x: 5 }} className="inline-block">
                          {link}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Main Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <h4 className="text-white font-semibold mb-4">Main Pages</h4>
                <ul className="space-y-3">
                  {["Home", "About", "Pricing", "Contact"].map((link, i) => (
                    <motion.li
                      key={link}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                        <motion.span whileHover={{ x: 5 }} className="inline-block">
                          {link}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Other Pages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-white font-semibold mb-4">Other Pages</h4>
                <ul className="space-y-3">
                  {["Blog", "Blog Details", "Error 404", "Licences", "Changelog", "Style Guide"].map((link, i) => (
                    <motion.li
                      key={link}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    >
                      <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                        <motion.span whileHover={{ x: 5 }} className="inline-block">
                          {link}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom bar */}
          <motion.div
            className="mt-12 pt-6 border-t border-gray-700"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">2025 © Custo</p>

              {/* Right links */}
              <div className="flex items-center gap-6 text-sm">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 underline underline-offset-2"
                  >
                    Get this template
                    <motion.svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ x: 2, y: -2 }}
                    >
                      <path
                        d="M3 9L9 3M9 3H4M9 3V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
                <span className="text-gray-500">Or want to collaborate?</span>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 underline underline-offset-2"
                  >
                    Let's Connect
                    <motion.svg
                      className="w-3 h-3"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ x: 2, y: -2 }}
                    >
                      <path
                        d="M3 9L9 3M9 3H4M9 3V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
