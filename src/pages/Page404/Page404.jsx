import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Title,
  FirstSubtitle,
  SecondSubtitle,
  InnerLinkTypography,
} from './page404.styled';

const Page404 = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center' }}>
        <Title>404</Title>
        <FirstSubtitle>oops! page not be found</FirstSubtitle>
        <SecondSubtitle>
          sorry but the page you are looking for does not exist
        </SecondSubtitle>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <InnerLinkTypography>Go to main page</InnerLinkTypography>
        </Link>
      </Box>
    </Container>
  );
};

export default Page404;
