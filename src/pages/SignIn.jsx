import { Typography, Stack } from '@mui/material';
import Auth from 'components/Auth/Auth';
import SignInForm from 'components/Auth/Forms/SignInForm';

const SignIn = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Auth title="Sign up your new account" subtitle="You are welcome! 👋">
        <SignInForm />
        <Typography sx={{ textAlign: 'center' }}>
          Authorization is available only to admins
        </Typography>
      </Auth>
    </Stack>
  );
};

export default SignIn;
