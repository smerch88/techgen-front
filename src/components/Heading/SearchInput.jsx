import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { InputAdornment, TextField } from '@mui/material';
import { StyledSearchIcon } from './searchIcon.styled';

const SearchInput = props => {
  const theme = useTheme();
  const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'md'));
  return (
    <TextField
      className={props.className}
      placeholder={isMobileVersion ? '' : 'search...'}
      variant="standard"
      inputProps={{
        style: {
          padding: `${isMobileVersion ? '0px' : '10px 15px'}`,
        },
      }}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            <StyledSearchIcon />
          </InputAdornment>
        ),
        className: props.className,
      }}
      id="outlined-basic"
    />
  );
};

export default SearchInput;
