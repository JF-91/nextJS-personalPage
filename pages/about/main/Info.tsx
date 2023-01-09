import { Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from "react-parallax";

const Info = () => {
  return (
    <Box mb={140}>
      <Parallax
        blur={10}
        bgImage="john_snow.JPEG"
        bgImageAlt="john snow"
        style={{
          position: "absolute",
          zIndex: -1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <Box height="100vh" marginBottom={0}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Hidden only={['xs','sm', 'md']}>
                <Box marginTop={2}>
                  <Typography color='black' variant="h1" boxShadow={1}>
                    Hello World!
                  </Typography>
                </Box>
              </Hidden>
            </Grid>
          </Grid>
        </Box>
        
      </Parallax>
    </Box>
  );
};

export default Info;
