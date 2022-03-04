import { useLayoutEffect, useEffect } from 'react'
import { Flex, Box } from 'theme-ui'
import Link from 'next/link'
import { scroller } from 'react-scroll'

const Drawer = ({ show, toggle }) => {
  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? useLayoutEffect : useEffect

  useIsomorphicLayoutEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  })

  const handleLink = id => {
    toggle()
    if (id)
      scroller.scrollTo(id, {
        duration: 500,
        smooth: true,
        offset: -93,
      })
  }

  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      id: 'about',
      label: 'About',
    },
    {
      href: '/work',
      label: 'Work',
    },
    {
      id: 'contact',
      label: 'Contact',
    },
  ]

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 93px)',
        width: '100vw',
        position: 'fixed',
        top: '93px',
        left: '0',
        zIndex: '2',
        backgroundColor: 'white',
        transition: 'all 200ms ease',
        transform: show ? 'translateX(0)' : 'translateX(200vw)',
        p: '1em',
        div: {
          color: 'white',
          textDecoration: 'none',
          padding: '1em',
          background: 'black',
          margin: '1em',
          width: '100%',
          textAlign: 'center',
          border: '3px solid white',
          fontSize: '18px',
          fontWeight: '600',
          '&:active': {
            color: 'black',
            background: 'white',
            border: '3px solid black',
          },
        },
      }}
    >
      {links.map(({ href, id, label }) =>
        href ? (
          <Link href={href} key={label} passHref>
            <Box onClick={toggle}>{label}</Box>
          </Link>
        ) : (
          <Box key={label} onClick={() => handleLink(id)}>
            <a>{label}</a>
          </Box>
        ),
      )}
    </Flex>
  )
}

export default Drawer
