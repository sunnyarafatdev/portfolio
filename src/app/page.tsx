import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StatusWidget from "@/components/StatusWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
      <StatusWidget />
    </>
  );
}
