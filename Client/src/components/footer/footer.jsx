import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import logo from '../../images/logo.jpeg'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "text.secondary",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "text.primary",
    },
  }));
    const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "175px",
    height: "43px",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));

  return (
    <Box sx={{ py: 10, mt:10, backgroundColor:'background.paper', boxShadow:1 }}>
      <CustomContainer>
        <CustomContainer>
        <Box>
            <NavbarLogo src={logo} alt="logo" sx={{mb:1}}/>
            <Box sx={{ display: { xs: 'flex', md: 'flex', lg:'none' }, flexGrow: 1, justifyContent: 'center',mb:2 }}>
                <img width= "142px" height= "35px" src={logo} href="./" alt="logo" />
             </Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "text.secondary",
                fontWeight: "500",
                mb: 2,
              }}
            >
              New Delhi, India
            </Typography>

            <IconBox>
              <FacebookIcon alt="fbIcon" sx={{ color:'text.primary', cursor: "pointer" }}/>
              <TwitterIcon alt="twitterIcon" sx={{ color:'text.primary', cursor: "pointer" }}/>
              <LinkedInIcon alt="linkedinIcon" sx={{ color:'text.primary', cursor: "pointer" }}/>
            </IconBox>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "text.primary",
                fontWeight: "700",
                mb: 2,
              }}
            >
              About
            </Typography>

            <FooterLink>About us</FooterLink>
            <br />
            <FooterLink>Features</FooterLink>
            <br />
            <FooterLink>Plans</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "text.primary",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Our Homes</FooterLink>
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <FooterLink>Video</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "text.primary",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
