import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-sky-600" />
            <span className="font-bold text-slate-900">{siteConfig.name}</span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-3">サイトマップ</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sky-700">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 mb-3">参加・お問い合わせ</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a
                href={siteConfig.links.applicationForm}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-700"
              >
                参加申込フォーム
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.lineGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 text-emerald-600 font-medium"
              >
                LINEグループ「{siteConfig.links.lineGroupName}」
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-sky-700">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>{siteConfig.nameEn}</span>
        </div>
      </div>
    </footer>
  );
}
