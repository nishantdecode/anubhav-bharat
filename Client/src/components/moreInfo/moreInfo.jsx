import React from 'react'
import { Grid, Box, Typography, Paper } from '@mui/material'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const MoreInfo = () => {
  return (
    <>
    <Typography color="inherit" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold',textAlign: 'center', pb:2}} gutterBottom>
        WHY US?
    </Typography>
    <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center" alignItems="center" sx={{display: {xs:'flex', sm: 'flex', md: 'none', lg: 'none'}}} >
            <Grid item xs={9} sm={5}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1, border: '2px solid', borderColor:'text.secondary'}}>
                    <EmojiEmotionsIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}>Build Experiences!</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>Browse and book tours and activities so incredible, you'll want to tell your friends.</Typography>
                </Box>
            </Grid>
            <Grid item xs={9} sm={5}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1, border: '2px solid', borderColor:'text.secondary'}}>
                    <HighQualityIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}>Quality at our core.</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}> High quality standards. Millions of reviews.High quality standards.</Typography>
                </Box>
            </Grid>
            <Grid item xs={9} sm={5}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1, border: '2px solid', borderColor:'text.secondary'}}>
                    <ShuffleIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}> Ultimate flexibility</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>You're in control, with free cancellation and payment options to satisfy any plan.</Typography>
                </Box>
            </Grid>
            <Grid item xs={9} sm={5}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1, border: '2px solid', borderColor:'text.secondary'}}>
                    <SupportAgentIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}>24/7  Support.</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>New price? New plan? No problem. We're here to help, 24/7.</Typography>
                </Box>
            </Grid>
        </Grid>
    <Paper sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, py:5, px:5, boxShadow:1, borderRadius:'16px'}}>
        <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center" alignItems="center" >
            <Grid item sm={6} md={3} lg={3}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1}}>
                    <EmojiEmotionsIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}>Build Experiences!</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>Browse and book tours and activities so incredible, you'll want to tell your friends.</Typography>
                </Box>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1}}>
                    <HighQualityIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}>Quality at our core.</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}> High quality standards. Millions of reviews.High quality standards.</Typography>
                </Box>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1}}>
                    <ShuffleIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}> Ultimate flexibility</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>You're in control, with free cancellation and payment options to satisfy any plan.</Typography>
                </Box>
            </Grid>
            <Grid item sm={6} md={3} lg={3}>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', p:1}}>
                    <SupportAgentIcon sx={{color:"primary.main"}} />
                    <Typography variant="h4" color="text.primary" sx={{textAlign: 'center'}}>24/7  Support.</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>New price? New plan? No problem. We're here to help, 24/7.</Typography>
                </Box>
            </Grid>
        </Grid>
    </Paper>
    </>
  )
}

export default MoreInfo