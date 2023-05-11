import { Stack, Typography } from '@mui/material';
import AuthLink from 'components/auth/AuthLink.styled';
import SignUpForm from 'components/auth/Forms/SignUpForm';
import Auth from 'components/auth/Auth';

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
