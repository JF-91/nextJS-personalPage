"use client"
import { AppBar, Grid, IconButton, Stack, Toolbar, Box, Button, Typography } from '@mui/material'

import React from 'react'

import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const NavBarApp = () => {
  return (
    <>
        <Box sx={{marginBottom:'15em'}}>
            <AppBar position='fixed'>
                <Toolbar >
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <Link href='/' style={{textDecoration:'none'}}>
                                <Button variant='outlined' size='large'>
                                    <MenuIcon />
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item  justifyContent='space-between' alignItems='center'>
                            <Stack direction='row' spacing={4}>
                                <Link href='/about' style={{textDecoration:'none'}}>
                                    <Button variant='contained' color='secondary'>
                                        <Typography>About</Typography>
                                    </Button>
                                </Link>
                                <Link href='/contact' style={{textDecoration:'none'}}>
                                    <Button variant='contained' color='secondary'>
                                        <Typography>Contact</Typography>
                                    </Button>
                                </Link>
                            </Stack>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    </>
  )
}

export default NavBarApp