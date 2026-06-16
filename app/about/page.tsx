import { siteConfig } from "@/data/siteConfig";
import { PhotoFrame } from "@/components/PhotoFrame";

export const metadata = { title: "団体について" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-sky-50 to-white border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-sky-700 font-semibold text-sm tracking-widest mb-3">ABOUT</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">団体について</h1>
          <p className="mt-5 text-lg text-slate-700 max-w-2xl">
            青空教室の理念、生まれた背景、これからの歩み。
          </p>
          <div className="mt-10">
            <PhotoFrame
              aspect="wide"
              src="/rehearsal.png"
              caption="活動風景：リハーサルの一場面"
              prompt={`【プロンプト】屋外、夕方の柔らかい光。
参加者と運営が大きな円陣を組み、中央のリーダーがホワイトボードに矢印を描きながら熱く語っている瞬間。
全員が前のめり、ノートに走り書きする人、目を輝かせて頷く人、笑い合う人、汗ばんだ額に夕陽。
ドキュメンタリー写真調、ナショジオの密着取材風、自然光、横長の構図、「この仲間に入りたい」と一目で思わせる人間味のあるショット。`}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">ビジョン</h2>
        <p className="text-slate-700 leading-relaxed text-lg">
          自分の頭で考え、自分の足で歩み、自分の言葉で語れる若者を、日本中に増やす。
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          私たちは、学校でも家庭でも塾でもない「第3の場」として、
          中高生・大学生・社会人が世代を越えて論理と協働で世界を動かす体験を持ち帰る場を提供します。
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">ミッション</h2>
        <p className="text-slate-700 leading-relaxed">
          論理的思考の4ステップ（目的の定義／達成条件の洗い出し／現在地の確認／突破方法の導出）を、
          屋外での本物の挑戦と仲間との同期体験を通じて、参加者の血肉にする。
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">代表 堀田亮について</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* 実写真 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hotta-representative.png"
            alt="青空教室 代表 堀田亮"
            className="w-40 h-40 rounded-2xl object-cover shrink-0 shadow-md"
          />
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex-1">
            <p className="text-slate-700 leading-relaxed">
              私が中高生のときに本当に欲しかったのは、教科書でも参考書でもなく、
              「自分の頭で考え抜いた経験」と「それを一緒にやってくれる仲間」でした。
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              サイエンスって、教室で「見る」ものじゃなくて、体を動かして「感じる」ものだと思う。
              256人が1ビットになって、本物の計算機を人間で動かせたとき——そのワクワクを、
              ひとりでも多くの人に持ち帰ってほしい。それだけを考えてこの企画をつくっています。
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              2026年6月28日、東京理科大学 野田キャンパスで、一緒に「動かす側」に立ちましょう。
            </p>
            <p className="mt-6 font-semibold text-slate-900">
              学生団体「青空教室」代表　堀田亮
            </p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">団体概要</h2>
        <dl className="divide-y divide-slate-200 border-y border-slate-200">
          {[
            ["団体名", `${siteConfig.name}（学生団体）`],
            ["設立年", `${siteConfig.org.foundedYear}年`],
            ["代表", siteConfig.org.representative],
            ["活動内容", "体験型教育プログラムの企画・運営／世界最大級の人間コンピュータ実演／公式記録への挑戦"],
            ["公式サイト", siteConfig.url],
            ["連絡先", siteConfig.email],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 py-4">
              <dt className="text-sm font-semibold text-slate-500">{k}</dt>
              <dd className="col-span-2 text-slate-900 break-all">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
