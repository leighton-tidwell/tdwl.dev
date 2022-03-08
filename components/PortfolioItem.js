import { useEffect, useRef, useCallback } from 'react'
import { Box, Heading, Image, Button, Flex } from 'theme-ui'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

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

const PortfolioItem = ({
  src,
  alt,
  sx,
  scrollPosition,
  toggleHeaderColor,
  children,
}) => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.9 })
  const controls = useAnimation()
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

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }

    if (!inView) {
      controls.start('hidden')
    }
  }, [controls, inView])

  const setRefs = useCallback(
    node => {
      ref.current = node
      inViewRef(node)
    },
    [inViewRef, ref],
  )

  return (
    <MotionBox
      className="portfolio-item"
      sx={{
        scrollSnapAlign: 'center',
        scrollSnapStop: 'always',
        margin: '0 auto',
        aspectRatio: '16/9',
        height: '100vh',
        width: '100%',
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
      ref={setRefs}
    >
      {children}
      {/* <Image src={src} alt={alt} layout="fill" /> */}
    </MotionBox>
  )
}

export default PortfolioItem
