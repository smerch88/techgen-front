import React from 'react';
import { Paper, Typography, Link } from '@mui/material';
import { Box } from '@mui/material';
import instagram_logo from '../../images/icons/instagram_logo.svg'
import telegram_logo from '../../images/icons/telegram_logo.svg'
import tiktok_logo from '../../images/icons/tiktok_logo.svg'
import youtube_logo from '../../images/icons/youtube_logo.svg'
import { styles } from './styles';
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
      <Paper sx={styles.footer_container} component="footer">
        <Box sx={{ display: "flex", justifyContent: "space-between", px: "5vw", height: "100%" }}>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="caption">
              &#169; TECHGEN - {new Date().getFullYear()}
            </Typography>
          </Box>

          <Box sx={{ width: "25vh", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            {logos_paths.map((obj, index) => {
              return (
                <Link key={index} href={obj.path} sx={{ display: "flex", alignItems: "center" }} >
                  <Box
                    component="img"
                    sx={styles.img}
                    src={obj.img}
                    alt={"..."}
                    loading="lazy"
                  />
                </Link>
              )
            })}
          </Box>

        </Box>
      </Paper>
    </>
  )
}