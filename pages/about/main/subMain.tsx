import {
  Box,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const SubMain = () => {
  return (
    <Container sx={{ marginBottom: "10em" }}>
      <Grid
        container
        maxWidth="lg"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Box>
            <Typography
              color="ThreeDDarkShadow"
              variant="h1"
              borderBottom={1}
              marginBottom={5}
            >
              More about me?
            </Typography>
          </Box>
          <Box>
            <Typography
              color="black"
              sx={{ fontSize: "1.5em" }}
              textAlign="justify"
            >
              I have a great passion for technology and programming, one of my
              big goals these last two years was to learn how to program and my
              skills have increased every day since then. 
              <br />
              <br />
              I have knowledge about
              programming in Java and Typescript so object oriented programming
              is one of my strengths, I have also managed to get certified as
              AWS Cloud Practitioner and improve my knowledge in the cloud. I am
              ready to perform on the frontend as well as on the backend in web
              and mobile applications.
              <br />
              <br />
              I am proud to have realized one of my goals as a teenager. I
              can share one of my great hobbies which is writing, and for that I
              developed an app.
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={12} xs={12} md={6} lg={6} xl={6}>
          <Box marginLeft={10}>
            <Paper
              sx={{
                padding: "1em",
                background: "white",
                borderRadius: "1.2em",
                position: "relativ",
              }}
            >
              <CardMedia
                component="img"
                height="500"
                image="/johnBackend.JPEG"
                sx={{ borderRadius: "1.2em" }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubMain;
