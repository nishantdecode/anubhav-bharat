import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArticleIcon from '@mui/icons-material/Article';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import StoreIcon from '@mui/icons-material/Store';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import InputIcon from '@mui/icons-material/Input';
import { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
import logo from '../../logo/logo.jpeg'
import { NavbarContainer, NavbarLogo, CustomMenuIcon } from './navbar.js'

const pages = ['Home', 'Activities', 'Store', 'Food', 'Blogs', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const options = ['Basket', 'Register', 'Login'];
//const cpage = 'Home';
const user = false;

function Navbar() {
    //User menu functions
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
      });
    
    //Site menu functions
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.type === "Tab" || event.type === "Shift")
      ) {
        return;
      }

      setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {pages.map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <HomeIcon sx={{color: 'primary.main'}} />}
                    {index === 1 && <ModeOfTravelIcon sx={{color: 'primary.main'}}/>}
                    {index === 2 && <StoreIcon sx={{color: 'primary.main'}}/>}
                    {index === 3 && <LocalDiningIcon sx={{color: 'primary.main'}}/>}
                    {index === 4 && <ArticleIcon sx={{color: 'primary.main'}}/>}
                    {index === 5 && <ContactsIcon sx={{color: 'primary.main'}}/>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Box>
    );
  const ButtonStyles = { 
    my: 0, 
    display: 'block',
    mx: 0.5,
  }
  return (
    <AppBar sx={{ width: '100%', bgcolor: 'white', boxShadow: 1, position:"sticky" }} position="static" disableGutters>
    <NavbarContainer maxWidth="false" disableGutters>
        <Toolbar sx={{width: '100%', height: '100%',}} disableGutters >


        <Box sx={{ display: "flex", alignItems: "center" }} disableGutters>
          <CustomMenuIcon sx={{color:'text.secondary'}} onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logo} alt="logo" />
        </Box>


        <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'none', lg:'flex' }, justifyContent: 'center'}}>
            {pages.map((page,cpage) => {
                    return page==='Home' ? (
                        <Button variant={'cpages'} key={page} sx={ButtonStyles}>
                            {page}
                        </Button>
                    ) : (
                        <Button variant={'pages'} key={page} sx={ButtonStyles}>
                            {page}
                        </Button>
                    )
                }
            )}
        </Box>
        <Container sx={{ display: { xs: 'flex', md: 'flex', lg:'none' }, flexGrow: 1, justifyContent: 'center', }}>
            <img width= "142px" height= "35px" src={logo} href="./" alt="logo" />
        </Container>


        {user ? (
        <Box sx={{ flexGrow: 0, display: 'flex', justifyContent: 'center' }}>
            <Container sx={{ display: { xs: 'none', md: 'none', lg:'flex'}, justifyContent: 'center'}}>
                <ShoppingBasketIcon sx={{color: 'primary.main', height:"100%"}} />
                <Button variant="text" >Basket</Button>
            </Container>
            <Tooltip title="Open settings" sx={{ display: 'flex'}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar sx={{borderRadius: '5px'}}alt="User" src="./" />
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} 
              id="menu-appbar" 
              anchorEl={anchorElUser} 
              anchorOrigin={{   vertical: 'top',   horizontal: 'right', }} 
              keepMounted 
              transformOrigin={{   vertical: 'top',   horizontal: 'right', }} 
              open={Boolean(anchorElUser)} 
              onClose={handleCloseUserMenu}>
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>) : (
        <Box>
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md:'none'}, justifyContent: 'center' }}>
            <Container sx={{ display: { xs: 'none', md: 'none', lg:'flex'}, justifyContent: 'center'}}>
                <ShoppingBasketIcon sx={{color: 'primary.main', height:"100%"}} />
                <Button variant="text" >Basket</Button>
            </Container>
            <Tooltip title="Open settings" sx={{ display: 'flex'}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <InputIcon/>
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} 
              id="menu-appbar" 
              anchorEl={anchorElUser} 
              anchorOrigin={{   vertical: 'top',   horizontal: 'right', }} 
              keepMounted 
              transformOrigin={{   vertical: 'top',   horizontal: 'right', }} 
              open={Boolean(anchorElUser)} 
              onClose={handleCloseUserMenu}>
              {options.map((option) => (
                <MenuItem key={option} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{option}</Typography>
                </MenuItem>
              ))}
            </Menu>
        </Box>
        <Box sx={{ flexGrow: 0, display: { xs:'none', md: 'flex'}, justifyContent: 'center' }}>
            <Container sx={{ display: { xs: 'none', md: 'flex', lg:'flex'}, justifyContent: 'center', width: '50%'}} disableGutters>
                <ShoppingBasketIcon sx={{color: 'primary.main', height:"100%"}} />
                <Button variant="text" sx={{pr:3}} >Basket</Button>
            </Container>
            <Button variant="register" sx={{display: { xs: 'flex', md: 'flex' }}} >Register</Button>
        </Box>
        </Box>
        )}
        

        </Toolbar>
    </NavbarContainer>
    </AppBar>
  );
}
export default Navbar;