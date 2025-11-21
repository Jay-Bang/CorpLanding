"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, slideUp } from "@/lib/animations";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        <span className="text-white">준비되셨나요?</span>
                        <br />
                        <span className="text-gradient">지금 바로 시작하세요</span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        비즈니스의 성장을 위한 첫 걸음, 지금 시작하세요.
                        전문가 팀이 당신의 성공을 함께 만들어갑니다.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white text-lg overflow-hidden"
                        >
                            <span className="relative z-10">무료 상담 신청</span>
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 glass rounded-xl font-semibold text-white text-lg border border-white/20 hover:bg-white/10 transition-colors"
                        >
                            포트폴리오 보기
                        </motion.button>
                    </div>
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -left-20 top-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -right-20 top-1/2 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
        </section>
    );
}
