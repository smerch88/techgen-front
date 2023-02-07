import { Container, Stack, Button } from "@mui/material";
import FiltersButton from "components/Filters/FilterButtons";
import RoadmapsCards from "components/RoadmapsCards/RoadmapsCards";
import { Title, Filters } from "./roadmaps.styled";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRoadmaps } from "redux/roadmaps/roadmapsSlice";

const Roadmaps = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoadmaps());
  }, []);

  return (
    <div>
      <Container>
        <Stack 
          direction={{lg: 'column', md: 'row', xs: 'row'}} 
          gap={{lg: '24px', md: '40px', xs: '12px'}}
        >
          <Title gutterBottom>
            Roadmaps
          </Title>
          <Filters>
            <Button size="small" sx={{fontSize: {lg: "16px", md: "14px"}}}>
              {"Skill Based"}
            </Button>
            <Button size="small" sx={{fontSize: {lg: "16px", md: "14px"}}}>
              {"Role Based"}
            </Button>
          </Filters>
        </Stack>
        <RoadmapsCards />
      </Container>
    </div>
  );
};

export default Roadmaps;
