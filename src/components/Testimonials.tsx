"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
    {
        name: "김민준",
        role: "CEO",
        company: "테크스타트업",
        content: "CorpLanding과 함께 일한 것은 최고의 선택이었습니다. 전문성과 창의성이 돋보이는 팀입니다.",
        rating: 5,
        image: "👨‍💼",
    },
    {
        name: "이서연",
        role: "CTO",
        company: "이노베이션랩",
        content: "기술력이 뛰어나고 커뮤니케이션이 원활해서 프로젝트가 순조롭게 진행되었습니다.",
        rating: 5,
        image: "👩‍💻",
    },
    {
        name: "박지훈",
        role: "Product Manager",
        company: "디지털솔루션",
        content: "예상보다 빠르게 완성되었고, 품질도 기대 이상이었습니다. 강력 추천합니다!",
        rating: 5,
        image: "👔",
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const current = testimonials[currentIndex];

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div variants={fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="text-white">고객</span>{" "}
                            <span className="text-gradient">후기</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            실제 고객들의 생생한 경험담
                        </p>
                    </motion.div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="glass-strong p-12 rounded-3xl"
                            >
                                {/* Stars */}
                                <div className="flex justify-center gap-1 mb-6">
                                    {[...Array(current.rating)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-xl text-white text-center mb-8 leading-relaxed italic">
                                    "{current.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-center gap-4">
                                    <div className="text-5xl">{current.image}</div>
                                    <div>
                                        <div className="font-bold text-white">{current.name}</div>
                                        <div className="text-sm text-muted-foreground">
                                            {current.role} • {current.company}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex justify-center gap-4 mt-8">
                            <button
                                onClick={prev}
                                className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex
                                                ? "w-8 bg-blue-500"
                                                : "bg-white/30 hover:bg-white/50"
                                            }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-colors"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
