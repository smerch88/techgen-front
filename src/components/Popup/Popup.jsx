import { Card, CardMedia } from '@mui/material';
import { styles } from './styles';
import closeBtn from '../../images/CloseBtn.png';

const Popup = ({ children, showCloseBtn = true }) => {
  return (
    <Card sx={styles.popup}>
      {showCloseBtn && (
        <CardMedia
          component="svg"
          alt="close"
          sx={styles.closeBtn}
          image={closeBtn}
        />
      )}
      {children}
    </Card>
  );
};

export default Popup;
