"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { fadeIn, slideUp } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = useCountUp(500, 2000);
    const satisfaction = useCountUp(98, 2000);

    useEffect(() => {
        if (isInView) {
            projects.startAnimation();
            satisfaction.startAnimation();
        }
    }, [isInView, projects, satisfaction]);

    return (
        <section ref={ref} className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden blur-layers">
                            {/* Abstract gradient art */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />

                            {/* Animated shapes */}
                            <motion.div
                                className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    x: [0, 50, 0],
                                    y: [0, -30, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-400/30 rounded-full blur-2xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    x: [0, -40, 0],
                                    y: [0, 40, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                                <div className="text-center text-white">
                                    <div className="text-8xl mb-4 animate-float">🏢</div>
                                    <p className="text-2xl font-bold">Your Company</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div variants={slideUp}>
                            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                                About Us
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
                                <span className="text-white">혁신으로</span>{" "}
                                <span className="text-gradient">미래를 설계합니다</span>
                            </h2>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="space-y-4 text-muted-foreground text-lg"
                        >
                            <p>
                                우리는 기술과 창의성의 경계를 넘어 비즈니스의 새로운 가능성을 탐구합니다.
                                고객의 성공이 곧 우리의 성공이라는 믿음으로, 최고의 솔루션을 제공합니다.
                            </p>
                            <p>
                                전문성과 열정을 바탕으로 끊임없이 혁신하며, 고객과 함께 성장하는
                                신뢰할 수 있는 파트너가 되겠습니다.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn}
                            className="grid grid-cols-3 gap-8 mt-12"
                        >
                            <div>
                                <div className="text-4xl font-bold text-gradient mb-2">
                                    {projects.count}+
                                </div>
                                <div className="text-sm text-muted-foreground">프로젝트</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gradient mb-2">
                                    {satisfaction.count}%
                                </div>
                                <div className="text-sm text-muted-foreground">고객 만족도</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                                <div className="text-sm text-muted-foreground">지원</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
