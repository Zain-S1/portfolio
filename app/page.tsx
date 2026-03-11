import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ProjectsSlider from "@/components/ProjectsSlider";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => (
  <div className="min-h-screen bg-base text-accent">
    <Navbar />
    <main className="flex flex-col gap-6">
      <Hero />
      <About />
      <Skills />
      <ProjectsSlider />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default HomePage;
