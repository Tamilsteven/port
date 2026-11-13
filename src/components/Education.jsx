import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Calendar, 
  Sparkles,
  School,
  CheckCircle2,
  BadgeCheck,
  Building
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Education() {
  const iconMap = {
    GraduationCap,
    BookOpen,
    Award
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Certification</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering degree background followed by specialized MERN full-stack developer training.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          {educationData.map((edu, idx) => {
            const Icon = iconMap[edu.icon] || School;

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Icon & Score */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {edu.score}
                    </span>
                  </div>

                  {/* Degree & Institution */}
                  <div className="space-y-1.5 pt-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Details Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                    {edu.details}
                  </p>

                </div>

                {/* Footer Period Badge */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-purple-400" />
                  <span>{edu.period}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        {certificationsData && certificationsData.length > 0 && (
          <div className="space-y-8 pt-4">
            
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Professional Certifications & Courses</h3>
                <p className="text-xs text-slate-400">Specialized technical coursework and full-stack software training</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {certificationsData.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 via-slate-900/80 to-indigo-950/30 border border-purple-500/30 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    
                    {/* Left: Icon, Title & Details */}
                    <div className="space-y-4 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {cert.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {cert.status}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 text-slate-300 font-medium text-sm">
                          <Building className="w-4 h-4 text-purple-400" />
                          <span>{cert.institution}</span>
                        </div>
                      </div>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {cert.details}
                      </p>

                      {/* Skills Covered Pills */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs text-slate-400 font-medium">Curriculum & Competencies:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skillsCovered.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/90 text-purple-200 border border-purple-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Date Badge */}
                    <div className="shrink-0 flex lg:flex-col items-center lg:items-end justify-between gap-2 border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
                      <div className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700/80 text-xs text-slate-300 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>Completed: <strong className="text-white">{cert.period}</strong></span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
