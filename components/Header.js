import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box } from 'theme-ui'
import { Navigation, Logo } from '.'
import { motion } from 'framer-motion'

const MotionFlex = motion(Flex)

const Header = ({ color, toggleColor }) => {
  const [showNav, setShowNav] = useState(false)
  const [headerPrevColor, setHeaderPrevColor] = useState('white')

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
        zIndex: '3',
      }}
    >
      <Box sx={{ cursor: 'pointer' }}>
        <Link href="/" passHref>
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
