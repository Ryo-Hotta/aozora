import Link from "next/link";
import { Calendar, MapPin, Users, Trophy, ArrowRight, JapaneseYen } from "lucide-react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { DiagramFrame } from "@/components/DiagramFrame";

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

            <div className="mt-8">
              <PhotoFrame
                aspect="video"
                caption="本番イメージ：256人による人間二進数乗算機"
                prompt={`【プロンプト】真夏の青空、東京都心の屋外広場。
16×16の格子に整列する256人が、たった今「演算開始」の合図で一斉に旗を振り上げた瞬間。
黒旗（=1）と白旗（=0）が市松模様のように広場を埋め尽くし、布が風になびいて統一されたパターンを描く。広場の縁には31本のプラカード（2⁰〜2³¹）が扇状に並ぶ。
中央には白衣の数学者証人とスーツ姿の認定員がストップウォッチを構え、周囲には観衆と報道カメラ。
ドローン高高度俯瞰、National Geographic調、ターコイズブルー×旗の紅白×陽光のコントラスト、「歴史的瞬間に立ち会える」と直感させるシネマティック構図。`}
                className="bg-white/10 border-white/30"
              />
            </div>

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
        <div className="space-y-8">
          {[
            {
              n: "Step 1",
              title: "自分が\"1ビット\"になる",
              body: "256人それぞれが白旗（0）・黒旗（1）を掲げる「人間ビット」となり、信号が伝わるしくみを肌で感じる。",
              kind: "photo" as const,
              prompt: `【プロンプト】屋外、太陽を背にした逆光のローアングル。
横一列の中高生・大学生が、リーダーの号令に合わせて旗を真上に振り上げた瞬間。黒旗（=1）と白旗（=0）が交互にはためき、布が風になびく。
レンズフレア、汗ばんだ額、見開いた目、口を開けた満面の笑顔、ターコイズのビブスが光に透ける。
青春映画のキービジュアル品質、「自分も旗を持って混じりたい」と思わせる高揚感。`,
            },
            {
              n: "Step 2",
              title: "人間二進数乗算機（9bit × 9bit）★ 世界最大級の公式挑戦",
              body: "Wallace tree（乗算を並列処理する高速回路方式）の乗算器を256人で組み立て、9bit×9bit（9桁の2進数同士、最大511×511＝261,121）の掛け算を実演。演算後は「整理フェーズ」：プラカード31本（2⁰〜2³¹）の前に黒旗の参加者が集まり、繰り上がりは「前へならえ」で次位へ移動。最後に右から読み上げて18桁の答えを確定する、世界初の規模での挑戦。",
              kind: "diagram" as const,
              prompt: `【プロンプト】SF映画のホログラム設計図風インフォグラフィック、2段構成。
上段：9bit×9bit Wallace tree乗算器が立体で浮かぶ（入力18→部分積81→Wallace tree 81→CPA 18→出力18）、人型ピクトグラムがHA/FAブロックを担当、信号フローは蛍光シアンの光線。
下段：2⁰〜2³¹の31本のプラカードが扇状に並び、黒旗の人影が「前へならえ」で次位へ流れる残像。
ダークネイビー背景に蛍光イエロー＆シアン、等角投影、Apple Keynote×Bladerunner調、「この回路の一部になりたい」と思わせる緻密な未来感。`,
            },
            {
              n: "Step 3",
              title: "セル・オートマトン（教育演目）",
              body: "ライフゲームのシンプルなルールから複雑な秩序が立ち上がる瞬間を、256人の身体で実演。",
              kind: "photo" as const,
              prompt: `【プロンプト】夕方のオレンジ斜光が広場を染める時間。
16×16グリッドの256人が立ったり座ったりして、ライフゲームの「グライダー」が広場を斜めに駆け抜けていく決定的瞬間。
立つ＝白い人影、座る＝影、パターンが波のように移動して見える。
参加者の何人かが顔を上げて隣に声をかける表情、ドローン中高度俯瞰、長時間露光で動きの残像、宮崎駿アニメ風の感動的な光。`,
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6 hover:border-sky-300 transition"
            >
              <div className="flex gap-5">
                <div className="shrink-0 w-24 text-sky-700 font-bold">{s.n}</div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
              <div className="mt-4">
                {s.kind === "photo" ? (
                  <PhotoFrame aspect="video" prompt={s.prompt} />
                ) : (
                  <DiagramFrame aspect="video" prompt={s.prompt} />
                )}
              </div>
            </div>
          ))}
        </div>
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
