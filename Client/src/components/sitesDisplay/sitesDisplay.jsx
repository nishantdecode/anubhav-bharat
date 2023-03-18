import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import DisplayCard from '../displayCard/displayCard.jsx'

const SitesDisplay = ({data}) => {
  return (
    <>
        <Grid item xs={12} sm={12} md={12} sx={{display:{xs:'flex', sm:'flex', md:'flex', lg:'flex'}, pb:2, alignItems:'centre'}}>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
                <Typography color="primary.main" textAlign="center" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                    TOP TOURIST ATTRACTIONS
                </Typography>
                <Typography variant="h3" textAlign="center" color="text.primary"  paragraph>
                    The amazing Places around India!
                </Typography>
            </Box>
        </Grid>
        <Grid container rowSpacing={3}>
            {data.map((card) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={String(card.img)} sx={{display:'flex', justifyContent:'center' }}>
                        <DisplayCard heading={card.Heading} loc={card.SubHeading} image={card.img}/>
                    </Grid>
                )
            })} 
        </Grid>
    </>
  )
}

export default SitesDisplay