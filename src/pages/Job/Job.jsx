import {
  Box,
  Button,
  Collapse,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import company from 'images/temp/company1.png';
import { useState } from 'react';
import { CompanyLogo, CompanyTag, HeadContainer, Item, MarginBox, SearchInput } from 'pages/Job/job.styled';
import { GlobeSimple, MapPin, Clock } from "phosphor-react";

const dataArray = [
  {
    id: '1',
    date: '23 january 2023',
    name: 'Senior Backend Drupal Developer',
    description: "We're looking for a Senior Backend Drupal Developer!",
    company: {
      logo: company,
      name: 'Oksana Holovatiuk, recruiter in ANVI',
      type: 'Remote work',
      language: 'Intermediate',
      experience: '5 years of experience'
    }
  },
  {
    id: '2',
    date: '09 december 2022',
    name: 'Unity Developer',
    description: "“CodeSmart” Software Engineering Artel is looking for a senior Unity developer with experience in AR apps development. Join our team and help to build the next generation of AR games & entertainment products. As a Unity developer, you will be a key member of our newly created Mobile Apps development team and will have a chance to build your own team from the beginning!",
    company: {
      logo: company,
      name: 'Michael Fridshtand, CEO in Codesmart.',
      type: 'Remote work',
      language: 'Intermediate',
      experience: '3 years of experience'
    }
  },
  {
    id: '3',
    date: '23 january 2023',
    name: 'Senior Backend Drupal Developer',
    description: "We're looking for a Senior Backend Drupal Developer!",
    company: {
      logo: company,
      name: 'Oksana Holovatiuk, recruiter in ANVI',
      type: 'Remote work',
      language: 'Intermediate',
      experience: '5 years of experience'
    }
  },
  {
    id: '4',
    date: '09 december 2022',
    name: 'Unity Developer',
    description: "“CodeSmart” Software Engineering Artel is looking for a senior Unity developer with experience in AR apps development. Join our team and help to build the next generation of AR games & entertainment products. As a Unity developer, you will be a key member of our newly created Mobile Apps development team and will have a chance to build your own team from the beginning!",
    company: {
      logo: company,
      name: 'Michael Fridshtand, CEO in Codesmart.',
      type: 'Remote work',
      language: 'Intermediate',
      experience: '3 years of experience'
    }
  }
];

const Vacancy = ({ data }) => (
  <Item sx={{padding: '24px'}}>
    <Box>
      <Box sx={{display: 'grid', gridTemplateColumns: '1fr max-content', marginBottom: {xl: '24px', xs: '12px'}}}>
        <Typography variant="h3" fontWeight="600">{data.name}</Typography>
        <Typography variant="body2">{data.date}</Typography>
      </Box>
      <Typography variant="body2">{data.description}</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap="24px" marginTop="32px">
      <CompanyLogo src={data.company.logo} alt={data.company.name} />
      <Box display="flex" flexDirection="column" justifyContent="space-between" gap="20px">
        <Typography fontWeight="400">{data.company.name}</Typography>
        <Box display="flex" gap="5px 40px" flexWrap="wrap">
          <CompanyTag variant="body2"><MapPin /> {data.company.type}</CompanyTag>
          <CompanyTag variant="body2"><GlobeSimple /> {data.company.language}</CompanyTag>
          <CompanyTag variant="body2"><Clock /> {data.company.experience}</CompanyTag>
        </Box>
      </Box>
    </Box>
  </Item>
);

const Job = () => {
  const [showType, setShowType] = useState('new');
  return (
    <Container>
      <MarginBox>
        <HeadContainer>
          <Typography variant="h2" gridArea="title">Vacancies</Typography>
          <Box display="flex" gap="20px" gridArea="buttons">
            <Button onClick={() => setShowType('filter')} color={showType !== 'filter' ? 'transparent' : ''}>Filter</Button>
            <Button onClick={() => setShowType('new')} color={showType !== 'new' ? 'transparent' : ''}>Newest</Button>
          </Box>
          <SearchInput />
        </HeadContainer>
      </MarginBox>

      <Box sx={{display: 'flex'}}>
        <Collapse in={showType === 'filter'} timeout={1000}>
          <MarginBox>
            <Typography variant="h2" marginBottom="24px">Employment</Typography>
            <Box display="flex" alignItems="center" gap="12px 20px" flexWrap='wrap'>
              <Button color="transparent">Full time</Button>
              <Button color="transparent">Part-time</Button>
              <Button color="transparent">Remote work</Button>
              <Button color="transparent">Freelance</Button>
              <Button color="transparent">Moving</Button>
            </Box>
          </MarginBox>

          <MarginBox>
            <Typography variant="h2" marginBottom="24px">Direction</Typography>
            <Box display="flex" alignItems="center" gap="12px 20px" flexWrap='wrap'>
              <Button color="transparent">.NET</Button>
              <Button color="transparent">Android</Button>
              <Button color="transparent">C / C++ / Embedded</Button>
              <Button color="transparent">Front-End / JS</Button>
              <Button color="transparent">Goland</Button>
              <Button color="transparent">iOS</Button>
              <Button color="transparent">Java</Button>
              <Button color="transparent">Node.js</Button>
              <Button color="transparent">PHP</Button>
              <Button color="transparent">Python</Button>
              <Button color="transparent">...</Button>
            </Box>
          </MarginBox>

          <MarginBox><Button size="large">Search</Button></MarginBox>
        </Collapse>
      </Box>

      <MarginBox>
        <Stack sx={{rowGap: {xs: '24px', md: '52px'}}}>
          {dataArray.map(item => <Vacancy key={item.id} data={item}/>)}
        </Stack>
      </MarginBox>
    </Container>
  );
};

export default Job;
