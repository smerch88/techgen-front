import { TextField } from '@mui/material';

import { styles } from './styles';

const AuthField = ({ placeholder, value, onChange, error, type = 'text' }) => {
  return (
    <TextField
      margin="normal"
      required
      helperText={error?.message}
      fullWidth
      sx={styles.field}
      placeholder={placeholder}
      type={type}
      value={value || ''}
      onChange={onChange}
    />
  );
};
export default AuthField;
