import { useRef, useEffect, useCallback, useState } from 'react'
import { Grid, Box, Flex, Heading } from 'theme-ui'
import { Element } from 'react-scroll'
import { PortfolioItem } from '.'
import { useInView } from 'react-intersection-observer'

const Projects = ({ toggleHeaderColor, scrollPosition }) => {
  const ref = useRef()
  const [inViewRef, inView] = useInView({ threshold: 1 })
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('white')
    }
  }, [scrollPosition, toggleHeaderColor])

  const setRefs = useCallback(
    node => {
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      ref.current = node
      inViewRef(node)
    },
    [inViewRef, ref],
  )

  useEffect(() => {
    if (inView) {
      setCanScroll(true)
    }

    if (!inView) {
      setCanScroll(false)
    }
  }, [inView])

  return (
    <Box
      ref={setRefs}
      sx={{
        background: '#141414',
        color: 'white',
        p: '3em 0',
        pb: '0',
        position: 'relative',
        scrollSnapAlign: 'start',
        scrollSnapType: 'y mandatory',
        scrollSnapStop: 'always',
        height: '100vh',
        overflowY: canScroll ? 'auto' : 'hidden',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Element
        style={{ width: '0px', height: '0px' }}
        id="projects"
        name="projects"
      />
      <Flex
        sx={{
          fontSize: '36px',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
      >
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Projects
        </Heading>
      </Flex>
      <PortfolioItem src="/images/jbamho.png" alt="JBA MHO" />
      <PortfolioItem src="/images/gsocmsl.png" alt="JBA MHO" />
      <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
      <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
      <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
      <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
    </Box>
  )
}

export default Projects
