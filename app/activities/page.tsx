import { Binary, Cpu, AlertTriangle, Wrench, Globe2, Trophy } from "lucide-react";

export const metadata = { title: "プログラム" };

const steps = [
  {
    icon: Binary,
    step: "Step 1",
    title: "2進数で自分を表現する",
    body: "128名それぞれが「0か1」の状態を持つ人間ビットになります。手の上げ下げ・前後の動きなど、自分自身を信号に変換する感覚を身体で覚えます。",
    learning: "情報の最小単位（ビット）と、信号の伝達。",
  },
  {
    icon: Cpu,
    step: "Step 2",
    title: "128人で4ビット加算器を組み立てる",
    body: "全員でAND/OR/XORの論理ゲートを担当し、屋外で4ビットの足し算を実演します。一人ひとりが正しく動かないと、計算結果が崩れる構造を体験。",
    learning: "論理ゲートの組み合わせで計算が成立する仕組み。",
  },
  {
    icon: AlertTriangle,
    step: "Step 3",
    title: "崩壊実験：1人ズレたらどうなるか",
    body: "わざと数人がタイミングをずらすことで、全体の出力がどう壊れるかを観察します。「協働の正確さ」の意味を、失敗を通じて理解します。",
    learning: "システムの脆弱性と、同期の重要性。",
  },
  {
    icon: Wrench,
    step: "Step 4",
    title: "自律的に修正する仕組みをつくる",
    body: "崩壊を防ぐためのチェック機構を、参加者自身が設計します。トップダウンの指示ではなく、現場の128人が自律的にエラーを直す手順を実装します。",
    learning: "誤り訂正・冗長化・自己修復という考え方。",
  },
  {
    icon: Globe2,
    step: "Step 5",
    title: "セル・オートマトンで自律世界を立ち上げる",
    body: "シンプルなルールだけで複雑なパターンが生成される「ライフゲーム」を、128人の身体で実演します。意図せず秩序が生まれる瞬間を全員で目撃します。",
    learning: "創発・自己組織化・複雑系という思考の道具。",
  },
  {
    icon: Trophy,
    step: "Final",
    title: "ギネス世界記録 公式挑戦",
    body: "「人間によるセル・オートマトン実演 最大規模」として、ギネス世界記録への公式申請を行います。挑戦の成立は、全員の正確な動きにかかっています。",
    learning: "世界レベルの挑戦を、自分たちの手で成立させた事実。",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">PROGRAM</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">プログラム内容</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            128人で「秩序の生成」を体験する5ステップ＋ギネス公式挑戦。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((p) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-600/5 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <p.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-sky-700 tracking-widest">{p.step}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{p.body}</p>
              <p className="text-xs text-slate-500 border-t border-slate-100 pt-3">
                <span className="font-semibold text-slate-700">学べること：</span>
                {p.learning}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-slate-50 border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">設計思想</h2>
          <p className="text-slate-700 leading-relaxed">
            5ステップは「論理的思考の4ステップ（目的／条件／現在地／差分）」を、
            参加者自身が体験のなかで使う構造になっています。
            運営側のプロセスも参加者に開示し、企画の組み立て方そのものを学びの教材として共有します。
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
