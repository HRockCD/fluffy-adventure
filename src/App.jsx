import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  ChevronDown,
  ExternalLink,
  FileText,
  Globe,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";

function ImageWithFallback({ src, alt, className = "", fallback = "HR" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-stone-100 via-stone-300 to-slate-900 text-slate-950 ${className}`}
      >
        <span className="text-3xl font-black">{fallback}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const business = {
    name: "High Rock Custom Designs",
    phone: "704-433-3825",
    email: "contact@highrockcustomdesigns.com",
    location: "Based in Salisbury, NC",
    logo: "/images/highrock-logo2.png",
  };

  const navItems = ["Work", "About", "Services", "Packages", "Process", "FAQ", "Contact"];

  // Replace these with your real business social links when ready.
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61590502162183" },
    { label: "Instagram", href: "https://www.instagram.com/highrockcustomdesigns/" },
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const projects = [
    {
      title: "Frontline Car Wash",
      tag: "Completed Website",
      image: "/images/frontline-website.jpg",
      link: "https://www.detailersofyadkinville.com",
      text: "A clean, professional website built for a local detailing business to showcase services, build trust, and drive customer inquiries.",
      highlights: ["Service-focused layout", "Mobile-friendly design", "Clear contact path"],
    },
    {
      title: "Faith & Flour Co.",
      tag: "Completed Website",
      image: "/images/faithflour-website.jpg",
      link: "https://www.faithandflour.co",
      text: "A warm, inviting website built for a local sourdough business with clean presentation, contact information, and room to grow into online ordering.",
      highlights: ["Local bakery feel", "Clean brand presentation", "Simple customer contact"],
    },
  ];

  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Design",
      text: "Professional websites built to make your business look credible, easy to understand, and ready for customers.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Logo & Branding",
      text: "Clean logo concepts, colors, and brand direction so your business looks consistent everywhere.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Digital Media",
      text: "Flyers, social graphics, launch posts, promotional content, and branded visuals for your business.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch Setup",
      text: "Domain connection, deployment, SSL setup, basic SEO, and help getting your website live.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Website Updates",
      text: "As-needed updates, image swaps, new sections, service changes, and ongoing support.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Basic SEO Setup",
      text: "Clean page titles, descriptions, structure, and launch basics to help your website show up better.",
    },
  ];

  const packages = [
    {
      name: "Website Package",
      price: "Starting at $500",
      text: "A clean professional website for local businesses that need to look established online.",
      features: [
        "Mobile-friendly website",
        "Services and contact sections",
        "Photo/gallery areas",
        "Basic SEO setup",
        "Launch assistance",
      ],
    },
    {
      name: "Brand + Website",
      price: "Starting at $800",
      text: "A stronger package for businesses that need both a website and a more polished brand presence.",
      featured: true,
      features: [
        "Website design",
        "Logo/brand direction",
        "Brand colors",
        "Social launch graphic",
        "Basic SEO setup",
        "Launch assistance",
      ],
    },
    {
      name: "Logo Package",
      price: "Starting at $200",
      text: "A clean logo starting point for new businesses or brands that need a professional identity.",
      features: [
        "Logo concepts",
        "Color variations",
        "Transparent logo file",
        "Social profile version",
        "Final file delivery",
      ],
    },
  ];

  const faqs = [
    {
      q: "Do you only build websites?",
      a: "No. Websites are the main service, but High Rock Custom Designs also helps with logos, branding, flyers, social graphics, launch graphics, and website updates.",
    },
    {
      q: "Can you help with the domain and launch?",
      a: "Yes. I can help connect the domain, deploy the website, set up SSL, and make sure the site is ready to share.",
    },
    {
      q: "Do you offer website support after launch?",
      a: "Yes. Support can be as-needed or monthly depending on how often you need changes, new photos, new sections, or general updates.",
    },
    {
      q: "Who do you mainly work with?",
      a: "High Rock Custom Designs focuses on local businesses, service companies, public safety organizations, and community-focused brands.",
    },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-[#080b10] text-white antialiased">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .fade-up {
          animation: fadeUp 0.75s ease-out both;
        }

        .fade-up-delay {
          animation: fadeUp 0.85s ease-out 0.15s both;
        }

        .float-soft {
          animation: floatSoft 5s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(30,58,95,0.16),transparent_34%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b10]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button onClick={() => scrollTo("home")} className="group flex items-center gap-3 text-left">
            <ImageWithFallback
              src={business.logo}
              alt={business.name}
              className="h-12 w-12 rounded-2xl border border-white/15 object-cover transition duration-300 group-hover:scale-105"
              fallback="HR"
            />

            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
                High Rock
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                Custom Designs
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="relative text-sm font-semibold text-slate-300 transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`tel:${business.phone}`}
              className="rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Call Now
            </a>

            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Start a Project
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#080b10] px-5 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left text-sm font-semibold text-slate-300"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-amber-500 px-5 py-3 text-sm font-black text-white"
              >
                Start a Project
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(8,11,16,0.97) 0%, rgba(8,11,16,0.88) 50%, rgba(8,11,16,0.66) 100%), url('/images/highrock-lake.jpg')",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b10] to-transparent" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
            <div className="fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-200 backdrop-blur">
                <BadgeCheck className="h-4 w-4" />
                Local Websites • Branding • Digital Design
              </div>

              <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Local websites that make your business look established.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                High Rock Custom Designs builds clean, professional websites and branding for local businesses that need to earn trust, get found, and turn visitors into real customers.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-400"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => scrollTo("work")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  View Completed Work <ExternalLink className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Professional", "Clean design that builds trust"],
                  ["Local", "Built for small businesses close to home"],
                  ["Supported", "Help from idea to launch"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.075]"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-300" />
                    <p className="mt-3 text-sm font-black text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-up-delay">
              <div className="relative float-soft">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-amber-500/10 blur-3xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/50 backdrop-blur">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#0d121b] p-6">
                    <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/70 p-6">
                      <ImageWithFallback
                        src={business.logo}
                        alt="High Rock Custom Designs logo"
                        className="mx-auto h-40 w-full object-contain"
                        fallback="HR"
                      />

                      <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                          What We Build
                        </p>

                        <div className="mt-5 grid gap-3">
                          {[
                            "Business websites",
                            "Logo and brand direction",
                            "Launch graphics and digital media",
                            "Website updates and support",
                          ].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                              <CheckCircle className="h-4 w-4 text-amber-300" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                        {["Plan", "Build", "Launch"].map((item) => (
                          <div key={item} className="rounded-2xl bg-white/[0.06] p-3 text-xs font-black text-slate-300">
                            {item}
                          </div>
                        ))}
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
              ["Completed Websites", "Live work you can visit"],
              ["Local Business Focus", "Built for real-world customers"],
              ["Mobile Friendly", "Looks good on every screen"],
              ["Launch Support", "Help getting online"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#080b10]/70 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/30"
              >
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                Completed Work
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Real websites for real local businesses.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                A website should not just look nice. It should make the business look credible, explain what they do, and make it easy for customers to take the next step.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Start Yours
            </button>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d121b] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-2 hover:border-amber-400/30"
              >
                <div className="relative h-72 overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    fallback="HR"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-amber-500/90 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                    {project.tag}
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-3xl font-black text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-sm leading-6 text-slate-300">{project.text}</p>

                  <div className="mt-5 grid gap-2">
                    {project.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="h-4 w-4 text-amber-300" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-amber-400"
                    >
                      Visit Live Site <ExternalLink className="h-4 w-4" />
                    </a>

                    <button
                      onClick={() => scrollTo("contact")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                    >
                      Build Something Similar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-500/12 via-[#0d121b] to-[#080b10] p-8 shadow-2xl shadow-black/20 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                  Your Business Could Be Next
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Want your website featured here?
                </h2>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  If your business needs a cleaner online presence, High Rock can help you build a website that explains what you do, looks professional, and makes it easier for customers to reach out.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-400"
                >
                  Start My Website <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => scrollTo("packages")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  View Packages
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d121b] p-8 shadow-2xl shadow-black/20 md:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />

              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                About High Rock
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
                Local design with a practical tech background.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                High Rock Custom Designs was built to help local businesses look professional online without making the process complicated.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                With a background in IT, public safety, and systems administration, High Rock brings a practical approach to every project: clear communication, clean design, reliable launch support, and websites that are easy for customers to use.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["Local", "Built for small businesses and organizations close to home."],
                  ["Practical", "Focused on websites that look good and actually work."],
                  ["Reliable", "Support from planning through launch and future updates."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-amber-400/30"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-300" />
                    <p className="mt-3 text-sm font-black text-white">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                Why It Matters
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Your website should make people comfortable choosing you.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Most customers will check your website or social media before they call. If your online presence looks outdated, unclear, or unfinished, they may move on before you ever get the chance to talk to them.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  "Make your business look established",
                  "Show your services clearly",
                  "Give customers an easy way to contact you",
                  "Build trust before the first conversation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <CheckCircle className="h-5 w-5 text-amber-300" />
                    <span className="text-sm font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-400"
              >
                Tell Me About Your Business <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                  Services
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                  Everything your business needs to look professional online.
                </h2>
              </div>

              <p className="text-lg leading-8 text-slate-300">
                High Rock focuses on clean, useful design that helps customers understand your business and trust you faster.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`group rounded-3xl border border-white/10 bg-[#080b10]/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-amber-400/30 hover:bg-white/[0.06] ${
                    index === 1 || index === 4 ? "lg:-mt-6" : ""
                  }`}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-300 transition group-hover:bg-amber-500 group-hover:text-white">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                Why High Rock?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Built different from a big agency.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                You need a website that looks good, works right, and is easy to update. High Rock brings a practical mix of design, IT knowledge, public safety experience, and local business focus.
              </p>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-400"
              >
                Talk Through a Project <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                [<MapPin className="h-6 w-6" />, "Local and easy to reach", "Work with someone who understands local businesses and is not hiding behind a big agency wall."],
                [<Shield className="h-6 w-6" />, "Reliable background", "Built from public safety and IT experience where clarity and dependability matter."],
                [<Laptop className="h-6 w-6" />, "Design plus tech", "Your website needs to look professional and function properly behind the scenes."],
                [<Users className="h-6 w-6" />, "Built for real customers", "The goal is simple: help people trust your business and contact you faster."],
              ].map(([icon, title, text], index) => (
                <div
                  key={title}
                  className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-2 hover:border-amber-400/30 ${
                    index % 2 === 1 ? "md:mt-10" : ""
                  }`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-300">
                    {icon}
                  </div>

                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                Packages
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Simple starting points.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Every project is different, but these packages make it easy to understand where to start.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-[2rem] border p-7 transition duration-300 hover:-translate-y-2 ${
                    pkg.featured
                      ? "border-amber-400 bg-amber-500/10 shadow-2xl shadow-amber-500/10 lg:scale-105"
                      : "border-white/10 bg-[#080b10]/70"
                  }`}
                >
                  {pkg.featured && (
                    <div className="mb-5 inline-flex rounded-full bg-amber-500 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                      Best Value
                    </div>
                  )}

                  <h3 className="text-2xl font-black">{pkg.name}</h3>
                  <p className="mt-3 text-4xl font-black text-amber-300">{pkg.price}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{pkg.text}</p>

                  <div className="mt-6 grid gap-3">
                    {pkg.features.map((feature) => (
                      <div key={feature} className="flex gap-3 text-sm leading-6 text-slate-300">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollTo("contact")}
                    className={`mt-7 w-full rounded-full px-5 py-3 text-sm font-black transition ${
                      pkg.featured
                        ? "bg-amber-500 text-white hover:bg-amber-400"
                        : "border border-white/15 text-white hover:bg-white/10"
                    }`}
                  >
                    Ask About This Package
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
              Process
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              From idea to launch without the confusion.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["01", "Plan", "We talk through your business, goals, services, content, photos, and what the site needs to do."],
              ["02", "Build", "Your website is designed with clean structure, mobile-friendly layouts, and professional presentation."],
              ["03", "Launch", "The site gets published, connected to your domain, tested, and ready to share with customers."],
            ].map(([number, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-amber-400/30"
              >
                <p className="text-5xl font-black text-amber-300">{number}</p>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/60 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="rounded-[2rem] border border-white/10 bg-[#080b10]/80 p-8">
                <div className="flex gap-1 text-amber-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                <p className="mt-6 text-2xl font-black leading-10 text-white">
"Clean design, professional layout, easy to use, and exactly the vision I had in mind. It’s rare to find people who genuinely care about the quality of their work, and Garrett definitely does.”
                </p>

                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                  Frontline Car Wash
                </p>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                  Build Trust
                </p>

                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                  Your website should make people comfortable hiring you.
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-300">
                  The best local business websites are clear, honest, easy to use, and focused on helping customers make a decision.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Questions clients usually ask.
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="rounded-3xl border border-white/10 bg-white/[0.04]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-lg font-black">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-amber-300 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <p className="px-6 pb-6 text-sm leading-7 text-slate-300">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-slate-900/60 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                Ready to make your business look professional online?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Send a message and let’s talk through what you need, what your business does, and the best way to get your website started.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#080b10]/70 p-4 text-slate-300 transition hover:bg-white/[0.06]"
                >
                  <Mail className="h-5 w-5 text-amber-300" />
                  <span>{business.email}</span>
                </a>

                <a
                  href={`tel:${business.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#080b10]/70 p-4 text-slate-300 transition hover:bg-white/[0.06]"
                >
                  <Phone className="h-5 w-5 text-amber-300" />
                  <span>{business.phone}</span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#080b10]/70 p-4 text-slate-300">
                  <MapPin className="h-5 w-5 text-amber-300" />
                  <span>{business.location}</span>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 px-4 py-2 text-sm font-black text-slate-200 transition hover:-translate-y-0.5 hover:border-amber-400/30 hover:bg-white/10"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form
              action="https://formspree.io/f/meedvvvp"
              method="POST"
              className="rounded-[2rem] border border-white/10 bg-[#080b10]/90 p-6 shadow-2xl shadow-black/30 md:p-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="New High Rock Custom Designs Project Inquiry"
              />

              <div className="mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-amber-300" />
                <h3 className="text-2xl font-black">Project Inquiry</h3>
              </div>

              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">
                      Business / Organization
                    </label>
                    <input
                      name="business"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                      placeholder="Business name"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-200">
                      Phone
                    </label>
                    <input
                      name="phone"
                      className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-200">
                    What do you need?
                  </label>
                  <select
                    name="project_type"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-amber-400"
                  >
                    <option>Website Package</option>
                    <option>Brand + Website Package</option>
                    <option>Logo Package</option>
                    <option>Website Updates / Support</option>
                    <option>Custom Digital Media</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-200">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    className="min-h-36 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400"
                    placeholder="Tell me about your business, what you need, and what you want the website to accomplish..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-4 text-sm font-black text-white shadow-xl shadow-amber-500/20 transition hover:bg-amber-400"
                >
                  Send Project Inquiry <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-xs leading-5 text-slate-400">
                  Your inquiry will be sent directly to High Rock Custom Designs.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#080b10] py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={business.logo}
                  alt={business.name}
                  className="h-11 w-11 rounded-2xl object-cover"
                  fallback="HR"
                />
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-100">
                    High Rock
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Custom Designs
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
                Clean websites, branding, and digital design for local businesses that want to look professional online.
              </p>
            </div>

            <div>
              <p className="font-black text-white">Services</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <span>Website Design</span>
                <span>Logo & Branding</span>
                <span>Digital Media</span>
                <span>Website Updates</span>
              </div>
            </div>

            <div>
              <p className="font-black text-white">Contact</p>
              <div className="mt-4 grid gap-2 text-sm text-slate-400">
                <a href={`mailto:${business.email}`} className="hover:text-white">
                  {business.email}
                </a>
                <a href={`tel:${business.phone}`} className="hover:text-white">
                  {business.phone}
                </a>
                <span>{business.location}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-black text-slate-300 transition hover:border-amber-400/30 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">
            <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
            <p>Local websites. Professional results.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}