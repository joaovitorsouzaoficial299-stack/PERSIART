"use client";

export default function ScrollBaseAnimation({
  children,
  className = "",
}: {
  children: string;
  baseVelocity?: number;
  className?: string;
}) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="flex w-max gap-10"
        style={{
          animation: "persiart-marquee 28s linear infinite",
          willChange: "transform",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className={`text-[11vw] font-black uppercase tracking-[-.07em] leading-[.8] ${className}`}
          >
            {children}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes persiart-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-25%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
