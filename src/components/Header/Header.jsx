import React, { useState } from "react"
import { StyledAppBar, StyledIconButton, Link, LanguageDropDown } from "./styles";
import BurgerIcon from '../../images/icons/Burger.svg'
import SignupIcon from '../../images/icons/Sign up.svg'
import ArrowDownIcon from '../../images/icons/Arrow_down.svg'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'
export const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [activeLang, setActiveLang] = useState('EN');
    const [navbarOpen, setNavbarOpen] = useState(false)

    const isMobileVersion = useMediaQuery(theme.breakpoints.between('xs', 'lg'));
    function handleToggle() {
        setNavbarOpen(!navbarOpen)
    }

    function redirectToSignIn() {
        navigate(`/sign-in`);
    } 

    // const langs = ['EN', 'RU', 'UA']; // get from redux
    return (
        <>


            <StyledAppBar maxWidth={false}>
                <Link to='/'>
                    <Typography variant="h2">
                        Techgen
                    </Typography>
                </Link>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* language panel */}
                   <LanguageDropDown src={ArrowDownIcon}/>
                    {
                        (isMobileVersion)
                            ?
                            // burger
                            (<StyledIconButton src={BurgerIcon} handler={handleToggle} />)
                            :
                            //login
                            (<StyledIconButton src={SignupIcon} handler={redirectToSignIn} />)
                    }
                </Box>
            </StyledAppBar>


        </>
    )
}