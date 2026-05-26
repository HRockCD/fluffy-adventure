import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  Building2,
  Globe,
  Palette,
  Megaphone,
  Camera,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Star,
  MonitorSmartphone,
  Wrench,
  Users,
  Mountain,
  RadioTower,
  Flame,
  Ambulance,
  Search,
  Server,
  Settings,
  FileText,
  BadgeCheck,
  Clock,
  ChevronDown,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const businessEmail = "Garrett.beck29@gmail.com";
  const businessPhone = "704-433-3825";

  const navItems = [
    "Services",
    "About",
    "Portfolio",
    "Packages",
    "Process",
    "FAQ",
    "Contact",
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const services = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Website Design",
      text: "Professional, mobile-friendly websites for public safety agencies, local businesses, service companies, and community organizations.",
      bullets: ["Modern layouts", "Mobile responsive", "Contact forms", "Portfolio galleries"],
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Branding & Logos",
      text: "Clean logos, brand colors, typography, social graphics, and visual identity systems that make your business look established.",
      bullets: ["Logo concepts", "Brand colors", "Social media kits", "Business identity"],
    },
    {
      icon: <Megaphone className="h-7 w-7" />,
      title: "Digital Media",
      text: "Flyers, announcements, social posts, launch graphics, promotional content, and marketing visuals built to get attention.",
      bullets: ["Flyers", "Social posts", "Promos", "Announcements"],
    },
    {
      icon: <Camera className="h-7 w-7" />,
      title: "Creative Projects",
      text: "Custom design work for the ideas that do not fit in a box — from public safety concepts to local business materials.",
      bullets: ["Custom graphics", "Recruitment content", "Event media", "Design support"],
    },
    {
      icon: <Server className="h-7 w-7" />,
      title: "Hosting & Launch Setup",
      text: "Domain connection, Vercel deployment, launch support, basic SEO setup, and website publishing assistance.",
      bullets: ["Vercel setup", "Domain connection", "SSL setup", "Launch support"],
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Maintenance & Updates",
      text: "Ongoing website updates, content changes, photo swaps, seasonal updates, and general support after launch.",
      bullets: ["Text edits", "Image updates", "New sections", "Support"],
    },
  ];

  const audiences = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Public Safety",
      text: "911 centers, fire departments, EMS, law enforcement, emergency management, and responder-focused organizations.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Small Businesses",
      text: "Detailers, contractors, towing companies, local service providers, restaurants, shops, and growing brands.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Organizations",
      text: "Nonprofits, churches, community groups, civic organizations, events, and hometown projects.",
    },
  ];

  const process = [
    {
      title: "Discover",
      text: "We talk through your goals, audience, services, style, timeline, and what success looks like.",
    },
    {
      title: "Plan",
      text: "We outline your pages, sections, brand direction, content needs, and project scope before building.",
    },
    {
      title: "Design",
      text: "Your site or creative project is built with a clean layout, strong visuals, and mobile-friendly structure.",
    },
    {
      title: "Refine",
      text: "You review the project, request changes, and we polish everything before launch or final delivery.",
    },
    {
      title: "Launch",
      text: "We publish the website, connect the domain, deliver graphics, and support your next steps.",
    },
  ];

  const packages = [
    {
      name: "Portfolio Launch Offer",
      price: "Select Projects",
      description: "For early local businesses and organizations while High Rock expands its portfolio.",
      features: ["Complimentary or discounted website build", "Mobile-friendly design", "Basic SEO setup", "Contact form", "Client responsible for domain/hosting/maintenance"],
      highlight: false,
    },
    {
      name: "Starter Website",
      price: "$500+",
      description: "A clean, professional website for local businesses that need a strong online presence.",
      features: ["3–5 page website", "Mobile responsive", "Services section", "Gallery/portfolio", "Contact form", "Launch assistance"],
      highlight: true,
    },
    {
      name: "Brand + Website",
      price: "$1,000+",
      description: "A stronger package for businesses that need both a website and a polished brand presence.",
      features: ["Website design", "Logo refresh or concept", "Brand colors", "Social media graphics", "Flyer/launch graphic", "Basic SEO"],
      highlight: false,
    },
  ];

  const portfolio = [
    {
      title: "911 Website Concept",
      tag: "Public Safety",
      icon: <RadioTower className="h-10 w-10" />,
      text: "A modern public safety website concept focused on trust, communication, recruitment, and community presence.",
    },
    {
      title: "Detailing Business Website",
      tag: "Small Business",
      icon: <Sparkles className="h-10 w-10" />,
      text: "A professional site for a local detailing company featuring services, gallery, quote requests, and strong branding.",
    },
    {
      title: "High Rock Brand Identity",
      tag: "Branding",
      icon: <Mountain className="h-10 w-10" />,
      text: "A rugged, clean identity inspired by High Rock Lake, local business, custom design, and practical creative solutions.",
    },
  ];

  const faqs = [
    {
      q: "Do you only build websites?",
      a: "No. Websites are one major service, but High Rock Custom Designs also creates branding, logos, flyers, social media graphics, digital media, launch materials, and custom creative projects.",
    },
    {
      q: "Who do you mainly serve?",
      a: "The main focus is public safety, first responders, small businesses, local organizations, and community-focused brands. The goal is clean, trustworthy design that works in the real world.",
    },
    {
      q: "Can you help with domains and publishing?",
      a: "Yes. High Rock can help connect domains, deploy websites through platforms like Vercel, and provide launch support. Domain registration and ongoing hosting/maintenance can be handled separately.",
    },
    {
      q: "Do you offer ongoing updates?",
      a: "Yes. Maintenance plans can include text changes, photo swaps, new sections, service updates, seasonal changes, and general website support after launch.",
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 text-left">
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-slate-100 via-slate-400 to-blue-900 text-lg font-black text-slate-950 shadow-lg shadow-blue-500/10">
              HR
              <div className="absolute bottom-1 h-1 w-8 rounded-full bg-slate-950/40" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-100">High Rock</p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Custom Designs</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className="text-sm font-semibold text-slate-300 transition hover:text-white">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${businessPhone}`} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10">
              Call Now
            </a>
            <button onClick={() => scrollToSection("contact")} className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Start a Project
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="text-left text-sm font-semibold text-slate-300">
                  {item}
                </button>
              ))}
              <a href={`tel:${businessPhone}`} className="rounded-full border border-white/10 px-5 py-3 text-center text-sm font-bold text-white">
                Call Now
              </a>
              <button onClick={() => scrollToSection("contact")} className="rounded-full bg-blue-500 px-5 py-3 text-sm font-black text-white">
                Start a Project
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
                <BadgeCheck className="h-4 w-4" />
                Public Safety Inspired • Small Business Focused • NC Built
              </div>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Rugged, clean digital solutions built for real-world organizations.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                High Rock Custom Designs creates professional websites, branding, digital media, and custom design solutions for first responders, small businesses, and local communities.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button onClick={() => scrollToSection("contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-400">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => scrollToSection("portfolio")} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10">
                  View Work <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["Mobile Friendly", "Local Focused", "Built to Launch"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 p-7">
                  <div className="relative min-h-[430px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950 p-8">
                    <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-blue-400/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(135deg,rgba(148,163,184,0.18)_25%,transparent_25%,transparent_50%,rgba(148,163,184,0.18)_50%,rgba(148,163,184,0.18)_75%,transparent_75%,transparent)] bg-[length:28px_28px] opacity-20" />
                    <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between text-center">
                      <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/20 bg-gradient-to-br from-slate-100 via-slate-400 to-blue-950 text-6xl font-black text-slate-950 shadow-2xl shadow-blue-500/20">
                        HR
                      </div>
                      <div>
                        <div className="mx-auto mb-6 flex max-w-xs items-center justify-center gap-2 text-blue-300">
                          <Mountain className="h-5 w-5" />
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-blue-300" />
                          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-blue-300 to-blue-300" />
                          <Mountain className="h-5 w-5" />
                        </div>
                        <p className="text-4xl font-black uppercase tracking-[0.18em]">High Rock</p>
                        <p className="mt-3 text-sm font-black uppercase tracking-[0.35em] text-blue-300">Custom Designs</p>
                        <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-slate-300">
                          Websites • Branding • Digital Media • Creative Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/50 py-6">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 text-center sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {[
              ["Websites", "Clean, fast, mobile-ready"],
              ["Branding", "Logos, colors, identity"],
              ["Digital Media", "Flyers, posts, promos"],
              ["Support", "Updates, launch, maintenance"],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white/[0.03] p-5">
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Services</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Everything your organization needs to look professional online.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              From your first website to a full digital presence, High Rock creates practical design work that is clean, functional, and built around your audience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                <div className="mt-5 grid gap-2">
                  {service.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 text-blue-300" />
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Who We Serve</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Built for the people who keep communities moving.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  High Rock is designed for practical, trustworthy, community-focused brands — the kind of organizations that need to be easy to find, easy to understand, and easy to trust.
                </p>
              </div>
              <div className="grid gap-5">
                {audiences.map((item) => (
                  <div key={item.title} className="flex gap-5 rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-blue-950/60 p-8 md:p-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white/[0.05] p-5">
                  <Shield className="h-8 w-8 text-blue-300" />
                  <p className="mt-4 text-lg font-black">Public Safety Mindset</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Built with professionalism, clarity, and trust in mind.</p>
                </div>
                <div className="rounded-3xl bg-white/[0.05] p-5">
                  <MonitorSmartphone className="h-8 w-8 text-blue-300" />
                  <p className="mt-4 text-lg font-black">Mobile First</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Designed to look sharp on phones, tablets, and desktops.</p>
                </div>
                <div className="rounded-3xl bg-white/[0.05] p-5">
                  <Flame className="h-8 w-8 text-blue-300" />
                  <p className="mt-4 text-lg font-black">Local Energy</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Inspired by North Carolina communities and local business grit.</p>
                </div>
                <div className="rounded-3xl bg-white/[0.05] p-5">
                  <Ambulance className="h-8 w-8 text-blue-300" />
                  <p className="mt-4 text-lg font-black">Real World Use</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Focused on practical designs that help people take action.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">About High Rock</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">A creative company with an operational backbone.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                High Rock Custom Designs is based around a simple idea: businesses, responders, and local organizations deserve professional digital tools that look good, work well, and make sense.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                With a background in 911, public safety, emergency services, and technology, High Rock brings a different perspective to design — one focused on trust, clarity, reliability, and service.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Web Design", "Branding", "Public Safety", "Local Business", "Digital Media", "NC Based"].map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Portfolio</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Work being built with purpose.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  These early projects represent the direction of High Rock: clean websites, practical design, local impact, and professional presentation.
                </p>
              </div>
              <button onClick={() => scrollToSection("contact")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10">
                Discuss a Project
              </button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {portfolio.map((project) => (
                <div key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
                  <div className="flex h-56 items-center justify-center bg-gradient-to-br from-slate-800 via-slate-950 to-blue-950 text-blue-300">
                    <div className="transition group-hover:scale-110">{project.icon}</div>
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-blue-300">{project.tag}</span>
                    <h3 className="mt-4 text-xl font-black">{project.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{project.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Packages</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Straightforward options to get started.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Pricing can vary by project size, features, content, and ongoing support needs. These packages provide a starting point.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[2rem] border p-7 ${pkg.highlight ? "border-blue-400 bg-blue-500/10 shadow-2xl shadow-blue-500/10" : "border-white/10 bg-white/[0.04]"}`}>
                {pkg.highlight && <div className="mb-5 inline-flex rounded-full bg-blue-500 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">Popular</div>}
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className="mt-3 text-4xl font-black text-blue-300">{pkg.price}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{pkg.description}</p>
                <div className="mt-6 grid gap-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Process</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">A clean process from idea to launch.</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {process.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-black">{index + 1}</div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/70 via-slate-950 to-slate-900 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Why It Matters</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Your online presence should build trust before the first conversation.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Look more professional",
                  "Make services easy to understand",
                  "Help people contact you faster",
                  "Create stronger first impressions",
                  "Support recruiting and outreach",
                  "Build credibility in your community",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.05] p-4">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">FAQ</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Common questions.</h2>
            </div>
            <div className="mt-12 grid gap-4">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="rounded-3xl border border-white/10 bg-slate-950/70">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                    <span className="text-lg font-black">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-blue-300 transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="px-6 pb-6 text-sm leading-7 text-slate-300">{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 md:p-12">
            <div className="flex gap-1 text-blue-300">
              {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mt-6 max-w-4xl text-2xl font-black leading-10 text-white">
              “Professional design should do more than look good. It should help people trust you, understand you, and take the next step.”
            </p>
            <p className="mt-5 text-slate-400">High Rock Custom Designs</p>
          </div>
        </section>

        <section id="contact" className="bg-slate-900/60 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Ready to build something that looks professional?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Whether you need a website, logo, flyer, social media graphic, or a custom creative project, send a message and let’s talk through the best option.
              </p>
              <div className="mt-8 grid gap-4">
                <a href={`mailto:${businessEmail}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300 transition hover:bg-white/[0.06]">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <span>{businessEmail}</span>
                </a>
                <a href={`tel:${businessPhone}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300 transition hover:bg-white/[0.06]">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <span>{businessPhone}</span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  <span>North Carolina Based</span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-slate-300">
                  <Clock className="h-5 w-5 text-blue-300" />
                  <span>Evening and weekend project consultations available</span>
                </div>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 md:p-8" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-300" />
                <h3 className="text-2xl font-black">Project Inquiry</h3>
              </div>
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Name</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Business / Organization</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400" placeholder="Business name" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Email</label>
                    <input type="email" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">Phone</label>
                    <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400" placeholder="Phone number" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-200">What do you need?</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-400">
                    <option>Website Design</option>
                    <option>Logo / Branding</option>
                    <option>Flyer / Graphic Design</option>
                    <option>Social Media Content</option>
                    <option>Hosting / Website Updates</option>
                    <option>Custom Creative Project</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-200">Project Details</label>
                  <textarea className="min-h-36 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400" placeholder="Tell me what you are trying to build, who it is for, and what you want it to accomplish..." />
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-400">
                  Send Project Inquiry <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs leading-5 text-slate-400">
                  This form is ready visually. Before launch, connect it to Formspree, Netlify Forms, EmailJS, or a backend form service so submissions go to your email.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 via-slate-400 to-blue-900 text-lg font-black text-slate-950">HR</div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-100">High Rock</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Custom Designs</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
                Professional websites, branding, digital media, and custom creative solutions for first responders, small businesses, and local organizations.
              </p>
            </div>
            <div>
              <p className="font-black text-white">Services</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <span>Website Design</span>
                <span>Logo & Branding</span>
                <span>Digital Media</span>
                <span>Hosting & Updates</span>
              </div>
            </div>
            <div>
              <p className="font-black text-white">Contact</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <a href={`mailto:${businessEmail}`} className="hover:text-white">{businessEmail}</a>
                <a href={`tel:${businessPhone}`} className="hover:text-white">{businessPhone}</a>
                <span>North Carolina Based</span>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} High Rock Custom Designs. All rights reserved.</p>
            <p>Built for local impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
