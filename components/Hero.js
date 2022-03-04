import { forwardRef } from 'react'
import Link from 'next/link'
import { Flex, Box, Button } from 'theme-ui'
import { ScrollIndicator } from '.'

const Hero = forwardRef((props, ref) => {
  return (
    <Flex
      sx={{
        position: 'relative',
        alignItems: 'center',
        height: 'calc(100vh - 93px)',
        marginTop: '93px',
      }}
    >
      <Box
        sx={{
          fontFamily: 'heading',
          position: 'absolute',
          zIndex: '2',
          color: 'white',
          fontSize: '28px',
          padding: '1em',
        }}
      >
        We develop <b>carefully</b>
        <br />
        <b>crafted</b> websites
        <b>
          <br />
          tailored
        </b>{' '}
        to <b>your</b>
        <br /> business
        <Link href="work" passHref>
          <Box>
            <Button variant="primary" mt={4}>
              Our Work
            </Button>
          </Box>
        </Link>
      </Box>
      <ScrollIndicator ref={ref} />
      <Box
        sx={{
          position: 'absolute',
          zIndex: '1',
          backgroundColor: '#070707',
          height: 'calc(100vh - 93px)',
          width: '100%',
          opacity: '0.4',
        }}
      />
      <video
        style={{
          position: 'absolute',
          objectFit: 'cover',
          height: 'calc(100vh - 93px)',
          width: '100%',
        }}
        src="/videos/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </Flex>
  )
})

export default Hero
