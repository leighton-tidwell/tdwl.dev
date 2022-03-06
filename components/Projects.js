import { useRef, useEffect } from 'react'
import { Grid, Box, Heading, Paragraph, Button } from 'theme-ui'
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
    <Box ref={ref} sx={{ background: '#141414', color: 'white', pb: '3em' }}>
      <Element
        style={{ width: '0px', height: '0px' }}
        id="projects"
        name="projects"
      />
      <Heading
        as="h1"
        sx={{
          fontSize: '36px',
          fontWeight: '700',
          p: '1rem',
          pt: '4rem',
          pb: '4rem',
        }}
      >
        Projects
      </Heading>
      <Grid gap="75px">
        <PortfolioItem src="/images/jbamho.png" alt="JBA MHO" />
        <PortfolioItem src="/images/gsocmsl.png" alt="JBA MHO" />
        <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
        <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
        <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
        <PortfolioItem src="/images/sharons.png" alt="JBA MHO" />
      </Grid>
    </Box>
  )
}

export default Projects
