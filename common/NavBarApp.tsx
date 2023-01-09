"use client";
import {
  AppBar,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Box,
  Button,
  Typography,
  Hidden,
  Avatar,
  Drawer,
} from "@mui/material";

import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavBarApp = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <Box sx={{ marginBottom: "15em" }}>
        <AppBar position="fixed">
          <Toolbar>
            <Hidden only={["md", "lg", "xl"]}>
              <Grid container justifyContent="space-between">
                <Grid item>
                    <Link href='/' style={{textDecoration:'none'}}>
                      <IconButton>
                        <img src="/johnLogo.png" alt="john" height={100} />
                      </IconButton>
                    </Link>
                </Grid>
              <Grid item>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <IconButton
                      edge="start"
                      size="large"
                      aria-label="open drawer"
                      color="inherit"
                      onClick={toggleDrawer(true)}
                    >
                      <Avatar src="/johnR.jpg" />
                    </IconButton>
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/" style={{ textDecoration: "none" }}>
                    <IconButton
                    
                      edge="start"
                      size="large"
                      aria-label="open drawer"
                      color="secondary"
                      onClick={toggleDrawer(true)}
                      style={{textDecoration:'none'}}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Link>
                </Grid>
                
              </Grid>
              <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                variant="temporary"
                onPointerEnter={toggleDrawer(true)}
              >
                <Box sx={{ p: 2, height: 1, backgroundColor: "#434242" }}>
                  <Stack direction="column" spacing={3}>
                    <Button variant="contained">
                      <Link href="/about" style={{ textDecoration: "none" }}>
                        <Typography variant="body2" color="black">
                          Unser Service
                        </Typography>
                      </Link>
                    </Button>
                    <Button variant="contained">
                      <Link href="/contact" style={{ textDecoration: "none" }}>
                        <Typography variant="body2" color="black">
                          Kontakt
                        </Typography>
                      </Link>
                    </Button>
                    <Button variant="contained" color="primary">
                      <Link href="/" style={{ textDecoration: "none" }}>
                        <Typography variant="body2" color="black">
                          Home
                        </Typography>
                      </Link>
                    </Button>
                  </Stack>
                </Box>
              </Drawer>
            </Hidden>
            <Hidden only={['xs', 'sm']}>

                <Grid container justifyContent="space-between" alignItems='center'>
                <Grid item>
                    <Link href="/" style={{ textDecoration: "none" }}>
                    <IconButton  size="large">
                        <Avatar alt="John Rios" src="/johnR.jpg" />
                    </IconButton>
                    </Link>
                </Grid>
                <Grid item justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={4}>
                    <Link href="/about" style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="secondary">
                        <Typography>About</Typography>
                        </Button>
                    </Link>
                    <Link href="/contact" style={{ textDecoration: "none" }}>
                        <Button variant="contained" color="secondary">
                        <Typography>Contact</Typography>
                        </Button>
                    </Link>
                    </Stack>
                </Grid>
                </Grid>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBarApp;
