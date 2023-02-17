/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Stack, Button } from '@mui/material';
import RoadmapsCards from 'components/RoadmapsCards/RoadmapsCards';
import { Title, Filters } from './roadmaps.styled';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchRoadmaps } from 'redux/roadmaps/roadmapsSlice';
import { changeFilter } from 'redux/roadmaps/roadmapsSlice';

const Roadmaps = () => {
  const filter = useSelector(state => state.roadmaps.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoadmaps());
  }, []);

  const handleFilter = filter => {
    dispatch(changeFilter(filter));
  };

  return (
    <div>
      <Container>
        <Stack
          direction={{ lg: 'column', md: 'row', xs: 'row' }}
          gap={{ lg: '24px', md: '40px', xs: '12px' }}
        >
          <Title gutterBottom>Roadmaps</Title>
          <Filters>
            <Button
              size="small"
              sx={{
                fontSize: { lg: '16px', md: '14px' },
                backgroundColor:
                  filter === 'skill' ? null : 'rgba(114, 114, 114, 0.22)',
              }}
              onClick={() => handleFilter('skill')}
            >
              {'Skill Based'}
            </Button>
            <Button
              size="small"
              sx={{
                fontSize: { lg: '16px', md: '14px' },
                backgroundColor:
                  filter === 'role' ? null : 'rgba(114, 114, 114, 0.22)',
              }}
              onClick={() => handleFilter('role')}
            >
              {'Role Based'}
            </Button>
          </Filters>
        </Stack>
        <RoadmapsCards />
      </Container>
    </div>
  );
};

export default Roadmaps;
