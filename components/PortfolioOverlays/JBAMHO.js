import { useState, useEffect } from 'react'
import { Flex, Heading, Button, Box, Paragraph } from 'theme-ui'
import { motion, AnimatePresence } from 'framer-motion'
import { OverlayContainer } from '.'
import classes from './JBAMHO.module.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const MotionFlex = motion(Flex)

const JBAMHO = ({ scrollPosition }) => {
  const [showOverlay, setShowOverlay] = useState(false)

  const images = [
    {
      url: 'url(/images/jbamho.png)',
    },
    {
      url: 'url(/images/jbamho-2.png)',
    },
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  useEffect(() => {
    setShowOverlay(false)
  }, [scrollPosition])

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <OverlayContainer
            toggleShow={setShowOverlay}
            headerImage="url(/images/jbamho.png)"
          >
            <Box
              sx={{
                width: '100%',
                padding: '25vh 1em',
                background: '#1d7dcf',
                textAlign: 'center',
              }}
            >
              <Heading
                as="h1"
                sx={{
                  fontSize: '5em',
                  fontWeight: '800',
                  lineHeight: '1em',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                JBA MHO
              </Heading>
              <Heading as="h2" sx={{ fontWeight: '400', color: '#ffffff' }}>
                US Air Force
              </Heading>
              <Paragraph
                sx={{
                  fontFamily: 'heading',
                  fontSize: '24px',
                  width: ['100%', '100%', '50vw'],
                  margin: '0 auto',
                  color: 'white',
                  mt: '2em',
                }}
              >
                The Joint Base Andrews Military Housing office is a website that
                allows Airmen relocating to Joint Base Andrews to complete the
                housing process completely virtually.
              </Paragraph>
            </Box>
            <Box
              sx={{
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/images/jbamho-2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></Box>
            <Box
              sx={{
                width: '100%',
                padding: '25vh 1em',
                background: 'white',
                textAlign: 'center',
              }}
            >
              <Heading
                as="h1"
                sx={{
                  fontSize: '5em',
                  fontWeight: '800',
                  lineHeight: '1em',
                  color: 'black',
                  textAlign: 'center',
                }}
              >
                Enterprise Level
              </Heading>
              <Heading as="h2" sx={{ fontWeight: '400', color: 'black' }}>
                Full fledge resident management system
              </Heading>
              <Paragraph
                sx={{
                  fontFamily: 'heading',
                  fontSize: '24px',
                  width: ['100%', '100%', '50vw'],
                  margin: '0 auto',
                  color: 'black',
                  mt: '2em',
                }}
              >
                Working closely with the unaccompanied housing office on Joint
                Base Andrews, we developed a solution that allows them to manage
                the residents of Joint Base Andrews through this website - more
                efficiently than their current system.
              </Paragraph>
            </Box>
            <Carousel
              ssr={true}
              responsive={responsive}
              showDots={true}
              infinite={true}
              autoPlaySpeed={6000}
              autoPlay={true}
              containerClass={classes['carousel-container']}
              removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
            >
              {images.map(({ url }, i) => (
                <Box
                  key={i}
                  sx={{
                    height: '100vh',
                    width: '100%',
                    backgroundImage: url,
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                  }}
                />
              ))}
            </Carousel>
          </OverlayContainer>
        )}
      </AnimatePresence>
      <MotionFlex
        sx={{
          flexDirection: 'column',
          textAlign: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '10vh',
        }}
      >
        <Heading as="h1" sx={{ fontSize: '48px', color: 'white' }}>
          JBA MHO
        </Heading>
        <Heading
          as="h3"
          sx={{
            fontWeight: 'normal',
            fontSize: '24px',
            color: 'white',
            fontFamily: 'heading',
          }}
        >
          US Air Force
        </Heading>
        <Button variant="viewMore" onClick={() => setShowOverlay(!showOverlay)}>
          View
        </Button>
      </MotionFlex>
      <Box
        sx={{
          position: 'absolute',
          height: ['60vh', '60vh', '70vh'],
          width: ['80vw', '80vw', '95vw'],
          bottom: '0',
          backgroundImage: [
            'url(/images/jbamhoiphone.png)',
            'url(/images/jbamhoiphone.png)',
            'url(/images/jbamhodesktop.png)',
          ],
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
        }}
      />
    </>
  )
}

export default JBAMHO
