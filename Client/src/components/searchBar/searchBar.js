import { styled, Box, Button } from "@mui/material";

export const InputBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "centre",
    flexWrap: 'wrap', 
    flexDirection: 'row',
    gap:20, 
    [theme.breakpoints.down("md")]: {
        flexDirection: 'column',
        justifyContent: "center",
        alignItems:'center',
    },
  }));

export const CustomButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    padding: '5px 18px',
    borderRadius: '10px',
    boxShadow: 'none',
    backgroundColor: '#FF7722', 
    height: '56px',
    margin: theme.spacing(0, 0, 0, 0),
    "&:hover": {
        boxShadow: 'none',
        backgroundColor: '#f25d00',
    },
    [theme.breakpoints.down("md")]: {
        height: '56px', 
        width:'200px',
    },
}));