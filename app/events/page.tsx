import Link from "next/link";
import { Calendar, MapPin, Users, Trophy, ArrowRight } from "lucide-react";

export const metadata = { title: "イベント" };

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">EVENTS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">イベント情報</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            青空教室が主催する、本気の挑戦の場。
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
              128人で挑む、<br />ギネス世界記録 × 論理的思考の2日間
            </h2>
            <p className="mt-6 text-sky-100 leading-relaxed max-w-2xl">
              青空教室の旗艦イベント。参加者128人が一つのチームとなり、ギネス世界記録に挑戦します。
              本気の共同体験と深夜の対話を通じて、論理的思考の4ステップを自分の道具にしていきます。
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Calendar, label: "開催日", value: "2026年6月13日（土）〜14日（日）" },
                { icon: MapPin, label: "会場", value: "千葉県・小湊さとうみ学校（鴨川）" },
                { icon: Users, label: "定員", value: "128名（学生中心）" },
                { icon: Trophy, label: "挑戦内容", value: "ギネス世界記録 公式挑戦" },
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
                参加を申し込む
                <ArrowRight className="w-4 h-4" />
              </Link>
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

      {/* Program outline */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">プログラム概要</h2>
        <div className="space-y-6">
          {[
            {
              day: "DAY 1",
              title: "集結とリハーサル、そして本番",
              items: [
                "13:00 受付・オリエンテーション",
                "15:00 段階的リハーサル（4ステップを使う体験）",
                "21:00 ギネス世界記録 公式挑戦",
                "22:00〜 深夜の対話（少人数グループ × 焚火の囲み）",
              ],
            },
            {
              day: "DAY 2",
              title: "持ち帰り、宣言、解散",
              items: [
                "08:00 朝食",
                "09:00 朝の輪・全体振り返り",
                "10:00 集合写真",
                "10:30 クロージング・宣言",
                "11:00 解散",
              ],
            },
          ].map((d) => (
            <div key={d.day} className="rounded-2xl bg-white border border-slate-200 p-7">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sky-700 font-bold tracking-wider">{d.day}</span>
                <span className="text-lg font-semibold text-slate-900">{d.title}</span>
              </div>
              <ul className="space-y-2 text-slate-700">
                {d.items.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="text-sky-600">●</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-500">
          ※プログラムの詳細は変更となる場合があります。最新情報はお問い合わせください。
        </p>
      </section>
    </>
  );
}
