export const theme = {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: '"Open Sans", sans-serif',
    monospace: '"Open Sans", sans-serif',
  },
  colors: {
    primary: 'white',
  },
  buttons: {
    primary: {
      color: 'black',
      bg: 'white',
      fontFamily: 'heading',
      fontWeight: '400',
      fontSize: '14px',
      borderRadius: '0px',
      cursor: 'pointer',
      border: '1px solid black',
      '&:hover': {
        border: '1px solid white',
      },
      '&:active': {
        border: '1px solid white',
        fontWeight: '600',
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
      border: 'none',
      borderBottom: '1px solid black',
      width: '100%',
      outline: 'none',
      fontFamily: 'heading',
      transition: 'all 0.1s ease',
    },
    textarea: {
      color: 'black',
      bg: 'white',
      borderRadius: '0px',
      border: 'none',
      borderBottom: '1px solid black',
      width: '100%',
      outline: 'none',
      fontFamily: 'heading',
      transition: 'all 0.1s ease',
      resize: 'none',
    },
    label: {
      fontSize: '18px',
      fontFamily: 'heading',
      marginBottom: '8px',
    },
  },
}
