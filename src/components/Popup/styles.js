export const styles = {
  popup: {
    maxWidth: '580px',
    borderRadius: '16px',
    position: 'relative',
    padding: '40px 75px 40px 75px',
  },
  closeBtn: {
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
  },
};
