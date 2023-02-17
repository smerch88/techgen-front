/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import { ReactComponent as ArrowUp } from 'images/icons/arrowUp.svg';
import Rectangle from 'images/Rectangle.jpg';
import { Container, Typography } from '@mui/material';
import getHelpfuls from '../../services/helpful-api';
import { Image, Item, Wrapper, BoxWrapper, List, Div } from './helpful.styled';
const Helpful = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getHelpfuls()
      .then(data => {
        setArticles(data);
      })

      .catch(error => console.warn(error));
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Typography variant="h2">Helpful</Typography>

        <List>
          {articles.map(({ id, title, text, pictures }) => (
            <Item key={id}>
              <Image src={Rectangle} alt="helpful image" />
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
