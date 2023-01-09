import { Box } from "@mui/system";
import React from "react";
import { Parallax } from "react-parallax";
import MariluWeb from "./listwork/MariluWeb";

const MainSocialPage = () => {
  return (
    <Box>
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
  );
};

export default MainSocialPage;
