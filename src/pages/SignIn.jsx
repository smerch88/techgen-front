import { Typography } from '@mui/material';
import Auth from 'components/auth/Auth';
import SignInForm from 'components/auth/Forms/SignInForm';

const SignIn = () => {
  return (
    <div>
      <Auth title="Sign up your new account" subtitle="You are welcome! 👋">
        <SignInForm />
        <Typography sx={{ textAlign: 'center' }}>
          Authorization is available only to admins
        </Typography>
      </Auth>
    </div>
  );
};

export default SignIn;
