import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo/logo-jogateratech.png";

export const Navbar = () => {
  const navItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md supports-backdrop-filter:bg-[#070815]/65">
      <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-[clamp(1.5rem,5vw,6rem)]">
        <Link href="#beranda" className="inline-flex items-center gap-2">
          <Image
            src={logo}
            alt="JogaTera Tech"
            width={800}
            height={600}
            className="h-20 w-full rounded-md"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-[#aab1c9] transition hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <details className="group relative">
            <summary className="list-none cursor-pointer rounded-lg border border-white/10 px-3 py-2 text-sm text-[#aab1c9] transition hover:text-white">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-[#0f1025] p-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm text-[#aab1c9] hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
};
