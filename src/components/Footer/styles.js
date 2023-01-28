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
        width: "5vw",
        [theme.breakpoints.up("sm")]: {
            width: "3.5vw"
        },
        [theme.breakpoints.up("md")]: {
            width: "2.2vw"
        },
        [theme.breakpoints.up("lg")]: {
            width: "1.8vw"
        },
        [theme.breakpoints.up("xl")]: {
            width: "1.4vw"
        },
        
    },
  };