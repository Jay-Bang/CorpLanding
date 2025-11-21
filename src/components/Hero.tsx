"use client";

import { motion } from "framer-motion";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

            {/* Animated grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

            <motion.div
                className="relative z-10 max-w-6xl mx-auto text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={fadeIn} className="mb-6">
                    <span className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-blue-400 border border-blue-500/20">
                        🚀 혁신을 선도하는 기업
                    </span>
                </motion.div>

                <motion.h1
                    variants={slideUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
                >
                    <span className="text-gradient">미래를 만드는</span>
                    <br />
                    <span className="text-white">비즈니스 솔루션</span>
                </motion.h1>

                <motion.p
                    variants={fadeIn}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                    혁신적인 기술과 창의적인 아이디어로 비즈니스의 새로운 가능성을 열어갑니다.
                    당신의 성공이 우리의 목표입니다.
                </motion.p>

                <motion.div
                    variants={fadeIn}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                        <span className="relative z-10">시작하기</span>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button className="px-8 py-4 glass rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 border border-white/20">
                        자세히 알아보기
                    </button>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-white rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
