import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Tracks from "./components/Tracks";
import Prizes from "./components/Prizes";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        {/* <Prizes /> */}
        <div className="section-divider" />
        <Rules />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        {/* <Tracks /> */}
        <div className="section-divider" />
        <Sponsors />
        <div className="section-divider" />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
