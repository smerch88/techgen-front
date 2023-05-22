import { Box, Grid, keyframes, styled, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import earthImage from 'images/earth.png';

const showBanner_xs = keyframes`
  from {
    background-size: 450% auto;
    -webkit-filter: blur(0px) opacity(100%);
  }
`;
const showBanner_md = keyframes`
  from {
    background-size: auto 150%;
    -webkit-filter: blur(0px) opacity(100%);
  }
`;
const showTitle = keyframes`
  to {
    opacity: 1;
  }
`;
const scrollArrows = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
`;

export const ShowMoreArrows = (props) => (
  <Box {...props} sx={{
    position: 'relative',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    margin: '0 auto',
    display: 'grid',
    placeItems: 'center',
    opacity: 0,
    animation: `${showTitle} 1s 2s forwards`
  }}>
    <SvgIcon viewBox="0 0 30 26" sx={{
      width: '100%',
      position: 'absolute',
      animation: `${scrollArrows} 3s infinite`,
    }} >
      <path d="M27.2131 1.03628C27.7371 0.475435 28.6262 0.474728 29.151 1.03474C29.6288 1.5445 29.6294 2.33737 29.1525 2.84794L16.4616 16.4352C15.671 17.2816 14.329 17.2816 13.5384 16.4352L0.84325 2.84343C0.368406 2.33505 0.368053 1.54587 0.842445 1.03707C1.36539 0.476191 2.254 0.475594 2.7777 1.03577L13.5385 12.5461C14.3292 13.3918 15.6706 13.3916 16.4609 12.5456L27.2131 1.03628Z" fill="#F5F5F5"/>
    </SvgIcon>
    <SvgIcon viewBox="0 0 30 26" sx={{
      width: '100%',
      position: 'absolute',
      animation: `${scrollArrows} 3s infinite 0.5s`,
    }}>
      <path d="M27.2131 9.03628C27.7371 8.47543 28.6262 8.47473 29.151 9.03474C29.6288 9.5445 29.6294 10.3374 29.1525 10.8479L16.4616 24.4352C15.671 25.2816 14.329 25.2816 13.5384 24.4352L0.84325 10.8434C0.368406 10.3351 0.368053 9.54587 0.842445 9.03707C1.36539 8.47619 2.254 8.47559 2.7777 9.03577L13.5385 20.5461C14.3292 21.3918 15.6706 21.3916 16.4609 20.5456L27.2131 9.03628Z" fill="#CDCDCD"/>
    </SvgIcon>
  </Box>
);

export const MainBanner = (props) => (
  <Box
    sx={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }}
  >
    <Box
      sx={(theme) => ({
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${earthImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '300% auto',
        filter: 'blur(30px) opacity(50%)',
        position: 'absolute',
        top: '0',
        left: '0',
        animation: `${showBanner_xs} 4s`,
        [theme.breakpoints.up('md')]: {
          backgroundSize: 'auto 70%',
          animation: `${showBanner_md} 4s`
        }
      })}
    />
    <Box
      sx={(theme) => ({
        opacity: 0,
        animation: `${showTitle} 2s 1.5s forwards`,
        position: 'relative',
        paddingLeft: '30px',
        width: 'max-content',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
          paddingLeft: '50px'
        }
      })}>
      <Box
        sx={(theme) => ({
          backgroundColor: 'primary.main',
          width: '90px',
          height: '90px',
          position: 'absolute',
          top: '50%',
          left: '0',
          zIndex: '0',
          transform: 'translateY(-50%)',
          [theme.breakpoints.up('md')]: {
            width: '190px',
            height: '195px'
          }
        })}
      />
      <Box position="relative" zIndex="1">
        {props.children}
      </Box>
    </Box>
    <ShowMoreArrows onClick={props.onShowMore}/>
  </Box>
);

export const CardsBox = styled(Grid)(({theme}) => ({
  paddingTop: '60px',
  rowGap: '28px',
  [theme.breakpoints.up('md')]: {
    paddingTop: '80px'
  }
}));

export const AboutItem = (props) => (
  <Grid item sx={theme => ({
    display: 'flex',
    gap: '12px',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '40px'
    }
  })}>
    <SvgIcon viewBox="0 0 60 60" sx={{width: '60px', height: '60px', flex: '0 0 60px'}}>{props.icon}</SvgIcon>
    <Box flex="1 1">
      <Typography variant="h3" marginBottom={2}>{props.title}</Typography>
      <Typography lineHeight="130%">{props.description}</Typography>
    </Box>
  </Grid>
);
AboutItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export const SectionItem = (props) => (
  <NavLink to={props.link} style={{color: 'inherit', textDecoration: 'unset', opacity: props.disabled && 0.4, pointerEvents: props.disabled && 'none'}} >
    <Box sx={theme => ({
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, rgba(49, 38, 70, 0.4) 0%, rgba(24, 12, 51, 0.4) 100%)',
      borderRadius: '16px',
      display: 'grid',
      gridTemplateAreas: "'icon title' 'desc desc' '. link' ",
      gridTemplateColumns: '60px 1fr',
      alignItems: 'center',
      gap: '12px',
      padding: '24px 12px 14px',
      transition: "box-shadow 0.3s ease-in-out",
      '&:hover': {
        boxShadow: "10px 10px 32px -14px rgba(208,177,232,0.56);",
        '& .underline': {
            textDecoration: 'underline',
        },
      },
      [theme.breakpoints.only('md')]: {
        gridTemplateAreas: "'icon title' 'icon desc' '. link' ",
        columnGap: '28px'
      },
      [theme.breakpoints.up('md')]: {
        rowGap: '24px',
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateAreas: "'icon' 'title' 'desc' 'link' ",
        gridTemplateColumns: 'unset',
        gridTemplateRows: '60px min-content 1fr min-content',
        alignItems: 'start',
      }
    })}>
      <SvgIcon viewBox="0 0 60 60" sx={{width: '60px', height: '60px', gridArea: 'icon'}}>{props.icon}</SvgIcon>
      <Typography variant="h3" gridArea="title">{props.title}</Typography>
      <Typography gridArea="desc" lineHeight="130%">{props.description}</Typography>
      <Typography className='underline' variant="body2" textAlign="right" gridArea="link">
          go to section
      </Typography>
    </Box>
  </NavLink>
);
SectionItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string
};
