import { Flex, Heading, Button, Box } from 'theme-ui'

const GSOCMsl = () => {
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
    </>
  )
}

export default GSOCMsl
