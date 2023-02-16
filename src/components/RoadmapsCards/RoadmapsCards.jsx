import { Box, Grid, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

import RoadmapsCard from "./RoadmapsCard";
import RoadmapsSkeleton from "./RoadmapsSkeleton";

import roadmapsSelector from "redux/roadmaps/roadmapsSelector";
import { useSelector } from "react-redux";

const RoadmapsCards = () => {
    const {roadmaps, roadmapsLoadingStatus} = useSelector(roadmapsSelector);

    const renderItems = () => {
        if (roadmapsLoadingStatus === 'error') {
            return <Typography>{"Error"}</Typography>
        } else if (roadmapsLoadingStatus === 'loading') {
            const items = [];
            for(let i = 0; i < 9; i++) {
                items.push(<RoadmapsSkeleton key={nanoid()}/>);
            }
            return items;
        } else {
            return roadmaps.map(item => <RoadmapsCard key={nanoid()} title={item.title} description={item.description}/>);
        }
    }
    
    return (
        <Box m="60px 0">
            <Grid container spacing={{xs: 2, md: 5, lg: 4, xl: 4}}>
                {renderItems()}
            </Grid>
        </Box>
    )
}

export default RoadmapsCards