import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ReactComponent as ArrowUp } from 'images/icons/arrowUp.svg';
import { Container, Typography } from '@mui/material';
import getHelpfuls from './api';
import { Image, Item, Wrapper, BoxWrapper, List, Div } from './helpful.styled';
const Helpful = () => {
  const [helpfuls, setHelpfuls] = useState([]);
  useEffect(() => {
    getHelpfuls()
      .then(data => {
        setHelpfuls(data);
      })

      .catch(error => console.warn(error));
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Typography variant="h2">Helpful</Typography>

        <List>
          {helpfuls.map(({ id, title, text, pictures }) => (
            <Item key={id}>
              <Image
                src="../../images/icons/Rectangle.jpg"
                alt="helpful image"
              />
              <BoxWrapper>
                <Typography variant="h3">{title}</Typography>
                <Typography variant="body2">{text}</Typography>
              </BoxWrapper>
            </Item>
          ))}
        </List>
        <Div>
          <a href="#">
            <ArrowUp width="30" height="26" />
          </a>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Helpful;
