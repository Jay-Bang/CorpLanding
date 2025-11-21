import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Stats />
            <Services />
            <Features />
            <About />
            <Team />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Newsletter />
            <CTA />
            <Footer />
        </main>
    );
}
