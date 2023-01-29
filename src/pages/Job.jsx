import {
  Box,
  Button,
  Collapse,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import company from 'images/temp/company1.png';
import { useState } from 'react';

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

const Text = styled(Typography)(({theme}) => ({
  opacity: '0.6',
  [theme.breakpoints.down('md')]: {
    fontSize: '14px'
  }
}));

const DateText = styled(Text)(({theme}) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    right: 24,
    top: 24
  }
}));

const Item = styled(Paper)({
  borderRadius: '16px',
  padding: '24px',
  position: 'relative',
});

const CompanyLogo = styled('img')({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
});

const Vacancy = ({ data }) => (
  <Item sx={{padding: '24px'}}>
    <Box>
      <DateText>{data.date}</DateText>
      <Typography variant="h3" fontWeight="600">{data.name}</Typography>
      <Text>{data.description}</Text>
    </Box>
    <Box display="flex" alignItems="center" gap="24px" marginTop="32px">
      <CompanyLogo src={data.company.logo} alt={data.company.name} />
      <Box display="flex" flexDirection="column" justifyContent="space-between" gap="20px">
        <Typography fontWeight="400">{data.company.name}</Typography>
        <Box display="flex" gap="5px 40px" flexWrap="wrap">
          <Text>i {data.company.type}</Text>
          <Text>i {data.company.language}</Text>
          <Text>i {data.company.experience}</Text>
        </Box>
      </Box>
    </Box>
  </Item>
);

const MarginBox = styled(Box)(({theme}) => ({
  marginBottom: "60px",
  [theme.breakpoints.up('md')]: {
    marginBottom: "80px",
  }
}));

const Job = () => {
  const [showType, setShowType] = useState('new');
  return (
    <Container>
      <MarginBox>
        <Typography variant="h2">Vacancies</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between" sx={{marginTop: '40px'}}>
          <Box display="flex" gap="20px" >
            <Button onClick={() => setShowType('filter')} color={showType !== 'filter' ? 'transparent' : ''}>Filter</Button>
            <Button onClick={() => setShowType('new')} color={showType !== 'new' ? 'transparent' : ''}>Newest</Button>
          </Box>
          <span>input</span>
        </Box>
      </MarginBox>

      <Box sx={{display: 'flex'}}>
        <Collapse in={showType === 'filter'} timeout={1000}>
          <MarginBox>
            <Typography variant="h2">Employment</Typography>
            <Box display="flex" alignItems="center" gap="12px 20px" flexWrap='wrap'>
              <Button color="transparent">Full time</Button>
              <Button color="transparent">Part-time</Button>
              <Button color="transparent">Remote work</Button>
              <Button color="transparent">Freelance</Button>
              <Button color="transparent">Moving</Button>
            </Box>
          </MarginBox>

          <MarginBox>
            <Typography variant="h2">Direction</Typography>
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
        </Collapse>
      </Box>

      <MarginBox>
        <Stack spacing="24px">
          {dataArray.map(item => <Vacancy key={item.id} data={item}/>)}
        </Stack>
      </MarginBox>
    </Container>
  );
};

export default Job;
