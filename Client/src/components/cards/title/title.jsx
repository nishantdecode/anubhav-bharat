import React from 'react'
import { Grid, Box, Typography, Button} from '@mui/material'

import { useNavigate } from 'react-router-dom'

const Title = ({heading, desc, nav}) => {
  const navigate = useNavigate()
  return (
    <Grid container>
        <Grid item xs={12} sm={12} md={9} sx={{display:{xs:'flex', sm:'flex', md:'none', lg:'none'}, pb:2, alignItems:'centre'}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
                <Typography color="primary.main" textAlign="center" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                    {heading}
                </Typography>
                <Typography variant="h3" textAlign="center" color="text.primary"  paragraph>
                    {desc}
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, pb:2, alignItems:'centre'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <Typography color="primary.main"  sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                    {heading}
                </Typography>
                <Typography variant="h2" color="text.primary" paragraph>
                    {desc}
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, justifyContent:'flex-end'}}>
            <Button variant="outlined" sx={{border:'0px', "&:hover": { border: '0px'}, height:'50%', px:3}} onClick={()=>{navigate(nav)}}>View More</Button>
        </Grid>
    </Grid>
  )
}

export default Title