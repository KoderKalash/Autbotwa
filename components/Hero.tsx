import type React from "react"
import {
  ArrowRight,
  Search,
  Bell,
  Smile,
  Star,
  Building2,
  Calendar,
  DollarSign,
  User,
  LayoutGrid,
  FileText,
  BarChart3,
  Users,
  Settings,
  ChevronDown,
  Plus,
} from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#e8f5e9]">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 40px,
            rgba(180, 220, 180, 0.5) 40px,
            rgba(180, 220, 180, 0.5) 42px
          )`,
          }}
        />
        {/* Curved lines */}
        <svg
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px]"
          viewBox="0 0 1200 400"
          fill="none"
        >
          <path
            d="M300 400 Q400 100 600 100 Q800 100 900 400"
            stroke="rgba(180, 220, 180, 0.6)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M250 400 Q400 50 600 50 Q800 50 950 400"
            stroke="rgba(180, 220, 180, 0.6)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M200 400 Q400 0 600 0 Q800 0 1000 400"
            stroke="rgba(180, 220, 180, 0.6)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-[#1a1a1a]">Custo</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[15px] text-[#1a1a1a] hover:text-[#333] transition-colors">
              About
            </a>
            <a href="#" className="text-[15px] text-[#1a1a1a] hover:text-[#333] transition-colors">
              Pricing
            </a>
            <a href="#" className="text-[15px] text-[#1a1a1a] hover:text-[#333] transition-colors">
              Blog
            </a>
          </div>
        </div>

        {/* Nav Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden sm:block px-5 py-2.5 text-[14px] font-medium text-[#1a1a1a] border border-[#d0d0d0] rounded-full bg-white hover:bg-gray-50 transition-colors">
            Contact Sales
          </button>
          <button className="px-5 py-2.5 text-[14px] font-medium text-white bg-[#1a1a1a] rounded-full hover:bg-[#333] transition-colors">
            Start for Free
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-12 md:pt-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-[#e5e5e5] mb-8">
          <span className="text-[14px] text-[#1a1a1a]">Introducing Custo</span>
          <ArrowRight className="w-4 h-4 text-[#1a1a1a]" />
        </div>

        {/* Main Heading */}
        <h1 className="max-w-3xl text-[40px] sm:text-[48px] md:text-[56px] leading-[1.1] font-serif font-normal text-[#1a1a1a] mb-6 text-balance">
          Powerful CRM Solutions <span className="block">for Growing Businesses</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-[16px] md:text-[17px] leading-relaxed text-[#5a5a5a] mb-8">
          Streamline your customer relationships with an intuitive CRM platform.
          <span className="block">Optimize workflows, and drive business growth with ease.</span>
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3.5 text-[15px] font-medium text-white bg-[#1a1a1a] rounded-full hover:bg-[#333] transition-colors mb-12">
          Start for Free
        </button>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-10 w-full max-w-2xl">
          {/* Trust Badge */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-[#ff6b6b] border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#4ecdc4] border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#45b7d1] border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
            </div>
            <div className="text-left">
              <p className="text-[14px] text-[#4a4a4a]">Trusted by 3K+ companies</p>
              <p className="text-[14px] text-[#4a4a4a]">around the world</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="text-[42px] font-light text-[#1a1a1a]">4.9</span>
            <div className="text-left">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                ))}
              </div>
              <p className="text-[13px] text-[#5a5a5a]">Based on 200+</p>
              <p className="text-[13px] text-[#5a5a5a]">reviews</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-t-2xl shadow-2xl border border-[#e5e5e5] overflow-hidden">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#eee]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
                    <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" />
                    <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[15px] font-medium text-[#1a1a1a]">Deals</span>
                  <ChevronDown className="w-4 h-4 text-[#666]" />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#f5f5f5] rounded-lg">
                  <Search className="w-4 h-4 text-[#999]" />
                  <span className="text-[13px] text-[#999]">Search</span>
                </div>
                <Bell className="w-5 h-5 text-[#666]" />
                <Smile className="w-5 h-5 text-[#666]" />
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col gap-1 p-3 border-r border-[#eee] w-14">
                <SidebarIcon icon={<LayoutGrid className="w-5 h-5" />} active />
                <SidebarIcon icon={<FileText className="w-5 h-5" />} />
                <SidebarIcon icon={<BarChart3 className="w-5 h-5" />} />
                <SidebarIcon icon={<Users className="w-5 h-5" />} />
                <SidebarIcon icon={<Settings className="w-5 h-5" />} />
              </div>

              {/* Kanban Board */}
              <div className="flex-1 overflow-x-auto">
                <div className="flex gap-0 min-w-max">
                  <KanbanColumn
                    title="Lead"
                    count={212}
                    color="#ef4444"
                    cards={[
                      {
                        company: "Alpha Tech",
                        person: "John Smith",
                        tag: "Starter",
                        tagColor: "#fef3c7",
                        tagText: "#b45309",
                        amount: "$25,350",
                        date: "Feb 10, 2025",
                      },
                      {
                        company: "Beta Solutions",
                        person: "Sarah Johnson",
                        tag: "Basic",
                        tagColor: "#fee2e2",
                        tagText: "#dc2626",
                        amount: "$50,720",
                        date: "",
                      },
                    ]}
                  />
                  <KanbanColumn
                    title="Contacted"
                    count={347}
                    color="#f97316"
                    cards={[
                      {
                        company: "Delta Innovations",
                        person: "Emily Davis",
                        tag: "Business",
                        tagColor: "#dcfce7",
                        tagText: "#16a34a",
                        amount: "$35,960",
                        date: "Feb 12, 2025",
                      },
                      {
                        company: "Epsilon Ltd",
                        person: "David Miller",
                        tag: "Starter",
                        tagColor: "#fef3c7",
                        tagText: "#b45309",
                        amount: "$15,640",
                        date: "",
                      },
                    ]}
                  />
                  <KanbanColumn
                    title="Qualification"
                    count={62}
                    color="#eab308"
                    cards={[
                      {
                        company: "Theta Enterprises",
                        person: "Daniel Wilson",
                        tag: "Premium",
                        tagColor: "#dbeafe",
                        tagText: "#2563eb",
                        amount: "$53,130",
                        date: "Feb 03, 2025",
                      },
                      {
                        company: "Iota Dynamics",
                        person: "Laura Martinez",
                        tag: "Business",
                        tagColor: "#dcfce7",
                        tagText: "#16a34a",
                        amount: "$45,970",
                        date: "",
                      },
                    ]}
                  />
                  <KanbanColumn
                    title="Evaluation"
                    count={44}
                    color="#22c55e"
                    cards={[
                      {
                        company: "Nova Technologies",
                        person: "Ethan Carter",
                        tag: "Premium",
                        tagColor: "#dbeafe",
                        tagText: "#2563eb",
                        amount: "$19,275",
                        date: "",
                        faded: true,
                      },
                    ]}
                  />
                  <KanbanColumn
                    title="Negotiation"
                    count={24}
                    color="#3b82f6"
                    cards={[
                      {
                        company: "Pinnacle Syste",
                        person: "Ava Mitchell",
                        tag: "Basic",
                        tagColor: "#fee2e2",
                        tagText: "#dc2626",
                        amount: "$59,530",
                        date: "",
                        faded: true,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-20 right-20 hidden lg:block">
              <div className="bg-white rounded-xl shadow-xl border border-[#e5e5e5] p-4 w-48">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-4 h-4 text-[#666]" />
                  <span className="text-[13px] font-medium text-[#1a1a1a]">Lambda Solutions</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-[#666]" />
                  <span className="text-[13px] text-[#666]">Olivia Taylor</span>
                </div>
                <div className="mb-2">
                  <span className="text-[11px] px-2 py-0.5 bg-[#dcfce7] text-[#16a34a] rounded">Basic</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="w-4 h-4 text-[#666]" />
                  <span className="text-[13px] text-[#1a1a1a]">$60,910</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#666]" />
                  <span className="text-[13px] text-[#666]">Feb 07, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SidebarIcon({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <div
      className={`p-2 rounded-lg cursor-pointer transition-colors ${active ? "bg-[#f0f0f0]" : "hover:bg-[#f5f5f5]"}`}
    >
      <div className={active ? "text-[#1a1a1a]" : "text-[#999]"}>{icon}</div>
    </div>
  )
}

interface CardData {
  company: string
  person: string
  tag: string
  tagColor: string
  tagText: string
  amount: string
  date: string
  faded?: boolean
}

function KanbanColumn({
  title,
  count,
  color,
  cards,
}: { title: string; count: number; color: string; cards: CardData[] }) {
  return (
    <div className="w-48 flex-shrink-0 border-r border-[#eee] last:border-r-0">
      {/* Column Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#eee]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-[13px] font-medium text-[#1a1a1a]">{title}</span>
          <span className="text-[12px] text-[#999] bg-[#f5f5f5] px-1.5 py-0.5 rounded">{count}</span>
        </div>
        <Plus className="w-4 h-4 text-[#999]" />
      </div>

      {/* Cards */}
      <div className="p-2 space-y-2">
        {cards.map((card, i) => (
          <div key={i} className={`bg-white border border-[#eee] rounded-lg p-3 ${card.faded ? "opacity-60" : ""}`}>
            <div className="flex items-center gap-2 mb-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#666]" />
              <span className="text-[12px] font-medium text-[#1a1a1a] truncate">{card.company}</span>
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <User className="w-3.5 h-3.5 text-[#666]" />
              <span className="text-[12px] text-[#666]">{card.person}</span>
            </div>
            <div className="mb-1.5">
              <span
                className="text-[10px] px-1.5 py-0.5 rounded"
                style={{ backgroundColor: card.tagColor, color: card.tagText }}
              >
                {card.tag}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="w-3.5 h-3.5 text-[#666]" />
              <span className="text-[12px] text-[#1a1a1a]">{card.amount}</span>
            </div>
            {card.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#666]" />
                <span className="text-[12px] text-[#666]">{card.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
