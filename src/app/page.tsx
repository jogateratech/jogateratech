import ListItem from "@/components/shared/list";
import { contactInfo } from "@/constants/data-array/contact-info";
import { developerProfile } from "@/constants/data-array/developer-profile";
import { heroStats } from "@/constants/data-array/hero-stats";
import { pillars } from "@/constants/data-array/pillars";
import { pricingPlans } from "@/constants/data-array/princing";
import { processSteps } from "@/constants/data-array/process-step";
import { servicesMenu } from "@/constants/data-array/service";
import { techStack } from "@/constants/data-array/teck-stack";
import { testimonials } from "@/constants/data-array/testimony";
import {
  cardClasses,
  eyebrowClasses,
  ghostButtonClasses,
  heroBackgroundStyle,
  primaryButtonClasses,
  sectionClasses,
} from "@/helpers/config/index.config";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-[clamp(3.5rem,6vw,6.5rem)] px-[clamp(1.5rem,5vw,6rem)] pb-16 pt-8 text-[#f5f6ff]">
      <header
        className="w-full max-w-[1200px] mx-auto rounded-4xl border border-white/10 px-[clamp(1.5rem,4vw,4rem)] py-10"
        id="beranda"
        style={heroBackgroundStyle}
      >
        <nav className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xl font-bold tracking-[0.08em]">
            JogaTera Tech
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className={ghostButtonClasses}>
              Paket Harga
            </a>
            <a href="#kontak" className={primaryButtonClasses}>
              Konsultasi Gratis
            </a>
          </div>
        </nav>
        <div className="max-w-[720px]">
          <p className={eyebrowClasses}>
            Studio pengembangan website berbasis data
          </p>
          <h1 className="mb-4 text-[clamp(2.6rem,4vw,3.8rem)] font-semibold leading-tight">
            Bangun funnel digital yang siap scaling sejak hari pertama kampanye
            berjalan.
          </h1>
          <p className="mb-6 text-lg text-[#aab1c9]">
            JogaTera Tech mendesain landing page dan aplikasi web yang
            hyper-focused terhadap konversi, siap diintegrasikan dengan
            Supabase, NextAuth, dan stack modern lainnya.
          </p>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <a className={primaryButtonClasses} href="#kontak">
              Jadwalkan Diskusi 20 Menit
            </a>
            <a className={ghostButtonClasses} href="#layanan">
              Lihat Layanan
            </a>
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[2rem] font-semibold">{stat.value}</div>
                <p className="text-[#aab1c9]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className={sectionClasses} id="tentang">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Kenapa JogaTera</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Fokus pada cerita brand, ditenagai teknologi enterprise.
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {pillars.map((pillar) => (
            <article key={pillar.title} className={cardClasses}>
              <h3 className="mb-2 text-xl font-semibold">{pillar.title}</h3>
              <p className="text-[#aab1c9]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClasses} id="layanan">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Solusi</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Layanan end-to-end dari ide hingga go-live.
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {servicesMenu.map((service) => (
            <article
              key={service.title}
              className={`${cardClasses} flex flex-col gap-4`}
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-[#aab1c9]">{service.description}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {service.deliverables.map((item) => (
                  <ListItem key={item}>{item}</ListItem>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClasses} id="proses">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Cara kerja</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Workshop strategis, iterasi cepat, peluncuran terukur.
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className={`${cardClasses} flex flex-col gap-2`}
            >
              <div className="text-sm font-medium text-[#25d3b8]">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-[#aab1c9]">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClasses} id="stack">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Stack teknologi</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Dipilih untuk performa, keamanan, dan fleksibilitas skalabilitas.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#aab1c9]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className={sectionClasses} id="testimoni">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Cerita klien</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Bisnis yang tumbuh bersama JogaTera Tech.
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className={`${cardClasses} flex flex-col gap-3`}
            >
              <p className="text-lg italic text-[#fdfdff]">
                “{testimonial.quote}”
              </p>
              <p className="text-[#aab1c9]">{testimonial.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClasses} id="pricing">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Investasi</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Paket harga fleksibel sesuai tujuan kampanye Anda.
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {pricingPlans.map((plan) => (
            <article
              key={plan.title}
              className={`${cardClasses} relative flex flex-col gap-4 ${
                plan.highlighted
                  ? "border-[#7f5bff] shadow-[0_12px_40px_rgba(127,91,255,0.35)]"
                  : ""
              }`}
            >
              {plan.highlighted && plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#7f5bff] px-3 py-1 text-xs font-semibold text-white shadow-[0_6px_16px_rgba(127,91,255,0.5)]">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              <p className="text-sm text-[#aab1c9]">{plan.idealFor}</p>
              <div className="mt-1">
                <div className="text-[2rem] font-semibold">{plan.price}</div>
                {plan.subtitle && (
                  <div className="text-sm text-[#aab1c9]">{plan.subtitle}</div>
                )}
              </div>
              <ul className="mt-1 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <ListItem key={feature}>{feature}</ListItem>
                ))}
              </ul>
              <a className={primaryButtonClasses} href="#kontak">
                Pilih Paket
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={sectionClasses} id="profil">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Tim inti</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Developer yang akan langsung menangani proyek Anda.
          </h2>
        </div>
        <div className={`${cardClasses} flex flex-col gap-4`}>
          <h3 className="text-2xl font-semibold">{developerProfile.name}</h3>
          <p className="text-[#aab1c9]">{developerProfile.title}</p>
          <p className="text-[#aab1c9]">{developerProfile.summary}</p>
          <ul className="flex flex-col gap-2">
            {developerProfile.highlights.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="w-full max-w-[1200px] mx-auto flex flex-col gap-6 rounded-3xl px-[clamp(1.5rem,4vw,4rem)] py-8 text-white md:flex-row md:items-center md:justify-between"
        style={{
          background:
            "linear-gradient(130deg,#7f5bff 0%,#5b35f0 50%,#25d3b8 100%)",
        }}
      >
        <div className="space-y-4">
          <p className={eyebrowClasses}>Siap mulai?</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Mulai dari audit landing page, redesign funnel, sampai sistem
            internal—semuanya ready.
          </h2>
        </div>
        <a className={primaryButtonClasses} href="#kontak">
          Kirim brief Anda
        </a>
      </section>

      <section className={sectionClasses} id="kontak">
        <div className="max-w-[720px] space-y-4">
          <p className={eyebrowClasses}>Hubungi kami</p>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-semibold leading-tight">
            Agenda call 20 menit untuk memetakan kebutuhan Anda.
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          <div className="space-y-3 text-[#aab1c9]">
            <p>
              Email:{" "}
              <a
                className="text-white underline decoration-[#25d3b8]/40 hover:decoration-[#25d3b8]"
                href="mailto:hello@jogatera.tech"
              >
                {contactInfo.email}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                className="text-white underline decoration-[#25d3b8]/40 hover:decoration-[#25d3b8]"
                href="https://wa.me/6281200004321"
                target="_blank"
                rel="noreferrer"
              >
                {contactInfo.phone}
              </a>
            </p>
            <p>Lokasi studio: {contactInfo.location}</p>
            <form className={`${cardClasses} flex flex-col gap-4`}>
              <label className="flex flex-col gap-2 text-sm">
                Nama
                <input
                  className="rounded-[0.8rem] border border-white/20 bg-white/5 px-4 py-3 text-white focus:outline-2 focus:outline-[#7f5bff]"
                  type="text"
                  placeholder="Nama Anda"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Email/WhatsApp
                <input
                  className="rounded-[0.8rem] border border-white/20 bg-white/5 px-4 py-3 text-white focus:outline-2 focus:outline-[#7f5bff]"
                  type="text"
                  placeholder="Kontak yang bisa dihubungi"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                Ceritakan kebutuhan singkat
                <textarea
                  className="rounded-[0.8rem] border border-white/20 bg-white/5 px-4 py-3 text-white focus:outline-2 focus:outline-[#7f5bff]"
                  placeholder="Landing page ads, aplikasi CRM, dsb"
                  rows={4}
                  required
                />
              </label>
              <button className={primaryButtonClasses} type="submit">
                Kirim Brief
              </button>
            </form>
          </div>
          <div>
            <iframe
              title="Lokasi JogaTera Tech"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.229342611751!2d110.367083!3d-7.815915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5785cfdf2d5f%3A0x2c52f05baa09ddfb!2sYogyakarta!5e0!3m2!1sen!2sid!4v1716400000000!5m2!1sen!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-80 w-full rounded-[1.25rem] border-0"
            />
          </div>
        </div>
      </section>

      <footer className="w-full max-w-[1200px] mx-auto pb-8 text-center text-sm text-[#aab1c9]">
        <p>
          © {new Date().getFullYear()} JogaTera Tech. Crafted with Next.js,
          Supabase, dan NextAuth.
        </p>
      </footer>
    </main>
  );
}
