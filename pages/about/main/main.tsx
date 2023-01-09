import { Grid, Box, Typography,Container, Paper, CardMedia } from "@mui/material";

import React from "react";

const MainAbout = () => {
  return (
    <Container sx={{marginBottom:'10em'}}>
      <Grid
        container
        maxWidth="lg"
        justifyContent="space-between"
        alignItems="center"
        
      >
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6} >
            <Box marginRight={10} >
                <Paper sx={{padding:'1em', background:'white', borderRadius:'1.2em', position:'relativ'}}>
                    <CardMedia 
                        component='img'
                        height='500'
                        image='/johnR.jpg'
                        sx={{borderRadius:'1.2em'}}
                        />
                </Paper>
            </Box>
        </Grid>

        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Box>
            <Typography
              color="ThreeDDarkShadow"
              variant="h1"
              borderBottom={1}
              marginBottom={5}
            >
              Who am I?
            </Typography>
          </Box>
          <Box>
            <Typography
              color="black"
              sx={{ fontSize: "1.5em" }}
              textAlign="justify"
            >
              Hello, my name is John and I was born in Peru. I am 31 years old and
              I live in Vorarlberg Austria. I love nature and I enjoy learning new things a
              lot!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainAbout;
