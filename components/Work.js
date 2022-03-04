import Link from 'next/link'
import { Grid, Box, Heading, Paragraph, Button } from 'theme-ui'

const Work = () => {
  return (
    <Grid gap={1}>
      <Box p="1em" sx={{ background: '#070707', color: 'white' }}>
        <Heading as="h1" sx={{ fontSize: '37px', fontFamily: 'heading' }}>
          Our Work
        </Heading>
        <Paragraph sx={{ fontSize: '18px' }}>
          We have worked with many small businesses and government entities to
          create some of these products.
        </Paragraph>
      </Box>
      <Box p="1em" sx={{ aspectRatio: '16/9' }}>
        <Box
          sx={{
            backgroundImage: 'url(/images/sharons.png)',
            backgroundSize: 'cover',
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
        />
        <Paragraph>Restaurant Website - Sharons Barbecue</Paragraph>
      </Box>
      <Box p="1em" sx={{ aspectRatio: '16/9' }}>
        <Box
          sx={{
            backgroundImage: 'url(/images/jbamho.png)',
            backgroundSize: 'cover',
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
        />
        <Paragraph>Housing Website/Management System - USAF</Paragraph>
      </Box>
      <Box p="1em" sx={{ aspectRatio: '16/9' }}>
        <Box
          sx={{
            backgroundImage: 'url(/images/gsocmsl.png)',
            backgroundSize: 'cover',
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <Paragraph>Action Log - USAF</Paragraph>
      </Box>
      <Box p="1em">
        <Link href="work" passHref>
          <Box>
            <Button variant="primary">View All</Button>
          </Box>
        </Link>
      </Box>
    </Grid>
  )
}

export default Work
