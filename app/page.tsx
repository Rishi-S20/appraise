import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandTicker from "@/components/BrandTicker";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandTicker />
        <HowItWorks />
        <Features />
        <Pricing />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
