import { Avatar, Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const LilaWeb = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Stack direction="column">
          <Typography
            aria-activedescendant=""
            variant="body1"
            color="gray"
            textAlign="center"
          >
            Lila
          </Typography>
          <IconButton href="https://lila-oxalis.vercel.app/" target="_blank">
            <Typography variant="h5" color="black" textAlign="center">
              https://lila-oxalis.vercel.app/
            </Typography>
          </IconButton>
          <Typography variant="h5" color="black" textAlign="center">
            CREATIVE DESIGNER
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "2.5em" }}
          >
            <Avatar
              src="lilaAvatar.JPG"
              style={{ height: "4em", width: "4em", objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LilaWeb;
