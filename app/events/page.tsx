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
            2026年6月21日（日）、東京都内（屋外メイン／雨天時は屋内）で1日完結型のイベントを開催します。事前登録制での参加申込を受け付けています。
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
              256人で挑む、<br />世界最大級の人間二進数乗算機
            </h2>
            <p className="mt-6 text-sky-100 leading-relaxed max-w-2xl">
              256人（＝1バイト）が自分自身を「1ビット」として動き、屋外で9bit × 9bitの二進数乗算（最大511×511）を実演します。
              Wallace tree方式の乗算器を人体のみで構成する、世界初の規模での公式記録挑戦です。
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Calendar, label: "開催日", value: "2026年6月21日（日）｜1日完結型" },
                { icon: MapPin, label: "開催地", value: "東京都内（屋外メイン／雨天時は屋内に切替）" },
                { icon: Users, label: "規模", value: "総勢300人規模（演算コア256人＋運営・観客）" },
                { icon: JapaneseYen, label: "参加費", value: "無料（事前登録制）" },
                { icon: Trophy, label: "挑戦内容", value: "世界最大級の人間二進数乗算機（256人・Wallace tree方式）" },
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
                参加申込・協賛・取材のご相談
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-sky-200 leading-relaxed max-w-2xl">
              ※ 公式記録機関との手続き進行中のため、現時点では「世界最大級」「世界初」等の表記でご案内しています。正式名称は契約締結後に本ページで公開します。
            </p>
          </div>
        </div>
      </section>

      {/* 3ステップ概要 */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">プログラム構成（概要）</h2>
        <p className="text-sm text-slate-500 mb-8">
          1日完結・3ステップ。詳細タイムスケジュールは事前登録者へ別途ご案内します。
        </p>
        <ol className="space-y-3">
          {[
            { n: "Step 1", title: "2進数で自分を表現する", body: "256人それぞれが0/1の状態を持つ「人間ビット」となり、信号の伝達を体感。" },
            { n: "Step 2", title: "人間二進数乗算機（9bit × 9bit）★ 世界最大級の公式挑戦", body: "Wallace tree乗算器を256人で組み立て、9bit×9bit（最大511×511＝261,121）の二進数乗算を実演。FA/HAレベルから人体で構成する、世界初の規模での挑戦。" },
            { n: "Step 3", title: "セル・オートマトン（教育演目）", body: "ライフゲームのシンプルなルールから複雑な秩序が立ち上がる瞬間を、256人の身体で実演。" },
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
          <h3 className="font-bold text-slate-900 mb-2">参加者・協賛・運営メンバーを募集しています</h3>
          <ul className="text-sm text-slate-700 leading-relaxed space-y-2 list-disc list-inside">
            <li>参加者（中高生・大学生・社会人）：事前登録制で受付中</li>
            <li>協賛企業：人材アクセス（採用接点）・PR・公式記録掲載などの価値提供</li>
            <li>運営ボランティア：当日運営・準備リハーサル（5/27〜6/20）への参画</li>
            <li>取材・メディア：当日撮影／事前取材のご相談</li>
          </ul>
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
