import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const experiences = [
  {
    company: "Priority Payment Systems / BairesDev",
    period: "2022-2025",
    location: "Alpharetta GA, US (Remote)",
    achievements: [
      "Developed and maintained microservices for Mastercard, Visa, Amex.",
      "Integrated Kafka, Redis, PostgreSQL, MySQL.",
      "Testing with Jest, Chai, Mocha (100% coverage).",
      "Node.js, C#"
    ],
    links: [
      { name: "BairesDev", url: "https://bairesdev.com" },
      { name: "Priority Payment Systems", url: "https://prioritycommerce.com/smb-payments/" }
    ]
  },
  {
    company: "Propane / Exomindset",
    period: "2025 - 2026",
    location: "San Francisco CA, US (Remote)",
    achievements: [
      "Propane Studio - DRIL: Development of a Digital Realty tool for datacenter visualization in Three.js, React, postgres, Localstack, AWS, vite and other tools",
      "I18n, i18next, react-i18next",
      "Material-UI",
      "zustand",
      "vite",
      "grcp",
      "Localstack",
      "AWS",
      "postgres",
      "Three.js",
    ],
    links: [
      { name: "Propane Studio - DRIL", url: "https://propane.agency/" },
    ]
  },
  {
    company: "SaaS Developer Solo",
    period: "2025",
    location: "Remote",
    achievements: [
      "Built and scaled Pedegas.com, an AI-powered platform for stock, client, and order management, reaching $500 MRR.",
      "Developed and maintained Giftsqr.com, a QR code generator SaaS for couples and events, achieving $400 MRR."
    ],
    links: [
      { name: "Pedegas", url: "https://pedegas.com" },
      { name: "Gifts QR", url: "https://giftsqr.com" }
    ]
  },
  {
    company: "Nkey",
    period: "2022-2023",
    location: "Santa Catarina RS, Brazil (Remote)",
    achievements: [
      "Led health platform development with Node.js, NestJS.",
      "Used Docker, PostgreSQL, MySQL for scalable solutions.",
      "Supported thousands of simultaneous connections."
    ],
    links: [
      { name: "Nkey", url: "http://nkey.com.br/" },
      { name: "Dígitro", url: "https://www.digitro.com/" }
    ]
  },
  {
    company: "Bank of Brazil / GlobalHitss",
    period: "2022-2023",
    location: "Brasilia DF, Brazil",
    achievements: [
      "Automated microservices to reduce AWS costs (-20%).",
      "Monitoring with Grafana, Prometheus."
    ],
    links: [
      { name: "Bank of Brazil", url: "https://www.bb.com.br/site/" }
    ]
  },
  {
    company: "Tsuru Bots",
    period: "2017-2018",
    location: "Teresina PI, Brazil (Remote)",
    achievements: [
      "Built bots and crawlers with Node.js, Python, Puppeteer.",
      "Developed APIs for WhatsApp, Instagram, Facebook.",
      "Reduced external API usage by 70%."
    ],
    links: [
      { name: "Fastzap", url: "https://www.fastzap.chat/" }
    ]
  },
  {
    company: "Apollo Gas",
    period: "2016-2019",
    location: "Caxias MA, Brazil",
    achievements: [
      "POS systems with Electron, Python, Flask.",
      "Frontend with React, Vue, jQuery, Websockets.",
      "Migrated to NextJS, Dockerized with NGINX."
    ],
    links: [
      { name: "Apollo Gás", url: "https://www.apollogas.com.br/" }
    ]
  }
];

const education = [
  { institution: "Federal University of Piauí", degree: "Electrical Engineering (incomplete)" },
  { institution: "Federal Institute of Maranhão", degree: "IT Technician" }
];

