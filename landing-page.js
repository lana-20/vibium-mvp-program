import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Trophy, 
  Layers, 
  Sparkles,
  Command,
  ArrowRight,
  Github,
  Twitter,
  ChevronRight,
  Cpu,
  Monitor,
  Activity,
  Users,
  Star,
  Zap,
  Globe,
  Grid3X3,
  Dna,
  ShieldAlert,
  Coins,
  ChevronDown,
  ExternalLink,
  Code2
} from 'lucide-react';

// --- UI COMPONENTS ---

const VibiumLogo = ({ size = 32, className = "" }) => (
  <svg 
    width={size} 
    height={(size * 1.25)} 
    viewBox="0 0 160 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="vibiumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff4d00" />
        <stop offset="100%" stopColor="#ff8700" />
      </linearGradient>
    </defs>
    <path d="M10 50L55 130L30 180L0 120L10 50Z" fill="url(#vibiumGradient)" />
    <path d="M150 50L105 130L130 180L160 120L150 50Z" fill="url(#vibiumGradient)" />
    <path d="M40 50H120L80 120L40 50Z" fill="url(#vibiumGradient)" />
    <path d="M80 140L100 180H60L80 140Z" fill="url(#vibiumGradient)" opacity="0.8" />
  </svg>
);

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-2 mb-6">
    <div className="w-8 h-[1px] bg-gradient-to-r from-orange-500 to-transparent" />
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500/80">
      {children}
    </span>
  </div>
);

const TechButton = ({ children, primary = false, icon: Icon, onClick, className = "" }) => (
  <motion.button
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`group relative px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest overflow-hidden transition-all flex items-center gap-3 ${
      primary 
        ? "bg-orange-600 text-white shadow-lg shadow-orange-900/20" 
        : "bg-white/5 text-white/70 border border-white/10 hover:border-white/20 hover:text-white"
    } ${className}`}
  >
    {children}
    {Icon && <Icon size={16} className="group-hover:translate-x-1 transition-transform" />}
    {primary && (
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    )}
  </motion.button>
);

// --- SECTIONS ---

