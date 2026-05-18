import { Flame, MessageCircle, Trophy, Users } from "lucide-react";

export const metadata = { title: "活動内容" };

const programs = [
  {
    icon: Trophy,
    title: "共同達成チャレンジ",
    body: "ギネス世界記録への挑戦など、参加者全員で一つの大きなゴールを目指す体験を設計します。「やればできる」を、根拠ではなく事実として手にしてもらいます。",
  },
  {
    icon: MessageCircle,
    title: "深夜の対話",
    body: "極限の挑戦を終えた直後の夜、少人数のグループで本音を語り合う時間を持ちます。一人では辿り着けない自分の答えに、仲間と一緒に近づきます。",
  },
  {
    icon: Users,
    title: "段階的リハーサル",
    body: "本番直前に詰め込むのではなく、当日の中で何段階にも分けて準備を重ねます。リハーサル自体が学びの主役になる構造です。",
  },
  {
    icon: Flame,
    title: "振り返りと宣言",
    body: "2日間で得たものを言葉にし、自分の人生にどう繋げるかを宣言する場を設けます。体験を一過性で終わらせない仕組みです。",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">ACTIVITIES</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">活動内容</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            青空教室が提供する、4つのコアプログラム。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-600/5 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">設計思想</h2>
          <p className="text-slate-700 leading-relaxed">
            すべてのプログラムは「論理的思考の4ステップ」を、参加者自身が体験のなかで使う構造になっています。
            イベントそのものが4ステップで設計されており、運営側のプロセスも参加者に開示します。
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            「ここで考えたプロセスは、これからの人生のあらゆる場面で同じ形で使える」――
            その実感を持ち帰ってもらうことが、私たちのゴールです。
          </p>
        </div>
      </section>
    </>
  );
}
