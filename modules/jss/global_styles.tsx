import injectSheet from 'react-jss';


const globalStyles = {
    "@global": {
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  
        },
      '::-webkit-scrollbar-track': {
        backgroundColor: 'rgba(0,0,0,0.1)',
      },
      '::-webkit-scrollbar': {
  
        backgroundColor: 'rgba(0,0,0,0.0)',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'gray',
      },
    },
  };

export default injectSheet(globalStyles)