import { forwardRef } from 'react'
import { Box } from 'theme-ui'

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop - 93,
    behavior: 'smooth',
  })

const ScrollIndicator = forwardRef((props, ref) => {
  const scroll = () => scrollToRef(ref)
  return (
    <Box
      sx={{
        fontFamily: 'heading',
        position: 'absolute',
        bottom: '0px',
        zIndex: '2',
        color: 'white',
        fontSize: '24px',
        padding: '1em',
        width: '100%',
        textAlign: 'center',
      }}
    >
      <Box
        onClick={scroll}
        sx={{
          paddingTop: '40px',
          cursor: 'pointer',
          span: {
            position: 'absolute',
            top: '0',
            left: '50%',
            width: '24px',
            height: '24px',
            marginLeft: '-12px',
            borderLeft: '1px solid white',
            borderBottom: '1px solid white',
            WebkitTransform: 'rotate(-45deg)',
            transform: 'rotate(-45deg)',
            WebkitAnimation: 'sdb07 2s infinite',
            animation: 'sdb07 2s infinite',
            opacity: 0,
            boxSizing: 'border-box',
          },
          'span:nth-of-type(1)': {
            WebkitAnimationDelay: '0s',
            animationDelay: '0s',
          },
          'span:nth-of-type(2)': {
            top: '16px',
            WebkitAnimationDelay: '0.15s',
            animationDelay: '0.15s',
          },
          'span:nth-of-type(3)': {
            top: '32px',
            WebkitAnimationDelay: '0.3s',
            animationDelay: '0.3s',
          },
          '@-webkit-keyframes sdb07': {
            '0%': {
              opacity: '0',
            },
            '50%': {
              opacity: '1',
            },
            '100%': {
              opacity: '0',
            },
          },
          '@keyframes sdb07': {
            '0%': {
              opacity: '0',
            },
            '50%': {
              opacity: '1',
            },
            '100%': {
              opacity: '0',
            },
          },
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Box>
    </Box>
  )
})

ScrollIndicator.displayName = 'ScrollIndicator'

export default ScrollIndicator
