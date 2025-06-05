"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "../src/components/organisms/LoadingScreen"
import Header from "../src/components/organisms/Header"
import Hero from "../src/components/organisms/Hero"
import About from "../src/components/organisms/About"
import Projects from "../src/components/organisms/Projects"
import TechStack from "../src/components/organisms/TechStack"
import Contact from "../src/components/organisms/Contact"
import Footer from "../src/components/organisms/Footer"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-offWhite">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
