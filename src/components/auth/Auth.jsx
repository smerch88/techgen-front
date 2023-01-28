import { Typography } from '@mui/material';
import Popup from 'components/Popup/Popup';

const Auth = ({ children, title, subtitle }) => {
  return (
    <Popup>
      <Typography variant="subtitle">{subtitle}</Typography>
      <Typography variant="h2">{title}</Typography>
      {children}
    </Popup>
  );
};
export default Auth;
