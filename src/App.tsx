/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Heart, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  ExternalLink,
  BookOpen,
  Anchor,
  Droplets,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-idf-red selection:text-white bg-white">
      {/* Top Bar Utility */}
      <div className="bg-[#FAF9F6] border-b border-gray-100 py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-wider font-bold text-idf-gray">
            <div className="flex items-center gap-2">
              <MapPin className="w-3 h-3 text-idf-red" />
              <span>305 N 2nd Ave #114, Upland, CA 91786</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-idf-red" />
              <span>+1 (909) 555-0123</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-idf-red" />
              <span>info@idfoundation.world</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-wider font-bold text-idf-gray mr-2">Follow Us</span>
            <Instagram className="w-3.5 h-3.5 text-idf-dark cursor-pointer hover:text-idf-red transition-colors" />
            <Twitter className="w-3.5 h-3.5 text-idf-dark cursor-pointer hover:text-idf-red transition-colors" />
            <Facebook className="w-3.5 h-3.5 text-idf-dark cursor-pointer hover:text-idf-red transition-colors" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/assets/images/IDF (4).png" alt="IDF Logo" className="h-12 w-auto object-contain" />
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            {['Home', 'Mission', 'Our Impact', 'Projects', 'FAQ', 'Gallery', 'Events', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[11px] font-bold text-idf-dark hover:text-idf-red transition-colors uppercase tracking-[1.5px]"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="bg-idf-red text-white pl-6 pr-4 py-2.5 rounded-sm text-[11px] font-bold hover:bg-idf-dark transition-all active:scale-95 uppercase tracking-[2px] flex items-center gap-3">
            Donate Now <ChevronRight className="w-4 h-4 opacity-70" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section - Full Bleed Style */}
        <section className="relative h-[650px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src="/assets/images/pexels-ruyat-supriazi-2154700906-36843397.jpg" 
              alt="Indonesian Diaspora" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-white/75"></div>
          </div>
          
          <div className="relative z-10 text-center text-idf-dark px-6 max-w-4xl">
            <FadeIn>
              <h1 className="serif text-5xl md:text-7xl font-normal mb-6 leading-tight">
                Uniting <span className="text-idf-red">Indonesians</span>,<br />
                <span className="italic font-normal">Empowering the Future</span>
              </h1>
              <p className="text-lg md:text-xl text-idf-dark mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Join our mission to uplift the most underserved regions of Indonesia — providing shoes, education, and hope, one community at a time.
              </p>
              <button className="bg-idf-red text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[2px] transition-all hover:bg-idf-dark flex items-center gap-3 mx-auto">
                Get Involved <ChevronRight className="w-4 h-4" />
              </button>
            </FadeIn>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="mission" className="py-24 px-6 bg-[#FAF9F6] border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <FadeIn>
                <div className="space-y-6">
                  <h2 className="serif text-4xl text-idf-red">Mission Statement</h2>
                  <p className="text-lg text-idf-gray leading-relaxed font-medium">
                    The Indonesian Diaspora Foundation is dedicated to uniting Indonesians around the world and fostering a spirit of global humanity. We preserve our rich cultural heritage, provide vital resources to empower both diaspora members and citizens, and lead philanthropic initiatives that uplift vulnerable communities in Indonesia and beyond.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="space-y-6">
                  <h2 className="serif text-4xl text-idf-red">Vision</h2>
                  <p className="text-xl text-idf-gray leading-relaxed font-medium italic">
                    Empowering a new generation of Indonesian to connect across borders, celebrate their roots, and lead global change through compassion, culture, and collaboration.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Intro Text Section Alternative Headline */}
        <section className="pt-24 pb-8 px-6 bg-white border-b border-gray-50">
          <div className="max-w-7xl mx-auto text-center">
            <FadeIn>
              <h2 className="serif text-4xl md:text-5xl text-idf-dark md:whitespace-nowrap">
                The true supporter of <span className="text-idf-red">Indonesian</span> progress
              </h2>
            </FadeIn>
          </div>
        </section>

        {/* Features Section - 2 Column */}
        <section className="pt-8 pb-24 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative">
                <div className="rounded-lg overflow-hidden h-[500px] shadow-xl">
                  <img 
                    src="/assets/images/Indonesian Diaspora Foundation.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Indonesian Diaspora Foundation Team" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 border-[12px] border-white rounded-lg overflow-hidden hidden md:block">
                  <img 
                    src="/assets/images/pexels-sandiyp-35286747.jpg" 
                    className="w-full h-full object-cover" 
                    alt="Indonesian Culture" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {[
                {
                  title: "Cultural Preservation",
                  desc: "We work to protect our rich heritage through awareness and traditional art revival. Every small action contributes to identity pride.",
                  icon: Anchor
                },
                {
                  title: "Educational Empowerment",
                  desc: "Our mission includes providing school shoes and classroom repairs. Together, we can make education accessible for every child.",
                  icon: BookOpen
                },
                {
                  title: "Sustainable Livelihoods",
                  desc: "We promote eco-friendly and sustainable ways of living for rural families, where people and nature coexist in harmony.",
                  icon: Droplets
                }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-8 h-8 text-idf-red" />
                    </div>
                    <div>
                      <h3 className="serif text-2xl text-idf-dark mb-3 leading-tight">{item.title}</h3>
                      <p className="text-idf-gray text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* stats Section - Dark Background */}
        <section className="py-24 px-6 bg-idf-red text-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="serif text-4xl md:text-5xl mb-6">Our Impact So Far</h2>
              <p className="text-lg opacity-80 font-medium max-w-2xl mx-auto mb-10">
                Active programs in across the archipelago, creating real change <br /> across communities and ecosystems.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { value: "5,000+", label: "Shoes Delivered", sub: "to rural school children in underserved regions." },
                  { value: "50+", label: "Classrooms Repaired", sub: "providing safe environments for learning and growth." },
                  { value: "8M+", label: "Diaspora Connected", sub: "uniting Indonesians worldwide for a common cause." }
                ].map((stat, idx) => (
                  <div key={idx} className="border border-white/30 p-10 rounded-sm hover:bg-white/5 transition-colors group">
                    <h4 className="serif text-5xl font-bold mb-4 group-hover:scale-110 transition-transform">{stat.value}</h4>
                    <p className="text-xs uppercase tracking-[2px] font-bold mb-4">{stat.label}</p>
                    <p className="text-[11px] opacity-70 leading-relaxed font-normal">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16">
                <button className="bg-white text-idf-red px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-[2px] hover:bg-idf-dark hover:text-white transition-all flex items-center gap-3 mx-auto">
                  Learn Details <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pillars / Current Focus Section */}
        <section id="impact" className="py-24 px-6 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="serif text-4xl md:text-5xl text-idf-dark mb-6">Ongoing Initiatives</h2>
                <p className="text-idf-gray max-w-2xl mx-auto font-medium">
                  We are dedicated to protecting the archipelago's cultural beauty <br /> and promoting sustainable ways of support.
                </p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Sumba Shoe Project",
                  desc: "Ensuring every child in rural Sumba has a pair of shoes to walk to school with dignity and comfort.",
                  img: "/assets/images/pexels-andromeda99-35993709.jpg"
                },
                {
                  title: "Diaspora Scholarship",
                  desc: "Connecting talented youth in Indonesia with global mentors and educational financial support.",
                  img: "/assets/images/IDF Kids.jpeg"
                },
                {
                  title: "Health & Nutrition",
                  desc: "Providing vital nutrition packs to families below the poverty line in East Nusa Tenggara.",
                  img: "/assets/images/pexels-ahmad-farhan-162807698-29205715.jpg"
                }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                    <div className="h-56 overflow-hidden">
                      <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={item.title} referrerPolicy="no-referrer" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="serif text-2xl text-idf-dark mb-4 leading-tight">{item.title}</h3>
                      <p className="text-idf-gray text-sm leading-relaxed font-medium mb-8 italic flex-1">
                        {item.desc}
                      </p>
                      <button className="text-[10px] font-bold text-idf-red uppercase tracking-[1px] flex items-center gap-2 hover:gap-3 transition-all self-start">
                        View Project <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Simplified Footer - Natura Style */}
      <footer className="bg-idf-dark text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="flex items-center">
              <img src="/assets/images/IDF (4).png" alt="IDF Logo" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium pr-8">
              Uniting Indonesians around the world and fostering a spirit of global humanity through culture, compassion, and collaboration.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <Twitter className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
              <Facebook className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white">Contact Info</h4>
            <div className="space-y-4 text-sm text-white/60 leading-relaxed font-medium">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-idf-red flex-shrink-0" />
                305 N 2nd Ave #114, Upland, CA 91786, United States
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-idf-red" />
                +1 (909) 555-0123
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-idf-red" />
                info@idfoundation.world
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[2px] text-white">Join the Cause</h4>
            <p className="text-sm text-white/60 leading-relaxed font-medium mb-6">
              Stay updated with our latest missions and impact reports in Indonesia.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border-none rounded-l-sm px-4 py-3 text-sm w-full focus:ring-1 focus:ring-idf-red transition-all"
              />
              <button className="bg-idf-red px-6 py-3 rounded-r-sm hover:bg-white hover:text-idf-red transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold space-y-1">
            <p>&copy; 2026 Indonesian Diaspora Foundation.</p>
            <p>Powered by <a href="https://builtbyzia.com/" target="_blank" rel="noopener noreferrer" className="text-idf-red hover:underline">BBZ</a></p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-idf-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-idf-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 4-4 4" />
      <path d="M13 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-4 4-4 4" />
    </svg>
  );
}
