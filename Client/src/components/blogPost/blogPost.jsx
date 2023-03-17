import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Button, Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BlogPost = ({image, heading, desc, avatar, author, date}) => {
  return (
    <>
        <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={12} md={5} lg={5} sx={{display:'flex'}}>
                <Box sx={{width:'100%', display:'flex', p:2, justifyContent:{ xs:'center', sm:'centre', md:'flex-start', lg:'flex-start'}}}>
                    <Card sx={{ borderRadius:'16px' }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="300"
                            width="200px"
                            image={image}
                            alt="Tourist Attraction"
                          />
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} sx={{display:'flex', p:2}}>
                <Box sx={{width:'100%', display:'flex', pt:{xs:0, sm:0, md:5}, pb:0, flexDirection: 'column', alignItems:{ xs:'center', sm:'centre', md:'flex-start'}, pl:0}} >
                    <Typography variant="h4" color="text.primary" paragraph sx={{textAlign: { xs:'center', sm:'centre', md:'left', lg:'left'}}}>
                        {heading}
                    </Typography>
                    <Box sx={{width:'100px', height:'3px', backgroundColor:'primary.main'}} />
                    <Box sx={{display:{xs:'none', sm:'none', md:'flex'}, flexDirection:'row', justifyContent:'flex-start', mt:3}}>
                        <Avatar alt="Author" src={avatar} sx={{ borderRadius:"10px", width: 36, height: 36}}/>
                        <Box sx={{display:'flex', flexDirection:'column', alignItems:'centre', px:1}}>
                            <Typography variant="body2" fontSize="12px" color="text.secondary">Author:{author}</Typography>
                            <Typography variant="body2" fontSize="12px" color="text.secondary">Date Created:{date}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{mt: 1, textAlign: { xs:'center', sm:'centre', md:'left', lg:'left'}}}>
                        {desc}
                    </Typography>
                    
                        
                    <Button variant="outlined" sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, color: 'primary.main', fontWeight:600, width:'100px', height:'50px'}} href ="../../pages/blogpage/blogpage.jsx">Read More</Button>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}

export default BlogPost