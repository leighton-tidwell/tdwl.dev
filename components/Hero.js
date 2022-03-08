import { useRef, useEffect } from 'react'
import { Flex, Box, Heading, Grid, Text, Button } from 'theme-ui'
import { ScrollIndicator, Browser } from '.'
import { motion } from 'framer-motion'
import { Element, scroller } from 'react-scroll'

const MotionBox = motion(Box)
const MotionGrid = motion(Grid)
const MotionText = motion(Text)
const MotionHeading = motion(Heading)

const Hero = ({ toggleHeaderColor, scrollPosition }) => {
  const ref = useRef()

  const handleGoToWork = () => {
    scroller.scrollTo('projects', {
      containerId: 'container',
      duration: 500,
      smooth: true,
    })
  }

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
    <>
      <Element style={{ width: '0px', height: '0px' }} id="home" name="home" />
      <Flex
        ref={ref}
        sx={{
          position: 'relative',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          background: 'black',
          color: 'white',
          zIndex: '1',
          overflow: 'hidden',
          scrollSnapAlign: 'center',
          scrollSnapStop: 'always',
        }}
      >
        <MotionGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          p="1em"
          sx={{ width: '100%' }}
          columns={[1, 1, 2]}
        >
          <Box
            sx={{
              justifyContent: ['', '', 'center'],
              mb: ['2em', '1em', '0'],
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <MotionHeading
              sx={{
                lineHeight: ['50px', '50px', '50px', '60px'],
                mb: '14px',
                fontWeight: '400',
                fontSize: ['35px', '41px', '50px', '60px'],
              }}
            >
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                We&nbsp;
              </MotionText>
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                solve&nbsp;
              </MotionText>
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.0 }}
                sx={{ fontWeight: '700' }}
              >
                digital
                <br />
                problems
              </MotionText>{' '}
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.75 }}
              >
                with&nbsp;
              </MotionText>
              <br />
              <MotionText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
                sx={{ fontWeight: '700' }}
              >
                modern solutions
              </MotionText>
            </MotionHeading>
            <MotionText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 4 }}
              sx={{ fontFamily: 'heading', fontWeight: 300, fontSize: '18px' }}
            >
              Web Development, design and deployment
            </MotionText>
            <Button
              onClick={handleGoToWork}
              sx={{
                display: ['none', 'none', 'flex'],
                mt: '2em',

                alignItems: 'center',
                justifyContent: 'center',
              }}
              variant="secondary"
            >
              View our work{' '}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3467 14.2703H5.33337V16.8649H21.3467V20.7568L26.6667 15.5676L21.3467 10.3784V14.2703Z"
                  fill="white"
                />
              </svg>
            </Button>
          </Box>
          <MotionBox
            initial={{ transform: 'translateY(200%)' }}
            animate={{ transform: 'translateY(0px)' }}
            transition={{ duration: 1 }}
          >
            <Browser width="100%" height="100%" />
          </MotionBox>
        </MotionGrid>
        <MotionBox
          initial={{ transform: 'rotate(145deg) translateX(115%)' }}
          animate={{ transform: 'rotate(145deg) translateX(15%)' }}
          transition={{ duration: 0.5, type: 'tween' }}
          sx={{
            position: 'absolute',
            background: '#141414',
            width: '150vw',
            height: '40px',
            zIndex: '-1',
            top: '12%',
          }}
        />
        <ScrollIndicator />
      </Flex>
    </>
  )
}

export default Hero
