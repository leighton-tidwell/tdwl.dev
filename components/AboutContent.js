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
  const { ref, inView } = useInView({ threshold: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <MotionBox
      sx={{
        p: ['0 1em', '0 1em', '1em'],
        ...sx,
      }}
      animate={controls}
      variants={variants}
      initial="hidden"
      ref={ref}
    >
      <Heading
        as="h2"
        sx={{
          fontSize: ['26px', '28px', '36px'],
          fontWeight: '700',
          mb: ['4px', '4px', '8px'],
        }}
      >
        {title}
      </Heading>
      <Paragraph
        sx={{
          fontWeight: '400',
          fontSize: ['16px', '18px', '18px'],
        }}
      >
        {children}
      </Paragraph>
    </MotionBox>
  )
}

export default AboutContent
