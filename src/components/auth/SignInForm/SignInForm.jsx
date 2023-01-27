import { Button } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { validEmail } from 'shared/regex';
import AuthField from '../AuthField/AuthField';

const SignInForm = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    //login login
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          pattern: {
            value: validEmail,
            message: 'please enter a valid email',
          },
        }}
        render={({ field: { onChange, value }, formState: { errors } }) => {
          return (
            <AuthField
              placeholder="email"
              value={value || ''}
              onChange={onChange}
              error={errors.email}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          minLength: {
            value: 6,
            message: 'min length is 6 charts',
          },
        }}
        render={({ field: { onChange, value }, formState: { errors } }) => {
          return (
            <AuthField
              placeholder="password"
              type="password"
              value={value || ''}
              onChange={onChange}
              error={errors.password}
            />
          );
        }}
      />
      <Button type="submit" sx={{ margin: '40px 0' }}>
        Sign in
      </Button>
    </form>
  );
};
export default SignInForm;
