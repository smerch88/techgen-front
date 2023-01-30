import styled from 'styled-components';
import { Paper, Box } from "@mui/material";
import theme from "styles/theme";

export const FooterContainer = styled((props) => (
    <Paper component="footer" {...props}>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: "5vw", height: "100%" }}>
            {props.children}
        </Box>
    </Paper>
))`
  height: 8vh;
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: ${theme.palette.primary.main};
  `;



