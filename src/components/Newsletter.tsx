"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { fadeIn } from "@/lib/animations";
import { Send } from "lucide-react";

export default function Newsletter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setEmail("");
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <section ref={ref} className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
            <div className="absolute inset-0 blur-layers" />

            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="glass-strong p-12 rounded-3xl text-center"
                >
                    <motion.div variants={fadeIn}>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="text-gradient">뉴스레터 구독</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            최신 소식과 특별 혜택을 가장 먼저 받아보세요
                        </p>
                    </motion.div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="py-8"
                        >
                            <div className="text-6xl mb-4">✅</div>
                            <p className="text-xl font-semibold text-green-400">구독해 주셔서 감사합니다!</p>
                            <p className="text-muted-foreground mt-2">곧 이메일을 받아보실 수 있습니다.</p>
                        </motion.div>
                    ) : (
                        <div className="max-w-md mx-auto">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="이메일을 입력하세요"
                                    required
                                    className="flex-1 px-4 md:px-6 py-3 md:py-4 glass rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/20 text-sm md:text-base"
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
                                >
                                    구독하기 <Send className="w-4 h-4" />
                                </button>
                            </form>

                            <p className="text-xs md:text-sm text-muted-foreground text-center mt-3 md:mt-4">
                                개인정보는 안전하게 보호됩니다. 언제든지 구독을 취소할 수 있습니다.
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
