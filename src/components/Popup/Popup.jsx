import closeBtn from '../../images/CloseBtn.png';
import CloseButton from './CloseButton.styled';
import PopupCard from './PopupCard.styled';

const Popup = ({ children, showCloseBtn = true }) => {
  return (
    <PopupCard>
      {showCloseBtn && (
        <CloseButton component="svg" alt="close" image={closeBtn} />
      )}
      {children}
    </PopupCard>
  );
};

export default Popup;
