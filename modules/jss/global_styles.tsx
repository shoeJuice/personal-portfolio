import injectSheet from 'react-jss';


const globalStyles = {
    "@global": {
      "html, body": {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        height: "100%",
        width: "100%",
        },
        "#__next": {
            height: "100%",
            width: "100%",
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
      "section": {
        position: "relative",
      }
    },
  };

export default injectSheet(globalStyles)