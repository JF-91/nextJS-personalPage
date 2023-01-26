import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Parallax } from "react-parallax";
import LilaWeb from "./listwork/LilaWeb";
import MariluWeb from "./listwork/MariluWeb";

const MainSocialPage = () => {
  return (
    <Box>
      <Box sx={{ marginTop: "20em" }}>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage="MariluWeb.png"
          bgImageAlt="web Marilu"
          strength={-200}
        >
          <Box
            style={{
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MariluWeb />
          </Box>
        </Parallax>
        
      </Box>

      <Box sx={{ marginTop: "20em" }}>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage="lila.png"
          bgImageAlt="web Marilu"
          strength={-200}
        >
          <Box
            style={{
              height: "40vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LilaWeb />
          </Box>
        </Parallax>
        <Box sx={{display:'flex', justifyContent:'center', alingItems:'center'}}>
          <IconButton href="https://lila-oxalis.vercel.app/" target="_blank">
            <Typography variant="h5" color="black" textAlign="center">
              https://lila-oxalis.vercel.app/
            </Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSocialPage;
