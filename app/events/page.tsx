import Link from "next/link";
import { Calendar, MapPin, Users, Trophy, ArrowRight, JapaneseYen } from "lucide-react";

export const metadata = { title: "開催情報" };

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">EVENTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">開催情報</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            2026年6月、中学校・高校との連携による1日集中型プログラムとして開催準備中です。
            会場・日程は開催校との調整完了後に正式アナウンスします。
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-sky-700 text-white p-10 md:p-14 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-semibold tracking-wider">
              UPCOMING EVENT
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              256人で挑む、<br />人間二進数計算機（1バイト）の1日
            </h2>
            <p className="mt-6 text-sky-100 leading-relaxed max-w-2xl">
              理系中高生256名（＝1バイト）が、自分自身を「1ビット」として動き、屋外で“動く論理回路”を実演します。
              5ステップで秩序の生成を体験し、Step2「人間二進数計算機」でギネス世界記録への公式挑戦を行います。
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Calendar, label: "開催時期", value: "2026年6月（土曜・1日完結型／日程調整中）" },
                { icon: MapPin, label: "開催形式", value: "中学校・高校と連携した出張開催（会場調整中）" },
                { icon: Users, label: "規模", value: "理系中高生256名（＝1バイト）" },
                { icon: JapaneseYen, label: "参加費", value: "無料（学校教育の一環として提供）" },
                { icon: Trophy, label: "挑戦内容", value: "ギネス世界記録 公式申請（人間二進数計算機・1バイト）" },
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold hover:bg-sky-50 transition"
              >
                開催校・取材・協賛のご相談
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5ステップ概要 */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">プログラム構成（概要）</h2>
        <p className="text-sm text-slate-500 mb-8">
          1日完結・5ステップ。タイムスケジュールの詳細は開催校との調整完了後に公開します。
        </p>
        <ol className="space-y-3">
          {[
            { n: "Step 1", title: "2進数で自分を表現する", body: "256名それぞれが0か1の状態を持つ「人間ビット」となり、信号の伝達を体感。" },
            { n: "Step 2", title: "人間二進数計算機（8ビット加算器）★ ギネス挑戦", body: "256人で論理ゲートを組み、屋外で1バイト（8ビット）の二進数加算を実演。Carry伝播を体で覚える。" },
            { n: "Step 3", title: "崩壊実験", body: "わざと1人がズレることで、全体がどう壊れるかを観察。" },
            { n: "Step 4", title: "自律的な修正", body: "エラーを自分たちで検知し、修復する仕組みを試行。" },
            { n: "Step 5", title: "セル・オートマトン（教育演目）", body: "シンプルなルールから複雑な秩序が立ち現れる「ライフゲーム」を256人の身体で実演。" },
          ].map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 flex gap-5 hover:border-sky-300 transition"
            >
              <div className="shrink-0 w-24 text-sky-700 font-bold">
                {s.n}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{s.title}</p>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Notice */}
      <section className="mx-auto max-w-4xl px-5 pb-24">
        <div className="rounded-2xl bg-sky-50 border border-sky-100 p-7">
          <h3 className="font-bold text-slate-900 mb-2">開催校・パートナーを募集しています</h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            青空教室は、開催校（中学校・高校）との連携によって生徒256名規模で実施するプログラムです。
            「自校で開催を検討したい」「協賛・取材として関わりたい」などのご相談はお問い合わせページよりご連絡ください。
            開催校が確定し次第、日程・会場の詳細を本ページに掲載します。
          </p>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 text-white text-sm font-semibold hover:bg-sky-700 transition"
            >
              お問い合わせへ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
