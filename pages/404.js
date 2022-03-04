import { Box, Heading } from 'theme-ui'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <Box
      sx={{
        fontFamily: 'heading',
        fontSize: '28px',
        color: 'black',
        textAlign: 'center',
        padding: '1em',
      }}
    >
      <Heading as="h1">404</Heading>
      <Heading as="h2">Page not found</Heading>
      <Link href="/" passHref>
        <Box sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
          <a>Go to home page</a>
        </Box>
      </Link>
    </Box>
  )
}

export default ErrorPage
