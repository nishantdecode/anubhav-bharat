import React from 'react'
import Title from '../title/title.jsx'
import { Grid } from '@mui/material'
import DisplayCard from '../displayCard/displayCard.jsx'
import Samosa from '../../images/samosa.jpg'
import Biryani from '../../images/biryani.jpg'
import ButterChicken from '../../images/butterchicken.webp'


const heading = {
    heading1: 'Samosa',
    heading2: 'Biryani',
    heading3: 'ButterChicken'
}
const loc = {
    loc1: 'North Delhi',
    loc2: 'South Delhi',
    loc3: 'New Delhi'
}
const title ={
    heading: 'ANUBHAV FOOD SELECTION',
    desc: 'Experience best Indian foods!'
}
const FoodChoices = () => {
    return (
      <>
          <Title heading={title.heading} desc={title.desc} />
          <Grid container rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center' }}>
                  <DisplayCard heading={heading.heading1} loc={loc.loc1} image={Samosa}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center' }}>
                  <DisplayCard heading={heading.heading2} loc={loc.loc2} image={Biryani}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, justifyContent:'center' }}>
                  <DisplayCard heading={heading.heading3} loc={loc.loc3} image={ButterChicken}/>
              </Grid>
          </Grid>
      </>
    )
}

export default FoodChoices