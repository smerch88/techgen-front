import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as ViewNumbersIcon } from 'images/icons/views.svg';

const Post = props => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  return (
    <Box
      sx={{
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        padding: '30px 24px',
        marginBottom: '52px',
        width: '100%',
        borderRadius: '16px',
        background: theme.palette.colorList.boulder,
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box
        component="img"
        sx={{
          width: { md: '142px', xs: '100%' },
          marginBottom: { xs: '24px' },
          marginRight: '60px',
          borderRadius: '16px',
        }}
        alt="post's image"
        src={props.thumbnail}
      />
      <Box
        sx={{ width: { md: '62%', xs: '100%' }, marginBottom: { xs: '25px' } }}
      >
        <Typography
          variant="h2"
          sx={{ lineHeight: '24px', marginBottom: '12px' }}
        >
          {props.title}
        </Typography>
        <Box>{`${props.content.slice(0, 100)}...`}</Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '12px',
          right: { xs: '12px', md: '40px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3px',
          fontSize: { xs: '14px' },
        }}
      >
        {isMobileVersion ? (
          <ViewNumbersIcon width="14px" height="14px" />
        ) : (
          <ViewNumbersIcon width="22px" height="22px" />
        )}
        2
      </Box>
    </Box>
  );
};

export default Post;
