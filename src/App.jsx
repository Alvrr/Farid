import React, { useState } from 'react';
import {
  Globe,
  Printer,
  MapPin,
  GraduationCap,
  Star,
  Layers,
  Terminal,
  ExternalLink,
  CheckCircle,
  Cpu,
  Compass,
  ArrowRight,
  Award,
  Mail,
  Send,
  User,
  FolderGit2,
  Menu,
  X,
  School
} from 'lucide-react';

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// -------------------------------------------------------------
// LOGO & FOTO PROFIL:
// Menggunakan logoweb.png (ganti logo situs)
// -------------------------------------------------------------
const LOGO_URL = "/logoweb.png";
const PROFILE_IMAGE_URL = "/profile.png";
const FALLBACK_GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/112377789?v=4";

const cvData = {
  id: {
    navLinks: {
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      certificates: "Sertifikat",
      contact: "Kontak"
    },
    printBtn: "Cetak / PDF",
    statusBadge: "Mahasiswa D4 Rekayasa Informatika • ULBI • Open for Internship / Part Time",
    name: "Muhammad Farid Al Mustofa",
    bio: "Mahasiswa D4 Rekayasa Informatika di Universitas Logistik dan Bisnis Internasional (ULBI) dengan IPK 3,43/4,00. Bersemangat membangun aplikasi web dan mobile yang skalabel; memiliki pengalaman mengembangkan MANBIG — sistem manajemen pergudangan dan POS — serta SafeRoute, aplikasi pelaporan bahaya jalan. Menguasai Go (Golang), Dart, JavaScript/TypeScript, React.js, Flutter, serta teknologi cloud seperti Firebase dan MongoDB.",
    gpaLabel: "IPK: 3,43 / 4,00",
    institution: "ULBI (2023 - Sekarang)",
    school: "SMKN 11 Bandung (2020 - 2023)",
    location: "Cimahi, Indonesia",
    sections: {
      projects: "Proyek Unggulan",
      projectsSub: "Sistem web dan aplikasi mobile yang telah dibangun dan di-publish ke GitHub",
      otherRepos: "Eksplorasi & Repositori Lainnya",
      education: "Pendidikan Formal",
      skills: "Keahlian Utama (Core Skills)",
      certificates: "Sertifikasi & Penghargaan",
      contact: "Hubungi Saya",
      filterAll: "Semua",
      filterWeb: "Aplikasi Web",
      filterMobile: "Aplikasi Mobile"
    },
    projects: [
      {
        id: "manbig",
        title: "MANBIG - Sistem Pergudangan Enterprise, POS & Logistik",
        type: "web",
        typeLabel: "Aplikasi Web",
        subtitle: "Sistem Manajemen Pergudangan, Kasir POS & Pelacakan Driver (React & Go Fiber)",
        description: "Aplikasi web full-stack terintegrasi untuk manajemen pergudangan, kontrol stok inventaris, kasir Point of Sale (POS), dan pelacakan pengiriman logistik driver dengan arsitektur decoupled (React 19 + Go Fiber v2 + MongoDB).",
        highlights: [
          "Multi-Role RBAC: Hak akses khusus 4 peran (Admin, Kasir, Bagian Gudang, dan Driver).",
          "Kasir POS & Stok: Transaksi cepat, cetak struk belanja, mutasi barang real-time, dan low-stock alert.",
          "Tracking Logistik Driver: Penugasan order pengiriman, koordinat lokasi GPS, dan update status pengantaran.",
          "Laporan Excel Otomatis: Ekspor rekap transaksi dan laporan stok otomatis ke format .xlsx via Excelize."
        ],
        tags: ["React 19", "Vite", "Go (Golang 1.23)", "Fiber Framework", "MongoDB", "Tailwind CSS", "JWT Auth", "Excelize", "Swagger"],
        links: [
          { label: "Frontend Repository", url: "https://github.com/Alvrr/FrontendManbig" },
          { label: "Backend Repository", url: "https://github.com/Alvrr/BackendManbig" }
        ]
      },
      {
        id: "saferoute",
        title: "SafeRoute - Aplikasi Keselamatan Jalan & Pelaporan Bahaya",
        type: "mobile",
        typeLabel: "Aplikasi Mobile",
        subtitle: "Aplikasi Mobile Pelaporan Titik Bahaya Jalan & Peta Spasial (Flutter & Firebase)",
        description: "Aplikasi mobile keselamatan berkendara untuk mendeteksi, memetakan, dan melaporkan titik rawan bahaya jalan secara real-time berbasis GPS otomatis, visualisasi OpenStreetMap, integrasi rute Google Maps, dan QR Code sharing.",
        highlights: [
          "Pelaporan Bukti Cepat: Cukup ambil 1 foto; koordinat GPS dan nama jalan otomatis terdeteksi instan.",
          "Peta Spasial Interaktif: Visualisasi sebaran laporan titik bahaya di sekitar lokasi pengguna via OpenStreetMap.",
          "Navigasi Google Maps: Integrasi 1-klik untuk langsung membuka petunjuk arah menuju titik bahaya di Google Maps.",
          "QR Code & Safe Points: Generate/scan QR Code laporan serta direktori pos bantuan darurat terintegrasi."
        ],
        tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "OpenStreetMap", "Google Maps SDK", "Geolocator GPS", "QR Code"],
        links: [
          { label: "SafeRoute Repository", url: "https://github.com/Alvrr/SafeRoute" }
        ]
      }
    ],
    otherReposList: [
      { name: "GIS Peta Bencana", desc: "Pemetaan sebaran wilayah bencana menggunakan JavaScript & Leaflet.js" },
      { name: "geojson.rcb & geometri", desc: "Package Go (Golang) untuk kalkulasi geometri spasial & GeoJSON" },
      { name: "BackendPemrogIII & Pemrograman III", desc: "Layanan REST API & aplikasi web terintegrasi Golang" },
      { name: "SQA Python Automation", desc: "Software Quality Assurance testing suite berbasis Python" }
    ],
    education: [
      {
        period: "2023 - Sekarang (Semester 7)",
        institution: "Universitas Logistik dan Bisnis Internasional (ULBI)",
        degree: "Program Diploma 4 (D4 / Sarjana Terapan)",
        badge: "Pendidikan Tinggi",
        gpa: "IPK: 3,43 / 4,00",
        description: "Fokus studi: Rekayasa Perangkat Lunak Terapan, Sistem Informasi Logistik, Arsitektur Web/Mobile, dan Sistem Informasi Geografis (GIS)."
      },
      {
        period: "2020 - 2023",
        institution: "SMKN 11 Bandung",
        degree: "Rekayasa Perangkat Lunak (RPL)",
        badge: "Pendidikan Kejuruan",
        gpa: null,
        description: "Menempuh pendidikan vokasi selama 3 tahun dengan fokus intensif pada Pemrograman Web, Pemrograman Berorientasi Objek (OOP), Basis Data SQL, dan Rekayasa Perangkat Lunak."
      }
    ],
    skillCategories: [
      {
        name: "Bahasa Pemrograman",
        skills: ["Go (Golang)", "Dart", "JavaScript / TypeScript"]
      },
      {
        name: "Framework Web & Mobile",
        skills: ["React.js", "Flutter", "Go Fiber", "Tailwind CSS"]
      },
      {
        name: "Backend & Database",
        skills: ["MongoDB", "Firebase", "RESTful API & JWT", "Swagger / OpenAPI"]
      },
      {
        name: "GIS & Tools",
        skills: ["GIS (Google Maps & OSM)", "QR Code System", "Git & GitHub", "Excelize"]
      }
    ],
    certificates: [
      {
        title: "Full-Stack Web & RESTful API Development",
        issuer: "Informatics Competency Program",
        date: "2024",
        desc: "Sertifikasi keahlian arsitektur microservices, pembuatan REST API dengan Go (Fiber), JWT token, dan integrasi frontend React."
      },
      {
        title: "Mobile App Development with Flutter & Firebase",
        issuer: "Mobile Engineering Certification",
        date: "2024",
        desc: "Kompetensi pembuatan aplikasi Android/iOS lintas platform, state management, realtime cloud database, dan integrasi Google Maps SDK."
      },
      {
        title: "Geographic Information System (GIS) & Spatial Analysis",
        issuer: "ULBI Geospatial Studies",
        date: "2023",
        desc: "Sertifikasi analisis data spasial, Leaflet.js, GeoJSON mapping, dan algoritma penentuan rute distribusi logistik."
      },
      {
        title: "Software Engineering & Database Management",
        issuer: "SMKN 11 Bandung & LSP",
        date: "2023",
        desc: "Sertifikat uji kompetensi keahlian rekayasa perangkat lunak, OOP, relational database design, dan software testing."
      }
    ],
    contactInfo: [
      { title: "GitHub", val: "github.com/Alvrr", link: "https://github.com/Alvrr", type: "github" },
      { title: "Email", val: "farid.almustofa158@gmail.com", link: "mailto:farid.almustofa158@gmail.com", type: "email" },
      { title: "Lokasi", val: "Cimahi, Jawa Barat, Indonesia", link: "https://www.google.com/maps?q=-6.907789113523463,107.55815355369636", type: "location" },
      { title: "Instagram", val: "@xxalvrrr", link: "https://www.instagram.com/xxalvrrr", type: "instagram" }
    ],
    footer: "© 2026 Muhammad Farid Al Mustofa"
  },
  en: {
    navLinks: {
      about: "About",
      skills: "Skills",
      projects: "Project",
      certificates: "Certificate",
      contact: "Contact"
    },
    printBtn: "Print / PDF",
    statusBadge: "Informatics Engineering Student • ULBI • Open for Internship / Part Time",
    name: "Muhammad Farid Al Mustofa",
    bio: "D4 Informatics Engineering student at Universitas Logistik dan Bisnis Internasional (ULBI) with a GPA of 3.43/4.00. Passionate about building scalable web and mobile applications, with hands-on experience developing MANBIG — an enterprise warehouse management and POS system — and SafeRoute, a road safety hazard reporting mobile application. Proficient in Go (Golang), Dart, JavaScript/TypeScript, React.js, Flutter, and cloud technologies including Firebase and MongoDB.",
    gpaLabel: "GPA: 3.43 / 4.00",
    institution: "ULBI (2023 - Present)",
    school: "SMKN 11 Bandung (2020 - 2023)",
    location: "Cimahi, Indonesia",
    sections: {
      projects: "Featured Projects",
      projectsSub: "Web and mobile systems engineered and published on GitHub",
      otherRepos: "Other Repositories & Explorations",
      education: "Formal Education",
      skills: "Core Technical Skills",
      certificates: "Certificates & Credentials",
      contact: "Get In Touch",
      filterAll: "All",
      filterWeb: "Web App",
      filterMobile: "Mobile App"
    },
    projects: [
      {
        id: "manbig",
        title: "MANBIG - Enterprise Warehouse, POS & Logistics System",
        type: "web",
        typeLabel: "Web App",
        subtitle: "Enterprise Warehouse Management, POS & Driver Logistics Web App (React & Go Fiber)",
        description: "Integrated full-stack web application designed for warehouse inventory management, cashier point of sale (POS), and driver delivery tracking using decoupled architecture (React 19 + Go Fiber v2 + MongoDB).",
        highlights: [
          "Multi-Role RBAC: Dedicated portals for 4 roles (Admin, Cashier, Warehouse Staff, and Driver).",
          "POS & Stock Control: Quick cashier checkout, receipt printing, real-time stock mutation, and low-stock alerts.",
          "Driver Logistics: Dispatch assignment, GPS destination coordinates, and live delivery status updates.",
          "Automated Reports: Scheduled export of sales transactions and stock audit logs to Excel (.xlsx) via Excelize."
        ],
        tags: ["React 19", "Vite", "Go (Golang 1.23)", "Fiber Framework", "MongoDB", "Tailwind CSS", "JWT Auth", "Excelize", "Swagger"],
        links: [
          { label: "Frontend Repository", url: "https://github.com/Alvrr/FrontendManbig" },
          { label: "Backend Repository", url: "https://github.com/Alvrr/BackendManbig" }
        ]
      },
      {
        id: "saferoute",
        title: "SafeRoute - Smart Road Safety & Hazard Reporting App",
        type: "mobile",
        typeLabel: "Mobile App",
        subtitle: "Mobile App for Road Hazard Reporting & Spatial Map Overview (Flutter & Firebase)",
        description: "Cross-platform road safety mobile app to detect, map, and report roadway hazards in real-time with automated GPS tagging, OpenStreetMap visualization, Google Maps turn-by-turn navigation, and QR Code sharing.",
        highlights: [
          "Instant Evidence Reporting: Capture 1 photo; GPS coordinates and street name are automatically detected.",
          "Spatial Map Overview: Visual interactive map displaying nearby road hazard reports via OpenStreetMap.",
          "Google Maps Navigation: 1-click action to launch Google Maps and navigate directly to hazard locations.",
          "QR Code & Safe Points: Generate/scan report QR Codes and access integrated emergency safe points."
        ],
        tags: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "OpenStreetMap", "Google Maps SDK", "Geolocator GPS", "QR Code"],
        links: [
          { label: "SafeRoute Repository", url: "https://github.com/Alvrr/SafeRoute" }
        ]
      }
    ],
    otherReposList: [
      { name: "GIS Disaster Mapping", desc: "Disaster distribution mapping web app built with JavaScript & Leaflet.js" },
      { name: "geojson.rcb & geometry", desc: "Go (Golang) packages for spatial geometry calculation & GeoJSON parsing" },
      { name: "BackendPemrogIII & Pemrograman III", desc: "High-concurrency Go REST API & web service architecture" },
      { name: "SQA Python Automation", desc: "Automated Software Quality Assurance test suite written in Python" }
    ],
    education: [
      {
        period: "2023 - Present (7th Semester)",
        institution: "Universitas Logistik dan Bisnis Internasional (ULBI)",
        degree: "Applied Bachelor's Degree (D4 / Sarjana Terapan)",
        badge: "Higher Education",
        gpa: "GPA: 3.43 / 4.00",
        description: "Focusing on Applied Software Engineering, Logistics Information Systems, Web/Mobile Architecture, and GIS."
      },
      {
        period: "2020 - 2023",
        institution: "SMKN 11 Bandung",
        degree: "Software Engineering (RPL)",
        badge: "Vocational High School",
        gpa: null,
        description: "Completed 3-year vocational diploma program focusing on Web Development, Object-Oriented Programming (OOP), Relational Databases (SQL), and Software Quality Assurance."
      }
    ],
    skillCategories: [
      {
        name: "Programming Languages",
        skills: ["Go (Golang)", "Dart", "JavaScript / TypeScript"]
      },
      {
        name: "Web & Mobile Frameworks",
        skills: ["React.js", "Flutter", "Go Fiber", "Tailwind CSS"]
      },
      {
        name: "Backend & Database",
        skills: ["MongoDB", "Firebase", "RESTful API & JWT", "Swagger / OpenAPI"]
      },
      {
        name: "GIS & Tools",
        skills: ["GIS (Google Maps & OSM)", "QR Code System", "Git & GitHub", "Excelize"]
      }
    ],
    certificates: [
      {
        title: "Full-Stack Web & RESTful API Development",
        issuer: "Informatics Competency Program",
        date: "2024",
        desc: "Certified competency in microservices architecture, REST API engineering with Go (Fiber), JWT security, and React integration."
      },
      {
        title: "Mobile App Development with Flutter & Firebase",
        issuer: "Mobile Engineering Certification",
        date: "2024",
        desc: "Demonstrated skills in cross-platform mobile development, state management, realtime cloud database, and Google Maps SDK integration."
      },
      {
        title: "Geographic Information System (GIS) & Spatial Analysis",
        issuer: "ULBI Geospatial Studies",
        date: "2023",
        desc: "Spatial data processing certification, Leaflet.js, GeoJSON mapping, and logistics route calculation algorithms."
      },
      {
        title: "Software Engineering & Database Management",
        issuer: "SMKN 11 Bandung & National LSP",
        date: "2023",
        desc: "Vocational certificate of competence in OOP paradigms, relational database normalization, and automated software testing."
      }
    ],
    contactInfo: [
      { title: "GitHub", val: "github.com/Alvrr", link: "https://github.com/Alvrr", type: "github" },
      { title: "Email", val: "farid.almustofa158@gmail.com", link: "mailto:farid.almustofa158@gmail.com", type: "email" },
      { title: "Location", val: "Cimahi, West Java, Indonesia", link: "https://www.google.com/maps?q=-6.907789113523463,107.55815355369636", type: "location" },
      { title: "Instagram", val: "@xxalvrrr", link: "https://www.instagram.com/xxalvrrr", type: "instagram" }
    ],
    footer: "© 2026 Muhammad Farid Al Mustofa"
  }
};

