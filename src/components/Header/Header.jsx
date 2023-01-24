import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { ExpandMoreTwoTone } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const [modal, setModal] = React.useState(false);
  const [activeLang, setActiveLang] = React.useState('EN');

  const langs = ['EN', 'RU', 'UA'];

  console.log(modal);
  console.log(activeLang);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '24px',
            fontFamily: 'Montserrat',
            flexGrow: 1,
          }}
        >
          TECHGEN
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <Box
            position="relative"
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '24px',
              }}
            >
              {activeLang}
            </Typography>
            <ExpandMoreTwoTone
              sx={{
                fontSize: '16px',
                cursor: 'pointer',
              }}
              onClick={() => setModal(!modal)}
            />
            {modal ? (
              <Box
                position="absolute"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: '50px',
                  left: '0px',
                  background: '#06051e',
                  borderRadius: '0px 0px 20px 20px',
                  padding: '10px 15px',
                }}
              >
                {langs.map((el, i) => {
                  if (activeLang !== el) {
                    return (
                      <Typography
                        key={i}
                        sx={{
                          fontWeight: '700',
                          fontSize: '16px',
                          fontFamily: 'Montserrat',
                          cursor: 'pointer',
                        }}
                        onClick={() => setActiveLang(el)}
                      >
                        {el}
                      </Typography>
                    );
                  }
                })}
              </Box>
            ) : (
              ''
            )}
          </Box>

          <Box
            sx={{
              width: '1px',
              height: '27px',
              borderRadius: '50px',
              background: '#f5f5f5',
            }}
          ></Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1,
            }}
          >
            <IconButton
              sx={{
                color: '#f5f5f5',
                background: '#1B1839',
                borderRadius: '8px',
                padding: '2px',
              }}
            >
              <PersonIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
