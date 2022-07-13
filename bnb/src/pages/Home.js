import React, { useState } from 'react';
import { Box } from '@mui/material';


import Workouts from '../components/Workouts';
import SearchWorkouts from '../components/SearchWorkouts';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchWorkouts setWorkouts={setWorkouts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Workouts setWorkouts={setWorkouts} workouts={workouts} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;

