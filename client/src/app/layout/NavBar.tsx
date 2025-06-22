import {ShoppingCart } from '@mui/icons-material'
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material'


const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
}

export default function NavBar () {
  return (
   <AppBar position="fixed">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box display='flex' alignItems='center'>
                    <Typography sx={navStyles} variant="h6">RE-STORE</Typography>
                </Box>
                <Box display='flex' alignItems='center'>
                    <IconButton  size="large" sx={{ color: 'inherit' }}>
                        <Badge color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </Box>

            </Toolbar>
        </AppBar>
  )
}
