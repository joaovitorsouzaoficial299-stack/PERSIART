"use client";
import { wrap } from "@motionone/utils";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { useRef } from "react";

export default function ScrollBaseAnimation({ children, baseVelocity = -3, className = "" }: {
  children: string; baseVelocity?: number; className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 2], { clamp: false });
  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`);
  const direction = useRef(1);
  useAnimationFrame((_, delta) => {
    let move = direction.current * baseVelocity * delta / 1000;
    move += direction.current * move * factor.get();
    baseX.set(baseX.get() + move);
  });
  return <div className="overflow-hidden whitespace-nowrap">
    <motion.div className="flex w-max gap-10" style={{ x }}>
      {[0,1,2,3].map(i => <span key={i} className={`text-[11vw] font-black uppercase tracking-[-.07em] leading-[.8] ${className}`}>{children}</span>)}
    </motion.div>
  </div>;
}