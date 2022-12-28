import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

interface PropType {
  children: JSX.Element;
}

enum PaletteColors {
  BG = "#F5EFE6",
  PY = "#AEBDCA",
  SC = "#7895B2",
  WRR = "#FF9494",
  SSCC = "#C7F2A4",
}

const ProviderConfig: FC<PropType> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: PaletteColors.BG,
      },
        primary: {
          main: PaletteColors.PY,
      },
        secondary: {
          main: PaletteColors.SC,
      },
        warning: {
          main: PaletteColors.WRR,
      },
        success: {
          main: PaletteColors.SSCC,
      },
    },
    components:{
      MuiButton:{
        defaultProps:{
          style:{
            textTransform:'none',
            boxShadow:'none',
            borderRadius:'0.5em'
          }
        },
        styleOverrides:{
          outlined:{
            '&:hover':{background:"rgb(7,134,272,0.42)"}
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default ProviderConfig;
