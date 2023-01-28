import { Typography } from '@mui/material';
import Auth from 'components/auth/Auth';
import SignInForm from 'components/auth/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <div>
      <Auth title="Sign up your new account" subtitle="You are welcome! 👋">
        <SignInForm />
        <Typography style={{ textAlign: 'center' }}>
          Authorization is available only to admins
        </Typography>
      </Auth>
    </div>
  );
};

export default SignIn;
