import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { workoutOptions, fetchData } from '../utils/fetchData';
import WorkoutCard from './WorkoutCard';
import Loader from './Loader';

const Workouts = ({ workouts, bodyPart }) => {
const [currentPage, setCurrentPage] = useState(1);
const [workoutsPerPage] = useState(6);
const [apiWorkouts, setApiWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkoutsData = async () => {
      let workoutsData = [];

      if (bodyPart === 'all') {
        workoutsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', workoutOptions);
      } else {
        workoutsData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, workoutOptions);
      }

      setApiWorkouts(workoutsData);

    };
   
    fetchWorkoutsData();
  }, [bodyPart]);

  const indexOfLastWorkout = currentPage * workoutsPerPage;
  const indexOfFirstWorkout = indexOfLastWorkout- workoutsPerPage;
  const currentWorkouts = apiWorkouts.slice(indexOfFirstWorkout, indexOfLastWorkout);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentWorkouts.length) return <Loader />;

  return (
    <Box id="workouts" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography color="#FFEBCD" variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">New Me Loading ....</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentWorkouts.map((workout, idx) => (
          <WorkoutCard key={idx} workout={workout} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {workouts.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(workouts.length / workoutsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Workouts;