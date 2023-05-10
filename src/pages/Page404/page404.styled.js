import { Typography } from "@mui/material";

export const Title = (props) => {
    return (
        <Typography
          sx={{
            color: '#4C58A2',
            marginBottom: '40px',
            fontSize: { xl: '96px', md: '96px', xs: '48px' },
          }}
          variant="h1"
        >
          {props.children}
        </Typography>
    )
}


export const FirstSubtitle = (props) => {
    return (
        <Typography
          sx={{
            color: '#F5F5F5',
            opacity: 0.6,
            fontWeight: 400,
            fontSize: { xl: '20px', md: '16px', xs: '16px' },
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {props.children}
        </Typography>
    )
}

export const SecondSubtitle = (props) => {
    return (
        <Typography
          sx={{
            color: '#F5F5F5',
            opacity: 0.6,
            fontWeight: 400,
            fontSize: '16px',
            marginBottom: {
              xl: '180px',
              lg: '140px',
              md: '120px',
              xs: '60px',
            },
          }}
        >
          {props.children}
        </Typography>
    )
}

export const InnerLinkTypography = (props) => {
    return (
        <Typography
            sx={{
              color: '#4C58A2',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            variant="span"
          >
            {props.children}
          </Typography>
    )
}