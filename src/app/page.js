import Navbar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about"
import Projects from "./components/projects"
import Experience from "./components/experience"
import Footer from "./components/footer"
import ParticlesBackground from "./components/particleBackground"

export default function Home() {
  return (
    <>
      {/* <ParticlesBackground /> */}
        <main className="relative z-10">
          <Navbar />
          <Main />
          <About />
          <Projects />
          <Experience />
          <Footer />
        </main>
    </>
  );
}