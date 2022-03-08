import { useRef, useEffect } from 'react'
import { Flex, Heading } from 'theme-ui'
import { Element } from 'react-scroll'
import { PortfolioItem } from '.'

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
        src="/images/jbamho.png"
        alt="JBA MHO"
      />
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        src="/images/gsocmsl.png"
        alt="JBA MHO"
      />
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        src="/images/sharons.png"
        alt="JBA MHO"
      />
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        src="/images/sharons.png"
        alt="JBA MHO"
      />
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        src="/images/sharons.png"
        alt="JBA MHO"
      />
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        src="/images/sharons.png"
        alt="JBA MHO"
      />
    </>
  )
}

export default Projects
