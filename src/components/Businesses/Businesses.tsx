import React, { useState, useEffect, useRef } from 'react';
import { getBusinesses } from '../../services/businessesService';
import { Business } from '../../types';

// Blueprint vector background schematics that tease what's being engineered behind the blur
const renderBlueprintSvg = (id: string, color: string) => {
  switch (id) {
    case 'fleet':
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 400 300" fill="none">
          <circle cx="200" cy="150" r="100" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="150" r="60" stroke={color} strokeWidth="1.5" />
          <circle cx="200" cy="150" r="24" stroke={color} strokeWidth="1" />
          <line x1="100" y1="150" x2="300" y2="150" stroke={color} strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="200" y1="50" x2="200" y2="250" stroke={color} strokeWidth="0.8" strokeDasharray="3 3" />
          {/* Drone rotor pods */}
          <circle cx="130" cy="90" r="22" stroke={color} strokeWidth="1.5" />
          <circle cx="270" cy="90" r="22" stroke={color} strokeWidth="1.5" />
          <circle cx="130" cy="210" r="22" stroke={color} strokeWidth="1.5" />
          <circle cx="270" cy="210" r="22" stroke={color} strokeWidth="1.5" />
          <path d="M130 90 L270 210 M270 90 L130 210" stroke={color} strokeWidth="0.7" opacity="0.4" />
          {/* Vector flight path */}
          <path d="M40 230 Q 140 180, 200 150 T 360 80" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="2 4" />
          <text x="210" y="70" fill={color} fontSize="9" fontFamily="monospace" letterSpacing="1">V-9 THRUST MATRIX</text>
          <text x="70" y="270" fill="#FAF8F5" fontSize="8" fontFamily="monospace" opacity="0.6">ALT: 120M // VEL: 68KM/H</text>
        </svg>
      );
    case 'core':
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 400 300" fill="none">
          {/* Neural graph nodes */}
          <g stroke={color} strokeWidth="1">
            <line x1="80" y1="70" x2="160" y2="120" opacity="0.4" />
            <line x1="80" y1="150" x2="160" y2="120" opacity="0.6" />
            <line x1="80" y1="230" x2="160" y2="180" opacity="0.4" />
            <line x1="160" y1="120" x2="240" y2="100" opacity="0.7" />
            <line x1="160" y1="180" x2="240" y2="190" opacity="0.5" />
            <line x1="240" y1="100" x2="320" y2="150" opacity="0.8" />
            <line x1="240" y1="190" x2="320" y2="150" opacity="0.8" />
            <line x1="160" y1="120" x2="240" y2="190" opacity="0.3" strokeDasharray="2 3" />
            <line x1="160" y1="180" x2="240" y2="100" opacity="0.3" strokeDasharray="2 3" />
          </g>
          {/* Synaptic nodes */}
          <circle cx="80" cy="70" r="6" fill={color} fillOpacity="0.3" stroke={color} />
          <circle cx="80" cy="150" r="7" fill={color} fillOpacity="0.4" stroke={color} />
          <circle cx="80" cy="230" r="6" fill={color} fillOpacity="0.3" stroke={color} />
          <circle cx="160" cy="120" r="10" fill={color} fillOpacity="0.5" stroke="#FAF8F5" />
          <circle cx="160" cy="180" r="9" fill={color} fillOpacity="0.4" stroke={color} />
          <circle cx="240" cy="100" r="11" fill={color} fillOpacity="0.6" stroke="#FAF8F5" />
          <circle cx="240" cy="190" r="8" fill={color} fillOpacity="0.4" stroke={color} />
          <circle cx="320" cy="150" r="14" fill={color} fillOpacity="0.8" stroke="#FAF8F5" strokeWidth="2" />
          <text x="260" y="270" fill={color} fontSize="8" fontFamily="monospace">TENSOR CORES: 48B</text>
          <text x="40" y="40" fill="#FAF8F5" fontSize="8" fontFamily="monospace" opacity="0.7">INF_LATENCY: 0.84ms</text>
        </svg>
      );
    case 'cleangrid':
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 400 300" fill="none">
          {/* Hexagonal solar microgrid structure */}
          <path d="M160 80 L200 60 L240 80 L240 120 L200 140 L160 120 Z" stroke={color} strokeWidth="1.5" />
          <path d="M120 145 L160 125 L200 145 L200 185 L160 205 L120 185 Z" stroke={color} strokeWidth="1.2" opacity="0.8" />
          <path d="M200 145 L240 125 L280 145 L280 185 L240 205 L200 185 Z" stroke={color} strokeWidth="1.2" opacity="0.8" />
          <path d="M160 210 L200 190 L240 210 L240 250 L200 270 L160 250 Z" stroke={color} strokeWidth="1" opacity="0.5" />
          {/* Sine energy wave */}
          <path d="M40 150 Q 90 90, 140 150 T 240 150 T 340 150" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="200" cy="145" r="4" fill="#FAF8F5" />
          <text x="215" y="235" fill={color} fontSize="8" fontFamily="monospace">SOLID-STATE MATRIX</text>
          <text x="50" y="270" fill="#FAF8F5" fontSize="8" fontFamily="monospace" opacity="0.6">VPP STATUS: 100% OFF-GRID</text>
        </svg>
      );
    case 'horizon':
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 400 300" fill="none">
          {/* Isometric commerce block network */}
          <g stroke={color} strokeWidth="1">
            <path d="M100 130 L160 100 L220 130 L160 160 Z" />
            <path d="M100 130 L100 160 L160 190 L160 160" />
            <path d="M220 130 L220 160 L160 190 L160 160" />

            <path d="M220 90 L280 60 L340 90 L280 120 Z" opacity="0.6" />
            <path d="M220 90 L220 120 L280 150 L280 120" opacity="0.6" />
            <path d="M340 90 L340 120 L280 150 L280 120" opacity="0.6" />
          </g>
          <path d="M160 100 L280 60" stroke="#FAF8F5" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="220" cy="80" r="3" fill="#FAF8F5" />
          <text x="60" y="240" fill={color} fontSize="8" fontFamily="monospace">ZK-ROLLUP COMMERCE SYNC</text>
          <text x="230" y="200" fill="#FAF8F5" fontSize="8" fontFamily="monospace" opacity="0.6">45,000 TPS SETTLEMENT</text>
        </svg>
      );
    default:
      return (
        <svg className="w-full h-full opacity-35" viewBox="0 0 400 300" fill="none">
          {/* Maglev 3D cylindrical rack */}
          <rect x="140" y="60" width="120" height="180" rx="4" stroke={color} strokeWidth="1.2" />
          <line x1="140" y1="100" x2="260" y2="100" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="140" y1="140" x2="260" y2="140" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="140" y1="180" x2="260" y2="180" stroke={color} strokeWidth="0.8" strokeDasharray="3 2" />
          <line x1="200" y1="60" x2="200" y2="240" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="4 2" />
          <rect x="175" y="125" width="50" height="30" rx="2" fill={color} fillOpacity="0.4" stroke="#FAF8F5" strokeWidth="1.2" />
          <text x="70" y="270" fill={color} fontSize="8" fontFamily="monospace">3D MAGLEV SHUTTLE // 15 M/S</text>
        </svg>
      );
  }
};

