const heroStats = [
  { label: "Project sukses", value: "120+" },
  { label: "Retainer aktif", value: "8" },
  { label: "Kepuasan klien", value: "4.9/5" },
];

const services = [
  {
    title: "Landing Page & Microsite",
    description:
      "Konversi pengunjung dari kampanye Google Ads dan sosial media dengan narasi yang ditulis khusus brand Anda.",
    deliverables: ["Copywriting & desain responsif", "Integrasi analitik & pixel", "Optimasi SEO dasar"],
  },
  {
    title: "Company Profile Dinamis",
    description:
      "Web company profile modern dengan CMS ringan untuk mengelola konten dan menampilkan portofolio secara elegan.",
    deliverables: ["Integrasi Supabase CMS", "Form kontak multi-channel", "Galeri portofolio"],
  },
  {
    title: "Aplikasi CRUD Bisnis",
    description:
      "Digitalisasi operasional melalui dashboard kustom, manajemen inventori, dan automasi approval berbasis Next.js.",
    deliverables: ["Autentikasi NextAuth", "Database real-time", "Audit trail & role"],
  },
];

const pillars = [
  {
    title: "Tagline",
    description: "Precision-crafted websites to turn clicks into loyal clients.",
  },
  {
    title: "Visi",
    description:
      "Menjadi studio teknologi pilihan UMKM dan startup di Yogyakarta untuk mengubah ide bisnis menjadi pengalaman digital kelas enterprise.",
  },
  {
    title: "Misi",
    description:
      "Mendisain funnel digital yang terukur, membangun fondasi teknis yang aman, dan mendampingi klien sampai go-live serta optimasi pasca peluncuran.",
  },
];

const techStack = [
  "TypeScript",
  "Next.js",
  "React Server Components",
  "NextAuth.js",
  "Supabase",
  "PlanetScale / PostgreSQL",
  "Tailwind / CSS Modules",
  "Vercel Edge",
  "Google Cloud",
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    detail: "Workshop 90 menit untuk memahami persona, funnel, serta KPI kampanye.",
  },
  {
    title: "UX Writing & Wireframe",
    detail: "Membuat outline konten, CTA, dan structure layout sebelum bergerak ke UI.",
  },
  {
    title: "Development & QA",
    detail: "Implementasi Next.js + Supabase, otomatisasi deployment, dan pengujian lintas device.",
  },
  {
    title: "Launch & Optimization",
    detail: "Integrasi analitik, heatmap, A/B testing ringan, serta laporan kinerja mingguan.",
  },
];

const testimonials = [
  {
    quote:
      "JogaTera membantu kami turunkan CPL sebesar 37% hanya tiga minggu setelah landing page baru live.",
    author: "Risa, Growth Lead Kopi Rasa",
  },
  {
    quote:
      "Dashboard CRUD stok gudang mereka langsung mengefisiensikan proses kami 2x lipat. Dokumentasi sangat rapi.",
    author: "Haryo, COO Aksa Living",
  },
  {
    quote:
      "Support pasca launching responsif, setiap request baru bisa cepat dianalisis plus diberi insight marketing.",
    author: "Tania, Owner Seruni Craft",
  },
];

const pricingPlans = [
  {
    title: "Starter Landing",
    price: "Mulai 5,5jt",
    idealFor: "Campaign iklan tunggal",
    features: [
      "1 halaman landing responsif",
      "Copywriting conversion-based",
      "Integrasi WhatsApp & email",
      "Setup Google Analytics & Tag Manager",
    ],
  },
  {
    title: "Growth Company",
    price: "Mulai 12jt",
    idealFor: "Brand yang butuh profil lengkap",
    features: [
      "Sampai 6 halaman dinamis",
      "CMS ringan via Supabase",
      "Form lead scoring",
      "Komponen blog & portofolio",
    ],
    highlighted: true,
  },
  {
    title: "Custom CRUD",
    price: "Mulai 22jt",
    idealFor: "Operasional internal",
    features: [
      "Dashboard Next.js + Supabase",
      "Autentikasi NextAuth role-based",
      "Audit log & activity feed",
      "Integrasi API pihak ketiga",
    ],
  },
];

const developerProfile = {
  name: "Aldi Pramudia",
  title: "Principal Engineer & Founder",
  summary:
    "5+ tahun membangun produk SaaS, marketing site performa tinggi, dan sistem internal untuk startup Asia Tenggara.",
  highlights: [
    "Ex-Lead Frontend di studio YC-backed",
    "Certified Google Analytics & Meta Ads",
    "Kontributor open-source NextAuth",
  ],
};

const contactInfo = {
  email: "hello@jogatera.tech",
  phone: "+62 812-0000-4321",
  location: "Yogyakarta, Indonesia",
};

