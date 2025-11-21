"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "서비스는 어떻게 시작하나요?",
        answer: "원하시는 플랜을 선택하고 가입하시면 즉시 시작할 수 있습니다. 추가 설정이나 온보딩이 필요한 경우 전담 팀이 도와드립니다.",
    },
    {
        question: "환불 정책은 어떻게 되나요?",
        answer: "모든 플랜은 14일 무조건 환불 보장을 제공합니다. 서비스에 만족하지 못하시면 전액 환불해 드립니다.",
    },
    {
        question: "플랜을 변경할 수 있나요?",
        answer: "네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 변경 사항은 즉시 적용되며 비용은 일할 계산됩니다.",
    },
    {
        question: "데이터 보안은 어떻게 보장되나요?",
        answer: "엔터프라이즈급 암호화와 정기적인 보안 감사를 통해 데이터를 안전하게 보호합니다. GDPR 및 주요 규정을 준수합니다.",
    },
    {
        question: "기술 지원은 어떻게 받나요?",
        answer: "이메일, 채팅, 전화로 지원을 받을 수 있습니다. Professional 및 Enterprise 플랜은 우선 지원을 받습니다.",
    },
    {
        question: "커스텀 솔루션도 가능한가요?",
        answer: "Enterprise 플랜에서는 귀사의 특정 요구사항에 맞춘 커스텀 솔루션을 제공합니다. 영업팀에 문의하세요.",
    },
];

export default function FAQ() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section ref={ref} className="py-24 px-4 relative">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="text-white">자주 묻는</span>{" "}
                            <span className="text-gradient">질문</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            궁금하신 점을 빠르게 해결해 드립니다
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="glass-strong rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-white">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {openIndex === index ? (
                                            <Minus className="w-5 h-5 text-blue-400" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-blue-400" />
                                        )}
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-muted-foreground">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
