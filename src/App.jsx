import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const experiences = [
  {
    company: "SaaS Developer Solo",
    period: "2025 - Today",
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

const ExperienceCard = ({ experience, isExpanded, onToggle }) => {
  return (
    <div className="glass-card border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-3 sm:p-4 text-left flex items-start sm:items-center justify-between hover:bg-blue-500/5 transition-colors gap-2"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-1 break-words">{experience.company}</h3>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400">
            <span>{experience.period}</span>
            <span className="text-blue-400 hidden sm:inline">•</span>
            <span className="break-words">{experience.location}</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-400 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
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
                <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">●</span>
                <span className="break-words">{achievement}</span>
              </li>
            ))}
          </ul>
          {experience.links && experience.links.length > 0 && (
            <div className="pt-2 border-t border-blue-500/20">
              <div className="flex flex-wrap gap-2">
                {experience.links.map((link, idx) => (
                  link.url ? (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm underline transition-colors break-all"
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

export default function App() {
  const [expandedExperience, setExpandedExperience] = useState(0);
  const [activeTab, setActiveTab] = useState('about');

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const toggleExperience = (idx) => {
    setExpandedExperience(expandedExperience === idx ? null : idx);
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Animated Gradient Background - Blue/Black */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-900 to-black animate-gradient-shift"></div>
      
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
              color: { value: "#3b82f6" },
              links: {
                color: "#2563eb",
                distance: 150,
                enable: true,
                opacity: 0.2,
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

      {/* Main Content */}
      <div className="relative z-10 min-h-screen lg:h-screen flex items-start justify-center p-3 sm:p-4 md:p-6 lg:p-8 py-4 sm:py-6">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:items-stretch lg:h-full">
          
          {/* Left Column - About & Social */}
          <div className="flex flex-col gap-4 lg:h-full">
            <div className="glass-card p-4 sm:p-6 rounded-xl backdrop-blur-xl bg-black/40 border border-blue-500/20 animate-fade-in lg:h-full flex flex-col">
              <div className="flex flex-col gap-4 sm:gap-6 flex-1 overflow-y-auto custom-scrollbar">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <img
                      src="/me.png"
                      alt="Sóstenes Apollo"
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-blue-500/50 object-cover shadow-2xl"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/96?text=SA';
                      }}
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                      Sóstenes Apollo
                    </h1>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-300 mb-2 sm:mb-3">
                      <span className="text-blue-400 font-medium">Sênior Software Engineer</span>
                      <span className="text-gray-600 hidden sm:inline">•</span>
                      <span className="text-blue-400 font-medium">AI Engineer</span>
                      {/* <span className="text-gray-600 hidden sm:inline">•</span> */}
                      <span className="text-white">8+ years of experience build Scalable Software</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <span>📍</span> Brazil
                      </span>
                      <span className="flex items-center gap-1 break-all">
                        <span>📧</span> <span className="text-xs sm:text-sm">sostenesapollo25@gmail.com</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative p-2 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:bg-blue-500/20 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 flex items-center justify-center glow-blue"
                      title={link.name}
                    >
                      <Icon name={link.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </a>
                  ))}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Highly experienced Brazilian Backend Developer specializing in scalable microservices, TDD, and full-stack solutions. Proven expertise in Node.js, TypeScript, Python, C#, and modern frameworks like NestJS and NextJS. Skilled in DevOps, including Docker, Kubernetes, Kafka, and cloud platforms (AWS, GCP, Digital Ocean).
                <br />
                <br />
                Available for fully remote roles with extensive overlap across APAC, EMEA, and US time zones.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-300">
                  <div className="p-3 rounded-lg bg-black/30 border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Soft Skills</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Communication, flexibility, time management, attention to detail</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30 border border-blue-500/20">
                    <h4 className="text-white font-semibold mb-2 text-sm sm:text-base">Languages</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Portuguese (native), English (fluent), Spanish (intermediate)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Tabs and Content */}
          <div className="flex flex-col gap-4 min-h-[400px] lg:h-full">
            <div className="glass-card p-3 sm:p-4 rounded-xl backdrop-blur-xl bg-black/40 border border-blue-500/20 flex flex-col h-full min-h-[500px] lg:min-h-0">
              <div className="flex flex-wrap gap-2 mb-4 flex-shrink-0">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`px-3 sm:px-4 md:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex-1 sm:flex-none ${
                    activeTab === 'about'
                      ? 'bg-blue-500/20 border border-blue-400/50 text-white glow-blue-text'
                      : 'bg-black/20 border border-blue-500/20 text-gray-400 hover:text-white hover:border-blue-400/30'
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('tech')}
                  className={`px-3 sm:px-4 md:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex-1 sm:flex-none ${
                    activeTab === 'tech'
                      ? 'bg-blue-500/20 border border-blue-400/50 text-white glow-blue-text'
                      : 'bg-black/20 border border-blue-500/20 text-gray-400 hover:text-white hover:border-blue-400/30'
                  }`}
                >
                  Tech Stack
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-3 sm:px-4 md:px-6 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex-1 sm:flex-none ${
                    activeTab === 'education'
                      ? 'bg-blue-500/20 border border-blue-400/50 text-white glow-blue-text'
                      : 'bg-black/20 border border-blue-500/20 text-gray-400 hover:text-white hover:border-blue-400/30'
                  }`}
                >
                  Education
                </button>
              </div>

              <div className="flex-1 overflow-hidden min-h-0 flex flex-col">
                {activeTab === 'about' && (
                  <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2 sm:space-y-3 animate-fade-in pr-1 min-h-0">
                    {experiences.map((exp, idx) => (
                      <ExperienceCard
                        key={idx}
                        experience={exp}
                        isExpanded={expandedExperience === idx}
                        onToggle={() => toggleExperience(idx)}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'tech' && (
                  <div className="flex-1 overflow-y-auto custom-scrollbar animate-fade-in pr-1 min-h-0">
                    <div className="p-3 sm:p-4 md:p-6">
                      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 glow-blue-text">Technologies</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                        {techStack.map((tech, idx) => (
                          <div
                            key={idx}
                            className="group p-2 sm:p-3 md:p-4 rounded-lg bg-black/20 border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer"
                          >
                            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg bg-black/40 p-1 sm:p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <img
                                  src={tech.icon}
                                  alt={tech.name}
                                  className={`w-full h-full object-contain opacity-80 group-hover:opacity-100 ${tech.noFilter ? '' : 'filter brightness-0 invert'}`}
                                  onError={(e) => {
                                    // Try fallback URLs for problematic icons
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
                              <span className="text-white text-[10px] sm:text-xs font-medium text-center leading-tight">{tech.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="flex-1 overflow-y-auto custom-scrollbar animate-fade-in pr-1 min-h-0">
                    <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4">
                      <h2 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 glow-blue-text">Education</h2>
                      {education.map((edu, idx) => (
                        <div key={idx} className="p-3 sm:p-4 rounded-lg bg-black/20 border border-blue-500/20">
                          <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{edu.institution}</h3>
                          <p className="text-gray-400 text-xs sm:text-sm">{edu.degree}</p>
                        </div>
                      ))}
                      {/* Separator */}
                      <div className="h-px w-full bg-gray-800 my-4"></div>
                      
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg bg-black/20 border border-blue-500/20">
                        <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Soft Skills</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Communication, flexibility, time management, attention to detail</p>
                      </div>
                      <div className="p-3 sm:p-4 rounded-lg bg-black/20 border border-blue-500/20">
                        <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Languages</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">Portuguese (native), English (fluent), Spanish (intermediate)</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
