import { Card, Typography, styled } from "@mui/material";

export const StyledCard = styled(Card)({
    background: "rgba(120, 120, 120, 0.22)",
    borderRadius: "16px",
});

export const CardTitle = styled(Typography)(({theme}) => ({
    fontSize: "28px !important",
    [theme.breakpoints.down('lg')]: {
        fontSize: "24px !important",
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: "16px !important",
    },
    fontWeight: 600, 
    marginBottom: "24px"
}));

export const CardDescription = styled(Typography)(({theme}) => ({
    fontSize: "20px !important",
    [theme.breakpoints.down('lg')]: {
        fontSize: "16px !important",
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: "14px !important",
    },
}));