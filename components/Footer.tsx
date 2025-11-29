import Link from "next/link"
import { Linkedin, Facebook, Instagram, Youtube } from "lucide-react"

export function FooterSection() {
    return (
        <footer className="px-4 md:px-8 pb-4">
            {/* Footer container with rounded corners and green top border */}
            <div className="bg-[#1a2e35] rounded-t-[2rem] relative overflow-hidden">


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
                <div className="absolute left-0 top-1/4 w-64 h-64 border border-white/10 rotate-45 -translate-x-1/2" />
                <div className="absolute right-1/4 top-1/2 w-48 h-48 border border-white/10 rotate-12" />

                <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-16 pb-8">
                    {/* Main footer content */}
                    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
                        {/* Left side - Logo and description */}
                        <div className="max-w-sm">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                                    </svg>
                                </div>
                                <span className="text-xl font-semibold text-[#fcf9f9]">Custo</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Simplify customer relationships and
                                <br />
                                scale your business with Custo.
                            </p>

                            {/* Social icons */}
                            <div className="flex items-center gap-3">
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-[#2a3f47] flex items-center justify-center hover:bg-[#3a4f57] transition-colors"
                                >
                                    <Linkedin className="w-4 h-4 text-white" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-[#2a3f47] flex items-center justify-center hover:bg-[#3a4f57] transition-colors"
                                >
                                    <Facebook className="w-4 h-4 text-white" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-[#2a3f47] flex items-center justify-center hover:bg-[#3a4f57] transition-colors"
                                >
                                    <Instagram className="w-4 h-4 text-white" />
                                </Link>
                                <Link
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-[#2a3f47] flex items-center justify-center hover:bg-[#3a4f57] transition-colors"
                                >
                                    <Youtube className="w-4 h-4 text-white" />
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Link columns */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24">
                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Benefits
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Testimonials
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            FAQs
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Main Pages */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Main Pages</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Other Pages */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Other Pages</h4>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Blog Details
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Error 404
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Licences
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Changelog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                                            Style Guide
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-6 border-t border-gray-700">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            {/* Copyright */}
                            <p className="text-gray-400 text-sm">2025 © Custo</p>

                            {/* Right links */}
                            <div className="flex items-center gap-6 text-sm">
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 underline underline-offset-2"
                                >
                                    Get this template
                                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 9L9 3M9 3H4M9 3V8"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                                <span className="text-gray-500">Or want to collaborate?</span>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 underline underline-offset-2"
                                >
                                    Let's Connect
                                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3 9L9 3M9 3H4M9 3V8"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
