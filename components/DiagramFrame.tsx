import { LayoutGrid } from "lucide-react";

type Props = {
  aspect?: "video" | "square" | "wide";
  prompt: string;
  title?: string;
  className?: string;
  src?: string;
  alt?: string;
};

const aspectClass = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
} as const;

export function DiagramFrame({ aspect = "video", prompt, title, className = "", src, alt }: Props) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl ${
        src ? "border border-sky-200 bg-slate-900" : "border-2 border-dashed border-sky-300 bg-gradient-to-br from-sky-50 to-white"
      } ${aspectClass[aspect]} ${className}`}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? title ?? ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <LayoutGrid className="w-10 h-10 text-sky-400 mb-3" aria-hidden />
          <p className="text-xs font-bold tracking-widest text-sky-700 mb-2">DIAGRAM PLACEHOLDER</p>
          {title && <p className="text-sm font-semibold text-slate-800 mb-2">{title}</p>}
          <p className="text-xs text-slate-600 leading-relaxed max-w-md whitespace-pre-line">
            {prompt}
          </p>
        </div>
      )}
      {title && src && (
        <figcaption className="absolute bottom-0 left-0 right-0 bg-slate-900/70 text-white text-xs px-4 py-2 backdrop-blur-sm">
          {title}
        </figcaption>
      )}
    </figure>
  );
}
