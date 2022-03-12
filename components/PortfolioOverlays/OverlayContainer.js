import { useLayoutEffect, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Box } from 'theme-ui'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const MotionBox = motion(Box)

const variants = {
  full: {
    height: '100vh',
    transition: { duration: 0.5 },
  },
  mimize: {
    height: '60vh',
    transition: { duration: 0.5 },
  },
}

const fullscreenIconVariants = {
  full: {
    rotate: 45,
    opacity: 1,
  },

  minimize: {
    rotate: 0,
  },
}

const OverlayContainer = ({ children, toggleShow, headerImage, path }) => {
  const [headerExpanded, setHeaderExpanded] = useState(false)
  const router = useRouter()

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    document.getElementById('container').style.overflow = 'hidden'

    return () => (document.getElementById('container').style.overflow = 'auto')
  }, [])

  useEffect(() => {
    router.push(`#/projects/${path}`, undefined, { shallow: true })
    router.beforePopState(() => {
      toggleShow(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return createPortal(
    <MotionBox
      sx={{
        zIndex: '1',
        minHeight: '100vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%',
        background: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        position: 'absolute',
        left: '0',
        top: '0',
      }}
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
    >
      <MotionBox
        animate={headerExpanded ? 'full' : 'mimize'}
        variants={variants}
        initial={{ height: '60vh' }}
        sx={{
          background: 'black',
          width: '100%',
          padding: '1em',
          backgroundImage: headerImage,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: '1em',
            right: '1em',
            background: 'black',
            borderRadius: '8px',
            cursor: 'pointer',
            svg: {
              color: 'rgb(255,255,255,.5)',
            },
          }}
          onClick={() => setHeaderExpanded(!headerExpanded)}
        >
          <AnimatePresence>
            <motion.svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={fullscreenIconVariants}
                animate={headerExpanded ? 'full' : 'minimize'}
                d={
                  headerExpanded
                    ? 'M5 16H8V19H10V14H5V16ZM8 8H5V10H10V5H8V8ZM14 19H16V16H19V14H14V19ZM16 8V5H14V10H19V8H16Z'
                    : 'M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z'
                }
                fill="white"
              />
            </motion.svg>
          </AnimatePresence>
        </Box>
      </MotionBox>
      {children}
      <Box
        onClick={() => toggleShow(false)}
        sx={{
          position: 'relative',
          height: '25vh',
          background: 'black',
          width: '100%',
          color: 'white',
          fontFamily: 'heading',
          fontSize: '48px',
          fontWeight: '300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': {
            background: '#141414',
            color: 'white',
          },
        }}
      >
        Go back
      </Box>
    </MotionBox>,
    document.querySelector('#portfolio-overlay'),
  )
}

export default OverlayContainer
