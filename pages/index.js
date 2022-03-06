import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  Header,
  Meta,
  SplashScreen,
  Hero,
  About,
  Projects,
  Contact,
} from '../components/'

const Home = () => {
  const [showSplash, setShowSplash] = useState(true)
  const [headerColor, setHeaderColor] = useState('white')
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const show = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => {
      clearTimeout(show)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Meta title="TDWL Development" />
      <AnimatePresence>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <>
            <Header color={headerColor} toggleColor={setHeaderColor} />
            <Hero
              scrollPosition={scrollPosition}
              toggleHeaderColor={setHeaderColor}
            />
            <About
              scrollPosition={scrollPosition}
              toggleHeaderColor={setHeaderColor}
            />
            <Projects
              scrollPosition={scrollPosition}
              toggleHeaderColor={setHeaderColor}
            />
            <Contact
              scrollPosition={scrollPosition}
              toggleHeaderColor={setHeaderColor}
            />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home
