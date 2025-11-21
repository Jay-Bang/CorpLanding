"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Code, Smartphone, Cloud, Database, Lock, Zap } from "lucide-react";

const services = [
    {
        icon: Code,
        title: "웹 개발",
        description: "최신 기술 스택으로 구축된 반응형 웹 애플리케이션",
        features: ["React/Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        icon: Smartphone,
        title: "모바일 앱",
        description: "iOS와 Android를 위한 네이티브 및 크로스플랫폼 앱",
        features: ["React Native", "Flutter", "Swift/Kotlin"],
    },
    {
        icon: Cloud,
        title: "클라우드 솔루션",
        description: "확장 가능하고 안정적인 클라우드 인프라 구축",
        features: ["AWS", "Azure", "Google Cloud"],
    },
    {
        icon: Database,
        title: "데이터 분석",
        description: "비즈니스 인사이트를 위한 데이터 수집 및 분석",
        features: ["Big Data", "ML/AI", "시각화"],
    },
    {
        icon: Lock,
        title: "보안 서비스",
        description: "엔터프라이즈급 보안 시스템 구축 및 관리",
        features: ["보안 감사", "침투 테스트", "컴플라이언스"],
    },
    {
        icon: Zap,
        title: "성능 최적화",
        description: "애플리케이션 속도 및 효율성 극대화",
        features: ["코드 최적화", "CDN", "캐싱 전략"],
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="text-gradient">제공 서비스</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            전문성과 경험을 바탕으로 최고의 서비스를 제공합니다
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeIn}
                                    className="group"
                                    whileHover={{ y: -8 }}
                                >
                                    <div className="h-full p-8 glass rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                                        {/* Gradient overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10">
                                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 mb-6 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-full h-full text-white" />
                                            </div>

                                            <h3 className="text-2xl font-bold mb-3 text-white">
                                                {service.title}
                                            </h3>

                                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="space-y-2">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-sm text-blue-400">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
