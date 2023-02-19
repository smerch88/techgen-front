import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { ReactComponent as LampIcon } from 'images/icons/Icon_lamp.svg';
import { ReactComponent as PuzzleIcon } from 'images/icons/Icon_puzzle.svg';
import { ReactComponent as GeometryIcon } from 'images/icons/Icon_geometry.svg';

import { ReactComponent as PencilIcon } from 'images/icons/Icon_pencil.svg';
import { ReactComponent as MapIcon } from 'images/icons/Icon_map.svg';
import { ReactComponent as ToolsIcon } from 'images/icons/Icon_tools.svg';
import { ReactComponent as MenIcon } from 'images/icons/Icon_men.svg';
import { ReactComponent as SearchIcon } from 'images/icons/Icon_vac.svg';
import { ReactComponent as DevIcon } from 'images/icons/Icon_dev.svg';
import {
  AboutItem,
  CardsBox, MainBanner,
  SectionItem,
} from 'pages/AboutUs/aboutus.styled';

const AboutUs = () => {
  return (
    <Box>
      <MainBanner>
        <>
          <Typography fontFamily="Inter" variant="h1">TECHGEN</Typography>
          <Typography fontFamily="Montserrat" fontWeight="400" textTransform="uppercase" variant="h3" >#1 uKRAINIAN IT-COMMUNITY</Typography>
        </>
      </MainBanner>

      <Box sx={theme => ({
        paddingBottom: '60px',
        [theme.breakpoints.up('md')]: {
          paddingBottom: '80px',
        },
        [theme.breakpoints.up('lg')]: {
          paddingBottom: '120px',
        },
        [theme.breakpoints.up('xl')]: {
          paddingBottom: '180px',
        },
      })}>
        <Container>
          <Typography variant="h2">About us</Typography>
          <CardsBox container>
            <AboutItem
              icon={<LampIcon/>}
              title="Social Media Network"
              description="Initially, the project existed as a social media network for IT specialists from Ukraine and other countries worldwide. Our TikTok and Telegram channels have already become one of the largest IT media in Ukraine in less than a year. We continue to develop social networks actively."
            />
            <AboutItem
              icon={<PuzzleIcon/>}
              title="Educational Program"
              description="We want IT education to be affordable and truly high-quality. That is why we have developed cool training programs, the essence of which is the practical application of skills and abilities on real projects."
            />
            <AboutItem
              icon={<GeometryIcon/>}
              title="Products & Outsource"
              description="There is a team of professional developers in various fields of IT based on our project, which is engaged in creating cool IT products for the Ukrainian and global markets, as well as providing development services."
            />
          </CardsBox>
        </Container>
      </Box>

      <Box sx={theme => ({
        padding: "60px 0",
        backgroundColor: theme.palette.colorList.boulder,
        [theme.breakpoints.up('md')]: {
          padding: "80px 0",
        },
        [theme.breakpoints.up('lg')]: {
          padding: "120px 0",
        },
      })} >
        <Container>
          <Typography variant="h2">Sections</Typography>
          <CardsBox container spacing="24px">
            <Grid item xs={12} lg={6}>
              <SectionItem
                icon={<PencilIcon/>}
                title='IT news and articles'
                description='Current news in the IT sphere, the most interesting and useful articles about programming languages, frameworks, technologies - all this and much more in the "Blog" section.'
                link="/blog"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SectionItem
                icon={<MapIcon/>}
                title='How to learn to code?'
                description='"Roadmaps" - actual educational schemes that will help in mastering the chosen profession and learning the necessary skills/tools.'
                link="/roadmaps"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SectionItem
                icon={<ToolsIcon/>}
                title='Top services for specialist'
                description='The "Helpful" section is a real treasure for every specialist because there are collected services and sites that will help in education and work.'
                link="/helpful"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SectionItem
                icon={<MenIcon/>}
                title='Our educational programs'
                description='Are you just starting your journey in IT or are you looking for opportunities to get practice on real projects after the courses? Go to "Mentorship".'
                link="/mentorship"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SectionItem
                icon={<SearchIcon/>}
                title='Search for an IT job'
                description='In the "Vacancies" section, you will be able to find not only a convenient search for available vacancies but also several features that will help you get a job.'
                link="/job"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <SectionItem
                icon={<DevIcon/>}
                title='Products and services'
                description='You can familiarize yourself with the products created by our team or order development services on the "Development" page'
                link="/development"
              />
            </Grid>
          </CardsBox>
        </Container>
      </Box>

      <Box padding="80px 0" textAlign="center">
        {'{place for contact form and socials components}'}
      </Box>
    </Box>
  );
};

export default AboutUs;
