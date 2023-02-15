import { Skeleton } from "@mui/material";
import { Grid } from "@mui/material";

const RoadmapsSkeleton = () => {
    return (
        <Grid item xs={12} md={6} lg={4} xl={4}>
            <Skeleton variant="rectangular" sx={{width: "100%", borderRadius: "16px", p: "100px 0"}}></Skeleton>
        </Grid>
    )
}

export default RoadmapsSkeleton;