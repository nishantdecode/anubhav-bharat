import { Person } from '@mui/icons-material';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { SubTitle, Title } from '../../home/hero/hero';

import heroImg from "../../../images/Taj2.jpeg";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{xs:'90%', sm:'70%', md:400},
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Newsletter = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container spacing={10} justifyContent="center" alignItems="center" >
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{display: "flex", flexDirection: 'column', alignItems:'center'}} >
          <Box sx={{width:{xs:'90%', sm:'70%', md:'80%'}}}>
            <Container>
              <Title textAlign="center" sx={{ml:{xs:0, sm:2, md:4}}} variant='h2'>
                Subscribe to our newsletter!
              </Title>
              <SubTitle textAlign="center" sx={{ml:{xs:0, sm:2, md:4}}} variant='h5'>
                And get exciting offers on best tourist locations.  
              </SubTitle>
            </Container>
          </Box>
            <Box sx={{display:'flex',ml:{xs:0, sm:2, md:2}, mt:1, mb:{xs:1, sm:1, md:0},  width:{xs:'90%', sm:'70%', md:'80%'}}}>
              <TextField
                id="outlined-controlled"
                label="Name"
                sx={{width:'100%'}}
              />
            </Box>
            <Box sx={{display:'flex',ml:{xs:0, sm:2, md:2}, mt:1, mb:3, width:{xs:'90%', sm:'70%', md:'80%'}}}>
              <TextField
                id="outlined-controlled"
                label="Email"
                sx={{width:'100%'}}
              />
            </Box>
            <Button onClick={handleOpen} variant='register' sx={{color: 'primary',ml:2, width:{xs:'90%', sm:'70%', md:'80%'},height:'56px', mb:3}}>
              <Person />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mr:2}}>
                  Subscribed!
                </Typography>
              </Box>
            </Modal>
        </Box>
      </Grid>
      <Grid item md={6} lg={6} sx={{display:{ xs:'none', md:'flex', lg:'flex' }}}>
        <Box sx={{display:'flex', mr: 2, width:'100%'}}>
            <Box sx={{
                width: '100%', 
                height:'70vh', 
                backgroundImage:`url(${heroImg})`, 
                backgroundRepeat: "no-repeat", 
                backgroundPosition: "50% 20%",  
                borderRadius:{sm:'0px', md:'16px'}}}
            />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Newsletter