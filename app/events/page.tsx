import Link from "next/link";
import { Calendar, MapPin, Users, Trophy, ArrowRight, JapaneseYen, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = { title: "開催情報" };

const schedule = [
  { time: "09:00", title: "受付開始", body: "富士山麓・指定会場にて受付。集合写真の準備を行います。" },
  { time: "10:00", title: "オリエンテーション", body: "企画趣旨・安全管理・1日の流れの共有。ギネス認定の流れを説明。" },
  { time: "10:30", title: "Step 1：2進数で自分を表現する", body: "128名それぞれが0か1の状態を持つ「人間ビット」となり、信号の伝達を体感。" },
  { time: "11:30", title: "Step 2：人間4ビット加算器の組み立て", body: "全員で論理ゲートを組み、屋外で4ビットの足し算を実演。" },
  { time: "13:00", title: "昼食・休憩", body: "お弁当を支給。芝生エリアで自由交流。" },
  { time: "14:00", title: "Step 3：崩壊実験", body: "わざと1人がズレることで、全体がどう壊れるかを観察。" },
  { time: "14:45", title: "Step 4：自律的な修正", body: "エラーを自分たちで検知し、修復する仕組みを試行。" },
  { time: "15:30", title: "休憩", body: "ドリンク・軽食。スタッフによる安全確認。" },
  { time: "16:00", title: "Step 5：セル・オートマトン", body: "128人で自律世界を成立させる本番リハーサル。" },
  { time: "17:00", title: "★ ギネス世界記録 公式挑戦", body: "「人間によるセル・オートマトン実演 最大規模」の認定挑戦本番。" },
  { time: "17:45", title: "結果発表・記念撮影", body: "認定員から結果発表。集合写真・ドローン空撮。" },
  { time: "18:15", title: "振り返り・宣言", body: "少人数グループで体験を言語化し、自分の人生にどう繋げるかを宣言。" },
  { time: "19:00", title: "解散", body: "解散後の送迎導線をスタッフが案内します。" },
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">EVENTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">開催情報</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            2026年6月13日（土）富士山麓にて、青空教室の旗艦イベントを開催します。
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-sky-700 text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider">
              FEATURED EVENT
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              128人で挑む、<br />人間セル・オートマトンの1日
            </h2>
            <p className="mt-6 text-sky-100 leading-relaxed max-w-2xl">
              理系中高生128名が、自分自身を「1ビット」として動き、屋外で“動く論理回路”を実演します。
              5ステップで秩序の生成を体験し、最終ステップでギネス世界記録への公式挑戦を行います。
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Calendar, label: "開催日", value: "2026年6月13日（土）9:00〜19:00" },
                { icon: MapPin, label: "会場", value: "富士山麓（詳細調整中・確定後ご案内）" },
                { icon: Users, label: "定員", value: "128名（理系中高生・先着順）" },
                { icon: JapaneseYen, label: "参加費", value: "無料（昼食・ドリンク付き）" },
                { icon: Trophy, label: "挑戦内容", value: "ギネス世界記録 公式申請（セル・オートマトン）" },
                { icon: Clock, label: "申込締切", value: "2026年6月5日（金）23:59" },
              ].map((i) => (
                <div key={i.label} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center">
                    <i.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-sky-200 font-semibold tracking-wider">{i.label}</p>
                    <p className="text-base md:text-lg font-semibold mt-0.5">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={siteConfig.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold hover:bg-sky-50 transition"
              >
                参加を申し込む
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition"
              >
                取材・パートナーお問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">タイムスケジュール</h2>
        <p className="text-sm text-slate-500 mb-8">2026年6月13日（土）・1日完結型／※状況により多少変動する場合があります</p>
        <ol className="space-y-3">
          {schedule.map((s) => (
            <li
              key={s.time}
              className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 flex gap-5 hover:border-sky-300 transition"
            >
              <div className="shrink-0 w-20 md:w-24 text-sky-700 font-bold text-lg md:text-xl">
                {s.time}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{s.title}</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">参加にあたって</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="font-bold text-slate-900 mb-3">持ち物</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>● 動きやすい服装（屋外開催）</li>
              <li>● 帽子・日焼け止め</li>
              <li>● 水筒（給水ポイントあり）</li>
              <li>● 雨天時はレインウェア</li>
              <li>● 学生証（受付確認用）</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="font-bold text-slate-900 mb-3">安全管理</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>● 救護スタッフ常駐</li>
              <li>● 熱中症対策（給水・休憩・テント）</li>
              <li>● 保険加入済み（参加者全員対象）</li>
              <li>● 雨天決行（荒天時は別日振替）</li>
              <li>● 保護者見学エリアあり</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-2xl bg-sky-50 border border-sky-100 p-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>お申込み後の流れ：</strong>
            申込フォームのご回答後、運営から3営業日以内に確認メールをお送りします。
            開催1ヶ月前に会場詳細・集合場所・送迎情報を、開催2週間前に最終確認をお送りします。
          </p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="rounded-3xl bg-slate-900 text-white p-10 md:p-14 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">先着128名・締切は6月5日（金）</h2>
          <p className="text-slate-300 mb-8">迷ったら、まず申し込みから。当日の質問は事前にメールでも受け付けます。</p>
          <a
            href={siteConfig.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg transition"
          >
            参加申込フォームを開く
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
