import React from 'react'
import Title from '../title/title.jsx'
import { Grid } from '@mui/material'
import ReviewCard from '../reviewCard/reviewCard.jsx'
import H1 from '../../images/h1.jpg'
import H2 from '../../images/h2.jpg'
import H3 from '../../images/hc4.jpg'


const heading = {
    heading1: 'Jute Craft',
    heading2: 'Metal Handicraft',
    heading3: 'Clay & pottery'
}
const loc = {
    loc1: 'North Delhi',
    loc2: 'South Delhi',
    loc3: 'New Delhi'
}
const title ={
    heading: 'THE BHARAT STORE',
    desc: 'Welcome to Indian Handicrafts!'
}
const BharatStore = () => {
    return (
      <>
          <Title heading={title.heading} desc={title.desc} />
          <Grid container rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center' }}>
                  <ReviewCard heading={heading.heading1} loc={loc.loc1} image={H1}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center' }}>
                  <ReviewCard heading={heading.heading2} loc={loc.loc2} image={H2}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, justifyContent:'center' }}>
                  <ReviewCard heading={heading.heading3} loc={loc.loc3} image={H3}/>
              </Grid>
          </Grid>
      </>
    )
}

export default BharatStore