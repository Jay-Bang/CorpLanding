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
        color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
        icon: Smartphone,
        title: "모바일 앱",
        description: "iOS와 Android를 위한 네이티브 및 크로스플랫폼 앱",
        features: ["React Native", "Flutter", "Swift/Kotlin"],
        color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
        icon: Cloud,
        title: "클라우드 솔루션",
        description: "확장 가능하고 안정적인 클라우드 인프라 구축",
        features: ["AWS", "Azure", "Google Cloud"],
        color: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
        icon: Database,
        title: "데이터 분석",
        description: "비즈니스 인사이트를 위한 데이터 수집 및 분석",
        features: ["Big Data", "ML/AI", "시각화"],
        color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
        icon: Lock,
        title: "보안 서비스",
        description: "엔터프라이즈급 보안 시스템 구축 및 관리",
        features: ["보안 감사", "침투 테스트", "컴플라이언스"],
        color: "bg-gradient-to-br from-red-500 to-orange-500",
    },
    {
        icon: Zap,
        title: "성능 최적화",
        description: "애플리케이션 속도 및 효율성 극대화",
        features: ["코드 최적화", "CDN", "캐싱 전략"],
        color: "bg-gradient-to-br from-yellow-500 to-amber-500",
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group glass-strong p-6 md:p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
                                >
                                    {/* Hover gradient background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 mb-4 md:mb-6 rounded-xl ${service.color} p-3 md:p-3.5 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-full h-full text-white" />
                                        </div>

                                        <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{service.title}</h3>
                                        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">{service.description}</p>

                                        <ul className="space-y-2">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
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
