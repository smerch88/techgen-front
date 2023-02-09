import React, { useState } from "react"
import { styled } from '@mui/system';
import BurgerIcon from '../../images/icons/Burger.svg'
import SignupIcon from '../../images/icons/Sign up.svg'
import ArrowDownIcon from '../../images/icons/Arrow_down.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, AppBar, Typography, IconButton } from "@mui/material"
import { Link } from "react-router-dom";
export const Header = () => {
    const theme = useTheme();
    const [activeLang, setActiveLang] = useState('EN');
    const [navbarOpen, setNavbarOpen] = useState(false)
    const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'lg'));
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }

    const StyledAppBar = styled(AppBar)(({
        position: "static",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        [theme.breakpoints.up('xs')]: {
            padding: '0 16px',
        },
        [theme.breakpoints.up('md')]: {
            padding: '0 24px',
        },
        [theme.breakpoints.up('lg')]: {
            padding: '0 32px',
        },
        [theme.breakpoints.up('xl')]: {
            padding: '0 64px',
        }
    }))

    const StyledIconButton = styled(props => (
        <IconButton onClick={props.handler}>
            <Box
                component="img"
                src={props.src}
            />
        </IconButton>
    ))(({
        size: "large",
        edge: "start",
        color: "inherit",
        ariaLabel: "menu",
    }))

    // const langs = ['EN', 'RU', 'UA']; // get from redux
    return (
        <>


            <StyledAppBar maxWidth={false}>
                    <Typography variant="h2" component="div" >
                        Techgen
                    </Typography>


                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* language panel */}
                    <Box sx={{ display: "flex", paddingRight: "1vw", marginRight: "1vw", borderRight: " 3px solid white " }}>
                        <Typography variant="h2">
                            EN
                        </Typography>
                        <Box
                            width="0.7em"
                            component="img"
                            src={ArrowDownIcon}
                        />
                    </Box>

                    {
                        (isMobileVersion)
                            ?
                            // burger
                            (<StyledIconButton src={BurgerIcon} handler={handleToggle} />)
                            :
                            //login
                            (<StyledIconButton src={SignupIcon} handler={handleToggle} />)
                    }
                </Box>
            </StyledAppBar>


        </>
    )
}