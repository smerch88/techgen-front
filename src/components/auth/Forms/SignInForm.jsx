import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { validEmail } from 'shared/regex';
import AuthButton from '../AuthButton.styled';
import AuthField from '../AuthField.styled';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/sliceAuth';
import api from 'api/api';
import { setTokens } from 'helpers/save_tokens';

const SignInForm = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async ({ email, password }) => {
    try {
      const resp = await api.admin_session.login({email, password});
      setTokens(resp.data.token);
      dispatch(signIn(resp.data.user));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: '', password: '' });
    }
  }, [formState, isSubmitSuccessful, reset]);

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
