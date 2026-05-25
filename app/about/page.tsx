import { siteConfig } from "@/data/siteConfig";

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

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">代表挨拶</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <p className="text-slate-700 leading-relaxed">
            私が中高生のときに本当に欲しかったのは、教科書でも参考書でもなく、
            「自分の頭で考え抜いた経験」と「それを一緒にやってくれる仲間」でした。
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            青空教室は、その2つを同時に提供する場として始まりました。
            2026年6月21日、256人（＝1バイト）の仲間と一緒に、世界最大級の「人間二進数乗算機」を立ち上げます。
            参加してくれた一人ひとりに「ここで人生が変わった」と言ってもらえる体験を、本気でつくります。
          </p>
          <p className="mt-6 font-semibold text-slate-900">
            学生団体「青空教室」代表　{siteConfig.org.representative}
          </p>
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