interface CardState {
  isHovered: boolean;
  isPeeking: boolean;
  mouseX: number;
  mouseY: number;
}

const Businesses: React.FC = () => {
  const [projects, setProjects] = useState<Business[]>([]);
  const [_loading, setLoading] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Per-card hover & lens state for the frosted blur screen interaction
  const [cardStates, setCardStates] = useState<{ [id: string]: CardState }>({});

  // Active modal project for Classified Dossier & Early Access
  const [activeDossier, setActiveDossier] = useState<Business | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState<string>('');
  const [assignedPass, setAssignedPass] = useState<{ id: string; code: string; position: number } | null>(null);
  const [copiedKey, setCopiedKey] = useState<boolean>(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getBusinesses();
        setProjects(data);
      } catch (err) {
        console.error('Failed to load upcoming projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCardMouseMove = (id: string, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = Math.round(e.clientX - rect.left);
    const mouseY = Math.round(e.clientY - rect.top);
    setCardStates(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || { isPeeking: false }),
        isHovered: true,
        mouseX,
        mouseY
      }
    }));
  };

  const handleCardMouseEnter = (id: string) => {
    setCardStates(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || { mouseX: 160, mouseY: 120, isPeeking: false }),
        isHovered: true
      }
    }));
  };

  const handleCardMouseLeave = (id: string) => {
    setCardStates(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || { mouseX: 160, mouseY: 120 }),
        isHovered: false,
        isPeeking: false
      }
    }));
  };

  const togglePeek = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCardStates(prev => ({
      ...prev,
      [id]: {
        ...(prev[id] || { mouseX: 160, mouseY: 120, isHovered: true }),
        isPeeking: !prev[id]?.isPeeking
      }
    }));
  };

  const openDossier = (project: Business, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setActiveDossier(project);
    setWaitlistEmail('');
    setCopiedKey(false);

    // Check if user already claimed a pass for this project
    try {
      const savedPasses = localStorage.getItem('aproxio_early_access_keys');
      if (savedPasses) {
        const parsed = JSON.parse(savedPasses);
        if (parsed[project.id]) {
          setAssignedPass(parsed[project.id]);
          return;
        }
      }
    } catch {
      // Ignore
    }
    setAssignedPass(null);
  };

  const handleRequestPass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !activeDossier) return;

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const passCode = `APX-${activeDossier.id.toUpperCase()}-${randomSuffix}`;
    const queuePosition = Math.floor(18 + Math.random() * 80);

    const passData = {
      id: activeDossier.id,
      code: passCode,
      position: queuePosition
    };

    setAssignedPass(passData);

    try {
      const existing = localStorage.getItem('aproxio_early_access_keys');
      const parsed = existing ? JSON.parse(existing) : {};
      parsed[activeDossier.id] = passData;
      localStorage.setItem('aproxio_early_access_keys', JSON.stringify(parsed));
    } catch {
      // Storage unavailable
    }
  };

  const copyToClipboard = () => {
    if (!assignedPass) return;
    navigator.clipboard.writeText(assignedPass.code);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2400);
  };

  return (
    <section className="py-16 lg:py-24 border-t border-hairline relative" id="projects">
      {/* Invisible anchor for backward-compatibility */}
      <div id="businesses" className="relative -top-24 pointer-events-none" />

      {/* Header with Classified Skunkworks Badge & Navigation */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div className="max-w-2xl">
          {/* Curiosity Skunkworks Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 radar-beacon"></span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-text-primary uppercase">
              Aproxio Labs // Stealth R&amp;D
            </span>
          </div>

          <div className="inline-block pb-2 mb-2">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-medium text-text-primary tracking-tight">
              Upcoming projects
            </h2>
            <div className="w-12 h-[3px] bg-primary mt-1"></div>
          </div>
          <p className="font-body-lg text-body-lg text-text-secondary leading-relaxed mt-4">
            A confidential preview of next-generation autonomous systems, neural logistics networks, and sustainable infrastructure platforms currently being engineered behind closed doors.
          </p>

          {/* Interactive Curiosity Hint */}
          <div className="flex flex-wrap items-center gap-4 mt-4 font-mono text-[11px] text-text-tertiary">
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-primary">visibility</span>
              Hover specs to decrypt telemetry
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-primary">lock_open</span>
              Tap to request alpha clearance
            </span>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={() => scroll('left')}
            aria-label="Previous project" 
            className="w-11 h-11 rounded-full bg-surface-container hover:bg-surface-container-high transition-all flex items-center justify-center text-text-primary active:scale-95 cursor-pointer border border-hairline shadow-sm hover:shadow"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            aria-label="Next project" 
            className="w-11 h-11 rounded-full bg-surface-container hover:bg-surface-container-high transition-all flex items-center justify-center text-text-primary active:scale-95 cursor-pointer border border-hairline shadow-sm hover:shadow"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Project Cards Horizontal Scrollable Grid */}
      <div 
        ref={containerRef}
        className="grid grid-flow-col auto-cols-[300px] sm:auto-cols-[340px] lg:auto-cols-[360px] xl:auto-cols-[380px] gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => {
          const cardState = cardStates[project.id] || { isHovered: false, isPeeking: false, mouseX: 180, mouseY: 120 };
          const isPeeking = cardState.isPeeking;
          const isHovered = cardState.isHovered;

          return (
            <div 
              key={project.id}
              onMouseMove={(e) => handleCardMouseMove(project.id, e)}
              onMouseEnter={() => handleCardMouseEnter(project.id)}
              onMouseLeave={() => handleCardMouseLeave(project.id)}
              className="group flex flex-col justify-between p-6 bg-surface-muted border border-hairline hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl rounded-xl relative overflow-hidden"
            >
              <div>
                {/* 
                  ====================================================
                  THE "BLUR SCREEN" CYBER VIEWPORT
                  Frosted glass visor with ambient plasma glow, blueprint 
                  schematic, scanning beam, and unique COMING SOON status
                  ====================================================
                */}
                <div 
                  onClick={(e) => openDossier(project, e)}
                  className="w-full aspect-[4/3] rounded-lg relative overflow-hidden cursor-pointer select-none bg-[#090A0D] border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-inner"
                >
                  {/* Layer 1: Ambient Floating Colored Plasma Aura */}
                  <div 
                    className="absolute -inset-10 float-aura pointer-events-none opacity-60 transition-opacity duration-500 group-hover:opacity-85"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.color} 0%, rgba(10,10,12,0) 70%)`,
                      filter: 'blur(35px)'
                    }}
                  />

                  {/* Layer 2: Vector Blueprint Schematics (revealed beneath the blur) */}
                  <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                    {renderBlueprintSvg(project.id, project.color)}
                  </div>

                  {/* Layer 3: Dynamic Laser Scanline Beam */}
                  <div className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent scanline-beam pointer-events-none" />

                  {/* 
                    Layer 4: THE FROSTED BLUR SCREEN
                    High-refraction frosted glass panel that blurs the blueprint.
                    Reduces blur when user hovers or clicks "Peek".
                  */}
                  <div 
                    className={`absolute inset-0 transition-all duration-500 flex flex-col justify-between p-5 text-white ${
                      isPeeking 
                        ? 'backdrop-blur-[2px] bg-black/35' 
                        : isHovered 
                        ? 'backdrop-blur-[12px] bg-black/60' 
                        : 'backdrop-blur-[22px] bg-black/75'
                    }`}
                  >
                    {/* Glass Sheen Refraction */}
                    <div className="absolute inset-0 glass-reflection pointer-events-none opacity-80" />

                    {/* Interactive Cursor Spotlight Glare inside the glass */}
                    {isHovered && (
                      <div 
                        className="absolute pointer-events-none w-48 h-48 rounded-full transition-opacity duration-200 opacity-30"
                        style={{
                          left: `${cardState.mouseX - 96}px`,
                          top: `${cardState.mouseY - 96}px`,
                          background: `radial-gradient(circle, ${project.color} 0%, rgba(255,255,255,0.4) 40%, transparent 70%)`,
                          filter: 'blur(16px)'
                        }}
                      />
                    )}

                    {/* HUD Corner Framing Brackets [ + ] */}
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-white/30 pointer-events-none">┌</div>
                    <div className="absolute top-2 right-2 text-[9px] font-mono text-white/30 pointer-events-none">┐</div>
                    <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/30 pointer-events-none">└</div>
                    <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/30 pointer-events-none">┘</div>

                    {/* TOP STATUS BAR: UNIQUE "COMING SOON" BRANDING */}
                    <div className="relative z-10 flex items-center justify-between w-full">
                      {/* Unique Glowing COMING SOON Badge with Radar Beacon */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm">
                        <span 
                          className="w-2 h-2 rounded-full radar-beacon shrink-0" 
                          style={{ color: project.color, backgroundColor: project.color }}
                        />
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-white/95">
                          COMING SOON
                        </span>
                        {project.launchWindow && (
                          <span className="font-mono text-[8px] text-white/60 pl-1 border-l border-white/20">
                            {project.launchWindow}
                          </span>
                        )}
                      </div>

                      {/* Peek Blueprint Lens Toggle Button */}
                      <button
                        onClick={(e) => togglePeek(project.id, e)}
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-all flex items-center gap-1 cursor-pointer ${
                          isPeeking
                            ? 'bg-white/25 border-white text-white'
                            : 'bg-black/40 hover:bg-white/15 border-white/15 text-white/70 hover:text-white'
                        }`}
                        title="Peek behind frosted blur screen"
                      >
                        <span className="material-symbols-outlined text-[12px]">
                          {isPeeking ? 'blur_on' : 'visibility'}
                        </span>
                        {isPeeking ? 'Blurred' : 'Peek'}
                      </button>
                    </div>

                    {/* CENTER STAGE: Project Name & Futuristic Codename */}
                    <div className="relative z-10 text-center my-auto">
                      {/* Classified Codename Tag */}
                      {project.codename && (
                        <div className="inline-block mb-1.5">
                          <span 
                            className="font-mono text-[9px] tracking-[0.2em] font-medium uppercase px-2 py-0.5 rounded bg-black/40 border border-white/10"
                            style={{ color: project.color }}
                          >
                            // {project.codename}
                          </span>
                        </div>
                      )}

                      {/* Main Title */}
                      <h3 className="font-headline text-2xl sm:text-[26px] font-semibold tracking-tight text-white capitalize drop-shadow-md">
                        {project.title}
                      </h3>

                      {/* Subtitle with Tech Monospace Styling */}
                      <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-white/65 mt-1.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* BOTTOM HUD TELEMETRY BAR */}
                    <div className="relative z-10 flex items-center justify-between text-[9px] font-mono text-white/50 border-t border-white/10 pt-2">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {project.clearanceLevel || 'RESTRICTED INTEL'}
                      </span>
                      <span className="hover:text-white transition-colors flex items-center gap-0.5">
                        Inspect Dossier <span className="material-symbols-outlined text-[11px]">open_in_new</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* 
                  ====================================================
                  CARD CONTENT & CURIOSITY-INDUCING ELEMENTS
                  ====================================================
                */}
                <div className="mt-5">
                  {/* Tagline */}
                  <h4 className="font-title text-[17px] font-medium text-text-primary leading-snug group-hover:text-primary transition-colors">
                    {project.tagline}
                  </h4>

                  {/* Description */}
                  <p className="font-body-md text-[13px] text-text-secondary mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 
                    CLASSIFIED SPEC CHIP (THE CURIOSITY ENGINE)
                    Redacted black bars that decrypt and reveal on hover!
                  */}
                  {project.classifiedSpec && (
                    <div className="mt-4 p-3 rounded-lg bg-surface border border-hairline/80 hover:border-primary/30 transition-all">
                      <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary mb-1">
                        <span className="flex items-center gap-1 font-semibold uppercase tracking-wider text-text-secondary">
                          <span className="material-symbols-outlined text-[12px] text-amber-500">lock</span>
                          {project.classifiedSpec.label}
                        </span>
                        <span className="text-[9px] text-primary/70 font-mono">
                          {isHovered ? '[DECRYPTED]' : '[HOVER TO REVEAL]'}
                        </span>
                      </div>

                      {/* Redacted Bar vs Decrypted Value */}
                      <div className="font-mono text-[11px] font-medium mt-1 min-h-[20px] flex items-center">
                        {isHovered ? (
                          <span 
                            className="font-mono font-bold tracking-tight text-text-primary animate-pulse flex items-center gap-1"
                            style={{ color: project.color }}
                          >
                            <span className="material-symbols-outlined text-[13px]">key</span>
                            {project.classifiedSpec.revealedValue}
                          </span>
                        ) : (
                          <span className="text-text-tertiary tracking-widest select-none cursor-pointer">
                            ████████████████
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Mini Telemetry Metrics Pills */}
                  {project.telemetry && project.telemetry.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                      {project.telemetry.map((t, i) => (
                        <div key={i} className="p-2 rounded bg-surface/60 border border-hairline/50">
                          <span className="block font-mono text-[9px] text-text-tertiary uppercase truncate">
                            {t.label}
                          </span>
                          <span className="block font-mono text-[11px] font-semibold text-text-primary mt-0.5">
                            {t.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* CARD ACTION: Unlock Dossier & Request Early Clearance */}
              <div className="pt-5 mt-4 border-t border-hairline/60 flex items-center justify-between">
                <button
                  onClick={(e) => openDossier(project, e)}
                  className="font-label-md text-[13px] text-text-primary font-semibold flex items-center gap-1.5 hover:text-primary group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Unlock classified dossier</span>
                  <span className="material-symbols-outlined text-[16px] text-primary">arrow_forward</span>
                </button>

                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                  {project.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 
        ====================================================
        CLASSIFIED DOSSIER & ALPHA ACCESS MODAL
        Piques deep curiosity and lets visitors claim an encrypted 
        VIP early-access pass (#APX-FLEET-8492)
        ====================================================
      */}
      {activeDossier && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveDossier(null)}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl bg-canvas border border-hairline rounded-2xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
          >
            {/* Modal Top Header with Frosted Screen Aesthetic */}
            <div className="p-6 bg-primary text-on-primary relative overflow-hidden">
              {/* Colored Glow */}
              <div 
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-40 pointer-events-none"
                style={{
                  background: activeDossier.color,
                  filter: 'blur(30px)'
                }}
              />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 font-mono text-[10px] uppercase font-bold tracking-wider mb-2 border border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 radar-beacon"></span>
                    {activeDossier.clearanceLevel || 'TIER-1 CLASSIFIED'}
                  </div>
                  <h3 id="dossier-title" className="font-headline text-2xl sm:text-3xl font-semibold capitalize tracking-tight text-white">
                    {activeDossier.title}
                  </h3>
                  <p className="font-mono text-[11px] text-white/70 tracking-widest uppercase mt-1">
                    CODENAME: {activeDossier.codename || 'STEALTH INITIATIVE'}
                  </p>
                </div>

                <button 
                  onClick={() => setActiveDossier(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close dossier"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-text-primary">
              {/* Mission Statement */}
              <div>
                <h4 className="font-mono text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">
                  // Mission Directive
                </h4>
                <p className="font-body-md text-[14px] text-text-secondary leading-relaxed mt-2">
                  {activeDossier.dossier?.mission || activeDossier.description}
                </p>
              </div>

              {/* Architecture Blueprint Highlights */}
              {activeDossier.dossier?.architecture && (
                <div>
                  <h4 className="font-mono text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">
                    // Core Architectural Pillars
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {activeDossier.dossier.architecture.map((arch, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[13px] text-text-primary">
                        <span className="material-symbols-outlined text-[16px] text-emerald-600 shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Readiness Progress Bar */}
              {activeDossier.dossier && (
                <div className="p-4 rounded-xl bg-surface border border-hairline">
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="font-semibold text-text-secondary">SYSTEM READINESS</span>
                    <span className="font-bold text-text-primary">{activeDossier.dossier.readiness}% COMPLETE</span>
                  </div>
                  <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${activeDossier.dossier.readiness}%`,
                        backgroundColor: activeDossier.color 
                      }}
                    />
                  </div>
                  <p className="font-mono text-[10px] text-text-tertiary mt-2">
                    Target: {activeDossier.dossier.targetDeployment}
                  </p>
                </div>
              )}

              {/* Interactive Alpha Pass Request / Claimed Status */}
              <div className="pt-2">
                {assignedPass ? (
                  <div className="p-5 rounded-xl bg-primary text-on-primary border border-white/10 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 radar-beacon"></span>
                        Alpha Clearance Granted
                      </span>
                      <span className="font-mono text-[10px] text-white/50">
                        QUEUE POSITION #{assignedPass.position}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/15">
                      <div>
                        <span className="block font-mono text-[9px] text-white/50">YOUR ENCRYPTED ACCESS KEY</span>
                        <span className="font-mono text-base font-bold text-white tracking-wider">
                          {assignedPass.code}
                        </span>
                      </div>
                      <button
                        onClick={copyToClipboard}
                        className="px-3 py-1.5 rounded bg-white/15 hover:bg-white/25 text-white font-mono text-xs flex items-center gap-1 transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">
                          {copiedKey ? 'check' : 'content_copy'}
                        </span>
                        {copiedKey ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <p className="font-mono text-[11px] text-white/70 mt-3 leading-snug">
                      Your clearance token has been registered in the Aproxio Alpha Ledger. You will receive private briefing telemetry prior to launch.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRequestPass} className="space-y-3">
                    <div className="flex flex-col">
                      <label htmlFor="alpha-email" className="font-mono text-[11px] font-semibold text-text-secondary uppercase">
                        Request Priority Alpha Clearance
                      </label>
                      <span className="text-[12px] text-text-tertiary mb-2">
                        Get invitations to private sandbox tests and unreleased technical whitepapers.
                      </span>
                      <div className="flex gap-2">
                        <input
                          id="alpha-email"
                          type="email"
                          required
                          value={waitlistEmail}
                          onChange={(e) => setWaitlistEmail(e.target.value)}
                          placeholder="institutional-lead@firm.com"
                          className="flex-1 px-3.5 py-2.5 rounded-lg bg-surface border border-hairline focus:border-primary outline-none text-sm text-text-primary placeholder:text-text-tertiary"
                        />
                        <button
                          type="submit"
                          className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-medium text-sm hover:bg-primary/90 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-sm hover:shadow"
                        >
                          <span>Claim Pass</span>
                          <span className="material-symbols-outlined text-[16px]">key</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-surface border-t border-hairline flex items-center justify-between text-xs text-text-tertiary">
              <span className="font-mono text-[10px]">
                APX LABS PROTOCOL // CONFIDENTIAL
              </span>
              <button 
                onClick={() => setActiveDossier(null)}
                className="font-medium text-text-primary hover:underline cursor-pointer text-xs"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Businesses;
