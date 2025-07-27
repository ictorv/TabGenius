"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// ----------- FeatureCard -------------
type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  gradient: string;
};
const features: FeatureCardProps[] = [
  {
    icon: "🧠",
    title: "Intelligent Clustering",
    description: "Tabs stay grouped by project, topic, and usage—automatically.",
    gradient: "from-blue-100 to-indigo-100",
  },
  {
    icon: "⚡",
    title: "Lightning Search",
    description: "Find any tab in milliseconds, even by content.",
    gradient: "from-cyan-100 to-blue-100",
  },
  {
    icon: "🔄",
    title: "Session Revive",
    description: "Recover your full workflow after any crash or restart.",
    gradient: "from-slate-100 to-blue-50",
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    description: "Insights to spot focus leaks and optimize productivity.",
    gradient: "from-blue-100 to-indigo-100",
  },
  {
    icon: "⌨️",
    title: "Keyboard Zen",
    description: "Every action at your fingertips—never touch your mouse.",
    gradient: "from-indigo-100 to-slate-100",
  },
  {
    icon: "🔒",
    title: "True Privacy",
    description: "Works 100% locally—no data ever leaves your browser.",
    gradient: "from-slate-100 to-blue-100",
  },
];
function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg text-center flex flex-col h-full">
      <div className="flex justify-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-3xl shadow-sm`}>
          <span className="relative z-10">{icon}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-3">{title}</h3>
      <p className="text-zinc-600 leading-relaxed max-w-sm mx-auto">{description}</p>
      <div className="mt-6 h-1 w-16 mx-auto bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-full" />
    </div>
  );
}

// ----------- AnimatedCounter -------------
let counterId = 0;
type AnimatedCounterProps = {
  target: number;
  decimals?: number;
  duration?: number;
};
function AnimatedCounter({ target, decimals = 0, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const localIdRef = useRef<number | undefined>(undefined);
  if (!localIdRef.current) localIdRef.current = ++counterId;
  const counterIdStr = `counter-${localIdRef.current}`;
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    const el = document.getElementById(counterIdStr);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [counterIdStr]);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null, frame: number;
    const animate = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime, progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(target * eased);
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(target);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isVisible, target, duration]);
  return (
    <span id={counterIdStr} aria-live="polite">
      {Number(count).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  );
}

// ----------- TestimonialCard -------------
type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};
function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  const initials = author.split(" ").map(n => n[0]).join("");
  return (
    <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-md flex flex-col h-full">
      <div className="mb-6">
        <p className="text-zinc-700 text-lg leading-relaxed italic">“{quote}”</p>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-lg shadow">
          {initials}
        </div>
        <div>
          <div className="text-zinc-900 font-semibold">{author}</div>
          <div className="text-zinc-500 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
}

