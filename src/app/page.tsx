// app/page.tsx
import Image from "next/image";
import { BrowserButtons } from "@/components/BrowserButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              {/* Logo Only */}
              <div className="flex items-center">
                <div className="bg-white rounded-lg p-2">
                  <Image 
                    src="/icon128.png" 
                    alt="TabGenius" 
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </div>
              </div>

              <span className="text-white font-bold text-xl">TabGenius</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-zinc-400 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">Pricing</a>
              <a href="#testimonials" className="text-zinc-400 hover:text-white transition-colors">Reviews</a>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Refined Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(6,182,212,0.1),transparent_50%)]" />
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Announcement Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full px-6 py-3 border border-emerald-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-emerald-300 text-sm font-medium">🚀 Just launched v2.0 with AI-powered insights</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-white">Stop losing tabs.</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Start being productive.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            The only tab manager that actually understands your workflow.
          </p>
          
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
            AI-powered organization • Lightning-fast search • Zero learning curve
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">
                  J
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">
                  M
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">
                  S
                </div>
                <div className="w-8 h-8 bg-zinc-700 rounded-full border-2 border-zinc-950 flex items-center justify-center text-white text-xs font-bold">
                  +47K
                </div>
              </div>
              <span className="text-sm font-medium text-zinc-400">Trusted by developers worldwide</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <div className="flex text-amber-400">
                {'★'.repeat(5)}
              </div>
              <span className="text-sm font-medium">4.9/5 on both Chrome & Firefox</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <BrowserButtons />
          </div>

          {/* Trust indicators */}
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
      <section className="relative py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-zinc-500 mb-4">Trusted by teams at</h2>
            <div className="flex justify-center items-center gap-12 opacity-40">
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
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter target={50000} />+
              </div>
              <div className="text-zinc-500 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter target={2.5} decimals={1} />M+
              </div>
              <div className="text-zinc-500 text-sm">Tabs Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter target={85} />%
              </div>
              <div className="text-zinc-500 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedCounter target={4.9} decimals={1} />★
              </div>
              <div className="text-zinc-500 text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              We&apos;ve all been there
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              15 tabs open, can&apos;t find anything, browser crashes, work gone forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">😵</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tab Chaos</h3>
                  <p className="text-zinc-400">Dozens of tabs, no organization, constant confusion</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Time Wasted</h3>
                  <p className="text-zinc-400">5+ minutes daily just looking for the right tab</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💸</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lost Work</h3>
                  <p className="text-zinc-400">Browser crashes = hours of research gone</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-800">
                <h3 className="text-2xl font-bold text-white mb-4">TabGenius fixes this</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Auto-organize by project & context</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Find any tab in under 2 seconds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Never lose work again</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Built for power users
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Every feature designed to save you time and reduce mental overhead
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🧠"
              title="AI-Powered Organization"
              description="Smart clustering by project, topic, and usage patterns. Your tabs organize themselves."
              gradient="from-violet-500 to-purple-600"
            />
            <FeatureCard
              icon="⚡"
              title="Instant Search"
              description="Find any tab in milliseconds. Search by title, URL, or even page content."
              gradient="from-emerald-500 to-cyan-600"
            />
            <FeatureCard
              icon="🔄"
              title="Session Recovery"
              description="Browser crashed? No problem. Restore your entire workflow in one click."
              gradient="from-orange-500 to-red-500"
            />
            <FeatureCard
              icon="📊"
              title="Productivity Insights"
              description="Understand your browsing patterns and optimize your workflow."
              gradient="from-blue-500 to-indigo-600"
            />
            <FeatureCard
              icon="⌨️"
              title="Power User Shortcuts"
              description="Keyboard-first design. Navigate without ever touching your mouse."
              gradient="from-pink-500 to-rose-600"
            />
            <FeatureCard
              icon="🔒"
              title="Privacy First"
              description="All processing happens locally. Your data never leaves your device."
              gradient="from-zinc-600 to-slate-700"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Developers love TabGenius
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it
            </p>
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
      <section id="pricing" className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Simple, honest pricing
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
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
                "AI-powered organization",
                "Advanced search",
                "Productivity insights",
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
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-12 border border-zinc-800">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                Ready to take control?
              </h3>
              <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
                Join 50,000+ developers who&apos;ve revolutionized their workflow
              </p>
              <BrowserButtons />
              <p className="text-zinc-500 text-sm mt-6">
                Free forever • 30-second setup • No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-zinc-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                  <div className="bg-white rounded-lg p-2">
                    <Image 
                      src="/icon128.png" 
                      alt="TabGenius" 
                      width={24}
                      height={24}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                </div>
                <span className="text-white font-bold text-xl">TabGenius</span>
              </div>
              <p className="text-zinc-500 text-sm">
                The tab manager that actually works for developers and power users.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Reports</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} TabGenius. All rights reserved.
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <a 
                href="https://x.com/VictorAesthete" 
                className="text-zinc-500 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              <a 
                href="https://github.com/ictorv/" 
                className="text-zinc-500 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
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
