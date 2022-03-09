import { useRef, useEffect } from 'react'
import { Flex, Heading, Box, Button } from 'theme-ui'
import { Element } from 'react-scroll'
import { PortfolioItem } from '.'
import { GSOCMsl, JBAMHO, Sharons } from './PortfolioOverlays'

const Projects = ({ toggleHeaderColor, scrollPosition }) => {
  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('white')
    }
  }, [scrollPosition, toggleHeaderColor])

  return (
    <>
      <Element
        style={{ width: '0px', height: '0px' }}
        id="projects"
        name="projects"
      />
      <Flex
        sx={{
          fontSize: '36px',
          fontWeight: '700',
          background: '#141414',
          color: 'white',
          display: 'flex',
          scrollSnapStop: 'always',
          scrollSnapAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
        ref={ref}
      >
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Projects
        </Heading>
      </Flex>
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          background: 'linear-gradient(167.94deg, #051A2C 0%, #1D7DCF 100%)',
        }}
      >
        <JBAMHO scrollPosition={scrollPosition} />
      </PortfolioItem>
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        sx={{
          background: '#D84F24',
        }}
      >
        <Sharons />
      </PortfolioItem>
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        sx={{
          background: 'linear-gradient(167.94deg, #26262A 0%, #000000 100%)',
        }}
      >
        <GSOCMsl />
      </PortfolioItem>
    </>
  )
}

export default Projects
