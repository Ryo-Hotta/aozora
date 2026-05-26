import { Binary, Cpu, Globe2, Trophy } from "lucide-react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { DiagramFrame } from "@/components/DiagramFrame";

export const metadata = { title: "プログラム" };

const steps = [
  {
    icon: Binary,
    step: "Step 1",
    title: "自分が\"1ビット\"になる",
    body: "256人（＝1バイト）それぞれが白旗（0）・黒旗（1）を掲げる「人間ビット」になります。号令と同時に旗を振り上げ、自分自身を信号に変換する感覚を肌で感じます。",
    learning: "情報の最小単位（ビット）と、信号の伝達。",
    visualKind: "photo" as const,
    visualPrompt: `【プロンプト】屋外、逆光のヒーロー的ローアングル。
横一列の中高生・大学生が号令と同時に旗を真上に振り上げた瞬間。黒旗（=1）と白旗（=0）が交互にはためき、布が風になびく。
レンズフレア、汗、見開いた目、満面の笑顔、ターコイズのビブスが太陽光に透ける。
青春映画のキービジュアル／ポスタービジュアル品質、「自分が回路の1ビットになる」高揚感を1枚で。`,
  },
  {
    icon: Cpu,
    step: "Step 2",
    title: "256人で人間二進数乗算機（9bit × 9bit）を組み上げる",
    body: "全員でHA（半加算器：1桁の足し算回路）・FA（全加算器：繰り上がりを含む足し算回路）を担当し、Wallace tree（乗算を並列処理する高速回路方式）の乗算器を人体で構成します。最大511 × 511 = 261,121の9bit × 9bit（9桁の2進数同士）の掛け算を、屋外で実演。演算終了後は「整理フェーズ」へ：各位（2⁰〜2³¹）のプラカードの前に黒旗の参加者が集合し、繰り上がりは「前へならえ」で次の位へ移動。最後に右から読み上げて18桁の答えを確定します。★世界最大級・世界初の規模での公式記録挑戦の本番演目。",
    learning: "論理ゲートの組み合わせで乗算が成立する仕組み／Wallace tree／部分積／キャリー伝播／整理フェーズの物理アルゴリズム。",
    visualKind: "diagram" as const,
    visualPrompt: `【プロンプト】SF映画のホログラム設計図風、1枚に2フェーズ収めた未来的インフォグラフィック。
左：9bit×9bit Wallace tree乗算器の人体配置（入力18→部分積81→Wallace tree 81→CPA 18→出力18）、HA/FAブロックは色分けされた立方体、人型ピクトグラムが各セルに立つ、信号フローは蛍光シアンの光線。
右：整理フェーズの31本のプラカード（2⁰〜2³¹）が扇状に並び、黒旗の人影が「前へならえ」で次位へ流れる残像。
ダークネイビー背景に蛍光イエロー×シアン、等角投影、Apple Keynote×Bladerunner調、「この設計図に自分も組み込まれたい」と直感させる緻密な未来感。`,
  },
  {
    icon: Globe2,
    step: "Step 3",
    title: "セル・オートマトンで自律世界を立ち上げる",
    body: "シンプルなルールだけで複雑なパターンが生成される「ライフゲーム」を、256人の身体で実演します。意図せず秩序が生まれる瞬間に全員で立ち会います（教育演目）。",
    learning: "創発・自己組織化・複雑系という思考の道具。",
    visualKind: "photo" as const,
    visualPrompt: `【プロンプト】夕方のオレンジ斜光が広場を染める時間帯。
16×16グリッドの256人が同時に立ち上がったり座り込んだりして、ライフゲームの「グライダー」「点滅子」が広場を斜めに駆け抜ける決定的瞬間。
立つ＝白い人影、座る＝影、パターンが波のように移動して見える。
何人かが顔を上げて「動いてる！」と隣に声をかける表情、長時間露光で動きの残像、宮崎駿アニメのような感動的な光、見た人が「混じりたい」と声に出す絵。`,
  },
  {
    icon: Trophy,
    step: "Final",
    title: "公式記録への挑戦",
    body: "「256人による人間二進数乗算機（9bit × 9bit）」として、世界記録機関に公式申請。Step2で組んだWallace tree乗算器を本番として、認定員立会いのもと実演します。第三者の数学者による独立検算も同時に実施。挑戦の成立は、全員の正確な動きにかかっています。",
    learning: "世界レベルの挑戦を、自分たちの手で成立させた事実。",
    visualKind: "photo" as const,
    visualPrompt: `【プロンプト】夕暮れ、広場の中央。
認定員（スーツ姿）が代表者に認定証を手渡す瞬間、256人の参加者が一斉に両手を突き上げて歓声を爆発させる。
紙吹雪が舞い、夕日のオレンジ光が全員の汗と涙を照らす、数学者証人と運営メンバーが抱き合う、報道カメラのフラッシュが連続。
ローアングルから空を仰ぐ構図、レンズフレア、ハリウッド映画クライマックス品質、「ここに自分も立ちたい」と心が震える1枚。`,
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
              <div className="mb-4">
                {p.visualKind === "photo" ? (
                  <PhotoFrame aspect="video" prompt={p.visualPrompt} />
                ) : (
                  <DiagramFrame aspect="video" prompt={p.visualPrompt} />
                )}
              </div>
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
