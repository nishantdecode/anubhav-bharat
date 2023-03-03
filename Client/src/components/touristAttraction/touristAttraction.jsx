import React from 'react'
import Title from '../title/title.jsx'
import { Grid } from '@mui/material'
import ReviewCard from '../reviewCard/reviewCard.jsx'
import Humayun from '../../images/humayun.jpeg'
import Qutub from '../../images/qutub.webp'
import Jama from '../../images/jama.jpg'


const heading = {
    heading1: 'Tour of Humayun’s Tomb - The last refuge of Mughal Emperor .',
    heading2: 'Standing tall and proud as the insignia of the Mughal, Qutub Minar.',
    heading3: 'Jama Masjid is a spectacular mosque built by Shah Jahan.'
}
const loc = {
    loc1: 'Mathura Road, Eastern Delhi',
    loc2: 'Mehraulli, South Delhi',
    loc3: 'Chandni Chowk, New Delhi'
}
const title ={
    heading: 'PLACES TO VISIT',
    desc: 'The amazing places around India!'
}
const TouristAttraction = () => {
    return (
      <>
          <Title heading={title.heading} desc={title.desc} />
          <Grid container rowSpacing={2}>
              <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center' }}>
                  <ReviewCard heading={heading.heading1} loc={loc.loc1} image={Humayun}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center' }}>
                  <ReviewCard heading={heading.heading2} loc={loc.loc2} image={Qutub}/>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{display:{xs:'none', sm:'none', md:'flex', lg:'flex'}, justifyContent:'center' }}>
                  <ReviewCard heading={heading.heading3} loc={loc.loc3} image={Jama}/>
              </Grid>
          </Grid>
      </>
    )
}

export default TouristAttraction