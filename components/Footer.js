import Image from 'next/image'
import { Flex, Paragraph } from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      p="1em"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Image
        src="/images/logo.png"
        alt="TDWL Development"
        height="59"
        width="59"
      />
      <Paragraph sx={{ fontSize: '18px', fontFamily: 'heading' }} mt={1}>
        Copyright &copy; {new Date().getFullYear()}
        <br />
        TDWL Development
      </Paragraph>
    </Flex>
  )
}

export default Footer
