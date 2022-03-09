import { Flex, Heading, Button, Box } from 'theme-ui'

const Sharons = () => {
  return (
    <>
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
    </>
  )
}

export default Sharons
