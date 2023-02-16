import styled from 'styled-components';
import { Paper, Box } from "@mui/material";
import theme from "styles/theme";

export const FooterContainer = styled((props) => (
    <Paper component="footer" {...props}>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: "5vw", height: "100%" }}>
            {props.children}
        </Box>
    </Paper>
))(({
    height: "8vh",
    marginTop: "auto",
    width: "100%",
    backgroundColor: [theme.palette.primary.main]
}))








