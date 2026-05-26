import { Camera } from "lucide-react";

type Props = {
  aspect?: "video" | "square" | "portrait" | "wide";
  prompt: string;
  caption?: string;
  className?: string;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
} as const;

export function PhotoFrame({ aspect = "video", prompt, caption, className = "" }: Props) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-100 ${aspectClass[aspect]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <Camera className="w-10 h-10 text-slate-400 mb-3" aria-hidden />
        <p className="text-xs font-bold tracking-widest text-slate-500 mb-2">PHOTO PLACEHOLDER</p>
        <p className="text-xs text-slate-600 leading-relaxed max-w-md whitespace-pre-line">
          {prompt}
        </p>
      </div>
      {caption && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-xs px-4 py-2 backdrop-blur-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
