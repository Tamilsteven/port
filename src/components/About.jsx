import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Sparkles,
  Workflow, 
  CheckCircle, 
  GraduationCap, 
  Award, 
  Users,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Building responsive, modern user interfaces using React.js, Tailwind CSS, Bootstrap 5, and JavaScript (ES6+)."
    },
    {
      icon: Server,
      title: "Backend & REST APIs",
      description: "Developing backend routing, Express middleware, RESTful API endpoints, and token-based authentication using Node.js."
    },
    {
      icon: Database,
      title: "MongoDB ",
      description: "Foundational NoSQL collections, JSON documents, schema definitions, and fundamental CRUD data operations."
    },
    {
      icon: Users,
      title: "Work Ethic & Teamwork",
      description: "Proactive team player with high reliability, respectful collaboration, and eagerness to continuously learn from experienced mentors."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Candidate Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Fresher MERN Full-Stack Developer with a degree in Computer Science & Engineering, motivated to create responsive, user-friendly digital solutions.
          </p>
        </div>

        {/* Narrative & Stats Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Story Box */}
          <div className="lg:col-span-8 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Workflow className="w-6 h-6 text-purple-400" />
                <span>MERN Full-Stack Developer (Fresher Level)</span>
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                I am a graduate in <span className="text-white font-semibold">Computer Science & Engineering (B.E., 2020)</span> from RVS Padmavathy College of Engineering and Technology, and successfully completed the <span className="text-purple-300 font-semibold">MERN Full-Stack Developer Course at SLA Institute (October 2026)</span>.
              </p>

              <p className="text-slate-300 leading-relaxed">
                As a fresher developer, I have developed complete hands-on applications from scratch—including an e-commerce shopping platform, as well as an internal approval request management system in progress. I enjoy translating wireframes into functional, clean React code, writing structured RESTful endpoints, and learning software best practices.
              </p>

              {/* Distinct Note for Prior Non-IT Work Experience */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-sm space-y-1">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>Prior Workplace Background:</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Before pursuing my full-time software engineering path, I worked for 3.2 years as an Electrical Support Technician at IFF Pvt Ltd (under Sri Venkateswara Enterprises sub-contract). This gave me real-world workplace discipline: dependability, punctuality, strong communication, and excellent teamwork.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center justify-between text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>B.E. Computer Science & Eng.</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>MERN Full-Stack (Fresher)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Immediate Joiner</span>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/40 transition-colors flex flex-col justify-center items-center text-center group"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400 mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
