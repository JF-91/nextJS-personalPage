import { Avatar, Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const SophieWeb = () => {
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
           Sophie Kopf PA
          </Typography>
          <IconButton href="https://sophie-kopf.vercel.app/" target="_blank">
            <Typography variant="h5" color="black" textAlign="center">
            https://sophie-kopf.vercel.app/
            </Typography>
          </IconButton>
          <Typography variant="h5" color="black" textAlign="center">
            Sophie Kopf Sexual Pedagogy
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "2.5em" }}
          >
            <Avatar
              src="Sophie_avatar.png"
              style={{ height: "6em", width: "6em", objectFit: "cover" }}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SophieWeb;
