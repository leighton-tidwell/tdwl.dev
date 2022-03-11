import { useRef, useEffect, useCallback } from 'react'
import { Grid, Box } from 'theme-ui'
import { Element } from 'react-scroll'
import { AboutContent } from '.'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const MotionGrid = motion(Grid)

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
}

const variants = {
  hidden: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const About = ({ toggleHeaderColor, scrollPosition }) => {
  const controls = useAnimation()
  const ref = useRef()
  const [inViewRef, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('black')
    }
  }, [scrollPosition, toggleHeaderColor])

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])

  const setRefs = useCallback(
    node => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef, ref],
  )

  const aboutContent = [
    {
      title: 'Experienced',
      children: (
        <>
          We have <b>over a decade</b> of experience helping small businesses
          create web solutions that drive customer interaction, improve
          functionality and <b>just work</b>.
        </>
      ),
      key: 'experienced',
    },
    {
      title: 'Technologies',
      children: (
        <>
          We specialize in <b>Javascript development</b> (ReactJS, Next.js,
          VueJS, Node.js, etc.) but have experience in many different
          technologies and can comfortably do{' '}
          <b>any tasks on the front end and back end</b>.
        </>
      ),
      key: 'technologies',
    },
    {
      title: 'Process',
      children: (
        <>
          Our team will remain in <b>constant contact</b> every step of the way
          when you work with us, the end result will be crafted with{' '}
          <b>any changes</b> you request along the way.
        </>
      ),
      key: 'process',
    },
    {
      title: 'Origin',
      children: (
        <>
          TDWL Development is a veteran owned and founded company based in San
          Antonio, Texas. We have done business with{' '}
          <b>many clients throughout the years</b>.
        </>
      ),
      key: 'origin',
    },
  ]

  return (
    <Box
      sx={{
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
        background: '#fff',
      }}
    >
      <Element
        style={{ width: '0px', height: '0px' }}
        id="about"
        name="about"
      />
      <MotionGrid
        variants={container}
        initial="hidden"
        animate="show"
        ref={setRefs}
        sx={{
          height: '100vh',
          position: 'relative',
          p: ['3em 0', '3em 0', '10em 0'],
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        columns={[1, 1, 2]}
      >
        {aboutContent.map(({ title, children, key }) => (
          <AboutContent title={title} key={key} variants={variants}>
            {children}
          </AboutContent>
        ))}
      </MotionGrid>
    </Box>
  )
}

About.displayName = 'About'

export default About
