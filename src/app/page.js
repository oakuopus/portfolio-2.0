import Navbar from "./components/navbar"
import Main from "./components/main"
import About from "./components/about"
import Projects from "./components/projects"

export default function Home(){
  return(
    <>
      <Navbar/>
      <Main/>
      <About/>
      <Projects/>
    </>
  )
}