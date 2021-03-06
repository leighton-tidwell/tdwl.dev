import { Flex, Box, Text } from 'theme-ui'
import { scroller } from 'react-scroll'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Drawer = ({ toggle }) => {
  const handleLink = id => {
    if (id)
      scroller.scrollTo(id, {
        containerId: 'container',
        duration: 1000,
        smooth: true,
      })

    toggle()
  }

  const links = [
    {
      id: 'home',
      label: 'Home',
    },
    {
      id: 'about',
      label: 'About',
    },
    {
      id: 'projects',
      label: 'Projects',
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
    },
    {
      id: 'contact',
      label: 'Contact Us',
    },
  ]

  return (
    <MotionBox
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{
        duration: 0.3,
      }}
      sx={{
        height: '100vh',
        background: 'white',
        position: 'absolute',
        width: '100vw',
        top: 0,
        left: 0,
        zIndex: -1,
        padding: '5em 0',
      }}
    >
      <Flex
        sx={{
          height: '100%',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {links.map(({ id, label }) => (
          <MotionBox
            key={id}
            onClick={() => handleLink(id)}
            sx={{
              cursor: 'pointer',
              p: '1em',
              textTransform: 'uppercase',
              fontSize: ['36px', '40px', '48px'],
              fontWeight: '300',
              color: 'black',
              '&:active': {
                fontWeight: '700',
              },
              span: {
                position: 'relative',
              },
              'span:after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                transform: 'scaleX(0)',
                height: '2px',
                bottom: '0',
                left: '0',
                background: 'black',
                transformOrigin: 'bottom right',
                transition: 'transform 0.25s ease-out',
              },
              'span:hover:after': {
                transform: 'scaleX(1)',
                transformOrigin: 'bottom left',
              },
              'span:active:after': {
                transform: 'scaleX(0)',
              },
            }}
          >
            <Text>{label}</Text>
          </MotionBox>
        ))}
      </Flex>
    </MotionBox>
  )
}

export default Drawer
