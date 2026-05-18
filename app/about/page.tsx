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
          私たちは、学校でも家庭でも会社でもない「第3の場」として、若者の思考の土台を育てるための体験を提供します。
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">ミッション</h2>
        <p className="text-slate-700 leading-relaxed">
          論理的思考の4ステップ（目的の定義／達成条件の洗い出し／現在地の確認／突破方法の導出）を、本物の挑戦と仲間との対話を通じて、参加者の血肉にする。
        </p>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">代表挨拶</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <p className="text-slate-700 leading-relaxed">
            私が学生時代にもっとも欲しかったのは、教科書でも資格でもなく、
            「自分の頭で考えた経験」と「それを一緒にやってくれる仲間」でした。
          </p>
          <p className="mt-4 text-slate-700 leading-relaxed">
            青空教室は、その2つを同時に提供する場として始まりました。
            参加してくれた一人ひとりに「ここで人生が変わった」と言ってもらえる体験を、本気でつくります。
          </p>
          <p className="mt-6 font-semibold text-slate-900">
            代表 {siteConfig.org.representative}
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-16 mb-6">団体概要</h2>
        <dl className="divide-y divide-slate-200 border-y border-slate-200">
          {[
            ["団体名", siteConfig.name],
            ["設立年", `${siteConfig.org.foundedYear}年`],
            ["代表", siteConfig.org.representative],
            ["活動内容", "学生向け体験型教育プログラムの企画・運営"],
            ["連絡先", siteConfig.email],
          ].map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 py-4">
              <dt className="text-sm font-semibold text-slate-500">{k}</dt>
              <dd className="col-span-2 text-slate-900">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
