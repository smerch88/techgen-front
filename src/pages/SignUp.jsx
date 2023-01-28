import { Typography, Link } from '@mui/material';
import Auth from 'components/auth/Auth';
import SignUpForm from 'components/auth/SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <div>
      <Auth title="Sign up your new account" subtitle="You are welcome! 👋">
        <SignUpForm />
        <Typography style={{ textAlign: 'center' }}>
          Already have an account ?
          <Link
            underline="none"
            href="/techgen-front/sign-in"
            sx={{ color: '#4C58A2', marginLeft: '10px' }}
          >
            Sign in
          </Link>
        </Typography>
      </Auth>
    </div>
  );
};

export default SignUp;
