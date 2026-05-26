import Link from "next/link";
import { ArrowRight, Cpu, Users, Sparkles, Trophy } from "lucide-react";
import { PhotoFrame } from "@/components/PhotoFrame";
import { DiagramFrame } from "@/components/DiagramFrame";

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
            OPEN AIR CLASSROOM｜2026年6月21日（日）開催
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            256人で、<br className="md:hidden" />
            世界最大級の人間コンピュータをつくる。
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed">
            256人（＝1バイト）の中高生・大学生が白旗（0）・黒旗（1）を掲げる「1ビット」となり、
            屋外で世界最大級の人間二進数乗算機を実演する1日。
            世界初の規模での公式記録挑戦を通じて、「論理で世界を動かせる」原体験を持ち帰ります。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition shadow-lg shadow-sky-600/20"
            >
              参加申込・協賛・取材のお問い合わせ
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white text-slate-900 font-medium hover:border-sky-600 hover:text-sky-700 transition"
            >
              開催情報を見る
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            参加費 無料｜2026年6月21日（日）｜東京都内（屋外メイン／雨天時は屋内）｜事前登録制
          </p>

          {/* メインビジュアル：256人俯瞰イメージ */}
          <div className="mt-14">
            <PhotoFrame
              aspect="wide"
              src="/event-venue.png"
              caption="2026年6月21日 開催予定／256人の人間二進数乗算機（俯瞰イメージ）"
              prompt={`【プロンプト】真夏の青空の下、東京の広大な屋外広場。
256人の中高生・大学生が16×16の完璧なグリッドに並び、全員が一斉に旗を真上に振り上げた瞬間。
黒旗（=1）と白旗（=0）が市松模様のように広場を埋め尽くし、布が風になびいて統一されたパターンを描く。周囲を取り囲む32本のプラカード（2⁰〜2³¹）が扇状に立つ。
ビブスは鮮やかなターコイズブルー、表情はカメラ越しでも分かる満面の笑顔と気迫、「やってやった」の高揚感。
ドローン高高度俯瞰／映画的シネマティック構図／背景に都心の高層ビル群／National Geographic調の彩度／観衆の歓声が聞こえてきそうな臨場感。`}
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">MISSION</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              「論理で世界は動かせる」<br />
              それを身体で覚える。
            </h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              情報を浴びるほど受け取れる時代に、いちばん磨きにくいのは「自分の頭で考え抜く力」です。
              青空教室は、知識を増やすことではなく、思考と協働のプロセスを身体に刻むことに焦点を当てます。
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              256人（＝1バイト）が同期して動くことで、はじめて1台のコンピュータが立ち上がる。
              一人では小さくても、論理と協力で巨大な秩序を生成できる――その実感を、原体験として持ち帰ってもらいます。
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100 p-8 md:p-10">
            <h3 className="font-bold text-slate-900 mb-6">参加者が持ち帰る3つの体験</h3>
            <ol className="space-y-5">
              {[
                { n: 1, t: "協力の力を体で理解する", d: "256人が同期して、はじめて巨大な知性が立ち上がることを実演する" },
                { n: 2, t: "論理的思考を人生の道具にする", d: "ゴール／条件／現在地／差分の4ステップを、机ではなく屋外で使い切る" },
                { n: 3, t: "世界初の挑戦に立ち会う", d: "世界最大級の人間二進数乗算機を、自分たちの手で成立させる" },
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

      {/* 3 Steps */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3 text-center">PROGRAM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
            2つのステップで、世界最大級の人間コンピュータを動かす
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            自分が1ビットになることから始まり、Step 2「16bit × 16bitの人間二進数乗算機」で
            世界初の規模の公式記録挑戦に挑みます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { n: 1, t: "自分が\"1ビット\"になる", d: "256人が白旗（0）・黒旗（1）を掲げる人間ビットとして並び、信号が伝わるしくみを肌で感じる", highlight: false },
              { n: 2, t: "人間二進数乗算機（16bit × 16bit）", d: "Wallace tree（乗算を並列処理する回路方式）を256人で組み上げ、最大65,535 × 65,535の掛け算を実演。プラカード方式（位ごとに人を集約して読み上げる整理手順）で32桁の答えを発表する。世界初の規模での公式記録挑戦の本番。", highlight: true },
            ].map((s) => (
              <div
                key={s.n}
                className={
                  s.highlight
                    ? "bg-sky-600 text-white rounded-2xl p-6 border-2 border-sky-700 shadow-xl shadow-sky-600/20 text-center relative"
                    : "bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-600/5 transition text-center"
                }
              >
                {s.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-[10px] font-bold tracking-wider whitespace-nowrap">
                    ★ 世界初
                  </span>
                )}
                <p
                  className={
                    s.highlight
                      ? "text-[10px] font-bold tracking-[0.2em] text-sky-100 mb-1"
                      : "text-[10px] font-bold tracking-[0.2em] text-sky-700 mb-1"
                  }
                >
                  STEP
                </p>
                <div
                  className={
                    s.highlight
                      ? "w-12 h-12 mx-auto rounded-full bg-white text-sky-700 font-bold text-xl flex items-center justify-center mb-3"
                      : "w-12 h-12 mx-auto rounded-full bg-sky-600 text-white font-bold text-xl flex items-center justify-center mb-3"
                  }
                >
                  {s.n}
                </div>
                <p className={s.highlight ? "font-bold mb-2" : "font-bold text-slate-900 mb-2"}>
                  {s.t}
                </p>
                <p
                  className={
                    s.highlight
                      ? "text-sm text-sky-50 leading-relaxed"
                      : "text-sm text-slate-600 leading-relaxed"
                  }
                >
                  {s.d}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">
            Step 2「16bit × 16bit 人間二進数乗算機」で世界最大級の公式記録に挑戦（256人によるWallace tree方式）
          </p>

          {/* 各ステップのビジュアル予告 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <PhotoFrame
              aspect="square"
              src="/step1-flags.png"
              caption="Step 1：人間ビット（0/1の表現）"
              prompt={`【プロンプト】屋外、太陽を背にしたヒーロー的ローアングル。
横一列の高校生・大学生たちが、号令と同時に旗を真上に振り上げた瞬間。黒旗（=1）と白旗（=0）が交互にはためき、コントラストが鮮烈。
旗のポールが青空に並び、布が風で大きくなびく、レンズフレア、逆光、汗ばんだ額、見開いた目、口を開けた満面の笑顔。
ターコイズのビブス＋紅白の旗、青春映画のワンシーン／ポスタービジュアル品質、「自分も旗を持って混じりたい」と直感させる絵。`}
            />
            <DiagramFrame
              aspect="square"
              src="/step2-action.png"
              title="Step 2：当日の実際の動き（16bit×16bit Wallace tree＋整理フェーズ）"
              prompt={`【プロンプト】SF映画のホログラム設計図風、未来感のあるインフォグラフィック。
上段：16bit×16bit Wallace tree 乗算器が立体的に浮かび上がる（入力32→部分積256→Wallace tree 256→CPA 32→出力32）、人型ピクトグラムがHA/FAブロックを担当、信号フローはネオン青の光線で表現。
下段：2⁰〜2³¹の32本のプラカードが扇状に並び、その前に黒旗を持った小さな人影が「前へならえ」で次位へ流れる動きを残像で表現。
ダークブルー背景に蛍光イエロー＆シアン、等角投影、Bladerunner×Apple Keynote調、見た瞬間「この設計図に自分も組み込まれたい」と思わせる緻密さ。`}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3 text-center">VALUES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          企画づくりの3つの軸
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12 text-sm">
          上の「参加者が持ち帰る3つの体験」を成立させるために、私たち運営が貫いている行動原則です。
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Cpu, title: "考え抜く", desc: "答えを暗記するのではなく、自分の頭で論理を組み立てる経験を最優先します。" },
            { icon: Users, title: "共に動く", desc: "競争ではなく、256人で同じ秩序を生成する共同体験を設計します。" },
            { icon: Sparkles, title: "本気で挑む", desc: "妥協のないゴール（世界最大級の挑戦）を掲げ、達成までの過程そのものを学びにします。" },
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
      </section>

      {/* Event teaser */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-sky-900 to-sky-700 text-white p-10 md:p-16 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="relative">
            <p className="text-sky-200 text-sm font-semibold tracking-widest mb-3">UPCOMING EVENT</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              2026年6月21日（日）｜<br className="md:hidden" />東京都内で開催
            </h2>
            <p className="mt-6 max-w-2xl text-sky-100 leading-relaxed">
              青空教室の旗艦イベント。256人規模（＝1バイト）・参加費無料・1日完結型。
              屋外メイン（雨天時は屋内）、共同名義での開催です。事前登録制での参加申込を順次受け付けています。
            </p>

            <div className="mt-10">
              <PhotoFrame
                aspect="wide"
                src="/hero-day-of.png"
                caption="開催地イメージ：東京都内の屋外広場（カウントダウンの瞬間）"
                prompt={`【プロンプト】2026年6月21日、東京都心の広大な広場。
256人が完璧なグリッドで整列し、いままさに公式記録挑戦のカウントダウンに入った緊張の瞬間。
背景に都心のスカイライン、初夏の青空、白いビブスの認定員がストップウォッチを構え中央に立つ。
広場の周囲を観衆と報道カメラが取り囲み、ドローンが上空を旋回。
ドローン高高度俯瞰、ハリウッド映画のオープニングショット品質、青と白のコントラスト、「この場にいたい」と一目で思わせる絵作り。`}
                className="bg-white/10 border-white/30"
              />
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sky-700 font-semibold hover:bg-sky-50 transition"
              >
                開催情報を見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 hover:bg-white/10 transition"
              >
                参加申込・お問い合わせ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="text-center">
          <Trophy className="w-10 h-10 mx-auto text-sky-600 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            参加申込・協賛・取材のご相談はこちら
          </h2>
          <p className="mt-4 text-slate-600">
            事前登録での参加申込のほか、協賛（人材アクセス・PR）、メディア取材、運営参画のお問い合わせも歓迎しています。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white font-medium hover:bg-sky-700 transition"
            >
              お問い合わせ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
