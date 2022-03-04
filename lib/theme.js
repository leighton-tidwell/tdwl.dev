export const theme = {
  fonts: {
    body: '"Source Code Pro", monospace',
    heading: '"Source Code Pro", monospace',
    monospace: '"Source Code Pro", monospace',
  },
  colors: {
    primary: 'white',
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
  forms: {
    input: {
      color: 'black',
      bg: 'white',
      borderRadius: '0px',
      border: '1px solid white',
      fontFamily: 'heading',
      transition: 'all 0.1s ease',
      '&:focus': {
        outline: '4px solid white',
      },
    },
    textarea: {
      color: 'black',
      bg: 'white',
      borderRadius: '0px',
      border: '1px solid white',
      fontFamily: 'heading',
      transition: 'all 0.1s ease',
      '&:focus': {
        outline: '4px solid white',
      },
    },
    label: {
      fontSize: '18px',
      fontFamily: 'heading',
      marginBottom: '8px',
    },
  },
}