export default function HomePage() {
  return (
    <main>
      <header className="hero" id="beranda">
        <nav className="nav">
          <div className="logo">JogaTera Tech</div>
          <div className="cta-group">
            <a href="#pricing" className="btn ghost">
              Paket Harga
            </a>
            <a href="#kontak" className="btn">
              Konsultasi Gratis
            </a>
          </div>
        </nav>
        <div className="hero-content">
          <p className="eyebrow">Studio pengembangan website berbasis data</p>
          <h1>
            Bangun funnel digital yang siap scaling sejak hari pertama kampanye berjalan.
          </h1>
          <p className="lead">
            JogaTera Tech mendesain landing page dan aplikasi web yang hyper-focused terhadap konversi, siap diintegrasikan dengan Supabase, NextAuth, dan stack modern lainnya.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#kontak">
              Jadwalkan Diskusi 20 Menit
            </a>
            <a className="btn ghost" href="#layanan">
              Lihat Layanan
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="value">{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="section about" id="tentang">
        <div className="section-heading">
          <p className="eyebrow">Kenapa JogaTera</p>
          <h2>Fokus pada cerita brand, ditenagai teknologi enterprise.</h2>
        </div>
        <div className="grid pillars">
          {pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section services" id="layanan">
        <div className="section-heading">
          <p className="eyebrow">Solusi</p>
          <h2>Layanan end-to-end dari ide hingga go-live.</h2>
        </div>
        <div className="grid cards">
          {services.map((service) => (
            <article key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section process" id="proses">
        <div className="section-heading">
          <p className="eyebrow">Cara kerja</p>
          <h2>Workshop strategis, iterasi cepat, peluncuran terukur.</h2>
        </div>
        <div className="timeline">
          {processSteps.map((step, index) => (
            <article key={step.title} className="timeline-card">
              <div className="step">0{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tech" id="stack">
        <div className="section-heading">
          <p className="eyebrow">Stack teknologi</p>
          <h2>Dipilih untuk performa, keamanan, dan fleksibilitas skalabilitas.</h2>
        </div>
        <div className="tech-list">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="section testimonials" id="testimoni">
        <div className="section-heading">
          <p className="eyebrow">Cerita klien</p>
          <h2>Bisnis yang tumbuh bersama JogaTera Tech.</h2>
        </div>
        <div className="grid cards">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author}>
              <p className="quote">“{testimonial.quote}”</p>
              <p className="author">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="section-heading">
          <p className="eyebrow">Investasi</p>
          <h2>Paket harga fleksibel sesuai tujuan kampanye Anda.</h2>
        </div>
        <div className="grid pricing-cards">
          {pricingPlans.map((plan) => (
            <article key={plan.title} className={plan.highlighted ? "highlighted" : undefined}>
              <p className="ideal">{plan.idealFor}</p>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a className="btn" href="#kontak">
                Konsultasi paket
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section profile" id="profil">
        <div className="section-heading">
          <p className="eyebrow">Tim inti</p>
          <h2>Developer yang akan langsung menangani proyek Anda.</h2>
        </div>
        <div className="profile-card">
          <h3>{developerProfile.name}</h3>
          <p className="role">{developerProfile.title}</p>
          <p>{developerProfile.summary}</p>
          <ul>
            {developerProfile.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div>
          <p className="eyebrow">Siap mulai?</p>
          <h2>Mulai dari audit landing page, redesign funnel, sampai sistem internal—semuanya ready.</h2>
        </div>
        <a className="btn" href="#kontak">
          Kirim brief Anda
        </a>
      </section>

      <section className="section contact" id="kontak">
        <div className="section-heading">
          <p className="eyebrow">Hubungi kami</p>
          <h2>Agenda call 20 menit untuk memetakan kebutuhan Anda.</h2>
        </div>
        <div className="contact-grid">
          <div>
            <p>Email: <a href="mailto:hello@jogatera.tech">{contactInfo.email}</a></p>
            <p>WhatsApp: <a href="https://wa.me/6281200004321" target="_blank" rel="noreferrer">{contactInfo.phone}</a></p>
            <p>Lokasi studio: {contactInfo.location}</p>
            <form className="contact-form">
              <label>
                Nama
                <input type="text" placeholder="Nama Anda" required />
              </label>
              <label>
                Email/WhatsApp
                <input type="text" placeholder="Kontak yang bisa dihubungi" required />
              </label>
              <label>
                Ceritakan kebutuhan singkat
                <textarea placeholder="Landing page ads, aplikasi CRM, dsb" rows={4} required />
              </label>
              <button className="btn" type="submit">
                Kirim Brief
              </button>
            </form>
          </div>
          <div className="map">
            <iframe
              title="Lokasi JogaTera Tech"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.229342611751!2d110.367083!3d-7.815915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5785cfdf2d5f%3A0x2c52f05baa09ddfb!2sYogyakarta!5e0!3m2!1sen!2sid!4v1716400000000!5m2!1sen!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} JogaTera Tech. Crafted with Next.js, Supabase, dan NextAuth.</p>
      </footer>
    </main>
  );
}
