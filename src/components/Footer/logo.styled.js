import styled from 'styled-components';
import { Box } from "@mui/material";
import theme from "styles/theme";

export const Logo = styled((props) => (
    <Box
        component="img"
        src={props.obj.img}
        alt={"..."}
        loading="lazy"
        {...props}
    />
))`
    width: 5vw;
    ${theme.breakpoints.up("sm")} {
        width: 3vw
    };
    ${theme.breakpoints.up("md")} {
        width: 2.2vw
    };
    ${theme.breakpoints.up("lg")} {
        width: 1.8vw
    };
    ${theme.breakpoints.up("xl")} {
        width: 1.4vw
    };
`
