export function FeaturesListSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature 1: Email Integration */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
          {/* Left Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-[#e8f5f0] to-[#d4ede4] rounded-3xl p-8 md:p-12 overflow-hidden">
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
                <div className="absolute top-4 left-8 bg-white rounded-xl shadow-sm px-4 py-3 flex items-center gap-3">
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
                </div>

                {/* Center Hub */}
                <div className="relative">
                  {/* Dashed lines */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ width: "200px", height: "200px", left: "-60px", top: "-60px" }}
                  >
                    <line x1="100" y1="30" x2="100" y2="70" stroke="#ccc" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="100" y1="130" x2="100" y2="170" stroke="#ccc" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="30" y1="100" x2="70" y2="100" stroke="#ccc" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="130" y1="100" x2="170" y2="100" stroke="#ccc" strokeWidth="1" strokeDasharray="4 4" />
                    {/* Orange dots */}
                    <circle cx="100" cy="50" r="4" fill="#f97316" />
                    <circle cx="100" cy="150" r="4" fill="#f97316" />
                  </svg>

                  <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                    <svg
                      className="w-10 h-10 text-gray-800"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                </div>

                {/* Lambda Solutions Card - Bottom */}
                <div className="absolute bottom-4 left-8 bg-white rounded-xl shadow-sm px-4 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">Lambda Solutions</p>
                    <p className="text-xs text-gray-500">contact@lambda.com</p>
                  </div>
                </div>

                {/* Side connectors */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <div className="w-8 h-1 bg-[#ccc] rounded-full opacity-50" />
                  <div className="w-4 h-1 bg-[#ccc] rounded-full opacity-50" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-1">
                  <div className="w-4 h-1 bg-[#ccc] rounded-full opacity-50" />
                  <div className="w-8 h-1 bg-[#ccc] rounded-full opacity-50" />
                  <div className="w-12 h-8 bg-white/50 rounded-lg ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#10b981] font-semibold text-base mb-4">Email Integration</p>
            <h2 className="font-serif text-4xl md:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Manage Emails Without Leaving Your CRM
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sync with your email to send, receive, and track conversations directly from the CRM.
            </p>
          </div>
        </div>

        {/* Feature 2: Multi-User Collaboration */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
          {/* Left Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-[#e8f5f0] to-[#d4ede4] rounded-3xl p-8 md:p-12 overflow-hidden">
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
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-sm px-4 py-3 flex items-center gap-3 border border-gray-200">
                    <div className="w-5 h-5 border-2 border-gray-300 rounded" />
                    <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">H</span>
                    </div>
                    <span className="text-gray-900 font-medium">Delta Innovations</span>
                    <span className="text-gray-900">|</span>
                  </div>
                  {/* Sabrina cursor */}
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 3.21V20.8l5.74-5.79h8.26L5.5 3.21z" />
                    </svg>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded ml-1">Sabrina</span>
                  </div>
                </div>

                {/* Category Dropdown */}
                <div className="bg-white rounded-xl shadow-lg p-4 w-full max-w-[240px]">
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
                    <div className="px-3 py-1.5 rounded border border-blue-200 bg-blue-50 text-blue-600 text-sm w-fit">
                      Technology
                    </div>
                    <div className="px-3 py-1.5 rounded border border-blue-200 bg-blue-50 text-blue-600 text-sm w-fit">
                      Finance
                    </div>
                    <div className="relative px-3 py-1.5 rounded border border-gray-200 bg-gray-50 text-gray-600 text-sm w-fit">
                      Marketing
                      {/* Jessie cursor */}
                      <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex items-center">
                        <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.5 3.21V20.8l5.74-5.79h8.26L5.5 3.21z" />
                        </svg>
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded ml-1">Jessie</span>
                      </div>
                    </div>
                    <div className="px-3 py-1.5 rounded border border-orange-200 bg-orange-50 text-orange-600 text-sm w-fit">
                      Logistics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#10b981] font-semibold text-base mb-4">Multi-User Collaboration</p>
            <h2 className="font-serif text-4xl md:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Empower Your Team with Real-Time Sync
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Collaborate effortlessly with your team by sharing information, notes, and real-time updates.
            </p>
          </div>
        </div>

        {/* Feature 3: Analytics & Reporting */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Illustration */}
          <div className="w-full lg:w-1/2">
            <div className="relative bg-gradient-to-br from-[#e8f5f0] to-[#d4ede4] rounded-3xl p-8 md:p-12 overflow-hidden">
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
                {/* Small bar chart - left */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm p-3">
                  <p className="text-[10px] text-gray-500 mb-2">$15,750</p>
                  <div className="flex items-end gap-2 h-16">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-10 bg-blue-200 rounded-sm" />
                      <span className="text-[8px] text-gray-400">Jun</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-6 h-14 bg-blue-300 rounded-sm" />
                      <span className="text-[8px] text-gray-400">Jul</span>
                    </div>
                  </div>
                </div>

                {/* Main Revenue Summary Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 w-[280px]">
                  <h3 className="text-gray-900 font-semibold text-sm mb-4">Revenue Summary</h3>

                  {/* Donut Chart */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                      {/* Teal segment - New Customers */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="12"
                        strokeDasharray="125.6 251.2"
                        strokeDashoffset="0"
                      />
                      {/* Dark segment - Existing Customers */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#1e3a5f"
                        strokeWidth="12"
                        strokeDasharray="87.9 251.2"
                        strokeDashoffset="-125.6"
                      />
                      {/* Light segment - Upsells */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#d1d5db"
                        strokeWidth="12"
                        strokeDasharray="37.7 251.2"
                        strokeDashoffset="-213.5"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">$98,752</span>
                    </div>
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
                </div>

                {/* Small line chart - right */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm p-3">
                  <div className="space-y-1 text-[8px] text-gray-400 mb-2">
                    <p>$60K</p>
                    <p>$40K</p>
                    <p>$20K</p>
                  </div>
                  <svg className="w-16 h-12" viewBox="0 0 60 40">
                    <path d="M0 35 Q15 30 30 20 T60 10" fill="none" stroke="#14b8a6" strokeWidth="2" />
                  </svg>
                  <p className="text-[8px] text-gray-400 text-right">Apr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#10b981] font-semibold text-base mb-4">Analytics & Reporting</p>
            <h2 className="font-serif text-4xl md:text-5xl font-extralight text-gray-900 leading-tight mb-6">
              Understand Your Business Like Never Before
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get real-time insights into sales performance, customer behavior, and business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
