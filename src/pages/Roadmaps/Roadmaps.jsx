import { Container, Stack } from "@mui/material";
import FiltersButton from "components/Filters/FilterButtons";
import RoadmapsCards from "components/RoadmapsCards/RoadmapsCards";
import { Title, Filters } from "./roadmaps.styled";

const Roadmaps = () => {
  return (
    <div>
      <Container>
        <Stack 
          direction={{lg: 'column', md: 'row', xs: 'row'}} 
          gap={{lg: '24px', md: '40px', xs: '12px'}}
        >
          <Title>
            Roadmaps
          </Title>
          <Filters>
            <FiltersButton />
          </Filters>
        </Stack>
        <RoadmapsCards />
      </Container>
    </div>
  );
};

export default Roadmaps;
