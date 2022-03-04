import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box } from 'theme-ui'
import { Navigation } from '.'

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <Flex
      sx={{
        fontFamily: 'heading',
        height: '93px',
        p: '1em',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: '3',
      }}
    >
      <Box sx={{ height: '59px', width: '59px', cursor: 'pointer' }}>
        <Link href="/" passHref>
          <Image src="/images/logo.png" alt="TDWL.DEV" width="59" height="59" />
        </Link>
      </Box>
      <Navigation show={showNav} toggle={() => setShowNav(!showNav)} />
    </Flex>
  )
}

export default Header
