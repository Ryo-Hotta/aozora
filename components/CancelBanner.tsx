import { AlertTriangle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function CancelBanner() {
  if (!siteConfig.event.isCancelled) return null;

  return (
    <div className="bg-rose-50 border-b-2 border-rose-300">
      <div className="mx-auto max-w-6xl px-5 py-6 md:py-7">
        <div className="flex gap-4 items-start">
          <div className="shrink-0 w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest text-rose-700 mb-1">
              IMPORTANT NOTICE｜大切なお知らせ
            </p>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
              {siteConfig.event.cancelledEventDate} の本番開催は中止しました
            </h2>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              {siteConfig.event.cancellationReason}
            </p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              企画自体は止めません。
              <span className="font-semibold text-rose-700">
                {siteConfig.event.rescheduleTarget}
              </span>
              での再開催に向けて準備を進めています。新しい日程・会場が決まり次第、下記オープンチャットで最初にお知らせします。
            </p>
            <div className="mt-4">
              <a
                href={siteConfig.links.lineGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                LINEオープンチャットで続報を受け取る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
