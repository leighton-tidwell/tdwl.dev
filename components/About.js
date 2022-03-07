import { useRef, useEffect, useCallback } from 'react'
import { Grid, Box, Heading, Paragraph } from 'theme-ui'
import { Element } from 'react-scroll'
import { AboutContent } from '.'

const About = ({ toggleHeaderColor, scrollPosition }) => {
  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('black')
    }
  }, [scrollPosition, toggleHeaderColor])

  return (
    <>
      <Element
        style={{ width: '0px', height: '0px' }}
        id="about"
        name="about"
      />
      <Grid
        ref={ref}
        sx={{
          height: '100vh',
          overflow: 'hidden',
          position: 'relative',
          p: '3em 0',
        }}
      >
        <AboutContent title="Experienced">
          We have <b>over a decade</b> of experience helping small businesses
          create web solutions that drive customer interaction, improve
          functionality and <b>just work</b>.
        </AboutContent>
        <AboutContent title="Technologies">
          We specialize in <b>Javascript development</b> (ReactJS, Next.js,
          VueJS, Node.js, etc.) but have experience in many different
          technologies and can comfortably do{' '}
          <b>any tasks on the front end and back end</b>.
        </AboutContent>
        <AboutContent title="Process">
          Our team will remain in <b>constant contact</b> every step of the way
          when you work with us, the end result will be crafted with{' '}
          <b>any changes</b> you request along the way.
        </AboutContent>
        <AboutContent title="Origin">
          TDWL Development is a veteran owned and founded company based in San
          Antonio, Texas. We have done business with{' '}
          <b>many clients throughout the years</b>.
        </AboutContent>
        {/* <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100vw',
          background: '#141414',
          height: '200px',
          transform: 'rotate(30deg) translateX(-80px) translateY(120px)',
          zIndex: '-1',
        }}
      /> */}
      </Grid>
    </>
  )
}

About.displayName = 'About'

export default About
