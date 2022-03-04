import Link from 'next/link'
import { Flex, Box, Button } from 'theme-ui'
import { ScrollIndicator } from '.'
import { scroller } from 'react-scroll'

const Hero = () => {
  const scroll = () => {
    scroller.scrollTo('work', {
      duration: 500,
      smooth: true,
      offset: -93,
    })
  }

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
        <Box onClick={scroll}>
          <Button variant="primary" mt={4}>
            Our Work
          </Button>
        </Box>
      </Box>
      <ScrollIndicator />
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
}

export default Hero
