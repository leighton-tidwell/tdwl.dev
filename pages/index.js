import { AnimatePresence } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import {
  Header,
  Meta,
  SplashScreen,
  Hero,
  About,
  Projects,
  Testimonials,
  Contact,
  Footer,
} from '../components/'
import { Events } from 'react-scroll'
import { Box } from 'theme-ui'

const Home = () => {
  const [showSplash, setShowSplash] = useState(true)
  const [headerColor, setHeaderColor] = useState('white')
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const show = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    Events.scrollEvent.register('begin', () => {
      containerRef.current.style.scrollSnapType = 'none'
    })

    Events.scrollEvent.register('end', () => {
      containerRef.current.style.scrollSnapType = 'y mandatory'
    })

    return () => {
      clearTimeout(show)
      Events.scrollEvent.remove('begin')
      Events.scrollEvent.remove('end')
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
            ref={containerRef}
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
            <Testimonials
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
