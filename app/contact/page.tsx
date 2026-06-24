import { Mail, MessageCircle, FileText, ArrowRight } from "lucide-react";
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
            ※当初予定していた 2026年6月28日（日）の本番は中止としました。続報・協賛・取材・運営参画のご相談は、以下の窓口から承ります。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 space-y-6">
        {/* 中止のお知らせ（最上部） */}
        <div className="rounded-2xl bg-rose-50 border-2 border-rose-300 p-8 md:p-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500 text-white mb-4">
            <FileText className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-rose-700 tracking-widest mb-2">参加申込の受付について</p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            参加申込の受付は一旦停止しています
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm mb-3">
            会場（東京理科大学 野田キャンパス）が使用不可となったため、2026年6月28日（日）の本番は中止としました。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm mb-5">
            2026年8月下旬での再開催に向けて準備中です。日程・会場が確定次第、改めて事前登録の受付を開始します。LINEオープンチャットで最初にお知らせしますので、続報を希望される方はぜひご参加ください。
          </p>
          <a
            href={siteConfig.links.lineGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
          >
            LINEオープンチャットで続報を受け取る
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* オープンチャット（メイン拠点） */}
        <div className="rounded-2xl bg-white border border-sky-100 p-8 md:p-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500 text-white mb-4">
            <MessageCircle className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-emerald-700 tracking-widest mb-2">STEP 2｜情報入手・コミュニティ参加</p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            オープンチャット「{siteConfig.links.lineGroupName}」
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm mb-5">
            参加者・運営・興味のある方が集うコミュニティ。当日までのリハーサル情報・小話・進捗をこちらで共有しています。事前申込済の方は必ずご参加ください。
          </p>
          <a
            href={siteConfig.links.lineGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
          >
            オープンチャットに参加する
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* メール */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-700 text-white mb-4">
            <Mail className="w-6 h-6" />
          </div>
          <p className="text-xs font-bold text-slate-700 tracking-widest mb-2">個別ご相談</p>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
            メールでのお問い合わせ
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm mb-4">
            協賛のご検討、取材・メディア掲載のご依頼、教員・保護者からのご質問、団体への運営参画ご希望は、メールにて承ります。
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-lg md:text-xl font-bold text-sky-700 hover:text-sky-800 underline decoration-sky-300 underline-offset-4 break-all"
          >
            {siteConfig.email}
          </a>
          <p className="mt-4 text-xs text-slate-500">通常2〜3営業日以内にご返信いたします。</p>
        </div>

        {/* 用途別 */}
        <div className="pt-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">お問い合わせの種類</h2>
          <ul className="space-y-3 text-slate-700">
            {[
              "再開催（2026年8月下旬予定）への参加意向のご相談",
              "応援・協賛のご相談（社名・ロゴの記録掲載など）",
              "取材・メディア掲載のご依頼",
              "教員・保護者からのご質問",
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
