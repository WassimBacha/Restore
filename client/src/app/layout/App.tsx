import React, { useEffect, useState } from 'react';
import type { Product } from '../models/product';
import  Catalog  from '../features/catalog/Catalog';
import { Box, Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import NavBar from './NavBar';

function App() {
 const [products,SetProducts] = useState<Product[]>([]);
 useEffect(() => {
  fetch('https://localhost:5038/api/products')
    .then(response => response.json())
    .then(data => SetProducts(data));
 },[])


 const darkMode = true
  const palleteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType === 'light') ? '#eaeaea' : '#121212'
      }
    }
  });



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <NavBar />
    <Box
        sx={{
          minHeight: '100vh',
          background: darkMode 
            ? 'radial-gradient(circle, #1e3aBa, #111B27)'
            : 'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 6
        }}
      >
        <Container maxWidth="xl" sx={{marginTop: 14}}>
    <Catalog products={products}/>
    
   </Container>
      </Box>
   
  
   </ThemeProvider>
  )
}

export default App
