import FirstComponent from "@/components/FirstComponent";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Assistant from "@/components/Assistant";

export default function Home() {

  return (
    <main  className="relative w-full">
      <FirstComponent />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Assistant />
    </main>
  );
}
