import {
  Box,
  FormLabel,
  InputAdornment,
  Paper,
  styled,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import { ReactComponent as SearchIcon } from 'images/icons/search.svg';

export const MarginBox = styled(Box)(({ theme }) => ({
  marginBottom: '60px',
  [theme.breakpoints.up('md')]: {
    marginBottom: "80px",
  }
}));

export const HeadContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateAreas: '"title input" "buttons buttons"',
  alignItems: 'center',
  gridTemplateColumns: 'max-content 1fr',
  columnGap: '24px',
  rowGap: '12px',
  [theme.breakpoints.only('md')]: {
    gridTemplateAreas: '"title input" ". buttons"',
    rowGap: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateAreas: '"title title" "buttons input"',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '40px',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: '2fr 3fr',
  }
}));

export const SearchInput = styled(props =>
  (<TextField
    variant='outlined'
    placeholder='Search'
    InputProps={{
      id: 'search-input',
      endAdornment:
        (<InputAdornment position='end' sx={theme => ({ [theme.breakpoints.up('md')]: { display: 'none' } })}>
          <FormLabel htmlFor='search-input' sx={{ display: 'flex', alignItems: 'center' }}>
            <SvgIcon sx={{ position: 'relative', top: '5px' }}><SearchIcon /></SvgIcon>
          </FormLabel>
        </InputAdornment>),
    }}
    inputProps={{ autoComplete: 'off' }}
    {...props}
  />)
)(({ theme }) => `
  & .MuiInputBase-root {
    color: ${theme.palette.text.primary};
    height: 40px;

    & .MuiInputBase-input::placeholder {
      color: #929292;
      font-weight: 400;
    }

    & .MuiOutlinedInput-notchedOutline,
    &.Mui-focused .MuiOutlinedInput-notchedOutline,
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.palette.colorList.sanMarino};
      border-radius: 16px;
    }

    ${[theme.breakpoints.down('md')]} {
      & .MuiInputBase-input::placeholder {
        color: transparent;
      }
      &.Mui-focused .MuiInputBase-input::placeholder {
        color: #929292;
      }

      & .MuiOutlinedInput-notchedOutline {
        border-color: transparent;
      }
    }
  }
`);


export const Item = styled(Paper)({
  borderRadius: '16px',
  padding: '24px',
  position: 'relative',
});

export const CompanyLogo = styled('img')({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const CompanyTag = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '6px'
});


