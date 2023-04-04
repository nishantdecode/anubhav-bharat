import React from 'react'
import { Grid } from '@mui/material'
import BlogPost from './blogPost/blogPost.jsx'
import Title from '../title/title.jsx'
import culture from '../../../images/culture.jpeg'
import trek from '../../../images/trek.webp'
import spiritual from '../../../images/Spiritual.jpg'
import avatar from '../../../images/foreigner.jpg'

import { css, keyframes } from "@emotion/react";

const animation1 = keyframes`
  0% {
    -webkit-transform: translateY(-5%);
            transform: translateY(-5%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }`

const animation2 = keyframes`
  0% {
    -webkit-transform: translateY(-7%);
            transform: translateY(-7%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }`

const animation3 = keyframes`
  0% {
    -webkit-transform: translateY(-9%);
            transform: translateY(-9%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }`

const animatedItem1 = css`
        animation: ${animation1} 1000ms ease-in-out none;
    `;
    const animatedItem2 = css`
        animation: ${animation2} 1000ms ease-in-out none;
    `;
    const animatedItem3 = css`
        animation: ${animation3} 1000ms ease-in-out none;
    `;


const blogCards=[
  {
    heading: 'India is a land of diversities.',
    desc: 'This diversity is also visible in the spheres of religion. The major religions of India are Hinduism (majority religion), Islam (largest minority religion), Sikhism, Christianity, Buddhism, Jainism, Zoroastrianism, Judaism and the Bahá\'í Faith.',
    date: "30/10/2022",
    author: "Shahzeb Dalal",
    image: culture,
    animation: animatedItem1
  },
  {
    heading: 'Adventure Activities in India.',
    desc: 'Treks: You can trek at a number of destinations like Ladakh, Uttarakhand, Sikkim, Himachal Pradesh and Kashmir. Motor Bike Expeditions: Biking trips on the Leh-Manali highway and through South and West India are hosted by loads of travel agencies as they are highly admired.',
    date: "30/10/2022",
    author: "Shahzeb Dalal",
    image: trek,
    animation: animatedItem2
  },
  {
    heading: 'Spiritual Significance of India',
    desc: 'In India spirituality and religion are part of people\'s everyday life. Personal devotional belief, rituals and temple worship, have created the most amazing architecture. India is known for its rich past and cultural heritage.',
    date: "30/10/2022",
    author: "Shahzeb Dalal",
    image: spiritual,
    animation: animatedItem3
  }
]

const BlogSection = () => {
  return (
    <>
        <Title heading={"BLOGS"} desc={"Unleash your inner adventurer."}/>
        <Grid container rowSpacing={1} justifyContent="center" alignItems="center">
            {blogCards.map((blog) => {
              return(
                <Grid key={blog.image} item xs={12} sm={6} md={12} lg={12} sx={{display:'flex'}}>
                  <BlogPost animation={blog.animation} image={blog.image} heading={blog.heading} desc={blog.desc} avatar={avatar} author={blog.author} date={blog.date} />
                </Grid>
              )
            })}
        </Grid>
    </>
    
  )
}

export default BlogSection