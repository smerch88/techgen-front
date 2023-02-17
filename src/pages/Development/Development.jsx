import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ReactComponent as ArrowUp } from 'images/icons/arrowUp.svg';
import Rectangle from 'images/Rectangle.jpg';
import { Container, Typography } from '@mui/material';
import getDevelopments from './api';
import {
  Image,
  Item,
  Wrapper,
  BoxWrapper,
  List,
  Div,
} from './development.styled';
const Development = () => {
  const [developments, setDevelopments] = useState([]);
  useEffect(() => {
    getDevelopments()
      .then(data => {
        setDevelopments(data);
      })

      .catch(error => console.warn(error));
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Typography variant="h2">Development</Typography>

        <List>
          {developments.map(({ id, title, text, pictures }) => (
            <Item key={id}>
              <Image src={Rectangle} alt="development image" />
              <BoxWrapper>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body2">{text}</Typography>
              </BoxWrapper>
            </Item>
          ))}
        </List>
        <Div>
          <ArrowUp width="30" height="26" />
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Development;
