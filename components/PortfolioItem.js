import { useEffect } from 'react'
import { Box, Heading, Paragraph } from 'theme-ui'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const MotionBox = motion(Box)

const variants = {
  hidden: {
    filter: 'grayscale(100%)',
    transition: {
      duration: 1,
    },
  },
  visible: {
    filter: 'grayscale(0%)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

const PortfolioItem = ({ src, alt, sx }) => {
  const { ref, inView } = useInView({ threshold: 1 })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }

    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <MotionBox
      sx={{
        p: '1em',
        aspectRatio: '16/9',
        ...sx,
      }}
      animate={controls}
      variants={variants}
      initial={{ opacity: 0, y: '100%' }}
      ref={ref}
    >
      <Image src={src} alt={alt} layout="fill" />
    </MotionBox>
  )
}

export default PortfolioItem
