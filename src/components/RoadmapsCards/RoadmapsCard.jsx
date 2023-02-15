import { CardContent, Grid } from "@mui/material";
import { StyledCard, CardTitle, CardDescription } from "./roadmapsCard.styled";

const RoadmapsCard = ({title, description}) => {
    return (
        <Grid item xs={12} md={6} lg={4} xl={4}>
            <StyledCard>
                <CardContent>
                    <CardTitle gutterBottom>
                        {title}
                    </CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardContent>
            </StyledCard>
        </Grid>
    )
}

export default RoadmapsCard;