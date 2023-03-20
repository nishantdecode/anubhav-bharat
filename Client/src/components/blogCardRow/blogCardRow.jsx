import React from 'react'
import Title from '../title/title.jsx'
import { Grid, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import TourCard from '../tourCard/tourCard.jsx'

const blogCardRow = ({data, titleHeading, titleDesc}) => {
    return (
        <>
            <Title heading={titleHeading} desc={titleDesc} />
            <Carousel stopAutoPlayOnHover={true} animation="slide" interval={10000} navButtonsAlwaysVisible={true} indicators={false} duration={1500} sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, flexDirection:'column'}}>
                {data.map((data1) => {
                    return (
                        <Grid container key={data1} sx={{mt:1}}>
                            {data1.map((card) => {
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={String(card.img)} sx={{display:'flex', justifyContent:'center', pr:2, mb:6 }}>
                                        <TourCard image={card.img} heading={card.Heading} subHeading={card.SubHeading} rating={card.rating} price={card.price}/>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                })}
            </Carousel>
            <Box sx={{display:{xs:'flex', sm:'flex', md:'none', lg:'none'}, flexWrap:'nowrap', overflow:"auto", scrollbarWidth:'0px', pl:1, pb:3, pt:3, pr:3}}>
                {data.map((data1) => {
                    return (
                        <Box key={data1}>
                            {data1.map((card) => {
                                return (
                                    <Box key={String(card.img)} sx={{m:2}}>
                                        <TourCard image={card.img} heading={card.Heading} subHeading={card.SubHeading} rating={card.rating} price={card.price}/>
                                    </Box>

                                )
                            })}
                        </Box>
                    )
                })}
            </Box>
        </>
    )
}
  
export default blogCardRow