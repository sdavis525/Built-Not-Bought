import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { workoutOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import WorkoutVideos from '../components/WorkoutVideos';
import MoreWorkouts from '../components/MoreWorkouts';

const WorkoutDetail = () => {
  const [workoutDetail, setWorkoutDetail] = useState({name: ''});
  const [WorkoutVideos, setWorkoutVideos] = useState([]);
  const [targetMuscleWorkouts, setTargetMuscleWorkouts] = useState([]);
  const [equipmentWorkouts, setEquipmentWorkouts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchWorkoutData = async () => {
      const workoutDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const workoutDetailData = await fetchData(`${workoutDbUrl}/exercises/exercise/${id}`, workoutOptions);
      setWorkoutDetail(workoutDetailData);

      const workoutVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${workoutDetailData.name} exercise`, youtubeOptions);
      setWorkoutVideos(workoutVideosData.contents);

      const targetMuscleWorkoutsData = await fetchData(`${workoutDbUrl}/exercises/target/${workoutDetailData.target}`, workoutOptions);
      setTargetMuscleWorkouts(targetMuscleWorkoutsData);

      const equimentWorkoutsData = await fetchData(`${workoutDbUrl}/exercises/equipment/${workoutDetailData.equipment}`, workoutOptions);
      setEquipmentWorkouts(equimentWorkoutsData);
    };

    fetchWorkoutData();
  }, [id]);

  if (!workoutDetail) return <div>Could not find data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      {/* <WorkoutVideos /> */}
      <Detail workoutDetail={workoutDetail} />

      <MoreWorkouts targetMuscleWorkouts={targetMuscleWorkouts} equipmentWorkouts={equipmentWorkouts} />
    </Box>
  );
};

export default WorkoutDetail;