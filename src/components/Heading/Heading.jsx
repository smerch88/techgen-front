import { Box, Typography } from '@mui/material';
import { StyledSearchInput } from './searchInput.styled';

const Heading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: { lg: '40px', md: '24px', xs: '12px' },
      }}
    >
      <Typography variant="h3">Blog</Typography>
      <StyledSearchInput />
    </Box>
  );
};

export default Heading;
