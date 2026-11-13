import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Database, 
  Code2, 
  Sparkles,
  Phone,
  Mail,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(true);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
              </span>
              <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">
                Fresher Level • Available for Full-Stack Opportunities
              </span>
            </div>

            {/* Main Greeting & Heading */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-medium text-purple-400 tracking-wide">
                Hi, I'm <span className="text-slate-100 font-semibold">{personalInfo.name}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                MERN Full-Stack <br className="hidden sm:inline" />
                <span className="text-gradient">Web Developer</span>
              </h1>
            </div>

            {/* Subtitle / Value Proposition (Pure Fresher MERN Focus) */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Passionate entry-level full-stack developer with strong foundational skills in <span className="text-purple-300 font-medium">React.js, Node.js, Express.js, and MongoDB</span>. Holding a B.E. in Computer Science & Engineering, dedicated to building responsive interfaces, clean REST APIs, and eager to grow with a collaborative engineering team.
            </p>

            {/* Tech Stack Mini Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="text-xs text-slate-400 font-medium mr-1">Skills:</span>
              {['React.js', 'Node.js', 'Express.js', 'MongoDB ', 'JavaScript ES6+', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:text-white"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-base font-medium text-slate-400 hover:text-white transition-all text-sm"
              >
                <Briefcase className="w-4 h-4 text-slate-400" />
                <span>Work Experience</span>
              </a>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient ring glow behind image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-600/40 via-blue-600/20 to-indigo-500/30 blur-2xl transform rotate-6 scale-105" />

              {/* Main Avatar Container */}
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-br from-purple-500 via-indigo-600 to-slate-800 shadow-2xl overflow-hidden group">
                <div className="w-full h-full rounded-[22px] bg-slate-900 overflow-hidden relative flex items-center justify-center">
                  
                  {imgLoaded ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      onError={() => setImgLoaded(false)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <Code2 className="w-16 h-16 text-purple-400 mb-3" />
                      <span className="text-xl font-bold text-white">{personalInfo.name}</span>
                      <span className="text-sm text-purple-300">Fresher MERN Developer</span>
                    </div>
                  )}

                  {/* Gradient overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                  {/* Bottom badge inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-purple-300 font-semibold uppercase tracking-wider">Level: Fresher</p>
                      <p className="text-sm font-bold text-white">MERN Web Developer</p>
                    </div>
                    <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-mono font-medium">
                      React + Node
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Badge: Fresher Status */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-purple-500/40 shadow-xl shadow-purple-950/40 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Career Level</p>
                  <p className="text-sm font-bold text-white">Fresher / Entry-Level</p>
                </div>
              </div>

              {/* Floating Badge: Core Stack */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 shadow-xl shadow-indigo-950/40 flex items-center gap-3 animate-float [animation-delay:2s]">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Core Stack</p>
                  <p className="text-sm font-bold text-white">MERN Architecture</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
