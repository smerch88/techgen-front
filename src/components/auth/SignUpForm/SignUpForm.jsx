import { Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useState } from 'react';
import { ReactComponent as CheckBoxIcon } from '../../../images/icons/CheckBoxIcon.svg';
import { Controller, useForm } from 'react-hook-form';
import { validEmail } from 'shared/regex';
import AuthField from '../AuthField/AuthField';

const SignUpForm = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const { control, watch, handleSubmit } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    //register login
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
              error={errors.repeatPassword}
            />
          );
        }}
      />
      <FormControlLabel
        sx={{ fontSize: '12px' }}
        control={
          <Checkbox
            icon={<CheckBoxIcon width={10} height={10} fill={'#F5F5F5'} />}
            checkedIcon={
              <CheckBoxIcon width={10} height={10} fill={'#4C58A2'} />
            }
            required
            name="isAgreed"
            value={isAgreed}
            onChange={() => setIsAgreed(prev => !prev)}
          />
        }
        label={
          <Typography variant="caption">I agree with Privacy Policy</Typography>
        }
      />
      <Button
        type="submit"
        sx={{ margin: '40px 0', display: 'block' }}
        disabled={!isAgreed}
      >
        Sign Up
      </Button>
    </form>
  );
};
export default SignUpForm;
