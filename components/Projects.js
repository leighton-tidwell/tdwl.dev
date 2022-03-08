import { useRef, useEffect } from 'react'
import { Flex, Heading, Box, Button } from 'theme-ui'
import { Element } from 'react-scroll'
import { PortfolioItem } from '.'

const Projects = ({ toggleHeaderColor, scrollPosition }) => {
  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('white')
    }
  }, [scrollPosition, toggleHeaderColor])

  return (
    <>
      <Element
        style={{ width: '0px', height: '0px' }}
        id="projects"
        name="projects"
      />
      <Flex
        sx={{
          fontSize: '36px',
          fontWeight: '700',
          background: '#141414',
          color: 'white',
          display: 'flex',
          scrollSnapStop: 'always',
          scrollSnapAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
        ref={ref}
      >
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Projects
        </Heading>
      </Flex>
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          background: 'linear-gradient(167.94deg, #051A2C 0%, #1D7DCF 100%)',
        }}
      >
        <Flex
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
          <Button variant="viewMore">View</Button>
        </Flex>
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
      </PortfolioItem>
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        sx={{
          background: '#D84F24',
        }}
      >
        <Flex
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
          <Button variant="viewMore">View</Button>
        </Flex>
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
      </PortfolioItem>
      <PortfolioItem
        toggleHeaderColor={toggleHeaderColor}
        scrollPosition={scrollPosition}
        sx={{
          background: 'linear-gradient(167.94deg, #26262A 0%, #000000 100%)',
        }}
      >
        <Flex
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
          <Button variant="viewMore">View</Button>
        </Flex>
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
      </PortfolioItem>
    </>
  )
}

export default Projects
