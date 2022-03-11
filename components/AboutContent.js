import { Box, Heading, Paragraph } from 'theme-ui'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const AboutContent = ({ title = 'About', sx, children, variants }) => {
  return (
    <MotionBox
      sx={{
        p: ['0 1em', '0 1em', '1em'],
        ...sx,
      }}
      variants={variants}
    >
      <Heading
        as="h2"
        sx={{
          fontSize: ['26px', '28px', '36px'],
          fontWeight: '700',
          mb: ['4px', '4px', '8px'],
        }}
      >
        {title}
      </Heading>
      <Paragraph
        sx={{
          fontWeight: '400',
          fontSize: ['16px', '18px', '18px'],
        }}
      >
        {children}
      </Paragraph>
    </MotionBox>
  )
}

export default AboutContent