// ----------- PricingCard -------------
type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
};
function PricingCard({ name, price, period, features, buttonText, popular = false }: PricingCardProps) {
  const handleButtonClick = () => {
    if (name === "Pro") {
      window.open("https://www.paypal.com/ncp/payment/RL32H86GJGSMA", "_blank");
    } else if (name === "Free") {
      const downloadSection = document.getElementById("download");
      if (downloadSection) downloadSection.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.open("mailto:contact@yourdomain.com?subject=Enterprise Plan Inquiry", "_blank");
    }
  };
  return (
    <div className="relative flex flex-col h-full">
      {popular && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full blur-sm opacity-70"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Most Popular
            </div>
          </div>
        </div>
      )}
      <div className={`flex-1 flex flex-col bg-white rounded-2xl p-8 shadow-lg border ${popular ? "border-blue-300" : "border-blue-100"}`}>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-zinc-900 mb-2">{name}</h3>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-black text-zinc-900">{price}</span>
            <span className="text-zinc-500">
              {name === "Pro" ? " one-time" : `/${period}`}
            </span>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-zinc-700">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex-1" />
        <button
          type="button"
          onClick={handleButtonClick}
          className={`w-full py-4 rounded-xl font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-200
            cursor-pointer
            ${popular
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
              : 'bg-white border border-blue-200 text-blue-700'}
          `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

// ----------- BrowserButtons -------------
function BrowserButtons() {
  const handleChromeInstall = () => {
    window.open("https://chromewebstore.google.com/detail/tabgenius/YOUR_CHROME_EXTENSION_ID", "_blank");
  };
  const handleFirefoxInstall = () => {
    window.open("https://addons.mozilla.org/en-US/firefox/addon/tabgenius/", "_blank");
  };
  const handleEdgeInstall = () => {
    window.open("https://microsoftedge.microsoft.com/addons/detail/tabgenius/hlnpfidolhmcgjgobmnnigdckhjpeibi", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Chrome */}
      <button
        onClick={handleChromeInstall}
        className="flex items-center gap-3 w-full sm:w-auto bg-white border border-blue-100 rounded-xl px-6 py-4 shadow-md hover:shadow-lg hover:border-blue-300 cursor-pointer"
        aria-label="Add TabGenius to Chrome"
        type="button"
      >
        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
          {/* Chrome SVG */}
          <svg width="22" height="22" viewBox="0 0 512 512" fill="none" aria-hidden="true">
            <circle cx="256" cy="256" r="256" fill="#F2F2F2"/>
            <path d="M478.5 187H266V297h120c-18.7 51.8-67.9 88-124 88-67.4 0-122-54.6-122-122 0-22 5.8-42.6 16-60.3l-52-89.8C60.9 157.3 38 204.5 38 256c0 120.8 97.2 218 218 218 106.9 0 196.6-77.3 214.6-179l-52-89.8a121.6 121.6 0 0 0-22.1-18.2z" fill="#34A853"/>
            <path d="M266 38c49.5 0 95.2 16.2 132 43.1L378.1 140C354 124.7 326.2 115 297 115c-56 0-105.3 36.2-124 88H73.5C104.2 91.8 186.1 38 266 38z" fill="#EA4335"/>
            <path d="M482.7 355l-52-89.8C420.2 264.3 427 241.1 427 216c0-45.1-38.9-82-89-87V38.1c87.8 6.3 154 82.3 154 177.9 0 40.1-13.2 77.1-36.3 106.1z" fill="#FBBC05"/>
            <circle cx="266" cy="256" r="63" fill="#4285F4"/>
            <circle cx="266" cy="256" r="35" fill="#fff"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-zinc-900 font-semibold text-base">Add to Chrome</div>
          <div className="text-zinc-600 text-sm">Free&nbsp;•&nbsp;2M+ users</div>
        </div>
      </button>
      {/* Firefox */}
      <button
        onClick={handleFirefoxInstall}
        className="flex items-center gap-3 w-full sm:w-auto bg-white border border-blue-100 rounded-xl px-6 py-4 shadow-md hover:shadow-lg hover:border-blue-300 cursor-pointer"
        aria-label="Add TabGenius to Firefox"
        type="button"
      >
        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="12" fill="#eef2ff"/>
            <path d="M4.5 14.5c-.05 3.5 3.5 5.8 6.8 5.7 3.7-.04 6.4-2.6 7-5.3-.9 1.1-2.1 2.1-4.3 2.2 2.3-1.3 3.6-3.6 3.5-6.1-1.6-1.7-3.9-2.5-6.1-2-2 .4-3.5 2-4.2 3.7 1-.6 2-.8 2-.8-.6.7-.8 1.5-.6 2.1z"
              fill="url(#firefox-orange-gradient-blue)" />
            <defs>
              <linearGradient id="firefox-orange-gradient-blue" x1="0" y1="0" x2="18" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9"/>
                <stop offset="1" stopColor="#6366f1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-zinc-900 font-semibold text-base">Add to Firefox</div>
          <div className="text-zinc-600 text-sm">Free&nbsp;•&nbsp;500K+ users</div>
        </div>
      </button>
      {/* Edge */}
      <button
        onClick={handleEdgeInstall}
        className="flex items-center gap-3 w-full sm:w-auto bg-white border border-blue-100 rounded-xl px-6 py-4 shadow-md hover:shadow-lg hover:border-blue-300 cursor-pointer"
        aria-label="Add TabGenius to Edge"
        type="button"
      >
        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shadow-sm">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <circle cx="16" cy="16" r="16" fill="#eff6ff"/>
            <path d="M8 19c1.4 4.5 7.2 6.6 12 3.5-2.2 1-5.2.8-7.4-1.2 4 .2 7.2-2.8 6.2-8C15.2 11.3 11.7 12.8 10 16c0-4.2 4.8-7.6 9.8-6.4A10 10 0 008 19Z" fill="url(#edge-gradient-blue)" />
            <defs>
              <linearGradient id="edge-gradient-blue" x1="8" y1="8" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0ea5e9"/>
                <stop offset="1" stopColor="#6366f1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-zinc-900 font-semibold text-base">Add to Edge</div>
          <div className="text-zinc-600 text-sm">Free&nbsp;•&nbsp;100K+ users</div>
        </div>
      </button>
    </div>
  );
}

// ----------- NavigationHandler -------------
function scrollToDownload() {
  const downloadSection = document.getElementById("download");
  if (downloadSection) {
    downloadSection.scrollIntoView({ behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// ----------- Main Page -------------
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-xl border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-100 rounded-lg p-2 shadow">
                <Image src="/icon128.png" alt="TabGenius" width={24} height={24} className="cursor-pointer" />
              </div>
              <span className="text-zinc-900 font-bold text-xl">TabGenius</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer">Features</a>
              <a href="#pricing" className="text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer">Pricing</a>
              <a href="#testimonials" className="text-zinc-600 hover:text-blue-600 transition-colors cursor-pointer">Reviews</a>
              <button
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg cursor-pointer"
                onClick={scrollToDownload}
                type="button"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="h-16" /> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 border border-blue-200/60 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium">🚀 Just launched v2.0 with AI-powered insights</span>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-zinc-900">Stop losing tabs.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Start being productive.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            The only tab manager that actually understands your workflow.
          </p>
          <p className="text-lg text-zinc-500 mb-12 max-w-3xl mx-auto">
            AI-powered organization • Lightning-fast search • Zero learning curve
          </p>
          <div className="flex justify-center mb-12">
            <BrowserButtons />
          </div>
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-zinc-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">J</div>
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">M</div>
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                <div className="w-8 h-8 bg-slate-200 rounded-full border-2 border-white flex items-center justify-center text-zinc-900 text-xs font-bold">+47K</div>
              </div>
              <span className="text-sm font-medium text-zinc-700">Trusted by developers worldwide</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500">
              <div className="flex text-amber-400">{"★".repeat(5)}</div>
              <span className="text-sm font-medium">4.9/5 on both Chrome & Firefox</span>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>100% Privacy First</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span>30-second setup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-white to-blue-50 border-t border-b border-blue-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">Trusted by teams at</h2>
            <div className="flex justify-center items-center gap-12 opacity-60">
              <div className="text-zinc-400 font-bold text-xl">Google</div>
              <div className="text-zinc-400 font-bold text-xl">Microsoft</div>
              <div className="text-zinc-400 font-bold text-xl">Stripe</div>
              <div className="text-zinc-400 font-bold text-xl">Figma</div>
              <div className="text-zinc-400 font-bold text-xl">Notion</div>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2"><AnimatedCounter target={50000} />+</div>
              <div className="text-zinc-500 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2"><AnimatedCounter target={2.5} decimals={1} />M+</div>
              <div className="text-zinc-500 text-sm">Tabs Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2"><AnimatedCounter target={85} />%</div>
              <div className="text-zinc-500 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-700 mb-2"><AnimatedCounter target={4.9} decimals={1} />★</div>
              <div className="text-zinc-500 text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">We&apos;ve all been there</h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              15 tabs open, can&apos;t find anything, browser crashes, work gone forever.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">😵</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Tab Chaos</h3>
                  <p className="text-zinc-500">Dozens of tabs, no organization, constant confusion</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Time Wasted</h3>
                  <p className="text-zinc-500">5+ minutes daily just looking for the right tab</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 border border-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💸</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Lost Work</h3>
                  <p className="text-zinc-500">Browser crashes = hours of research gone</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 rounded-2xl blur-2xl pointer-events-none" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-blue-100 shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">TabGenius fixes this</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">Auto-organize by project & context</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">Find any tab in under 2 seconds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-700">Never lose work again</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Built for power users</h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Every feature designed to save you time and reduce mental overhead
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <FeatureCard key={idx} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">Developers love TabGenius</h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">Don&apos;t just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="TabGenius transformed my workflow. I went from tab chaos to organized productivity in minutes."
              author="Sarah Chen"
              role="Senior Developer at Stripe"
            />
            <TestimonialCard
              quote="Finally, a tab manager that actually works. The AI organization is mind-blowing."
              author="Marcus Rodriguez"
              role="Product Manager at Figma"
            />
            <TestimonialCard
              quote="I research for hours daily. TabGenius saves me 30+ minutes every single day."
              author="Dr. Emily Watson"
              role="Research Scientist at Google"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 px-4 bg-gradient-to-t from-blue-50 to-white border-t border-blue-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
              Simple, honest pricing
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Start free, upgrade when you need more power
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PricingCard
              name="Free"
              price="$0"
              period="forever"
              features={[
                "Up to 100 tabs",
                "Basic organization",
                "Simple search",
                "Session recovery",
                "Chrome & Firefox"
              ]}
              buttonText="Get Started"
              popular={false}
            />
            <PricingCard
              name="Pro"
              price="$5"
              period="month"
              features={[
                "Unlimited tabs",
                "Intelligent clustering",
                "Advanced search",
                "Productivity analytics",
                "Priority support",
                "Early access to features"
              ]}
              buttonText="Upgrade to Pro"
              popular={true}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/70 via-indigo-100/70 to-cyan-100/70 rounded-3xl blur-2xl" />
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-blue-100 shadow-lg">
              <h3 className="text-4xl md:text-5xl font-black text-blue-800 mb-4">Ready to take control?</h3>
              <p className="text-xl text-zinc-500 mb-10 max-w-xl mx-auto">
                Join 50,000+ developers who&apos;ve revolutionized their workflow
              </p>
              <BrowserButtons />
              <p className="text-zinc-400 text-sm mt-6">
                Free forever • 30-second setup • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-blue-100 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-200 to-indigo-100 rounded-lg p-2 shadow">
                  <Image src="/icon128.png" alt="TabGenius" width={24} height={24} className="cursor-pointer" />
                </div>
                <span className="text-zinc-900 font-bold text-xl">TabGenius</span>
              </div>
              <p className="text-zinc-600 text-sm">
                The tab manager that actually works for developers and power users.
              </p>
            </div>
            <div>
              <h4 className="text-zinc-900 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-900 font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Bug Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-zinc-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-600 text-sm">
                <li><a href="#" className="hover:text-zinc-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-zinc-900 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} TabGenius. All rights reserved.
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a href="https://x.com/VictorAesthete" className="text-zinc-500 hover:text-zinc-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/ictorv/" className="text-zinc-500 hover:text-zinc-900 transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
