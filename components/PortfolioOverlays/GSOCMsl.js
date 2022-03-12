import { useState, useEffect } from 'react'
import { Flex, Heading, Button, Box, Paragraph } from 'theme-ui'
import { motion, AnimatePresence } from 'framer-motion'
import { OverlayContainer } from '.'

const MotionFlex = motion(Flex)

const GSOCMsl = ({ scrollPosition }) => {
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
            headerImage="url(/images/gsocmsloverlay.png)"
            path="gsoc-msl"
          >
            <Box
              sx={{
                width: '100%',
                padding: '25vh 1em',
                background: 'rgb(44, 44, 50)',
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
                GSOC MSL
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
                The GSOC (Government Security Operations Center) MSL (Master
                Station Log) is an application created for the 89th
                Communication Squadron at Joint Base Andrews to help keep track
                of events that happen during the operators shift.
              </Paragraph>
            </Box>
            <Box
              sx={{
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/images/gsocmslreports.png)',
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
                Automation
              </Heading>
              <Heading as="h2" sx={{ fontWeight: '400', color: 'black' }}>
                Other TDWL Development tools integrated with MSL
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
                The GSOC MSL has full integration with a suite of tools
                developed by TDWL Development in use at the 89th Communication
                Squadron at Joint Base Andrews. This tool can interface
                completely with those to allow seameless data transfer between
                them allowing for accurate tracking of events.
              </Paragraph>
            </Box>
            <Box
              sx={{
                height: '100vh',
                width: '100vw',
                backgroundImage: 'url(/images/gsocpersonnel.png)',
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
          GSOC MSL
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
          height: ['65vh', '65vh', '90vh'],
          width: 'calc(100vw - 1em)',
          pointerEvents: 'none',
          bottom: '0',
          right: '0',
          backgroundImage: [
            'url(/images/gsocmslmobile.png)',
            'url(/images/gsocmslmobile.png)',
            'url(/images/gsocmsldesktop.png)',
          ],
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: ['top center', 'top center', 'right center'],
        }}
      />
    </>
  )
}

export default GSOCMsl
