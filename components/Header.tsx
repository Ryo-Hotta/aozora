import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600" />
          <span className="font-bold tracking-wide text-slate-900">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-sky-700 transition"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.links.lineGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-emerald-300 text-emerald-700 text-sm font-medium hover:bg-emerald-50 transition"
          >
            <MessageCircle className="w-4 h-4" />
            オープンチャット
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
