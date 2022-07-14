import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/HeroBanner.png';

const HeroBanner = () => (
<Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
  
    <Typography color="#FFEBCD" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    All Growth No Regret
 
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" color="#FFEBCD" lineHeight="35px">
  Personalize Your Workouts
    </Typography>
    <Stack>
    <a href="#workouts" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#8A2BE2', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#FFEBCD', borderRadius: '4px' }}>Explore Workouts</a>
   
    </Stack>
    <Typography fontFamily='Brush Script MT' fontWeight={600}  color="white" sx={{ marginTop: '65px', opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '100px' }}>
        "Change The Way You Look At Challenges and You Will Prevail"
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
</Box>
);

export default HeroBanner;
