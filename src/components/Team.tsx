"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
    {
        name: "김태훈",
        role: "CEO & Founder",
        image: "👨‍💼",
        bio: "10년 이상의 업계 경험",
        social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
        name: "이지은",
        role: "CTO",
        image: "👩‍💻",
        bio: "기술 혁신의 선구자",
        social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
        name: "박준서",
        role: "Lead Designer",
        image: "🎨",
        bio: "사용자 경험 전문가",
        social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
        name: "최수민",
        role: "Head of Marketing",
        image: "📊",
        bio: "브랜드 전략 리더",
        social: { twitter: "#", linkedin: "#", github: "#" },
    },
];

export default function Team() {
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
                            <span className="text-white">우리</span>{" "}
                            <span className="text-gradient">팀</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            열정과 전문성을 갖춘 최고의 인재들
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="group"
                                whileHover={{ y: -8 }}
                            >
                                <div className="glass-strong p-8 rounded-2xl text-center h-full hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
                                    {/* Gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10">
                                        <div className="text-8xl mb-4 animate-float">{member.image}</div>
                                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                        <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                                        <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>

                                        {/* Social links */}
                                        <div className="flex justify-center gap-3">
                                            <a
                                                href={member.social.twitter}
                                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                                                aria-label="Twitter"
                                            >
                                                <Twitter className="w-4 h-4 text-white" />
                                            </a>
                                            <a
                                                href={member.social.linkedin}
                                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                                                aria-label="LinkedIn"
                                            >
                                                <Linkedin className="w-4 h-4 text-white" />
                                            </a>
                                            <a
                                                href={member.social.github}
                                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                                                aria-label="GitHub"
                                            >
                                                <Github className="w-4 h-4 text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