const techStack = [
  { name: "AWS", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', noFilter: true },
  { name: "GCP", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: "Node.js", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: "Python", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: "C#", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: "React", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: "Remix", icon: 'https://raw.githubusercontent.com/remix-run/remix/main/packages/remix/public/favicon.svg', noFilter: true },
  { name: "Next.js", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: "NestJS", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg', noFilter: true },
  { name: "Vue.js", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: "PHP", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: "Docker", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: "Kubernetes", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: "Ansible", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: "Terraform", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original-wordmark.svg', noFilter: true },
  { name: "TypeScript", icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg' },
  { name: "PostgreSQL", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: "MongoDB", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: "Redis", icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-plain.svg' },
  { name: "Kafka", icon: 'https://openwhisk.apache.org/images/icons/icon-kafka-white-trans.png', noFilter: true },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/sostenesapollo", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sostenesapollo/", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/SostenesApollo", icon: "twitter" },
  { name: "Email", url: "mailto:sostenesapollo25@gmail.com", icon: "email" },
  { name: "WhatsApp", url: "https://wa.me/+5599988284904", icon: "whatsapp" },
  { name: "CV", url: "https://docs.google.com/document/d/1qUf3PMYQoJNL-5P1Pt3HmB7L-P7ebl0Efs_O79bT874/edit?usp=sharing", icon: "cv" },
];

const interfaceTabs = [
  { id: "about", label: "Experience", socket: "EXP", color: "cyan" },
  { id: "tech", label: "Tech Stack", socket: "TECH", color: "violet" },
  { id: "education", label: "Education", socket: "EDU", color: "amber" },
];

const bootLines = [
  "APOLLO CORE // BIOS v10.6",
  "Checking remote systems... OK",
  "Loading microservice history... OK",
  "Syncing cloud credentials... OK",
  "Awaiting operator input."
];

const Icon = ({ name, className = "" }) => {
  const icons = {
    github: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    twitter: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    whatsapp: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
    cv: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  };
  return icons[name] || null;
};

const createSoundEngine = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    return null;
  }

  const context = new AudioContext();
  const master = context.createGain();
  master.gain.value = 0.18;
  master.connect(context.destination);

  const resume = async () => {
    if (context.state === "suspended") {
      await context.resume();
    }
  };

  const tone = async ({ frequency = 440, duration = 0.08, type = "square", gain = 0.12, slideTo }) => {
    await resume();
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);
    if (slideTo) {
      oscillator.frequency.exponentialRampToValueAtTime(slideTo, now + duration);
    }

    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(gain, now + 0.01);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    oscillator.connect(envelope);
    envelope.connect(master);
    oscillator.start(now);
    oscillator.stop(now + duration + 0.02);
  };

  const staticBurst = async () => {
    await resume();
    const bufferSize = context.sampleRate * 0.18;
    const buffer = context.createBuffer(1, bufferSize, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i += 1) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }

    const noise = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const envelope = context.createGain();
    const now = context.currentTime;

    filter.type = "bandpass";
    filter.frequency.value = 1800;
    filter.Q.value = 0.8;
    envelope.gain.setValueAtTime(0.08, now);
    envelope.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

    noise.buffer = buffer;
    noise.connect(filter);
    filter.connect(envelope);
    envelope.connect(master);
    noise.start(now);
  };

  return {
    power: async () => {
      await staticBurst();
      await tone({ frequency: 86, duration: 0.22, type: "sawtooth", gain: 0.11, slideTo: 220 });
      setTimeout(() => tone({ frequency: 520, duration: 0.08, type: "triangle", gain: 0.08 }), 130);
    },
    click: () => tone({ frequency: 190, duration: 0.045, type: "square", gain: 0.08, slideTo: 95 }),
    confirm: () => tone({ frequency: 660, duration: 0.07, type: "triangle", gain: 0.08 }),
    error: async () => {
      await tone({ frequency: 130, duration: 0.08, type: "sawtooth", gain: 0.1, slideTo: 72 });
      setTimeout(() => tone({ frequency: 98, duration: 0.08, type: "sawtooth", gain: 0.08 }), 90);
    },
    staticBurst,
    setMuted: (muted) => {
      master.gain.setTargetAtTime(muted ? 0 : 0.18, context.currentTime, 0.02);
    }
  };
};

const ExperienceCard = ({ experience, isExpanded, onToggle, playClick }) => {
  return (
    <div className="glass-card machine-panel border border-cyan-400/20 hover:border-cyan-300/50 transition-all duration-300 rounded-xl overflow-hidden">
      <button
        onClick={() => {
          playClick();
          onToggle();
        }}
        className="w-full p-3 sm:p-4 text-left flex items-start sm:items-center justify-between hover:bg-cyan-400/5 transition-colors gap-2"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 break-words">{experience.company}</h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
            <span>{experience.period}</span>
            <span className="text-cyan-300 hidden sm:inline">•</span>
            <span className="break-words">{experience.location}</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isExpanded && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 space-y-2 sm:space-y-3 animate-slide-down">
          <ul className="space-y-1 sm:space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="text-gray-300 text-xs sm:text-sm flex items-start">
                <span className="text-cyan-300 mr-2 mt-1 flex-shrink-0">●</span>
                <span className="break-words">{achievement}</span>
              </li>
            ))}
          </ul>
          {experience.links && experience.links.length > 0 && (
            <div className="pt-2 border-t border-cyan-400/20">
              <div className="flex flex-wrap gap-2">
                {experience.links.map((link, idx) => (
                  link.url ? (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm underline transition-colors break-all"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <span key={idx} className="text-gray-500 text-xs sm:text-sm">{link.name}</span>
                  )
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const CyberDeck = ({
  activeTab,
  activeSocket,
  booted,
  muted,
  poweredOn,
  setActiveTab,
  setActiveSocket,
  setMuted,
  setPoweredOn,
  setZoomed,
  sound,
}) => {
  const [rotation, setRotation] = useState({ x: -8, y: -14 });
  const dragStart = useRef(null);

  const currentTab = interfaceTabs.find((tab) => tab.id === activeTab);

  const handlePointerDown = (event) => {
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      rotation,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragStart.current) {
      return;
    }

    const deltaX = event.clientX - dragStart.current.x;
    const deltaY = event.clientY - dragStart.current.y;
    setRotation({
      x: Math.max(-22, Math.min(14, dragStart.current.rotation.x - deltaY * 0.08)),
      y: Math.max(-34, Math.min(34, dragStart.current.rotation.y + deltaX * 0.1)),
    });
  };

  const handlePointerUp = () => {
    dragStart.current = null;
  };

  const togglePower = () => {
    const nextPower = !poweredOn;
    setPoweredOn(nextPower);
    sound.current?.power();
  };

  const connectSocket = (tab) => {
    sound.current?.click();
    setActiveSocket(tab.id);
    setActiveTab(tab.id);
  };

  const tryRestrictedArea = () => {
    sound.current?.error();
  };

  return (
    <section className="cyberdeck-stage" aria-label="Interactive retro terminal">
      <div className="deck-orbit" aria-hidden="true"></div>
      <div
        className={`cyberdeck ${poweredOn ? "is-on" : "is-off"}`}
        style={{ "--rx": `${rotation.x}deg`, "--ry": `${rotation.y}deg` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="deck-shadow"></div>
        <div className="deck-body">
          <div className="deck-bezel">
            <button
              className="crt-screen"
              onClick={() => {
                sound.current?.staticBurst();
                setZoomed(true);
              }}
              type="button"
              aria-label="Zoom into terminal screen"
            >
              <div className="screen-glass">
                <div className="screen-scanlines"></div>
                {poweredOn ? (
                  <div className="screen-content">
                    <div className="screen-header">
                      <span>MAINFRAME://SOSTENES</span>
                      <span className="blink-dot">REC</span>
                    </div>
                    <div className="boot-log">
                      {bootLines.map((line, index) => (
                        <span key={line} style={{ animationDelay: `${index * 120}ms` }}>
                          &gt; {booted ? line : "Booting..."}
                        </span>
                      ))}
                    </div>
                    <div className="mini-grid">
                      {interfaceTabs.map((tab) => (
                        <span key={tab.id} className={activeTab === tab.id ? "active" : ""}>
                          {tab.socket}
                        </span>
                      ))}
                    </div>
                    <p className="screen-callout">
                      Click screen to enter {currentTab?.label}
                    </p>
                  </div>
                ) : (
                  <div className="screen-off">
                    <span>POWER OFF</span>
                  </div>
                )}
              </div>
            </button>
          </div>

          <div className="deck-controls">
            <button
              className={`power-switch ${poweredOn ? "active" : ""}`}
              onClick={togglePower}
              type="button"
              aria-label="Power terminal"
            >
              <span></span>
            </button>
            <div className="physical-buttons">
              {interfaceTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={activeTab === tab.id ? "active" : ""}
                  onClick={() => connectSocket(tab)}
                  type="button"
                >
                  {tab.socket}
                </button>
              ))}
              <button onClick={tryRestrictedArea} type="button">ROOT</button>
            </div>
          </div>

          <div className="patch-bay">
            {interfaceTabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`cable-port ${activeSocket === tab.id ? "plugged" : ""}`}
                onClick={() => connectSocket(tab)}
                type="button"
                style={{ "--cable-index": index }}
              >
                <span className="port-light"></span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="deck-actions">
        <button
          className="control-chip"
          onClick={() => {
            setMuted(!muted);
            sound.current?.setMuted(!muted);
          }}
          type="button"
        >
          Sound {muted ? "OFF" : "ON"}
        </button>
        <button
          className="control-chip"
          onClick={() => {
            sound.current?.confirm();
            setRotation({ x: -8, y: -14 });
          }}
          type="button"
        >
          Recenter 3D
        </button>
      </div>
      <p className="deck-hint">Arraste a máquina para girar. Conecte os cabos para trocar de módulo.</p>
    </section>
  );
};

const programDefinitions = [
  {
    id: "experience",
    title: "experience.exe",
    label: "Experience",
    description: "Career log, companies and shipped systems.",
    prompt: "open /career/history",
  },
  {
    id: "stack",
    title: "stack.sys",
    label: "Tech Stack",
    description: "Languages, cloud, infrastructure and product tools.",
    prompt: "scan /skills/modules",
  },
  {
    id: "profile",
    title: "profile.dat",
    label: "Profile",
    description: "About, links, education and contact channels.",
    prompt: "cat /operator/profile",
  },
];

const DesktopIcon = ({ program, isActive, onOpen }) => (
  <button
    className={`desktop-icon ${isActive ? "active" : ""}`}
    onClick={onOpen}
    type="button"
  >
    <span className="icon-box">
      <span>{program.title.slice(0, 3).toUpperCase()}</span>
    </span>
    <strong>{program.title}</strong>
    <small>{program.description}</small>
  </button>
);

const ProgramWindow = ({
  activeProgram,
  expandedExperience,
  onClose,
  onToggleExperience,
  playClick,
}) => {
  if (!activeProgram) {
    return (
      <div className="terminal-window idle-window">
        <div className="window-titlebar">
          <span>apollo-shell</span>
          <span className="window-lights"><i></i><i></i><i></i></span>
        </div>
        <div className="idle-terminal">
          <p>&gt; Welcome, operator.</p>
          <p>&gt; Select a program to inspect the portfolio database.</p>
          <p>&gt; Available programs: experience.exe, stack.sys, profile.dat</p>
          <span className="terminal-cursor">_</span>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-window program-window">
      <div className="window-titlebar">
        <span>{activeProgram.title}</span>
        <button onClick={onClose} type="button">close</button>
      </div>

      {activeProgram.id === "experience" && (
        <div className="program-scroll custom-scrollbar">
          <p className="command-line">&gt; {activeProgram.prompt}</p>
          <div className="space-y-2 sm:space-y-3">
            {experiences.map((exp, idx) => (
              <ExperienceCard
                key={exp.company}
                experience={exp}
                isExpanded={expandedExperience === idx}
                onToggle={() => onToggleExperience(idx)}
                playClick={playClick}
              />
            ))}
          </div>
        </div>
      )}

      {activeProgram.id === "stack" && (
        <div className="program-scroll custom-scrollbar">
          <p className="command-line">&gt; {activeProgram.prompt}</p>
          <div className="tech-program-grid">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group tech-tile rounded-lg bg-black/20 border border-cyan-400/20 hover:border-cyan-300/50 hover:bg-cyan-400/10 transition-all duration-300"
                onMouseEnter={playClick}
              >
                <div className="tech-icon-shell">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-full h-full object-contain opacity-80 group-hover:opacity-100 ${tech.noFilter ? '' : 'filter brightness-0 invert'}`}
                    onError={(e) => {
                      const fallbacks = {
                        'AWS': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
                        'Remix': 'https://remix.run/img/logo.svg',
                        'NestJS': 'https://nestjs.com/img/logo-small.svg',
                        'Terraform': 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg',
                      };
                      if (fallbacks[tech.name] && e.target.src !== fallbacks[tech.name]) {
                        e.target.src = fallbacks[tech.name];
                      } else {
                        e.target.style.display = 'none';
                      }
                    }}
                  />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeProgram.id === "profile" && (
        <div className="program-scroll custom-scrollbar">
          <p className="command-line">&gt; {activeProgram.prompt}</p>
          <div className="profile-program">
            <div className="profile-header">
              <img src="/sostenes.jpeg" alt="Sóstenes Apollo" />
              <div>
                <h1>Sóstenes Apollo</h1>
                <p>Senior Software Engineer / AI Engineer</p>
                <p>10+ years building scalable software</p>
              </div>
            </div>
            <p>
              Highly experienced Brazilian Backend Developer specializing in scalable microservices, TDD,
              full-stack solutions and AI-enabled products. Available for fully remote roles with extensive
              overlap across APAC, EMEA, and US time zones.
            </p>
            <div className="profile-grid">
              <div>
                <h3>Education</h3>
                {education.map((edu) => (
                  <p key={edu.institution}>{edu.institution} - {edu.degree}</p>
                ))}
              </div>
              <div>
                <h3>Languages</h3>
                <p>Portuguese native, English fluent, Spanish intermediate</p>
              </div>
            </div>
            <div className="social-program-links">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noreferrer">
                  <Icon name={link.icon} className="w-4 h-4" />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [expandedExperience, setExpandedExperience] = useState(0);
  const [activeProgramId, setActiveProgramId] = useState(null);
  const [bootComplete, setBootComplete] = useState(false);
  const [bootStep, setBootStep] = useState(0);
  const [muted, setMuted] = useState(false);
  const [audioArmed, setAudioArmed] = useState(false);
  const sound = useRef(null);

  if (!sound.current && typeof window !== "undefined") {
    sound.current = createSoundEngine();
  }

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const stepTimers = bootLines.map((_, index) => (
      window.setTimeout(() => {
        setBootStep(index + 1);
        sound.current?.confirm();
      }, 450 + index * 420)
    ));
    const completeTimer = window.setTimeout(() => {
      setBootComplete(true);
      sound.current?.power();
    }, 3100);

    return () => {
      stepTimers.forEach(window.clearTimeout);
      window.clearTimeout(completeTimer);
    };
  }, []);

  const toggleExperience = (idx) => {
    setExpandedExperience(expandedExperience === idx ? null : idx);
  };

  const armAudio = () => {
    if (audioArmed) {
      return;
    }
    setAudioArmed(true);
    sound.current?.power();
  };

  const openProgram = (programId) => {
    armAudio();
    setActiveProgramId(programId);
    sound.current?.click();
  };

  const activeProgram = useMemo(
    () => programDefinitions.find((program) => program.id === activeProgramId),
    [activeProgramId]
  );

  return (
    <div
      className="min-h-screen overflow-hidden relative bg-black"
      onPointerDown={armAudio}
    >
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_25%),linear-gradient(135deg,#020617,#050816_45%,#000)] animate-gradient-shift"></div>
      <div className="fixed inset-0 industrial-grid"></div>
      
      {/* Particles Background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                resize: true,
              },
            },
            particles: {
              color: { value: ["#22d3ee", "#a855f7", "#f59e0b"] },
              links: {
                color: "#22d3ee",
                distance: 150,
                enable: true,
                opacity: 0.22,
                width: 1,
              },
              move: {
                enable: true,
                outModes: { default: "bounce" },
                speed: 0.3,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 40,
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <main className="fullscreen-computer">
        <section className="monitor-frame" aria-label="Full screen retro computer portfolio">
          <div className="monitor-topbar">
            <span>APOLLO_OS v10.6</span>
            <span>{bootComplete ? "READY" : "BOOTING"}</span>
            <button
              onClick={() => {
                setMuted(!muted);
                sound.current?.setMuted(!muted);
              }}
              type="button"
            >
              SOUND {muted ? "OFF" : "ON"}
            </button>
          </div>

          <div className="monitor-screen">
            <div className="screen-scanlines"></div>
            {!bootComplete ? (
              <div className="boot-screen">
                <div className="boot-logo">SOSTENES APOLLO</div>
                <p className="loading-text">loading portfolio kernel...</p>
                <div className="boot-progress">
                  <span style={{ width: `${Math.min(100, (bootStep / bootLines.length) * 100)}%` }}></span>
                </div>
                <div className="boot-lines">
                  {bootLines.slice(0, bootStep).map((line) => (
                    <p key={line}>&gt; {line}</p>
                  ))}
                  <p className="boot-cursor">&gt; loading...</p>
                </div>
              </div>
            ) : (
              <div className="desktop-shell">
                <header className="desktop-header">
                  <div>
                    <p className="command-line">&gt; login operator@sostenes</p>
                    <h1>Sóstenes Apollo</h1>
                    <span>Senior Software Engineer / AI Engineer</span>
                  </div>
                  <div className="desktop-status">
                    <span>AUDIO: {muted ? "MUTED" : audioArmed ? "ARMED" : "CLICK TO ARM"}</span>
                    <span>SESSION: REMOTE_READY</span>
                  </div>
                </header>

                <div className="desktop-grid">
                  <aside className="program-dock">
                    {programDefinitions.map((program) => (
                      <DesktopIcon
                        key={program.id}
                        program={program}
                        isActive={activeProgramId === program.id}
                        onOpen={() => openProgram(program.id)}
                      />
                    ))}
                  </aside>

                  <ProgramWindow
                    activeProgram={activeProgram}
                    expandedExperience={expandedExperience}
                    onClose={() => {
                      setActiveProgramId(null);
                      sound.current?.click();
                    }}
                    onToggleExperience={toggleExperience}
                    playClick={() => sound.current?.click()}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
