import { styled, TextField } from '@mui/material';

const AuthField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& fieldset': { display: 'none' },
  marginBottom: '24px',
  '&:first-of-type': {
    marginTop: '40px',
  },
  input: {
    border: `1px solid ${theme.palette.colorList.sanMarino}`,
    borderRadius: '16px',
  },
}));

export default AuthField;
