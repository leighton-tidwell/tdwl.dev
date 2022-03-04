import { forwardRef } from 'react'
import { Grid, Box, Heading, Paragraph } from 'theme-ui'

const About = forwardRef((props, ref) => {
  return (
    <Grid
      id="about"
      ref={ref}
      sx={{ height: 'calc(100vh - 93px)', overflowX: 'hidden' }}
    >
      <Box p="1em">
        <Heading
          as="h1"
          sx={{ fontSize: '37px', fontFamily: 'heading' }}
          mb={2}
        >
          About Us
        </Heading>
        <Paragraph sx={{ fontSize: '18px' }}>
          Veteran owned and operated, founded in Texas, TDWL Development has
          over a decade of experience creating hand crafted websites and web
          applications for businesses. We specialize in creating online
          solutions that drive customer engagement and retention for your
          business.
        </Paragraph>
      </Box>
      <Box p="1em" sx={{ position: 'relative', height: '350px' }}>
        <Heading
          as="h1"
          sx={{
            fontSize: '37px',
            fontFamily: 'heading',
          }}
          mb={2}
        >
          Qual<span style={{ WebkitFilter: 'invert(100%)' }}>ity Work</span>
        </Heading>
        <Paragraph sx={{ fontSize: '18px', background: 'white', width: '90%' }}>
          Our team of experienced developers can turn your visions into a
          reality and give your brand the website or web application it needs to
          increase customer satisfaction and employee productivity. With
          personal interaction every step of the way, we make sure the product
          we create is exactly what you want.
        </Paragraph>
        <Box
          sx={{
            position: 'absolute',
            background: '#070707',
            width: 'calc(100vw - 6em)',
            height: '350px',
            top: 0,
            left: '5.8em',
            fontSize: '18px',
            zIndex: '-1',
          }}
        />
      </Box>
    </Grid>
  )
})

export default About
