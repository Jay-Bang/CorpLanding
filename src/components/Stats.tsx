"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Users, Award, Rocket } from "lucide-react";

const stats = [
    {
        icon: TrendingUp,
        end: 300,
        suffix: "%",
        label: "성장률",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Users,
        end: 10000,
        suffix: "+",
        label: "활성 사용자",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Award,
        end: 50,
        suffix: "+",
        label: "수상 경력",
        color: "from-yellow-500 to-orange-500",
    },
    {
        icon: Rocket,
        end: 99,
        suffix: "%",
        label: "성공률",
        color: "from-purple-500 to-pink-500",
    },
];

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-16 md:py-24 px-4 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/10 to-pink-900/10" />

            <motion.div
                className="max-w-7xl mx-auto relative z-10"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div variants={fadeIn} className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                        <span className="text-white">숫자로 보는</span>{" "}
                        <span className="text-gradient">우리의 성과</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        데이터가 증명하는 확실한 성과와 신뢰
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <StatCard key={index} stat={stat} Icon={Icon} isInView={isInView} delay={index * 0.1} />
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}

function StatCard({ stat, Icon, isInView, delay }: any) {
    const counter = useCountUp(stat.end, 2500);

    useEffect(() => {
        if (isInView) {
            setTimeout(() => counter.startAnimation(), delay * 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView, delay]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay }}
            className="glass-strong p-6 md:p-8 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
        >
            <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl bg-gradient-to-br ${stat.color} p-3 md:p-4 group-hover:animate-pulse-glow`}>
                <Icon className="w-full h-full text-white" />
            </div>
            <div className="text-3xl md:text-5xl font-bold text-gradient mb-2">
                {counter.count.toLocaleString()}{stat.suffix}
            </div>
            <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
        </motion.div>
    );
}
