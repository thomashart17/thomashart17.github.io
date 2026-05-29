import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Capstone from './components/capstone/Capstone'

// Portfolio is a separate component so it can call useLocation inside the Router.
const Portfolio = () => {
  const { state } = useLocation()

  useEffect(() => {
    if (state?.scrollTo) {
      // Give the page one frame to render before scrolling.
      requestAnimationFrame(() => {
        const el = document.getElementById(state.scrollTo)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [state])

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

const App = () => (
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/capstone" element={<Capstone />} />
  </Routes>
)

export default App
