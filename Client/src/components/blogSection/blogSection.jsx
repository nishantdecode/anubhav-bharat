import React from 'react'
import { Grid } from '@mui/material'
import BlogPost from '../blogPost/blogPost.jsx'
import Title from '../title/title.jsx'
import culture from '../../images/culture.jpeg'
import trek from '../../images/trek.webp'
import spiritual from '../../images/Spiritual.jpg'
import avatar from '../../images/foreigner.jpg'

const heading={
    heading1:'India is a land of diversities.',
    heading2:'Adventure Activities in India.',
    heading3:'Spiritual Significance of India'
}

const desc={
    desc1:'This diversity is also visible in the spheres of religion. The major religions of India are Hinduism (majority religion), Islam (largest minority religion), Sikhism, Christianity, Buddhism, Jainism, Zoroastrianism, Judaism and the Bahá\'í Faith.',
    desc2:'Treks: You can trek at a number of destinations like Ladakh, Uttarakhand, Sikkim, Himachal Pradesh and Kashmir. Motor Bike Expeditions: Biking trips on the Leh-Manali highway and through South and West India are hosted by loads of travel agencies as they are highly admired.',
    desc3:'In India spirituality and religion are part of people\'s everyday life. Personal devotional belief, rituals and temple worship, have created the most amazing architecture. India is known for its rich past and cultural heritage.'
}

const date = "30/10/2022"
const author = "Shahzeb Dalal"

const BlogSection = () => {
  return (
    <>
        <Title heading={"BLOGS"} desc={"Unleash your inner adventurer."}/>
        <Grid container rowSpacing={1} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={6} md={12} lg={12} sx={{display:'flex'}}>
                <BlogPost image={culture} heading={heading.heading1} desc={desc.desc1} avatar={avatar} author={author} date={date} />
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12} sx={{display:'flex'}}>
                <BlogPost image={trek} heading={heading.heading2} desc={desc.desc2} avatar={avatar} author={author} date={date}/>
            </Grid>
            <Grid item xs={12} sm={6} md={12} lg={12} sx={{display:{xs:'flex', sm:'none', md:'flex', lg:'flex'}}}>
                <BlogPost image={spiritual} heading={heading.heading3} desc={desc.desc3} avatar={avatar} author={author} date={date}/>
            </Grid>
        </Grid>
    </>
    
  )
}

export default BlogSection