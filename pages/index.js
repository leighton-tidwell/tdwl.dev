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
  Footer,
} from '../components/'
import { Box } from 'theme-ui'

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

  const handleScroll = e => {
    const position = e.target.scrollTop
    setScrollPosition(position)
  }

  return (
    <>
      <Meta title="TDWL Development" />
      <AnimatePresence>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <Box
            id="container"
            onScroll={handleScroll}
            sx={{
              scrollSnapType: 'y mandatory',
              height: '100vh',
              overflow: 'auto',
            }}
          >
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
            <Footer />
          </Box>
        )}
      </AnimatePresence>
    </>
  )
}

export default Home
