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
    transition: {
      duration: 1,
    },
  },
}

const PortfolioItem = ({ src, alt, sx }) => {
  const { ref, inView } = useInView({ threshold: 0.9 })
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
      class="portfolio-item"
      sx={{
        scrollSnapAlign: 'center',
        margin: '0 auto',
        aspectRatio: '16/9',
        height: '100vh',
        width: '100vw',
        span: {
          height: '100% !important',
          width: '100% !important',
          position: 'relative !important',
        },
        'span img': {
          height: '100% !important',
          width: '100% !important',
          position: 'relative !important',
        },
        ...sx,
      }}
      animate={controls}
      variants={variants}
      initial={{ filter: 'grayscale(100%)' }}
      ref={ref}
    >
      <Image src={src} alt={alt} layout="fill" />
    </MotionBox>
  )
}

export default PortfolioItem
