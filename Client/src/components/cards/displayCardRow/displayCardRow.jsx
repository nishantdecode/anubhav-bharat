import React from 'react'
import Title from '../title/title.jsx'
import { Grid } from '@mui/material'
import DisplayCard from './displayCard/displayCard.jsx'


const DisplayCardRow = ({data, titleHeading, titleDesc, nav}) => {
    return (
      <>
          <Title heading={titleHeading} desc={titleDesc} nav={nav} />
          <Grid container rowSpacing={2}>
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

export default DisplayCardRow