import Link from "next/link";
import { ArrowRight, Brain, Users, Sparkles, Target } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute top-20 -left-10 w-72 h-72 rounded-full bg-sky-200 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-100 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-5 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="text-sky-700 font-semibold tracking-widest text-sm mb-4">
            AOZORA CLASSROOM
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            考える力で、<br className="md:hidden" />
            世界を動かす。
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
            青空教室は、学生が「論理的に考え抜く力」を、本物の挑戦と仲間との対話を通じて身につけるための、体験型教育プロジェクトです。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition shadow-lg shadow-sky-600/20"
            >
              開催中のイベントを見る
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white text-slate-900 font-medium hover:border-sky-600 hover:text-sky-700 transition"
            >
              団体について
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">MISSION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              「考える」を、<br />一生使える力にする。
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              情報は手の中にあるのに、私たちは選択に迷い、決断に揺れる。
              青空教室は、知識を増やすことではなく、思考のプロセスそのものを鍛えることに焦点を当てています。
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              目的を定め、達成条件を洗い出し、現在地を確かめ、突破口を導く。
              この4ステップを、机の上ではなく、本物の挑戦の中で身につけてもらいます。
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 p-8 md:p-10">
            <h3 className="font-bold text-slate-900 mb-6">論理的思考の4ステップ</h3>
            <ol className="space-y-4">
              {[
                { n: 1, t: "目的を定義する", d: "何のためにやるのかを言語化する" },
                { n: 2, t: "達成条件を洗い出す", d: "成功とは何かを具体にする" },
                { n: 3, t: "現在地を確認する", d: "今どこまで来ているかを把握する" },
                { n: 4, t: "突破方法を導き出す", d: "ギャップを埋める打ち手を作る" },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{s.t}</p>
                    <p className="text-sm text-slate-600">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3 text-center">VALUES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            私たちが大切にしていること
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "考え抜く",
                desc: "答えを暗記するのではなく、自分の頭で論理を組み立てる経験を最優先します。",
              },
              {
                icon: Users,
                title: "共に成功する",
                desc: "競い合うのではなく、仲間と一緒に同じ山を登る共同体験を設計します。",
              },
              {
                icon: Sparkles,
                title: "本気で挑む",
                desc: "妥協のない目標を掲げ、達成までの過程そのものを学びにします。",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-600/5 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-sky-700 text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="relative">
            <p className="text-sky-200 text-sm font-semibold tracking-widest mb-3">UPCOMING EVENT</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              128人で、<br className="md:hidden" />世界一を取りに行く2日間。
            </h2>
            <p className="mt-6 max-w-2xl text-sky-100 leading-relaxed">
              論理的思考を学ぶ最強の方法は、本気の挑戦を共にすることです。
              2026年6月13日〜14日、私たちはギネス世界記録への挑戦と、深夜の対話を通じて、参加者と一緒に「考える」の原体験をつくります。
            </p>
            <div className="mt-8">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold hover:bg-sky-50 transition"
              >
                詳細を見る
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="text-center">
          <Target className="w-10 h-10 mx-auto text-sky-600 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            一緒に、考える力を育てませんか。
          </h2>
          <p className="mt-4 text-slate-600">
            参加申込・取材・パートナーシップなど、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
          >
            お問い合わせ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
