import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
    color: "text.primary",
    fontWeight: "bold",
    maxWidth: '80%',
    [theme.breakpoints.down("lg")]: {
        maxWidth: '100%',
        fontSize: "36px",
      },
    [theme.breakpoints.down("md")]: {
        maxWidth: '100%',
        fontSize: "32px",
      },
    [theme.breakpoints.down("sm")]: {
        maxWidth: '100%',
        fontSize: "28px",
    },
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
    color: "#808080",
    fontWeight: "regular",
    maxWidth: '80%',
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]: {
        maxWidth: '100%',
        fontSize: "18px",
      },
    [theme.breakpoints.down("sm")]: {
        maxWidth: '100%',
        fontSize: "16px",
    },
}));

export const HeroImage = styled("img")(({ theme }) => ({ 
    maxWidth: '100%',
    borderRadius: "250px",
    [theme.breakpoints.down("md")]: {
        maxWidth: '80%',
        display: "none",
    },
}));