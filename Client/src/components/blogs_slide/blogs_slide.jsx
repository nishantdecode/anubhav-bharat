import React from 'react'


const Blogs_slide = () => {
    return (
        <>
          <Title heading={titleHeading} desc={titleDesc} />
          <Grid container rowSpacing={2}>
                {data.map((card) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={card} sx={{display:'flex', justifyContent:'center' }}>
                            <DisplayCard heading={card.Heading} loc={card.SubHeading} image={card.img}/>
                        </Grid>
                    )
                })}
              
          </Grid>
      </>
    )
}

export default Blogs_slide