import styled from 'styled-components';
import { Box, Link } from "@mui/material";
import { Logo } from './logo.styled';
import theme from "styles/theme";

  export const LogosList = styled((props) => (
    <Box {...props}>
        {props.logos_paths.map((obj, index) => {
            return (
                <Link key={index} href={obj.path} sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Logo obj={obj} />
                </Link>
            )
        })}
    </Box>
))(({
    width: "35vw",
[theme.breakpoints.up("sm")]: {
    width: "25vw"
},
[theme.breakpoints.up("md")]: {
    width: "20vw"
},
[theme.breakpoints.up("lg")]: {
    width: "16vw"
},
[theme.breakpoints.up("xl")]: {
    width: "14vw"
},
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
}))

