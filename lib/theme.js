export const theme = {
  fonts: {
    body: '"Source Code Pro", monospace',
    heading: '"Source Code Pro", monospace',
    monospace: '"Source Code Pro", monospace',
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'black',
      fontFamily: 'heading',
      fontWeight: '600',
      borderRadius: '0px',
      cursor: 'pointer',
      '&:hover': {
        color: 'black',
        bg: 'white',
      },
    },
    secondary: {
      color: 'black',
      bg: 'white',
      fontFamily: 'heading',
      fontWeight: '600',
      borderRadius: '0px',
      cursor: 'pointer',
      '&:hover': {
        color: 'white',
        bg: 'black',
      },
    },
  },
}
