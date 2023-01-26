import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/system';

const Post = props => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '30px 24px',
        marginBottom: '52px',
        width: '100%',
        borderRadius: '16px',
        background: theme.palette.colorList.boulder,
      }}
    >
      <Box
        component="img"
        sx={{
          height: 92,
          width: 142,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          marginRight: '60px',
          borderRadius: '16px',
        }}
        alt="post's image"
        src={props.thumbnail}
      />
      <Box sx={{ display: 'relative', width: '100%' }}>
        <Typography
          variant="h2"
          sx={{ lineHeight: '24px', marginBottom: '12px' }}
        >
          {props.title}
        </Typography>
        <Box>{`${props.content.slice(0, 100)}...`}</Box>
      </Box>
    </Box>
  );
};

export default Post;