export default function App() {
  const [lang, setLang] = useState('id');
  const [filter, setFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(PROFILE_IMAGE_URL);

  const content = cvData[lang];

  const filteredProjects = content.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.type === filter;
  });

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_GITHUB_AVATAR) {
      setImgSrc(FALLBACK_GITHUB_AVATAR);
    }
  };

  return (
    <div className="container">
      {/* Sticky Top Navbar */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <a href="#about" className="brand" onClick={handleNavClick}>
            <div className="brand-logo-box">
              <img
                src={LOGO_URL}
                alt="MF Studio Logo"
                className="brand-logo-img"
              />
            </div>
            <span className="brand-name">{content.navTitle}</span>
          </a>

          {/* Nav Items: About, Skills, Project, Certificate, Contact */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a href="#about" className="nav-link" onClick={handleNavClick}>
                <User size={15} />
                <span>{content.navLinks.about}</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link" onClick={handleNavClick}>
                <Cpu size={15} />
                <span>{content.navLinks.skills}</span>
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link" onClick={handleNavClick}>
                <FolderGit2 size={15} />
                <span>{content.navLinks.projects}</span>
              </a>
            </li>
            <li>
              <a href="#certificates" className="nav-link" onClick={handleNavClick}>
                <Award size={15} />
                <span>{content.navLinks.certificates}</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link" onClick={handleNavClick}>
                <Mail size={15} />
                <span>{content.navLinks.contact}</span>
              </a>
            </li>
          </ul>

          <div className="nav-right">
            {/* Language Switcher */}
            <div className="lang-switch" role="group" aria-label="Language selection">
              <button
                onClick={() => setLang('id')}
                className={`lang-btn ${lang === 'id' ? 'active' : ''}`}
              >
                🇮🇩 ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Print PDF Button */}
            <button
              onClick={() => window.print()}
              className="btn btn-primary"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>{content.printBtn}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Profile Card (About Section) */}
      <section className="hero-card" id="about">
        <div className="hero-info">
          <div className="status-badge">
            <span className="pulse"></span>
            <span>{content.statusBadge}</span>
          </div>
          <h1 className="hero-name">{content.name}</h1>
          <div className="hero-role">{content.role}</div>
          <p className="hero-bio">{content.bio}</p>

          <div className="contacts-row">
            <a
              href="https://github.com/Alvrr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-chip"
            >
              <GithubIcon size={16} />
              <span>github.com/Alvrr</span>
            </a>
            <div className="contact-chip">
              <GraduationCap size={16} />
              <span>{content.institution}</span>
            </div>
            <div className="contact-chip">
              <School size={16} />
              <span>{content.school}</span>
            </div>
            <div className="contact-chip">
              <MapPin size={16} />
              <span>{content.location}</span>
            </div>
          </div>
        </div>

        <div className="hero-avatar-area">
          <div className="avatar-wrapper" style={{ background: '#ffffff', padding: '4px', borderRadius: '50%' }}>
            <img
              src={imgSrc}
              onError={handleImageError}
              alt={content.name}
              className="avatar-img"
              style={{ objectFit: 'contain', background: '#ffffff' }}
            />
          </div>
          <div className="gpa-pill">
            <Star size={15} fill="#fff" />
            <span>{content.gpaLabel}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="content-grid">
        {/* Left Column: Projects & Certificates */}
        <main>
          {/* Projects Section */}
          <section className="card-section" id="projects">
            <div className="sec-header">
              <div className="sec-title-wrap">
                <div className="sec-icon">
                  <Layers size={20} />
                </div>
                <div>
                  <h2 className="sec-title">{content.sections.projects}</h2>
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="lang-switch" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <button
                  onClick={() => setFilter('all')}
                  className={`lang-btn ${filter === 'all' ? 'active' : ''}`}
                >
                  {content.sections.filterAll}
                </button>
                <button
                  onClick={() => setFilter('web')}
                  className={`lang-btn ${filter === 'web' ? 'active' : ''}`}
                >
                  {content.sections.filterWeb}
                </button>
                <button
                  onClick={() => setFilter('mobile')}
                  className={`lang-btn ${filter === 'mobile' ? 'active' : ''}`}
                >
                  {content.sections.filterMobile}
                </button>
              </div>
            </div>

            {/* Project List */}
            {filteredProjects.map((proj) => (
              <article key={proj.id} className="project-item">
                <div className="proj-head">
                  <div>
                    <h3 className="proj-title">{proj.title}</h3>
                    <div className="proj-subtitle">{proj.subtitle}</div>
                  </div>
                  <span className={`type-pill ${proj.type === 'web' ? 'type-web' : 'type-mobile'}`}>
                    {proj.typeLabel}
                  </span>
                </div>

                <p className="proj-desc">{proj.description}</p>

                <ul className="proj-highlights">
                  {proj.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="tags-row">
                  {proj.tags.map((tag, idx) => (
                    <span key={idx} className="tag-badge">{tag}</span>
                  ))}
                </div>

                <div className="proj-links">
                  {proj.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-action"
                    >
                      <GithubIcon size={15} />
                      <span>{link.label}</span>
                      <ExternalLink size={13} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </section>

          {/* Other Repositories Section */}
          <section className="card-section">
            <div className="sec-header">
              <div className="sec-title-wrap">
                <div className="sec-icon">
                  <Terminal size={20} />
                </div>
                <h2 className="sec-title">{content.sections.otherRepos}</h2>
              </div>
              <a
                href="https://github.com/Alvrr?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="link-action"
                style={{ fontSize: '0.82rem' }}
              >
                <span>34 Public Repos</span>
                <ArrowRight size={14} />
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {content.otherReposList.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '10px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Compass size={15} color="var(--secondary)" />
                    <span>{item.name}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="card-section" id="skills">
            <div className="sec-header">
              <div className="sec-title-wrap">
                <div className="sec-icon">
                  <Cpu size={20} />
                </div>
                <h2 className="sec-title">{content.sections.skills}</h2>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {content.skillCategories.map((cat, idx) => (
                <div key={idx} className="skill-block">
                  <div className="skill-label">{cat.name}</div>
                  <div className="skills-wrap">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-chip">
                        <CheckCircle size={13} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section className="card-section" id="certificates">
            <div className="sec-header">
              <div className="sec-title-wrap">
                <div className="sec-icon" style={{ color: 'var(--accent-amber)', background: 'rgba(245, 158, 11, 0.12)' }}>
                  <Award size={20} />
                </div>
                <h2 className="sec-title">{content.sections.certificates}</h2>
              </div>
            </div>

            <div className="cert-grid">
              {content.certificates.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-issuer">
                    <Award size={14} />
                    <span>{cert.issuer} • {cert.date}</span>
                  </div>
                  <h3 className="cert-name">{cert.title}</h3>
                  <p className="cert-desc">{cert.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="card-section" id="contact">
            <div className="sec-header">
              <div className="sec-title-wrap">
                <div className="sec-icon" style={{ color: 'var(--accent)', background: 'rgba(16, 185, 129, 0.12)' }}>
                  <Send size={20} />
                </div>
                <h2 className="sec-title">{content.sections.contact}</h2>
              </div>
            </div>

            <div className="contact-grid">
              {content.contactInfo.map((info, idx) => (
                <a
                  key={idx}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="contact-card-box"
                >
                  <div className="contact-box-icon">
                    {info.type === 'github' && <GithubIcon size={22} />}
                    {info.type === 'email' && <Mail size={22} />}
                    {info.type === 'location' && <MapPin size={22} />}
                    {info.type === 'instagram' && <InstagramIcon size={22} />}
                  </div>
                  <div>
                    <div className="contact-box-title">{info.title}</div>
                    <div className="contact-box-val">{info.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>{content.footer}</p>
      </footer>
    </div>
  );
}
