import { Binary, Cpu, Globe2, Trophy } from "lucide-react";

export const metadata = { title: "プログラム" };

const steps = [
  {
    icon: Binary,
    step: "Step 1",
    title: "2進数で自分を表現する",
    body: "256人（＝1バイト）それぞれが「0か1」の状態を持つ人間ビットになります。手の上げ下げ・前後の動きなど、自分自身を信号に変換する感覚を身体で覚えます。",
    learning: "情報の最小単位（ビット）と、信号の伝達。",
  },
  {
    icon: Cpu,
    step: "Step 2",
    title: "256人で人間二進数乗算機（9bit × 9bit）を組み上げる",
    body: "全員でHA（半加算器）・FA（全加算器）を担当し、Wallace tree方式の乗算器を人体で構成します。最大511 × 511 = 261,121の9bit × 9bit乗算を、屋外で実演。一人ひとりが正しく動かないと答えが崩れる構造を体感します。★世界最大級・世界初の規模での公式記録挑戦の本番演目。",
    learning: "論理ゲートの組み合わせで乗算が成立する仕組み／Wallace tree／部分積／キャリー伝播。",
  },
  {
    icon: Globe2,
    step: "Step 3",
    title: "セル・オートマトンで自律世界を立ち上げる",
    body: "シンプルなルールだけで複雑なパターンが生成される「ライフゲーム」を、256人の身体で実演します。意図せず秩序が生まれる瞬間を全員で目撃します（教育演目）。",
    learning: "創発・自己組織化・複雑系という思考の道具。",
  },
  {
    icon: Trophy,
    step: "Final",
    title: "公式記録への挑戦",
    body: "「256人による人間二進数乗算機（9bit × 9bit）」として、世界記録機関に公式申請。Step2で組んだWallace tree乗算器を本番として、認定員立会いのもと実演します。第三者の数学者による独立検算も同時に実施。挑戦の成立は、全員の正確な動きにかかっています。",
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
            256人（＝1バイト）で「秩序の生成」を体験する3ステップ＋世界最大級の公式記録挑戦。
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
            3ステップは「論理的思考の4ステップ（目的／条件／現在地／差分）」を、
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
