import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  Linkedin,
  TrendingUp,
  Briefcase,
  LineChart,
  Building2,
  Target,
  Search,
  Calculator,
  FileCheck,
  Check,
  Menu,
  X,
  Download,

} from "lucide-react";
import logo from "@/assets/wms-logo.jpg";
import dmytroPhoto from "@/assets/dmytro.png";
import alexandrPhoto from "@/assets/alexandr.png";
import denysPhoto from "@/assets/denys.jpg";
import heroBg from "@/assets/hero-bg.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Warsaw M&A Society — Where Deals Get Analyzed" },
      {
        name: "description",
        content:
          "Warsaw M&A Society is a student-led organization focused on mergers & acquisitions, valuation, investment banking, and strategic deal analysis.",
      },
      { property: "og:title", content: "Warsaw M&A Society — Where Deals Get Analyzed" },
      {
        property: "og:description",
        content:
          "Student-led society analyzing live M&A transactions, valuations, and strategic deals with professional frameworks.",
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Membership", href: "#membership" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Process />
      <Projects />
      <CareerTracks />
      <Team />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- Navigation ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-xl border-b border-gold/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Warsaw M&A Society"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-[15px] tracking-[0.18em] text-ivory">
              WARSAW M&amp;A
            </div>
            <div className="text-[10px] tracking-[0.35em] text-gold/80 uppercase">
              Society
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative text-[13px] tracking-[0.18em] uppercase text-ivory/75 hover:text-gold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="#membership"
          className="hidden lg:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase text-gold hover:bg-gold hover:text-navy-deep transition-all duration-300"
        >
          Apply
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ivory p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-gold/15 bg-navy-deep/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase text-ivory/80 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#membership"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center border border-gold/60 px-5 py-3 text-xs tracking-[0.22em] uppercase text-gold"
            >
              Apply
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/85 to-navy-deep" />
        <div className="absolute inset-0 grid-overlay opacity-60" />
      </motion.div>

      {/* Decorative corners */}
      <div className="pointer-events-none absolute top-24 left-6 lg:left-10 h-16 w-16 border-l border-t border-gold/40" />
      <div className="pointer-events-none absolute bottom-10 right-6 lg:right-10 h-16 w-16 border-r border-b border-gold/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
            Est. Warsaw · Finance Society
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl sm:text-6xl lg:text-8xl leading-[1.02] tracking-tight max-w-5xl"
        >
          Where Deals <br />
          <span className="text-gold-gradient italic">Get Analyzed.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 max-w-2xl text-base lg:text-lg text-ivory/70 leading-relaxed"
        >
          Warsaw M&amp;A Society is a student-led organization focused on mergers &amp;
          acquisitions, valuation, investment banking, and strategic deal analysis.
          Members work on real transaction case studies, valuation models, and industry
          research while building practical skills used in investment banking, private
          equity, and corporate finance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#membership"
            className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[12px] tracking-[0.25em] uppercase text-navy-deep font-semibold hover:bg-gold-bright transition-colors"
          >
            Join the Society
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 border border-ivory/30 px-7 py-4 text-[12px] tracking-[0.25em] uppercase text-ivory hover:border-gold hover:text-gold transition-colors"
          >
            View Projects
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.4em] text-ivory/40 uppercase">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Section header ---------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="h-px w-10 bg-gold" />
      <span className="text-[11px] tracking-[0.4em] uppercase text-gold">{children}</span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
      {children}
    </h2>
  );
}

