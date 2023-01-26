import { createTheme } from '@mui/material';
import MontserratBoldTtf from './fonts/Montserrat/Montserrat-Bold.ttf';
import GilroyRegularTtf from './fonts/Gilroy/Gilroy-Regular.ttf';
import GilroyMediumTtf from './fonts/Gilroy/Gilroy-Medium.ttf';
import GilroySemiBoldTtf from './fonts/Gilroy/Gilroy-SemiBold.ttf';
import GilroyBoldTtf from './fonts/Gilroy/Gilroy-Bold.ttf';

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1240,
      xl: 1920
    }
  },
  palette: {
    colorList: {
      blackPearl: "#06051E",
      sanMarino: "#4C58A2",
      boulder: "rgba(120, 120, 120, 0.22)",
      wildSand: "#F5F5F5",
      portGore: "#1B1839",
      darkBlue: "#1B1839",
      haiti: "#221040",
      seance: "#710E8E",
      barossa: "#49012E",
      violentViolet: "#280963",
      blackRock: "#140339",
    },
    primary: {
      main: '#06051e',
      light: '#01001F',
      contrastText: '#F5F5F5',
    },
    background: {
      default: '#221040',
      paper: 'rgba(120, 120, 120, 0.22)',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#4C58A2',
    },
    secondary: {
      main: '#710E8E',
    },
    error: {
      main: '#49012E',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Gilroy',
    fontSize: 16,
  },
});


theme.components = {
  //connecting fonts
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          src: url(${MontserratBoldTtf}) format('truetype');
        }
        @font-face {
          font-family: 'Gilroy';
          src: url(${GilroyRegularTtf}) format('truetype');
          font-style: normal;
          font-weight: 400;
        }
        @font-face {
          font-family: 'Gilroy';
          src: url(${GilroyMediumTtf}) format('truetype');
          font-style: normal;
          font-weight: 500;
        }
        @font-face {
          font-family: 'Gilroy';
          src: url(${GilroySemiBoldTtf}) format('truetype');
          font-style: normal;
          font-weight: 600;
        }
        @font-face {
          font-family: 'Gilroy';
          src: url(${GilroyBoldTtf}) format('truetype');
          font-style: normal;
          font-weight: 700;
        }
      `,
  },
  MuiContainer: {
    defaultProps: {
      sx: {
        padding: "0 16px",
        [theme.breakpoints.up("xl")]: {
          padding: "0 24px"
        },
        [theme.breakpoints.up("lg")]: {
          padding: "0 180px"
        },
        [theme.breakpoints.up("md")]: {
          padding: "0 32px",
        },
      }
    }
  },
  MuiGrid: {
    defaultProps: {
      spacing: "24px"
    }
  },
  MuiGrid2: {
    defaultProps: {
      spacing: "24px"
    }
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'techgen' },
        style: {
          color: theme.palette.colorList.wildSand,
          background: theme.palette.colorList.sanMarino,
          '&:hover': {
            background: theme.palette.colorList.sanMarino,
            boxShadow: "0px 0px 12px rgba(245, 245, 245, 0.25)",
          },
          '&:disabled': {
            color: theme.palette.colorList.wildSand + '80',
            background: theme.palette.colorList.boulder,
          }
        },
      },
      {
        props: { variant: 'techgen', color: 'gradient' },
        style: {
          background: 'linear-gradient(180deg, #5353A2 0%, #644DA2 100%)',
          '&:hover': {
            background: `linear-gradient(180deg, #5353A2 0%, #644DA2 100%)`
          }
        },
      },
      {
        props: { variant: 'techgen', color: 'transparent' },
        style: {
          background: theme.palette.colorList.boulder,
          '&:hover': {
            background: theme.palette.colorList.boulder,
          }
        },
      },
    ],
    defaultProps: {
      variant: "techgen",
      size: "medium",
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        borderRadius: "16px",
        boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.25)",
        height: 28,
        padding: "0 8px",
        [theme.breakpoints.up("md")]: {
          height: 40,
          padding: "0 32px",
        },
        ...(ownerState.size === 'large' && {
          height: 40,
          fontSize: 14,
          padding: "0 16px",
          [theme.breakpoints.up("md")]: {
            height: 54,
            fontSize: 20,
            padding: "0 66px",
          },
        }),
        ...(ownerState.size === 'small' && {
          height: 28,
          padding: "0 8px",
          boxShadow: "none",
          [theme.breakpoints.up("md")]: {
            height: 40,
            padding: "0 13px",
          },
        }),
      }),
    }
  },
}

//typography settings
theme.typography.caption = {
  fontWeight: 200,
  [theme.breakpoints.up("xs")]: {
    fontSize: "14px"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px"
  }
}

theme.typography.h1 = {
  fontSize: "20px",
  fontWeight: 700,
  [theme.breakpoints.up("md")]: {
    fontSize: "40px"
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "48px"
  },
};
theme.typography.h2 = {
  fontSize: "18px",
  fontWeight: 700,
  [theme.breakpoints.up("md")]: {
    fontSize: "28px"
  },
};
theme.typography.h3 = {
  fontSize: "16px",
  fontWeight: 600,
  [theme.breakpoints.up("md")]: {
    fontSize: "24px"
  },
};
theme.typography.button = {
  fontSize: "14px",
  fontWeight: 500,
  [theme.breakpoints.up("md")]: {
    fontSize: "16px"
  },
}

export default theme;
