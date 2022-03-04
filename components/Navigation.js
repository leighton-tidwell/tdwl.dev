import { Flex, Grid, Box } from 'theme-ui'

const Navigation = ({ show, toggle }) => {
  return (
    <Flex sx={{ flex: '1 1 auto', justifyContent: 'flex-end' }}>
      <Grid
        width="59px"
        onClick={toggle}
        sx={{
          cursor: 'pointer',
          div: {
            height: '2px',
            width: show ? '59px' : '25px',
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#070707',
            transition: 'all 300ms ease',
          }}
        />
        <Box
          sx={{
            margin: '0 auto',
            backgroundColor: '#070707',
            transition: 'all 400ms ease',
          }}
        />
        <Box
          sx={{
            marginLeft: 'auto',
            backgroundColor: '#070707',
            transition: 'all 200ms ease',
          }}
        />
      </Grid>
    </Flex>
  )
}

export default Navigation
