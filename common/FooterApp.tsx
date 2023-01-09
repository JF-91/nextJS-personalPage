import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
//social
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const FooterApp = () => {
  return (
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="darkgray"
      color="white"
      marginTop={10}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Box
              borderBottom={1}
              sx={{ color: "#424242", marginBottom: "2.5em" }}
            >
              Contact
            </Box>
            <Stack direction="column" spacing={4}>
              <Box>
                <img src="/johnLogo.png" height={50} />
              </Box>
              <Box>
                <IconButton href="mailto:johnlb91@gmail.com" style={{ color: "#424242", marginBottom: "2.5em" }} target='_blank'>
                  <MailOutlineIcon />
                  <Typography marginLeft={2}>John@mail.com</Typography>
                </IconButton>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              borderBottom={1}
              sx={{ color: "#424242", marginBottom: "2.5em" }}
            >
              About me
            </Box>
            <Stack direction="column" spacing={4}>
              <Typography color="black" variant="body1" style={{fontSize:'1.3em'}}>
                I am a self-taught programmer, passionate about technology and
                knowledge, I have done personal and private projects.
                <br />
                If you are interested in working with me write me an email.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box
              borderBottom={1}
              sx={{ color: "#424242", marginBottom: "2.5em" }}
            >
              Social
            </Box>
            <Stack direction={{xs:'column', sm:'row', lg:'row', xl:'row'}}>
              <Box>
                <IconButton href="https://www.facebook.com/profile.php?id=100084795588215" target='_blank'>
                  <FacebookIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton href="https://www.instagram.com/johnf_developer/" target='_blank'>
                  <InstagramIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton href="https://www.linkedin.com/in/john-rios-618a9733/" target='_blank'>
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton href="https://twitter.com/johndrank" target='_blank'>
                  <TwitterIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton href="mailto:johnlb91@gmail.com" target='_blank'>
                  <AlternateEmailIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton href="https://github.com/JF-91" target='_blank'>
                  <GitHubIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton href="https://t.me/+j3rkpSWAoyExMDM0" target='_blank'>
                  <TelegramIcon />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterApp;
