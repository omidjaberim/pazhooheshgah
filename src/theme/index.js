import {createTheme } from '@mui/material/styles';
import { green, purple,red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(200,206,208,0.12)",
        "100":purple[100],
        "200":purple[200],
        "300":purple[300],
      },
      secondary: {
        main: green[500],
      },
      error:{
        main : red[500]
      },
      action:{
        main : '#004D40'
      }

    },
    direction: 'rtl',
    typography:{
      fontFamily:'IranSans',
      fontSize: 12,
    }
  });