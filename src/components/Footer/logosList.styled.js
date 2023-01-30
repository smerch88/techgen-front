import styled from 'styled-components';
import { Box, Link } from "@mui/material";
import { Logo } from './logo.styled';
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
))`
    width: 25vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

