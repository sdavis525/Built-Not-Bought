import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { workoutOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchWorkouts = ({ setWorkouts, bodyPart, setBodyPart }) => {
const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);

useEffect(() => {
    const fetchWorkoutsData = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', workoutOptions);

    setBodyParts(['all', ...bodyPartsData]);
    };

    fetchWorkoutsData();
}, []);

const handleSearch = async () => {
    if (search) {
    const workoutsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', workoutOptions);

    const searchedWorkouts = workoutsData.filter(
        (item) => item.name.toLowerCase().includes(search)
            || item.target.toLowerCase().includes(search)
            || item.equipment.toLowerCase().includes(search)
            || item.bodyPart.toLowerCase().includes(search),
    );

    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

    setSearch('');
    setWorkouts(searchedWorkouts);
    }
};

return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography color="#FFEBCD"fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
     Don't Be Shy <br /> You Have to Start Somewhere
    </Typography>
    <Box position="relative" mb="72px">
        <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Workouts"
        type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#8A2BE2', color: '#FFEBCD', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
        Search
        </Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
    </Box>
    </Stack>
);
};

export default SearchWorkouts;
