import { useState } from 'react'
import { Flex, Box, Link } from 'theme-ui'
import { Navigation, Logo } from '.'
import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'

const MotionFlex = motion(Flex)

const Header = ({ color, toggleColor }) => {
  const [showNav, setShowNav] = useState(false)
  const [headerPrevColor, setHeaderPrevColor] = useState('white')

  const handleToTop = () => {
    scroller.scrollTo('home', {
      duration: 500,
      smooth: true,
    })
  }

  return (
    <MotionFlex
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        fontFamily: 'heading',
        height: '54px',
        p: '1em',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: '10',
      }}
    >
      <Box sx={{ cursor: 'pointer' }}>
        <Link onClick={handleToTop}>
          <Logo color={color} />
        </Link>
      </Box>
      <Navigation
        headerColor={color}
        show={showNav}
        toggle={() => {
          setShowNav(!showNav)
          setHeaderPrevColor(color)
          if (showNav === false) {
            toggleColor('black')
            console.log('toggling black')
          } else {
            console.log('other')
            toggleColor(headerPrevColor)
          }
        }}
      />
    </MotionFlex>
  )
}

export default Header
