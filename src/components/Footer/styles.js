import theme from "styles/theme";
export const styles = {
    footer_container: {
        height: "8vh",
        bottom: 0,
        position: "fixed",
        width: "100%",
        bgcolor: "primary.main"
    },
    img: {
        width: "7vw",
        [theme.breakpoints.up("sm")]: {
            width: "4vw"
        },
        [theme.breakpoints.up("md")]: {
            width: "3.5vw"
        },
        [theme.breakpoints.up("lg")]: {
            width: "3vw"
        },
        [theme.breakpoints.up("xl")]: {
            width: "2vw"
        },
        
    },
  };