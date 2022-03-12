import { useState, useEffect } from 'react'
import { Flex, Heading, Button, Box, Paragraph } from 'theme-ui'
import { motion, AnimatePresence } from 'framer-motion'
import { OverlayContainer } from '.'

const MotionFlex = motion(Flex)

const Sharons = ({ scrollPosition }) => {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    setShowOverlay(false)
  }, [scrollPosition])

  return (
    <>
      <AnimatePresence>
        {showOverlay && (
          <OverlayContainer
            toggleShow={setShowOverlay}
            headerImage="url(/images/sharonsoverlay.png)"
            path="sharons"
          >
            <Box
              sx={{
                width: '100%',
                padding: '25vh 1em',
                background: '#d84f24',
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
                Sharons BBQ
              </Heading>
              <Heading as="h2" sx={{ fontWeight: '400', color: '#ffffff' }}>
                Small Local Business
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
                Sharons BBQ is a small business in Abilene, TX that requested
                our design services. The screenshots shown are excerpts of the
                design that was pitched to the client and will later be
                implemented into a fully functional website.
              </Paragraph>
            </Box>
            <Box
              sx={{
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/images/sharonsmenu.png)',
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
                Bold
              </Heading>
              <Heading as="h2" sx={{ fontWeight: '400', color: 'black' }}>
                Excentric design theme for a bold, modern look
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
                Taking account of the client&apos;s needs, we designed a bold,
                modern look to help drive customer interaction through the
                website. We showcased many photos of the award winning food to
                reinforce the primary product, food.
              </Paragraph>
            </Box>
            <Box
              sx={{
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/images/sharonsinformation.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            />
          </OverlayContainer>
        )}
      </AnimatePresence>
      <MotionFlex
        sx={{
          flexDirection: 'column',
          position: 'absolute',
          top: '10vh',
          left: '1em',
        }}
      >
        <Heading
          as="h1"
          sx={{ fontSize: '48px', color: 'white', lineHeight: '.8em' }}
        >
          Sharons BBQ
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
          Local small business
        </Heading>
        <Button variant="viewMore" onClick={() => setShowOverlay(!showOverlay)}>
          View
        </Button>
      </MotionFlex>
      <Box
        sx={{
          position: 'absolute',
          height: ['65vh', '65vh', '100vh'],
          width: '100vw',
          pointerEvents: 'none',
          bottom: '0',
          right: '0',
          backgroundImage: [
            'url(/images/sharonsmac.png)',
            'url(/images/sharonsmac.png)',
            'url(/images/sharonsdesktop.png)',
          ],
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: ['top center', 'top center', 'right center'],
        }}
      />
    </>
  )
}

export default Sharons