/* ---------------- About ---------------- */
function About() {
  const stats = [
    { value: 2, suffix: "", label: "Live Deal Cases" },
    { value: 1, suffix: "", label: "Completed Analysis" },
    { value: 100, suffix: "%", label: "Student Led" },
    { value: 2026, suffix: "", label: "Founded at the University of Warsaw", animated: false },
  ];

  return (
    <section id="about" className="relative section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>About</Eyebrow>
            <SectionTitle>
              About Warsaw <br />
              <span className="italic text-gold-gradient">M&amp;A Society</span>
            </SectionTitle>
          </div>
          <div className="lg:col-span-7 space-y-6 text-ivory/75 leading-relaxed">
            <p>
              Warsaw M&amp;A Society is a student organization dedicated to developing
              practical finance skills through hands-on transaction analysis.
            </p>
            <p>
              Members examine real-world mergers, acquisitions, leveraged buyouts, and
              strategic transactions using professional frameworks employed by investment
              banks and private equity firms.
            </p>
            <p>
              The Society combines education, networking, and project-based learning to
              help students prepare for careers in:
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 pt-2">
              {[
                "Investment Banking",
                "Private Equity",
                "Corporate Development",
                "Equity Research",
                "Corporate Finance",
              ].map((c) => (
                <li key={c} className="flex items-center gap-3 text-ivory">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  <span className="text-sm tracking-wide">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-gold/20">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>

      </div>
    </section>
  );
}

function Stat({
  value,
  suffix,
  label,
  animated = true,
}: {
  value: number;
  suffix: string;
  label: string;
  animated?: boolean;
}) {

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(animated ? 0 : value);

  useEffect(() => {
    if (!inView || !animated) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, animated]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-10 px-6 text-center border-b border-r border-gold/20"
    >

      <div className="font-serif text-5xl lg:text-6xl text-gold-gradient">
        {n}
        {suffix}
      </div>
      <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-ivory/60">
        {label}
      </div>
    </div>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    {
      icon: Target,
      title: "Strategic Analysis",
      body: "Assess acquisition rationale, synergies, market positioning, and competitive advantages.",
    },
    {
      icon: Search,
      title: "Industry Research",
      body: "Evaluate market trends, competitive dynamics, and growth opportunities.",
    },
    {
      icon: Calculator,
      title: "Valuation",
      body: "Perform DCF analysis, comparable companies analysis, and precedent transaction analysis.",
    },
    {
      icon: FileCheck,
      title: "Investment Recommendation",
      body: "Develop a professional investment opinion supported by financial and strategic analysis.",
    },
  ];

  return (
    <section id="process" className="relative section-pad bg-navy/40 border-y border-gold/10">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <Eyebrow>Our Process</Eyebrow>
          <SectionTitle>
            How We <span className="italic text-gold-gradient">Analyze Deals</span>
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative bg-navy-deep p-8 lg:p-10 hover:bg-navy transition-colors duration-500"
            >
              <div className="font-serif text-gold/30 text-5xl mb-6">0{i + 1}</div>
              <s.icon className="text-gold mb-5" size={28} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl mb-3 text-ivory">{s.title}</h3>
              <p className="text-sm text-ivory/65 leading-relaxed">{s.body}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects (Live) ---------------- */
function Projects() {
  const projects = [
    {
      title: "BP / Shell",
      type: "Merger of Equals",
      sector: "Energy · Oil & Gas",
      region: "United Kingdom",
      value: "Completed Analysis",
      status: "completed" as const,
      thesis:
        "A full merger analysis of the two British energy majors — combined asset base, synergy modelling, capital structure implications, and the competition review that a transaction of this scale would face.",
      file: "/reports/bp-shell-merger-analysis.pdf",
    },
    {
      title: "Goldman Sachs / Raymond James",
      type: "Strategic Acquisition",
      sector: "Financial Services · Wealth Management",
      region: "United States",
      value: "Live Coverage",
      status: "live" as const,
      thesis:
        "Ongoing analysis of a potential combination in wealth management and advisory — franchise fit, adviser retention economics, capital requirements, and the regulatory pathway.",
      file: null,
    },
  ];


  return (
    <section id="projects" className="relative section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <Eyebrow>Projects</Eyebrow>
          <SectionTitle>
            Live <span className="italic text-gold-gradient">M&amp;A Projects</span>
          </SectionTitle>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-navy via-navy to-navy-rich border border-gold/25 shadow-[0_30px_80px_-30px_rgba(212,175,55,0.25)] overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

              <div className="relative px-8 py-10 lg:px-10 lg:py-12 flex-1 flex flex-col">
                <div className="inline-flex self-start items-center gap-3 border border-gold/40 px-4 py-1.5 mb-8">
                  {p.status === "live" ? (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                    </span>
                  ) : (
                    <span className="inline-flex h-2 w-2 rounded-full bg-gold/50" />
                  )}
                  <span className="text-[11px] tracking-[0.4em] uppercase text-gold">
                    {p.status === "live" ? "Live" : "Completed"}
                  </span>
                </div>

                <p className="font-serif text-[11px] tracking-[0.4em] uppercase text-ivory/50 mb-3">
                  {p.type}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl leading-tight">
                  {p.title}
                </h3>

                <p className="font-serif italic text-gold-gradient text-lg mt-3">
                  {p.value}
                </p>

                <p className="font-serif mt-6 text-base text-ivory/70 leading-relaxed flex-1">
                  {p.thesis}
                </p>

                <div className="mt-8 h-px w-16 bg-gold/40" />

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-serif text-xs text-ivory/55">
                  <span>{p.sector}</span>
                  <span className="text-gold/40">·</span>
                  <span>{p.region}</span>
                </div>

                {p.file && (
                  <a
                    href={p.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex self-start items-center gap-3 border border-gold/40 px-6 py-3 font-serif text-[11px] tracking-[0.3em] uppercase text-gold transition-colors duration-300 hover:bg-gold hover:text-navy-deep"
                  >
                    <Download size={14} strokeWidth={1.5} />
                    Download Report
                  </a>
                )}
              </div>

              <div className="relative flex items-center justify-between px-6 py-4 lg:px-10 border-t border-gold/20 bg-navy-deep/50">
                <span className="font-serif text-[10px] tracking-[0.3em] uppercase text-ivory/40">
                  Deal Team · {p.status === "live" ? "Active" : "Closed"}
                </span>
                <span className="font-serif text-[10px] tracking-[0.3em] uppercase text-gold">
                  {p.status === "live" ? "In Analysis" : "Published"}
                </span>
              </div>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- Career tracks ---------------- */
function CareerTracks() {
  const tracks = [
    {
      icon: Briefcase,
      title: "Investment Banking",
      body: "Learn valuation, mergers & acquisitions, transaction execution, and financial modeling.",
    },
    {
      icon: TrendingUp,
      title: "Private Equity",
      body: "Analyze acquisitions, investment opportunities, and value creation strategies.",
    },
    {
      icon: Building2,
      title: "Corporate Finance",
      body: "Understand capital allocation, strategic planning, and financial decision-making.",
    },
    {
      icon: LineChart,
      title: "Equity Research",
      body: "Develop industry expertise and investment recommendations.",
    },
  ];
  return (
    <section id="careers" className="section-pad bg-navy/40 border-y border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <Eyebrow>Career Tracks</Eyebrow>
          <SectionTitle>
            Career <span className="italic text-gold-gradient">Paths</span>
          </SectionTitle>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative border border-gold/20 bg-navy-deep p-8 hover:border-gold/60 transition-all duration-500 hover:-translate-y-1"
            >
              <t.icon className="text-gold mb-6" size={26} strokeWidth={1.2} />
              <h3 className="font-serif text-xl mb-3 text-ivory">{t.title}</h3>
              <p className="text-sm text-ivory/65 leading-relaxed">{t.body}</p>
              <div className="mt-6 h-px w-8 bg-gold/50 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team ---------------- */
function Team() {
  const members = [
    { role: "President", name: "Dmytro Kuryltsiv", linkedin: "https://www.linkedin.com/in/dmytrok1/", photo: dmytroPhoto },
    { role: "Vice President", name: "Alexandr Saharov", linkedin: "https://www.linkedin.com/in/alexandr-saharov-48a532319/", photo: alexandrPhoto },
    { role: "Head of Financial Advisory", name: "Denys Suk", linkedin: "https://www.linkedin.com/in/denys-suk-727b6839a/", photo: denysPhoto },
  ];
  return (
    <section id="team" className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <Eyebrow>Leadership</Eyebrow>
          <SectionTitle>
            The <span className="italic text-gold-gradient">Team</span>
          </SectionTitle>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative border border-gold/20 bg-gradient-to-b from-navy to-navy-deep overflow-hidden"
            >
              <div className="aspect-[4/5] relative bg-navy-deep flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-30" />
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-gold/40 bg-navy-deep">
                    <span className="font-serif text-4xl text-gold-gradient">
                      {m.role.split(" ").map((w) => w[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-deep to-transparent" />
              </div>
              <div className="p-6 border-t border-gold/15">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                  {m.role}
                </div>
                <div className="font-serif text-xl text-ivory">{m.name}</div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-ivory/40">Warsaw, PL</span>
                  <a
                    href={m.linkedin}
                    target={m.linkedin === "#" ? undefined : "_blank"}
                    rel={m.linkedin === "#" ? undefined : "noopener noreferrer"}
                    aria-label={`${m.role} LinkedIn`}
                    className="text-ivory/50 hover:text-gold transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Membership ---------------- */
function Membership() {
  const benefits = [
    "Live deal analysis",
    "Valuation experience",
    "Investment banking preparation",
    "Networking opportunities",
    "Team research projects",
    "Professional development",
  ];
  return (
    <section id="membership" className="relative section-pad bg-navy/40 border-y border-gold/10 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <Eyebrow>Membership</Eyebrow>
          <SectionTitle>
            Join the <span className="italic text-gold-gradient">Society</span>
          </SectionTitle>
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-lg">
            We welcome ambitious students serious about a career in finance. Applications
            are reviewed on a rolling basis each semester.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[12px] tracking-[0.25em] uppercase text-navy-deep font-semibold hover:bg-gold-bright transition-colors"
          >
            Apply for Membership
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="border border-gold/25 bg-navy-deep/70 backdrop-blur p-8 lg:p-10">
            <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              Member Benefits
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-gold/60">
                    <Check size={11} className="text-gold" />
                  </span>
                  <span className="text-sm text-ivory/85">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <SectionTitle>
            Get in <span className="italic text-gold-gradient">Touch</span>
          </SectionTitle>
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-md">
            Reach out for membership inquiries, research collaboration, or partnership
            opportunities with industry professionals and academic institutions.
          </p>
          <div className="mt-10 space-y-5">
            <a
              href="mailto:warsawmasociety@gmail.com"
              className="flex items-center gap-4 text-ivory/80 hover:text-gold transition-colors group"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-gold/40 group-hover:border-gold transition-colors">
                <Mail size={16} className="text-gold" />
              </span>
              <span className="text-sm tracking-wide">warsawmasociety@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/company/127804235/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-ivory/80 hover:text-gold transition-colors group"
            >
              <span className="flex h-11 w-11 items-center justify-center border border-gold/40 group-hover:border-gold transition-colors">
                <Linkedin size={16} className="text-gold" />
              </span>
              <span className="text-sm tracking-wide">linkedin.com/company/warsaw-m-a-society</span>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const message = String(data.get("message") || "");
            const subject = encodeURIComponent("WMS Inquiry");
            const body = encodeURIComponent(message);
            window.location.href = `mailto:warsawmasociety@gmail.com?subject=${subject}&body=${body}`;
            setSubmitted(true);
          }}
          className="lg:col-span-7 border border-gold/20 bg-navy-deep/70 p-8 lg:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="Full Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="University / Organization" name="university" />
          <Field label="Message" name="message" textarea required />

          <button
            type="submit"
            disabled={submitted}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-[12px] tracking-[0.25em] uppercase text-navy-deep font-semibold hover:bg-gold-bright transition-colors disabled:opacity-60"
          >
            {submitted ? "Message Sent" : "Send Message"}
            {!submitted && <ArrowRight size={16} />}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const common =
    "w-full bg-transparent border-b border-ivory/20 focus:border-gold outline-none py-3 text-sm text-ivory placeholder-ivory/30 transition-colors";
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.3em] uppercase text-ivory/60">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={common} />
      ) : (
        <input name={name} type={type} required={required} className={common} />
      )}
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-navy-deep">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Warsaw M&A Society"
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-full ring-1 ring-gold/40"
              />
              <div>
                <div className="font-serif text-lg text-ivory">Warsaw M&amp;A Society</div>
                <div className="text-[10px] tracking-[0.35em] uppercase text-gold">
                  Analyze · Value · Connect
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-4">
              Navigate
            </div>
            <ul className="grid grid-cols-2 gap-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <div className="text-[10px] tracking-[0.3em] uppercase text-ivory/50 mb-4">
              Connect
            </div>
            <div className="flex md:justify-end gap-3">
              <a
                href="mailto:warsawmasociety@gmail.com"
                className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition-colors"
                aria-label="Email"
              >
                <Mail size={15} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold hover:bg-gold hover:text-navy-deep transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="gold-rule mt-12" />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-wider text-ivory/40">
          <span>© {new Date().getFullYear()} Warsaw M&amp;A Society. All rights reserved.</span>
          <span>Confidential · For Educational Purposes</span>
        </div>
      </div>
    </footer>
  );
}
