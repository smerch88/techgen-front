import { CardMedia, styled } from '@mui/material';

const CloseButton = styled(CardMedia)({
  width: 20,
  height: 20,
  position: 'absolute',
  transition: 'transform .2s linear',
  top: 20,
  right: 20,
  cursor: 'pointer',
  '&:hover': {
    transform: 'rotate(90deg)',
  },
});

export default CloseButton;
