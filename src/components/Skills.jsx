import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  Sparkles, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Layers },
    { id: 'frontend', label: 'Frontend Development', icon: Code2 },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'database', label: 'Database (MongoDB)', icon: Database },
    { id: 'devopsAndTools', label: 'Tools & Version Control', icon: Wrench },
  ];

  const sectionsToRender = activeCategory === 'all' 
    ? [
        { 
          key: 'frontend', 
          title: 'Frontend Architecture', 
          icon: Code2, 
          desc: 'Responsive, reactive, and accessible user interfaces.' 
        },
        { 
          key: 'backend', 
          title: 'Backend & RESTful Services', 
          icon: Server, 
          desc: 'Scalable services, routing, auth & business logic.' 
        },
        { 
          key: 'database', 
          title: 'Database ', 
          icon: Database, 
          desc: 'Foundational NoSQL collections, documents, and CRUD operations.' 
        },
        { 
          key: 'devopsAndTools', 
          title: 'Tools & Version Control', 
          icon: Wrench, 
          desc: 'Git, VS Code, Postman, and modern build tooling.' 
        },
      ]
    : [
        { 
          key: activeCategory, 
          title: categories.find(c => c.id === activeCategory)?.label || '', 
          icon: categories.find(c => c.id === activeCategory)?.icon || Layers,
          desc: activeCategory === 'database' 
            ? 'Foundational NoSQL database knowledge at Fresher Level.' 
            : 'Targeted technical competencies and practical implementation knowledge.' 
        }
      ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-slate-950/60">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MERN Stack & Technical Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skill Matrix</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Organized across Frontend, Backend, Database, and Developer Tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* MERN Stack Highlight Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-indigo-950/40 border border-purple-500/30 shadow-xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Fresher Level Focus</span>
              <h3 className="text-2xl font-extrabold text-white">MERN Full-Stack Foundation</h3>
              <p className="text-sm text-slate-400 max-w-xl">
                Developing web applications where responsive React frontends connect to Node/Express RESTful APIs, with foundational MongoDB integration.
              </p>
            </div>

            {/* Visual MERN Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { letter: 'M', name: 'MongoDB', note: 'Database', color: 'from-emerald-600 to-green-700', text: 'text-emerald-300' },
                { letter: 'E', name: 'Express.js', note: 'REST APIs', color: 'from-slate-700 to-slate-800', text: 'text-slate-200' },
                { letter: 'R', name: 'React.js', note: 'Components', color: 'from-cyan-600 to-blue-700', text: 'text-cyan-300' },
                { letter: 'N', name: 'Node.js', note: 'Backend', color: 'from-green-600 to-emerald-800', text: 'text-green-300' }
              ].map((stack) => (
                <div
                  key={stack.name}
                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-700 shadow-md"
                >
                  <span className={`w-7 h-7 rounded-lg bg-gradient-to-br ${stack.color} flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm`}>
                    {stack.letter}
                  </span>
                  <div>
                    <span className={`text-xs font-semibold block ${stack.text}`}>{stack.name}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{stack.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid without Percentages */}
        <div className="space-y-12">
          {sectionsToRender.map((section) => {
            const Icon = section.icon;
            const items = skillsData[section.key] || [];

            return (
              <div key={section.key} className="space-y-6">
                
                {/* Section Subtitle */}
                <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{section.title}</h3>
                    <p className="text-xs text-slate-400">{section.desc}</p>
                  </div>
                </div>

                {/* Grid of skill cards (No percentage bars) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {items.map((skill, sIdx) => {
                    const isFresher = skill.level === 'Fresher Level';

                    return (
                      <div
                        key={sIdx}
                        className={`p-5 rounded-2xl bg-slate-900/50 border transition-all duration-300 flex flex-col justify-between group ${
                          isFresher 
                            ? 'border-emerald-500/40 hover:border-emerald-400 bg-slate-900/70 shadow-lg shadow-emerald-950/20' 
                            : 'border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900/80'
                        }`}
                      >
                        <div>
                          {/* Card Header: Name + Badge */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <CheckCircle className={`w-4 h-4 shrink-0 transition-colors ${
                                isFresher ? 'text-emerald-400' : 'text-purple-400 group-hover:text-purple-300'
                              }`} />
                              <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                                {skill.name}
                              </h4>
                            </div>

                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-purple-300 border border-slate-700 shrink-0">
                              {skill.tag}
                            </span>
                          </div>

                          {/* Skill Description */}
                          {skill.desc && (
                            <p className="text-xs text-slate-400 leading-relaxed mt-2">
                              {skill.desc}
                            </p>
                          )}
                        </div>

                        {/* Special Fresher Level indicator for MongoDB */}
                        {isFresher && (
                          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-300 font-medium">
                            <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Fresher Level / Foundational</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
