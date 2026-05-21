import { Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">CONTACT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">お問い合わせ</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            参加申込はGoogleフォームから、それ以外のご質問・取材・協賛のご相談はメールにて承ります。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 space-y-8">
        {/* 申込 */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-sky-700 text-white p-8 md:p-10">
          <p className="text-sky-100 text-sm font-semibold tracking-widest mb-2">FOR PARTICIPANTS</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">参加申込はこちら</h2>
          <p className="text-sky-50 leading-relaxed mb-6">
            理系中高生256名（＝1バイト）限定・参加費無料。締切は2026年6月5日（金）23:59、定員に達し次第締切ります。
          </p>
          <a
            href={siteConfig.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-bold hover:bg-sky-50 transition"
          >
            Googleフォームを開く
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* メール */}
        <div className="rounded-2xl bg-white border border-sky-100 p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-600 text-white mb-5">
            <Mail className="w-7 h-7" />
          </div>
          <p className="text-slate-700">
            参加申込以外（取材・協賛・パートナー・教員からのご質問など）は下記メールアドレスへ。
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-xl md:text-2xl font-bold text-sky-700 hover:text-sky-800 underline decoration-sky-300 underline-offset-4"
          >
            {siteConfig.email}
          </a>
          <p className="mt-6 text-sm text-slate-500">通常2〜3営業日以内にご返信いたします。</p>
        </div>

        {/* 用途別 */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">お問い合わせの種類</h2>
          <ul className="space-y-3 text-slate-700">
            {[
              "参加に関するご質問（保護者・教員からも歓迎）",
              "取材・メディア掲載のご依頼",
              "協賛・パートナーシップのご相談",
              "学校での企画紹介・チラシ掲示のご相談",
              "団体への参画・運営ボランティアのご希望",
              "その他、青空教室に関するすべてのお問い合わせ",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-sky-600">●</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
