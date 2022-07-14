import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const MoreWorkouts = ({ targetMuscleWorkouts, equipmentWorkouts }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#FFEBCD" mb="33px">
      Similar <span style={{ color: '#8A2BE2', textTransform: 'capitalize' }}>Target Muscle</span> Workouts
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleWorkouts.length !== 0 ? <HorizontalScrollbar data={targetMuscleWorkouts} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#FFEBCD" mb="33px">
      More <span style={{ color: '#8A2BE2', textTransform: 'capitalize' }}>Equipment</span> Workouts
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentWorkouts.length !== 0 ? <HorizontalScrollbar data={equipmentWorkouts} /> : <Loader />}
    </Stack>
  </Box>
);

export default MoreWorkouts;