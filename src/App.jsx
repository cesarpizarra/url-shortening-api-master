import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Search from './components/Search'
import Statistics from './components/Statistics'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
const App = () => {
  return(
    <div>
      <NavBar />
      <Hero />
      <Search />
      <Statistics />
      <GetStarted />
      <Footer />
    </div>
  )
}

export default App