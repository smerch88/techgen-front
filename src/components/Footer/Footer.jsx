import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import instagram_logo from '../../images/icons/instagram_logo.svg'
import telegram_logo from '../../images/icons/telegram_logo.svg'
import tiktok_logo from '../../images/icons/tiktok_logo.svg'
import youtube_logo from '../../images/icons/youtube_logo.svg'
import { LogosList } from './logosList.styled';
import { FooterContainer } from './footerContainer.styled';

export const Footer = () => {
  const logos_paths = [
    {
      img: instagram_logo,
      path: "https://www.instagram.com/"
    },
    {
      img: telegram_logo,
      path: "https://web.telegram.org/"
    },
    {
      img: tiktok_logo,
      path: "https://www.tiktok.com/"
    },
    {
      img: youtube_logo,
      path: "https://www.youtube.com/"
    }
  ]

  return (
    <>
    <FooterContainer>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>
              &#169; TECHGEN - {new Date().getFullYear()}
            </Typography>
          </Box>
          <LogosList logos_paths = {logos_paths}/>
      </FooterContainer>
    </>
  )
}