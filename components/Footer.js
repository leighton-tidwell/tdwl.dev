import { Flex, Text, Paragraph } from 'theme-ui'
import { scroller } from 'react-scroll'

const Footer = () => {
  const handleToTop = () => {
    scroller.scrollTo('home', {
      containerId: 'container',
      duration: 500,
      smooth: true,
    })
  }

  return (
    <Flex
      p="1em"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        background: '#141414',
        color: 'white',
        textAlign: 'center',
        fontSize: '18px',
        fontFamily: 'heading',
      }}
    >
      <Flex
        onClick={handleToTop}
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          pb: '1em',
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 29.9998C16.2652 29.9998 16.5196 29.8945 16.7071 29.7069C16.8946 29.5194 17 29.2651 17 28.9998V5.41383L23.292 11.7078C23.4798 11.8956 23.7344 12.0011 24 12.0011C24.2655 12.0011 24.5202 11.8956 24.708 11.7078C24.8958 11.5201 25.0012 11.2654 25.0012 10.9998C25.0012 10.7343 24.8958 10.4796 24.708 10.2918L16.708 2.29183C16.6151 2.19871 16.5047 2.12482 16.3832 2.07441C16.2618 2.024 16.1315 1.99805 16 1.99805C15.8684 1.99805 15.7382 2.024 15.6167 2.07441C15.4952 2.12482 15.3849 2.19871 15.292 2.29183L7.29198 10.2918C7.19901 10.3848 7.12525 10.4952 7.07493 10.6167C7.02462 10.7381 6.99872 10.8683 6.99872 10.9998C6.99872 11.2654 7.10421 11.5201 7.29198 11.7078C7.47975 11.8956 7.73443 12.0011 7.99998 12.0011C8.26553 12.0011 8.52021 11.8956 8.70798 11.7078L15 5.41383V28.9998C15 29.2651 15.1053 29.5194 15.2929 29.7069C15.4804 29.8945 15.7348 29.9998 16 29.9998Z"
            fill="white"
          />
        </svg>
        Back to top
      </Flex>
      <Paragraph sx={{ fontSize: '18px', fontFamily: 'heading' }} mt={1}>
        &copy; {new Date().getFullYear()}
        <br />
        <Text sx={{ fontWeight: '600' }}>TDWL Development</Text>
      </Paragraph>
    </Flex>
  )
}

export default Footer
