import { useEffect } from 'react'
import { Box, Heading, Paragraph } from 'theme-ui'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

const MotionBox = motion(Box)

const variants = {
  hidden: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const AboutContent = ({ title = 'About', sx, children, invert }) => {
  const { ref, inView } = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      console.log('hello')
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <MotionBox
      sx={{
        p: '1em',
        ...sx,
      }}
      animate={controls}
      variants={variants}
      initial="hidden"
      ref={ref}
    >
      <Heading as="h2" sx={{ fontSize: '36px', fontWeight: '700', mb: '8px' }}>
        {title}
      </Heading>
      <Paragraph
        sx={{
          fontWeight: '400',
          fontSize: '18px',
        }}
      >
        {children}
      </Paragraph>
    </MotionBox>
  )
}

export default AboutContent