import { Controller, useForm } from 'react-hook-form';
import { validEmail } from 'shared/regex';
import AuthButton from '../AuthButton.styled';
import AuthField from '../AuthField.styled';

const SignInForm = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    //login logic
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
              required
              helperText={errors.email?.message}
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
              required
              onChange={onChange}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <AuthButton type="submit">Sing in</AuthButton>
    </form>
  );
};
export default SignInForm;
