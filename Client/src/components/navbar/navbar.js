import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { styled } from "@mui/material";

export const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
        width: '80%',
    },
    [theme.breakpoints.between("xs", "md")]: {
        width: '90%',
    },
    [theme.breakpoints.down("xs")]: {
        width: '100%',
    },
}));
export const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "175px",
    height: "43px",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));
export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    mr: theme.spacing(2),
    [theme.breakpoints.down("lg")]: {
        display: "block",
    },
}));

