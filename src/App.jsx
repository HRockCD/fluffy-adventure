import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle,
  ChevronDown,
  Clock,
  FileText,
  Globe,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MonitorSmartphone,
  Mountain,
  Palette,
  Phone,
  RadioTower,
  Server,
  Settings,
  Shield,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

import logoImage from "./assets/logo.png";
import frontlineImage from "./assets/frontline.png";
import site911Image from "./assets/911site.png";
import servicesImage from "./assets/Services.png";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const business = {
    name: "High Rock Custom Designs",
    phone: "704-433-3825",
    email: "highrockcustomdesign@outlook.com",
    location: "North Carolina Based",
  };

  const navItems = ["Services", "About", "Portfolio", "Packages", "Process", "FAQ", "Contact"];

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const services = useMemo(
    () => [
      {
        icon: <Globe className="h-6 w-6" />,
        title: "Website Design",
        text: "Professional websites built to help people understand who you are, what you offer, and how to contact you.",
        items: ["Mobile-friendly layouts", "Service pages", "Contact forms", "Launch support"],
      },
      {
        icon: <Palette className="h-6 w-6" />,
        title: "Logo & Branding",
        text: "Clean brand systems that give your business a consistent, professional identity across web, social, and print.",
        items: ["Logo concepts", "Brand colors", "Social profile graphics", "Transparent files"],
      },
      {
        icon: <Megaphone className="h-6 w-6" />,
        title: "Digital Media",
        text: "Flyers, announcements, launch graphics, recruitment graphics, and promotional content for your audience.",
        items: ["Flyers", "Promos", "Social posts", "Event graphics"],
      },
      {
        icon: <Server className="h-6 w-6" />,
        title: "Launch & Hosting Setup",
        text: "Help getting your site published, connected to a domain, and ready for customers to find online.",
        items: ["Vercel deployment", "Domain connection", "SSL setup", "Basic SEO"],
      },
      {
        icon: <Settings className="h-6 w-6" />,
        title: "Website Updates",
        text: "As-needed or monthly support for edits, photo swaps, new content, and small improvements after launch.",
        items: ["Text edits", "Image updates", "New sections", "Support"],
      },
      {
        icon: <FileText className="h-6 w-6" />,
        title: "Custom Creative Work",
        text: "Practical creative help for projects that do not fit in a standard package but still need a professional finish.",
        items: ["Custom graphics", "Recruitment media", "Business materials", "Design support"],
      },
    ],
    []
  );

  const audiences = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Public Safety",
      text: "911 centers, fire departments, EMS, emergency management, and responder-focused organizations.",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Small Businesses",
      text: "Detailers, contractors, towing companies, local service providers, shops, restaurants, and growing brands.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Organizations",
      text: "Community groups, churches, nonprofits, events, and hometown organizations that need a stronger digital presence.",
    },
  ];

  const projects = [
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Frontline Car Wash Website",
      tag: "Live Small Business Site",
      text: "A clean, mobile-friendly website built to help a local detailing business show services, build trust, and generate inquiries.",
    },
    {
      icon: <RadioTower className="h-10 w-10" />,
      title: "911 Website Concept",
      tag: "Public Safety Concept",
      text: "A public safety focused website concept designed around communication, recruitment, credibility, and community service.",
    },
    {
      icon: <Mountain className="h-10 w-10" />,
      title: "High Rock Brand Identity",
      tag: "Branding System",
      text: "A rugged, clean brand identity inspired by High Rock Lake, North Carolina, local grit, and professional creative work.",
    },
  ];

  const packages = [
    {
      name: "Website Only",
      price: "$750+",
      text: "A professional online home base for businesses that need to look credible and make it easy for customers to reach out.",
      features: ["3–5 page website", "Mobile-friendly design", "Contact form layout", "Basic SEO setup", "Launch support"],
    },
    {
      name: "Brand + Website",
      price: "$1,500+",
      text: "A stronger package for businesses that need both a clean website and a polished visual identity.",
      features: ["Website design", "Logo concept or refresh", "Brand color direction", "Social launch graphic", "Launch support"],
      featured: true,
    },
    {
      name: "Logo Package",
      price: "$250+",
      text: "A clean, professional starting point for new businesses, local brands, or organizations needing a visual identity.",
      features: ["Logo concepts", "Color versions", "Transparent PNG", "Social profile version", "Final file delivery"],
    },
  ];

  const process = [
    ["Discover", "We talk through your goals, audience, services, style, timeline, and what you need the project to accomplish."],
    ["Plan", "We map out pages, content, brand direction, structure, and what needs to be collected before the build starts."],
    ["Build", "Your site or design project is created with clean visuals, strong organization, and mobile-friendly structure."],
    ["Refine", "You review the work, request changes, and everything gets polished before launch or final delivery."],
    ["Launch", "The website goes live, files are delivered, and support options are available for future updates."],
  ];

  const faqs = [
    {
      q: "Do you only build websites?",
      a: "No. Websites are a core service, but High Rock Custom Designs also creates logos, branding, flyers, digital media, social graphics, launch content, and custom creative projects.",
    },
    {
      q: "Who is High Rock built for?",
      a: "High Rock is built for first responders, local businesses, service companies, community organizations, and people who need practical, professional design without the big agency feel.",
    },
    {
      q: "Can you help publish the website?",
      a: "Yes. I can help with Vercel deployment, domain connection, SSL setup, basic SEO setup, and launch support. Domain registration, hosting, and third-party services are billed separately if needed.",
    },
    {
      q: "Do you offer support after launch?",
      a: "Yes. Support can be monthly or as-needed for text changes, photo updates, new sections, service updates, and general website improvements.",
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-[#090d14] text-white antialiased">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(148,163,184,0.12),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090d14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3 text-left">
           <img
  src={logoImage}
  alt="High Rock Custom Designs"
  className="h-60 w-60 rounded-2xl object-cover"
/>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-white">High Rock</p>
              <p className="text-xs font-bold uppercase tracking-[0.19em] text-blue-300">Custom Designs</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-sm font-semibold text-slate-300 transition hover:text-white">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={`tel:${business.phone}`} className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10">
              Call Now
            </a>
            <button onClick={() => scrollTo("contact")} className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Start a Project
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#090d14] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-left text-sm font-semibold text-slate-300">
                  {item}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} className="rounded-full bg-blue-500 px-5 py-3 text-sm font-black text-white">
                Start a Project
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090d14] to-transparent" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
                <BadgeCheck className="h-4 w-4" />
                Public Safety Inspired • Small Business Focused • NC Built
              </div>
              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Professional websites and digital design for real-world businesses.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                {business.name} helps first responders, small businesses, and local organizations build a stronger online presence with clean websites, practical branding, and digital media that works.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button onClick={() => scrollTo("contact")} className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => scrollTo("portfolio")} className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:bg-white/10">
                  View Portfolio
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["Mobile-Friendly", "Local-Focused", "Built to Launch"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/50 backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-8">
                  <div className="flex min-h-[390px] flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-200">High Rock</div>
                      <Mountain className="h-7 w-7 text-blue-300" />
                    </div>
                    <div className="text-center">
                    <img
                      src={servicesImage}
                     alt="High Rock Custom Designs"
                      className="h-90 w-90 rounded-2xl object-cover"
                        />
                      <p className="mt-8 text-4xl font-black uppercase tracking-[0.18em]">High Rock</p>
                      <p className="mt-3 text-sm font-black uppercase tracking-[0.35em] text-blue-300">Custom Designs</p>
                      <div className="mx-auto mt-6 h-px max-w-xs bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                      <p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-slate-300">Websites • Branding • Digital Media • Creative Support</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-center text-xs font-bold text-slate-300">
                      <div className="rounded-2xl bg-white/[0.05] p-3">Design</div>
                      <div className="rounded-2xl bg-white/[0.05] p-3">Build</div>
                      <div className="rounded-2xl bg-white/[0.05] p-3">Launch</div>
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Services</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Built to make your business look credible.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">
              Whether you need your first website, a better logo, launch graphics, or ongoing updates, High Rock keeps the process simple and focused on helping people trust your business faster.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]">
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                <div className="mt-5 grid gap-2">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="h-4 w-4 text-blue-300" />
                      {item}
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
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Who We Help</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Designed for people who serve, build, and keep communities moving.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  High Rock is not trying to be a big city agency. This is practical design for local organizations that need to be seen, understood, and trusted.
                </p>
              </div>
              <div className="grid gap-5">
                {audiences.map((item) => (
                  <div key={item.title} className="flex gap-5 rounded-3xl border border-white/10 bg-[#090d14]/80 p-6">
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
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-blue-950/50 p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">What We Stand For</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Clean design. Clear communication. Real-world usefulness.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                High Rock is built around helping businesses and organizations look professional without making the process complicated. The goal is simple: create digital tools that help people trust you and contact you.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Trust", "Clarity", "Local Focus", "Practical Design"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <CheckCircle className="h-6 w-6 text-blue-300" />
                    <p className="mt-3 font-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">About High Rock</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">A creative company with an operational backbone.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Built from a background in 911, public safety, emergency services, and technology, High Rock brings a practical mindset to design. That means the work is not just made to look good — it is made to be useful, organized, and easy to understand.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                We focus on public safety, small businesses, and local organizations because those are the groups that keep communities moving and deserve a strong digital presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Web Design", "Branding", "Public Safety", "Small Business", "Digital Media", "NC Based"].map((tag) => (
                  <span key={tag} className="rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">{tag}</span>
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
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Work that shows where High Rock is headed.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">Early projects and concepts built around clean presentation, local impact, and professional visibility.</p>
              </div>
              <button onClick={() => scrollTo("contact")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:bg-white/10">Discuss a Project</button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <div key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#090d14]/80">
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
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Clear starting points. Custom final pricing.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Every project is different, but these packages give clients a simple way to understand where to start.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`rounded-[2rem] border p-7 ${pkg.featured ? "border-blue-400 bg-blue-500/10 shadow-2xl shadow-blue-500/10" : "border-white/10 bg-white/[0.04]"}`}>
                {pkg.featured && <div className="mb-5 inline-flex rounded-full bg-blue-500 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">Best Value</div>}
                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <p className="mt-3 text-4xl font-black text-blue-300">{pkg.price}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{pkg.text}</p>
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
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Simple enough to understand. Professional enough to trust.</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-5">
              {process.map(([title, text], index) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-[#090d14]/80 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-black">{index + 1}</div>
                  <h3 className="text-lg font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/70 via-slate-950 to-slate-900 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Why It Matters</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Your online presence should build trust before the first conversation.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Look more professional", "Make services easy to understand", "Help people contact you faster", "Create stronger first impressions", "Support recruiting and outreach", "Build credibility locally"].map((item) => (
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
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Questions clients usually ask.</h2>
            </div>
            <div className="mt-12 grid gap-4">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="rounded-3xl border border-white/10 bg-[#090d14]/80">
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

        <section id="contact" className="py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Contact</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Ready to build something that looks professional?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Send a message and let’s talk through the best option for your website, branding, or creative project.</p>
              <div className="mt-8 grid gap-4">
                <a href={`mailto:${business.email}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#090d14]/80 p-4 text-slate-300 transition hover:bg-white/[0.06]">
                  <Mail className="h-5 w-5 text-blue-300" />
                  <span>{business.email}</span>
                </a>
                <a href={`tel:${business.phone}`} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#090d14]/80 p-4 text-slate-300 transition hover:bg-white/[0.06]">
                  <Phone className="h-5 w-5 text-blue-300" />
                  <span>{business.phone}</span>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#090d14]/80 p-4 text-slate-300">
                  <MapPin className="h-5 w-5 text-blue-300" />
                  <span>{business.location}</span>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#090d14]/80 p-4 text-slate-300">
                  <Clock className="h-5 w-5 text-blue-300" />
                  <span>Evening and weekend project consultations available</span>
                </div>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-[#090d14]/90 p-6 shadow-2xl shadow-black/30 md:p-8" onSubmit={(e) => e.preventDefault()}>
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
                <p className="text-xs leading-5 text-slate-400">This form is visual until connected to Formspree, Netlify Forms, EmailJS, or a backend form service.</p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#090d14] py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
            <img
             src={logoImage}
              alt="High Rock Custom Designs"
              className="h-30 w-30 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-100">High Rock</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Custom Designs</p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">Professional websites, branding, digital media, and custom creative solutions for first responders, small businesses, and local organizations.</p>
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
                <a href={`mailto:${business.email}`} className="hover:text-white">{business.email}</a>
                <a href={`tel:${business.phone}`} className="hover:text-white">{business.phone}</a>
                <span>{business.location}</span>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
            <p>Built for local impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
