import { CheckCircle, Calendar } from "lucide-react"

export function StatsFeaturesSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      {/* Stats Section */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 text-center">
          {/* Stat 1 */}
          <div>
            <p className="text-[#10b981] text-[36px] md:text-[42px] font-semibold mb-2">10K+</p>
            <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1">Users Worldwide</p>
            <p className="text-[#888] text-[13px] leading-relaxed max-w-[200px] mx-auto">
              Businesses trust Custo to streamline sales and manage customer relationships.
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-[#10b981] text-[36px] md:text-[42px] font-semibold mb-2">30%</p>
            <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1">Faster Sales Cycles</p>
            <p className="text-[#888] text-[13px] leading-relaxed max-w-[200px] mx-auto">
              Optimize your sales process and close deals more efficiently with automated workflows.
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-[#10b981] text-[36px] md:text-[42px] font-semibold mb-2">$1B</p>
            <p className="text-[#1a1a1a] text-[15px] font-semibold mb-1">in Deals Closed</p>
            <p className="text-[#888] text-[13px] leading-relaxed max-w-[200px] mx-auto">
              Track high-value opportunities and drive revenue growth effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[32px] font-serif font-medium text-[#1a1a1a] mb-3">
            Elevate Business Growth
          </h2>
          <p className="text-[#666] text-[15px]">
            Scale your business effortlessly with a powerful and intuitive CRM solutions.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Task Automation Card */}
          <div className="bg-[#fafafa] rounded-2xl p-6 md:p-8">
            {/* Mockup UI */}
            <div className="mb-6 space-y-3">
              {/* New Lead Added */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-[#eee]">
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
                  <div className="w-0.5 h-4 bg-[#e5e5e5]"></div>
                </div>
                <div className="flex justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#ef4444]"></div>
                </div>
              </div>

              {/* Assign Lead */}
              <div className="bg-white rounded-lg p-3 shadow-sm border border-[#eee]">
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
              </div>
            </div>

            {/* Feature Label */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#1a1a1a]">Task Automation</p>
                <p className="text-[13px] text-[#888]">Automate follow-ups to reduce manual work.</p>
              </div>
            </div>
          </div>

          {/* Meeting Organizer Card */}
          <div className="bg-[#fafafa] rounded-2xl p-6 md:p-8">
            {/* Mockup UI */}
            <div className="mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#eee]">
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
                  <button className="flex-1 bg-[#1a1a1a] text-white text-[13px] font-medium py-2 rounded-lg hover:bg-[#333] transition-colors">
                    Confirm
                  </button>
                  <button className="flex-1 bg-[#f5f5f5] text-[#1a1a1a] text-[13px] font-medium py-2 rounded-lg hover:bg-[#eee] transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Label */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#1a1a1a]">Meeting Organizer</p>
                <p className="text-[13px] text-[#888]">Manage deals at every stage faster.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
