import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const WorkoutCard = ({ workout})  => {
    console.log(workout)
   return (<Link className="workout-card" to={`/workout/${workout.id}`}> 
    <img src={workout.gifUrl} alt={workout.name} Loading="lazy" />
    <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: 'purple', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
            {workout.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#8A2BE2', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
        {workout.target}
        </Button>
    </Stack>
    <Typography mL='21px' color='#FFEBCD' fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {workout.name}
    </Typography>
      </Link>)
};

export default WorkoutCard