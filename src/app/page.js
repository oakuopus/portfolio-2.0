import Navbar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about"
import Projects from "./components/projects"
import Experience from "./components/experience"

export default function Home(){
  return(
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
      <Experience/>
    </>
  )
}