const TierBento = () => {
  const tiers = [
    {
      level: "01",
      title: "Explorers",
      desc: "The Entry Point. For curious testers and developers cloning the CLI and providing initial feedback.",
      perks: ["Private Discord Access", "Explorer Badge", "Early Previews"],
      icon: Zap,
      size: "md:col-span-1",
      accent: "border-neutral-800"
    },
    {
      level: "02",
      title: "Ambassadors",
      desc: "The Growth Engine. High-impact contributors creating content, documentation, and leading community discussions.",
      perks: ["Personal Branding Support", "Exclusive Swag Drops", "Leaderboard Spotlight"],
      icon: Users,
      size: "md:col-span-2",
      accent: "border-orange-500/30 bg-orange-500/[0.03]"
    },
    {
      level: "03",
      title: "MVPs",
      desc: "The Inner Circle. The elite 1% shaping the core of Vibium's future through architecture and innovation.",
      perks: ["Roadmap Influence", "Vibium Labs Access", "Speaker Sponsorship"],
      icon: Star,
      size: "md:col-span-3",
      accent: "border-white/10 shadow-2xl shadow-orange-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tiers.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className={`${t.size} group relative overflow-hidden rounded-3xl border ${t.accent} bg-neutral-900/40 p-10 hover:bg-neutral-800/40 transition-all`}
        >
          <div className="flex justify-between items-start mb-12">
            <div className="flex flex-col">
              <span className="text-orange-500 font-mono text-xs mb-2 tracking-widest">{t.level}</span>
              <h3 className="text-3xl font-black text-white italic uppercase">{t.title}</h3>
            </div>
            <t.icon className="text-neutral-700 group-hover:text-orange-500 transition-colors" size={32} />
          </div>
          
          <p className="text-neutral-400 text-sm leading-relaxed mb-8 max-w-md">{t.desc}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.perks.map((perk, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-tighter">
                <div className="w-1 h-1 rounded-full bg-orange-500" />
                {perk}
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#080808] text-white min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-orange-600 z-[1000] origin-left" style={{ scaleX }} />

      {/* Background FX */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full" />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-neutral-900/50 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-2xl">
          <div className="flex items-center gap-3">
            <VibiumLogo size={24} />
            <span className="font-black tracking-tighter text-lg uppercase italic">Vibium</span>
          </div>
          <div className="hidden md:flex gap-10">
            {['Hierarchy', 'Agent Wars', 'Protocol', 'Leaderboard'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-orange-500 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <TechButton primary className="py-2.5">Apply to Rank</TechButton>
        </div>
      </nav>

      <main className="relative z-10">
        
        {/* HERO */}
        <section className="min-h-screen pt-32 pb-20 px-8 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-orange-500 font-mono text-[10px] tracking-[.3em] mb-8"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                NOW RECRUITING: Q2 AMBASSADOR COHORT
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-10 text-white italic uppercase"
              >
                SHAPE THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-300">
                  AGENTIC ERA.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-neutral-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
              >
                Vibium isn't just code—it's a registry of innovators building the world's most resilient agentic infrastructure. Join the ranks.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <TechButton primary icon={ArrowRight}>Start Application</TechButton>
                <TechButton icon={Trophy}>View Leaderboard</TechButton>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[3rem] border border-white/10 overflow-hidden bg-neutral-900 group"
            >
              <img 
                src="https://raw.githubusercontent.com/lana-20/vibium-demos/main/vars/var-1.webp" 
                alt="Vibium Core" 
                className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent">
                 <div className="bg-orange-600/10 border border-orange-500/30 p-5 rounded-2xl backdrop-blur-md max-w-xs">
                    <div className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1 flex justify-between">
                       <span>Registry Status</span>
                       <span className="animate-pulse">Active</span>
                    </div>
                    <div className="text-xs text-neutral-400 font-medium leading-relaxed italic">Monitoring 124 active contributors across 18 global nodes.</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HIERARCHY BENTO */}
        <section id="hierarchy" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>The Hierarchy</SectionLabel>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <h2 className="text-4xl md:text-6xl font-black italic uppercase">Climb the <br /> Leaderboard.</h2>
              <p className="text-neutral-500 max-w-sm text-sm font-medium">
                Merit-based progression. High-impact contributions unlock higher tiers, exclusive rewards, and protocol governance.
              </p>
            </div>
            <TierBento />
          </div>
        </section>

        {/* AGENT WARS - THE 3D CHESS TOURNAMENT */}
        <section id="agent-wars" className="py-32 px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
             <div className="bg-[#0c0c0c] border border-white/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                
                {/* 3D Grid Decorative Overlay */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block overflow-hidden">
                   <div className="grid grid-cols-4 gap-2 transform rotate-45 translate-x-20 -translate-y-20">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className={`aspect-square border border-orange-500/30 ${i % 3 === 0 ? 'bg-orange-500/10' : ''}`} />
                      ))}
                   </div>
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <div className="flex items-center gap-3 text-orange-500 font-mono text-[10px] tracking-[.4em] mb-8">
                      <Grid3X3 size={16} /> LIVE CHALLENGE: SEASON 01
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                      AGENT <br /> <span className="text-neutral-600">WARS.</span>
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl mb-12 leading-relaxed">
                      Build agents that don't just see the web—they master it. Season 01 features the **3D Chess Arena**, a spatial reasoning benchmark for high-performance agentic flows.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-10">
                       <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-widest text-neutral-400 italic">Spatial Reasoning</div>
                       <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-widest text-neutral-400 italic">DOM Manipulation</div>
                       <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-xs font-bold uppercase tracking-widest text-neutral-400 italic">Self-Healing</div>
                    </div>
                    <TechButton primary icon={ChevronRight}>Enter the Arena</TechButton>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-neutral-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-20">
                          <Trophy size={64} className="text-orange-500" />
                       </div>
                       <div className="space-y-8">
                          <div>
                            <div className="text-[10px] font-black uppercase text-orange-500 mb-2 tracking-[.3em]">Grand Prize</div>
                            <div className="text-4xl font-black italic">$5,000 + MVP Promotion</div>
                          </div>
                          <div className="grid grid-cols-2 gap-10">
                            <div>
                               <div className="text-[10px] font-black uppercase text-neutral-500 mb-2 tracking-[.3em]">Agents Built</div>
                               <div className="text-2xl font-black italic text-white">42 Active</div>
                            </div>
                            <div>
                               <div className="text-[10px] font-black uppercase text-neutral-500 mb-2 tracking-[.3em]">Deadline</div>
                               <div className="text-2xl font-black italic text-white">12:00:00</div>
                            </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* CONTRIBUTION PROTOCOL */}
        <section id="protocol" className="py-32 px-8 bg-neutral-900/10 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>Contribution Protocol</SectionLabel>
            <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black italic uppercase leading-none mb-8">
                    Passion vs. <br /> <span className="text-orange-500">Profession.</span>
                  </h2>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    We've drawn a clear line to protect the open-source spirit while ensuring critical engineering is professionally compensated. No more "unpaid labor" masquerading as community work.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                        <Users className="text-orange-500 mb-4" />
                        <h4 className="font-bold uppercase text-xs mb-2">Community Growth</h4>
                        <p className="text-[10px] text-neutral-500 leading-relaxed uppercase font-bold tracking-tight italic">Social Advocacy // Mentorship // Content Creation // Meetups</p>
                     </div>
                     <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                        <Coins className="text-blue-400 mb-4" />
                        <h4 className="font-bold uppercase text-xs mb-2">Core Bounties</h4>
                        <p className="text-[10px] text-neutral-500 leading-relaxed uppercase font-bold tracking-tight italic">Security Audits // SDK Maintenance // Architecture Refactors</p>
                     </div>
                  </div>
               </div>

               <div className="bg-neutral-900/60 border border-white/5 rounded-[3rem] p-10 md:p-14 relative group">
                  <div className="flex items-center gap-3 text-red-500 font-mono text-[10px] tracking-[.4em] mb-12">
                    <ShieldAlert size={16} /> THE "DANGER ZONE" LOGIC
                  </div>
                  <div className="space-y-6">
                     {[
                       { task: "High Accountability", status: "PAID", desc: "If system-wide outages depend on your work." },
                       { task: "Recursive Admin", status: "PAID", desc: "Routine maintenance and billing infrastructure." },
                       { task: "Proprietary Core", status: "PAID", desc: "Internal non-OSS tooling and official registries." },
                       { task: "Passion Project", status: "VOLUNTEER", desc: "Building what you want to see exist in the world." }
                     ].map((row, i) => (
                       <div key={i} className="flex justify-between items-center gap-4 py-4 border-b border-white/5 last:border-0 group/row">
                          <div className="space-y-1">
                             <div className="text-xs font-black uppercase tracking-widest group-hover/row:text-white transition-colors">{row.task}</div>
                             <div className="text-[10px] text-neutral-500 italic">"{row.desc}"</div>
                          </div>
                          <span className={`text-[10px] font-black px-3 py-1 rounded ${row.status === 'PAID' ? 'bg-blue-600/10 text-blue-400' : 'bg-orange-600/10 text-orange-400'}`}>
                            {row.status}
                          </span>
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 flex items-center justify-between">
                     <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest italic">Path to Ascension: Active</span>
                     <TechButton className="py-2.5 px-6">Bounty Board</TechButton>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* LEADERBOARD CTA */}
        <section id="leaderboard" className="py-40 px-8 text-center relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[160px] rounded-full pointer-events-none" />
           <div className="max-w-4xl mx-auto relative z-10">
              <SectionLabel>Global Registry</SectionLabel>
              <h2 className="text-5xl md:text-9xl font-black italic uppercase tracking-tighter mb-10 leading-[0.8]">
                JOIN THE <br /> <span className="text-neutral-700">TOP 100.</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                The leaderboard is our source of truth. Climb the ranks to influence the roadmap and secure priority access to the Vibium Core.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <TechButton primary icon={ChevronRight}>Apply for Program</TechButton>
                <TechButton icon={Globe}>Check Global Ranks</TechButton>
              </div>
           </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 pb-12 px-8 border-t border-white/5 bg-[#050505]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-24">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <VibiumLogo size={28} />
                <span className="font-black tracking-tighter text-2xl uppercase italic">Vibium</span>
              </div>
              <p className="text-neutral-500 text-sm max-w-sm leading-relaxed font-bold italic uppercase tracking-widest opacity-50">
                Establishing the registry of human-agent collaboration.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-white uppercase tracking-[.4em]">Protocol</div>
              <ul className="space-y-4 text-sm text-neutral-500 font-bold uppercase tracking-widest text-[10px]">
                <li className="hover:text-orange-500 transition-colors cursor-pointer flex items-center gap-3"><Code2 size={16} /> SDK Docs</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer flex items-center gap-3"><Activity size={16} /> Registry Status</li>
                <li className="hover:text-orange-500 transition-colors cursor-pointer flex items-center gap-3"><ShieldAlert size={16} /> Security Labs</li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="text-[10px] font-black text-white uppercase tracking-[.4em]">Network</div>
              <ul className="space-y-4 text-sm text-neutral-500 font-bold uppercase tracking-widest text-[10px]">
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-3 underline-offset-4 decoration-orange-500/50 underline"><Twitter size={16} /> X / Twitter</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-3"><Github size={16} /> GitHub</li>
                <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-3"><ExternalLink size={16} /> Discord</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[9px] font-black uppercase tracking-[0.5em] text-neutral-700">
              © 2026 Vibium Systems // AMBASSADOR_PORTAL_V1
            </div>
            <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-700">
               <span className="hover:text-neutral-400 cursor-pointer">Bylaws</span>
               <span className="hover:text-neutral-400 cursor-pointer">Privacy</span>
               <span className="hover:text-neutral-400 cursor-pointer">Manifesto</span>
            </div>
          </div>
        </footer>

      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scan { 0% { top: 0% } 100% { top: 100% } }
        .animate-scan { position: absolute; animation: scan 6s linear infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}} />
    </div>
  );
}
