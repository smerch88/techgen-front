import { Box, Typography, styled } from "@mui/material";

export const Title = styled(Typography)(({theme}) => ({
    fontSize: "32px !important",
    [theme.breakpoints.down('lg')]: {
        fontSize: "28px !important",
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: "18px !important",
    },
    fontWeight: 600
}));

export const Filters = styled(Box)(({theme}) => ({
    display: "flex", 
    gap: "24px",
    [theme.breakpoints.down('lg')]: {
        gap: "40px",
    },
    [theme.breakpoints.down('md')]: {
        gap: "12px",
    },
}));