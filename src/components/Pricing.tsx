"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "₩29,000",
        period: "/월",
        description: "소규모 프로젝트에 적합",
        features: [
            "최대 5개 프로젝트",
            "기본 지원",
            "5GB 저장공간",
            "커뮤니티 액세스",
        ],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "₩79,000",
        period: "/월",
        description: "성장하는 비즈니스를 위한",
        features: [
            "무제한 프로젝트",
            "우선 지원",
            "100GB 저장공간",
            "고급 분석",
            "API 액세스",
            "커스텀 도메인",
        ],
        highlighted: true,
        badge: "인기",
    },
    {
        name: "Enterprise",
        price: "맞춤형",
        period: "",
        description: "대규모 조직을 위한",
        features: [
            "무제한 모든 기능",
            "24/7 전담 지원",
            "무제한 저장공간",
            "고급 보안",
            "SLA 보장",
            "온보딩 지원",
        ],
        highlighted: false,
    },
];

export default function Pricing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="text-white">합리적인</span>{" "}
                            <span className="text-gradient">가격</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            귀하의 비즈니스에 맞는 플랜을 선택하세요
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`glass-strong p-6 md:p-8 rounded-2xl relative ${plan.highlighted
                                    ? "border-2 border-blue-500 md:scale-105 bg-blue-500/5"
                                    : ""
                                    }`}
                            >
                                {plan.badge && (
                                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">
                                            인기
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-6 md:mb-8">
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-1 md:mb-2">
                                        {plan.price}
                                    </div>
                                    <p className="text-xs md:text-sm text-muted-foreground">{plan.period}</p>
                                </div>

                                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 md:gap-3">
                                            <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 ${plan.highlighted
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                                        : "glass text-white hover:bg-white/10 border border-white/20"
                                        }`}
                                >
                                    시작하기
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
