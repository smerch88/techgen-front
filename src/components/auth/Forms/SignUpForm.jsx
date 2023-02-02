import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useState } from 'react';
import { ReactComponent as CheckBoxIcon } from '../../../images/icons/CheckBoxIcon.svg';
import { Controller, useForm } from 'react-hook-form';
import { validEmail } from 'shared/regex';
import AuthField from '../AuthField.styled';
import AuthButton from '../AuthButton.styled';
import theme from 'styles/theme';

const SignUpForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const { control, watch, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = ({ email, password }) => {
    //register logic
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
              onChange={onChange}
              required
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <Controller
        name="repeatPassword"
        control={control}
        rules={{
          validate: value => {
            if (watch('password') !== value) {
              return 'Your passwords do no match';
            }
          },
        }}
        render={({ field: { onChange, value }, formState: { errors } }) => {
          return (
            <AuthField
              placeholder="repeat password"
              type="password"
              value={value || ''}
              onChange={onChange}
              required
              helperText={errors.repeatPassword?.message}
            />
          );
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={
              <CheckBoxIcon
                width={10}
                height={10}
                fill={`${theme.palette.colorList.wildSand}`}
              />
            }
            checkedIcon={
              <CheckBoxIcon
                width={10}
                height={10}
                fill={`${theme.palette.colorList.sanMarino}`}
              />
            }
            required
            name="isAgreed"
            value={isAgreed}
            onChange={() => setIsAgreed(prev => !prev)}
          />
        }
        label={<Typography>I agreed with Privacy Policy</Typography>}
      />
      <AuthButton type="submit" disabled={!isAgreed}>
        Sign Up
      </AuthButton>
    </form>
  );
};
export default SignUpForm;
