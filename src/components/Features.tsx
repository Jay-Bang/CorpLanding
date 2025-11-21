"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";

const features = [
    {
        icon: "⚡",
        title: "빠른 성능",
        description: "최첨단 기술로 구축된 초고속 솔루션으로 비즈니스 효율성을 극대화합니다.",
    },
    {
        icon: "🔒",
        title: "안전한 보안",
        description: "엔터프라이즈급 보안 시스템으로 데이터와 비즈니스를 안전하게 보호합니다.",
    },
    {
        icon: "🎯",
        title: "맞춤형 솔루션",
        description: "귀사의 니즈에 완벽하게 맞춘 커스터마이징 가능한 솔루션을 제공합니다.",
    },
    {
        icon: "🌐",
        title: "글로벌 확장성",
        description: "전 세계 어디서나 원활하게 작동하는 확장 가능한 인프라를 제공합니다.",
    },
];

export default function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        <span className="text-gradient">왜 저희를 선택해야 할까요?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        업계 최고 수준의 기술력과 노하우로 비즈니스 성공을 약속합니다
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className="group relative"
                        >
                            <div className="h-full p-8 glass rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
