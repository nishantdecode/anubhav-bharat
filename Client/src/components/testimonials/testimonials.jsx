import React from 'react'
import { Typography, Box, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import ReviewCard from '../reviewCard/reviewCard.jsx';
import foreigner from '../../images/foreigner.jpg'
import foreigner2 from '../../images/foreigner2.jpg'
import foreigner3 from '../../images/foreigner3.jpg'

const customers = [
    [
    {
        img: foreigner,
        name: 'Eleanor Pena',
        loc: 'California, USA',
        rating: '4.5',
        review: 'They were ale to help me promptly. They were knowledgeable of their business operations.'
    },
    {
        img: foreigner2,
        name: 'Theresa Webb',
        loc: 'London, UK',
        rating: '5',
        review: 'I\'ve used you for years, always had great tours. I Will be going to France and Prague this year'
    },
    {
        img: foreigner3,
        name: 'Annette Black',
        loc: 'Moscow, Russia',
        rating: '4.5',
        review: 'Easy to book and tickets emailed. They were were knowledgeable of their business operations.'
    }
    ],
    // [{
    //     img: foreigner2,
    //     name: 'Theresa Webb',
    //     loc: 'London, UK',
    //     rating: '5',
    //     review: 'I\'ve used you for years, always had great tours. I Will be going to France and Prague this year'
    // },
    // {
    //     img: foreigner3,
    //     name: 'Annette Black',
    //     loc: 'Moscow, Russia',
    //     rating: '4.5',
    //     review: 'Easy to book and tickets emailed. They were were knowledgeable of their business operations.'
    // },
    // {
    //     img: foreigner,
    //     name: 'Eleanor Pena',
    //     loc: 'California, USA',
    //     rating: '4.5',
    //     review: 'They were ale to help me promptly. They were knowledgeable of their business operations.'
        
    // }]
]

const Testimonials = () => {

    return (
      <>
        <Box sx={{display:'flex', flexDirection:'column', width:'100%'}}>
            <Typography color="primary.main" textAlign="center" sx={{color: 'primary.main', letterSpacing: 4, fontSize:'14px', fontWeight: 'bold'}} gutterBottom>
                TESTIMONIAL
            </Typography>
            <Typography variant="h3" textAlign="center" color="text.primary"  paragraph>
                Satisfied travellers around the world
            </Typography>
        </Box>
        <Carousel sx={{mb:5, display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, flexDirection:'column'}}>
            {customers.map((customers1) => {
                return (
                    <Grid container key={String(customers1)} rowSpacing={2} columnSpacing={0} sx={{mt:1}}>
                        {customers1.map((customer) => {
                            return (
                                <Grid item key={String(customer.img)} xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center', p:2 }}>
                                    <ReviewCard image={customer.img} name={customer.name} loc={customer.loc} rating={customer.rating} review={customer.review} />
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            })}
        </Carousel>
        <Box sx={{mb:5, display:{xs:'flex', sm:'flex', md:'none', lg:'none'}, flexWrap:'nowrap', overflow:"auto", scrollbarWidth:'0px', pl:1, pb:3, pt:3, pr:3}}>
            {customers.map((customers1) => {
                return (
                    <Box key={String(customers1)}>
                        {customers1.map((customer) => {
                            return (
                                <Box sx={{m:2}} key={String(customer.img)}>
                                    <ReviewCard image={customer.img}  name={customer.name} loc={customer.loc} rating={customer.rating} review={customer.review}/>
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

export default Testimonials