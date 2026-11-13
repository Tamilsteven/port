import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Users
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Zap className="w-3.5 h-3.5" />
            <span>Work History & Practical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            3.2 years of dedicated technical problem solving, team collaboration, and industrial maintenance.
          </p>
        </div>

        {/* Experience Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-10 pb-12 border-l-2 border-amber-500/40 last:border-l-0 last:pb-0 group"
            >
              {/* Timeline marker icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-lg shadow-amber-500/20">
                <Zap className="w-4 h-4" />
              </div>

              {/* Main Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl backdrop-blur-sm space-y-6">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-800 pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        {exp.period} Experience
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white pt-1">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300 pt-0.5">
                      <span className="flex items-center gap-1.5 font-medium text-amber-300">
                        <Building2 className="w-4 h-4 text-amber-400" />
                        {exp.company}
                      </span>
                      <span className="text-slate-400">
                        under sub-contract ({exp.organization})
                      </span>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period} Total
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <p className="text-slate-200 leading-relaxed text-sm sm:text-base italic">
                    "{exp.description}"
                  </p>
                </div>

                {/* Key Responsibilities & Achievements */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Key Responsibilities & Operational Impact</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Workplace Qualities */}
                <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                  <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <span className="font-semibold text-white">Workplace Dedication:</span> Demonstrated continuous teamwork, high accountability, and willingness to assist across all industrial operations during 3.2 years of service.
                  </div>
                </div>

                {/* Skill Pills */}
                {exp.skillsLearned && exp.skillsLearned.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-amber-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
