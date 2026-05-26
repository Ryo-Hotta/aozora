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
            256人（＝1バイト）の中高生・大学生が自分自身を「1ビット」として動き、
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
              caption="2026年6月21日 開催予定／256人の人間二進数乗算機（俯瞰イメージ）"
              prompt={`【プロンプト】晴天の屋外広場で、約256人の中高生・大学生が16×16のグリッド状に整列している俯瞰ショット。
全員が同色のビブス（青系）を着用し、半数が手を上げ（=1）、半数が下ろし（=0）の二進数状態を表現。
ドローン空撮、自然光、爽やかな初夏の空、人々の影が長く伸びる構図。
人物の表情は遠景でも分かるよう少し見上げ気味、躍動感あり。`}
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
            3ステップで「秩序の生成」を体験する
          </h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            2進数の自分から始まり、Step2「人間二進数乗算機」で世界最大級の公式挑戦。
            最後にセル・オートマトンで自律世界の立ち上がりまでを、256人の身体で体験します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { n: 1, t: "自分が\"1ビット\"になる", d: "256人が0/1の人間ビットとして並び、信号が伝わるしくみを肌で感じる", highlight: false },
              { n: 2, t: "人間二進数乗算機（9bit × 9bit）", d: "Wallace tree（乗算を並列処理する回路方式）を256人で組み上げ、最大511×511の掛け算を実演。プラカード方式（位ごとに人を集約して読み上げる整理手順）で18桁の答えを発表する", highlight: true },
              { n: 3, t: "セル・オートマトン", d: "シンプルなルールから秩序が立ち現れる瞬間に、256人で立ち会う", highlight: false },
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
            Step2「人間二進数乗算機」で世界最大級の公式記録に挑戦（256人によるWallace tree方式）
          </p>

          {/* 各ステップのビジュアル予告 */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            <PhotoFrame
              aspect="square"
              caption="Step 1：人間ビット（0/1の表現）"
              prompt={`【プロンプト】中高生が屋外で片手を高く上げて「1」を表現している横一列のショット。
別の生徒は腕を下ろし「0」を表現。全員青系のビブス。
笑顔で楽しそうな雰囲気、ローアングル、自然光。`}
            />
            <DiagramFrame
              aspect="square"
              title="Step 2：Wallace tree乗算器＋整理フェーズ"
              prompt={`【プロンプト】2段構成の図。
上段：9bit×9bit Wallace tree 乗算器（入力18→部分積81→Wallace tree 81→CPA 18→出力18）。
下段：整理フェーズ（2⁰〜2³¹のプラカード31本の前に黒旗の人が並ぶ／繰り上がりは「前へならえ」で次位へ）。
等角投影、青と黄、矢印でデータフロー明示。`}
            />
            <PhotoFrame
              aspect="square"
              caption="Step 3：セル・オートマトン（ライフゲーム）"
              prompt={`【プロンプト】グリッド状に並んだ参加者が、隣人の状態に応じて立ったり座ったりして
ライフゲームのパターンを生成している空撮。
明暗で生死を表現、複雑な秩序が立ち現れる瞬間を強調。`}
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
                caption="開催地イメージ：東京都内の屋外広場"
                prompt={`【プロンプト】東京都内の広い屋外広場（公園 or 大学キャンパス）に256人が整列して計算実演している空撮。
背景に都心のスカイライン、爽やかな初夏の青空、認定員らしき人物が中央で観察。
俯瞰アングル、ドローン撮影、コントラスト強め。`}
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
