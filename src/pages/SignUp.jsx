import { Stack, Typography } from '@mui/material';
import Auth from 'components/Auth/Auth';
import AuthLink from 'components/Auth/AuthLink.styled';
import SignUpForm from 'components/Auth/Forms/SignUpForm';

const SignUp = () => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Auth title="Sign up your new account" subtitle="You are welcome! 👋">
        <SignUpForm />
        <Typography sx={{ textAlign: 'center' }}>
          Already have an account ?
          <AuthLink href="/techgen-front/sign-in">Sign in</AuthLink>
        </Typography>
      </Auth>
    </Stack>
  );
};

export default SignUp;
