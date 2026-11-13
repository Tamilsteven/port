import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Check 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [simStatus, setSimStatus] = useState('Pending Manager Review');
  const [simStep, setSimStep] = useState(2); // 1: Draft, 2: Manager, 3: Dept Head, 4: Approved

  if (!project) return null;

  const images = project.images || [];

  const handleNextImage = () => {
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {project.category}
            </span>
            {project.isInProgress && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
                <Clock className="w-3.5 h-3.5" />
                In Progress
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Title & Headline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-purple-400 text-sm font-medium mt-1">
              Internal Project Identifier: <span className="text-slate-300 font-mono">{project.codeName}</span>
            </p>
          </div>

          {/* Media Preview (Images) */}
          {images.length > 0 && (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 aspect-video flex items-center justify-center">
                <img
                  src={images[activeImgIndex]}
                  alt={`${project.title} screenshot ${activeImgIndex + 1}`}
                  className="max-h-full max-w-full object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-purple-600 transition-colors border border-slate-700 shadow-lg"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-purple-600 transition-colors border border-slate-700 shadow-lg"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/90 text-xs font-mono text-slate-300 border border-slate-700">
                  {activeImgIndex + 1} / {images.length}
                </div>
              </div>

              {/* Thumbnails row */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activeImgIndex === idx
                          ? 'border-purple-500 scale-105 shadow-md shadow-purple-500/30'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Interactive Simulation for "Internal Approval Request Management System" */}
          {project.id === 'internal-approval-system' && (
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold uppercase tracking-wider text-amber-300">
                    Interactive Workflow Demonstration
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                  State: {simStatus}
                </span>
              </div>

              {/* Multi-step hierarchy stepper */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { step: 1, label: '1. Request Raised', role: 'Employee' },
                  { step: 2, label: '2. Manager Review', role: 'Lead / Manager' },
                  { step: 3, label: '3. Dept Sign-off', role: 'Head of Dept' },
                  { step: 4, label: '4. Completed', role: 'Audit Logged' },
                ].map((s) => {
                  const isDone = simStep > s.step || simStep === 4;
                  const isCurrent = simStep === s.step && simStep !== 4;
                  return (
                    <div
                      key={s.step}
                      className={`p-3 rounded-xl border transition-all text-xs ${
                        isDone
                          ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300'
                          : isCurrent
                          ? 'bg-amber-950/30 border-amber-500 text-amber-200 shadow-md shadow-amber-500/10'
                          : 'bg-slate-900 border-slate-800 text-slate-500'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span>{s.label}</span>
                        {isDone && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <p className="text-[11px] opacity-80 mt-1">{s.role}</p>
                    </div>
                  );
                })}
              </div>

              {/* Action buttons to interact with simulation */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 mr-2">Simulate Action:</span>
                <button
                  onClick={() => {
                    if (simStep === 2) {
                      setSimStep(3);
                      setSimStatus('Pending Department Sign-off');
                    } else if (simStep === 3) {
                      setSimStep(4);
                      setSimStatus('Approved & Audit Logged');
                    }
                  }}
                  disabled={simStep === 4}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-40 disabled:hover:bg-emerald-600 transition-colors"
                >
                  Approve Next Stage
                </button>
                <button
                  onClick={() => {
                    setSimStatus('Rejected (Sent back with reason)');
                    setSimStep(1);
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600/80 hover:bg-rose-600 text-white transition-colors"
                >
                  Reject & Return
                </button>
                <button
                  onClick={() => {
                    setSimStep(2);
                    setSimStatus('Pending Manager Review');
                  }}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  Reset Workflow
                </button>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Project Overview</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Key Architectural Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Technologies Utilized</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-950/40 text-purple-300 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950/60 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
