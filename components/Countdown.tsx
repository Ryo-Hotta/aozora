"use client";

import { useEffect, useState } from "react";

type Props = {
  targetDate: string;
  className?: string;
};

function calcDays(target: string): number | null {
  const t = new Date(`${target}T00:00:00+09:00`).getTime();
  const now = Date.now();
  if (Number.isNaN(t)) return null;
  const diffMs = t - now;
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function Countdown({ targetDate, className = "" }: Props) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    setDays(calcDays(targetDate));
    const id = setInterval(() => setDays(calcDays(targetDate)), 60_000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (days === null) {
    return (
      <span className={className} aria-hidden="true">
        本番まで残り — 日
      </span>
    );
  }

  if (days === 0) {
    return <span className={className}>本日開催</span>;
  }

  return (
    <span className={className}>
      本番まで残り <strong className="text-2xl md:text-3xl mx-1">{days}</strong> 日
    </span>
  );
}
