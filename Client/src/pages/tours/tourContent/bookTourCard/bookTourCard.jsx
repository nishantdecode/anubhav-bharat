/** @jsxImportSource @emotion/react */
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Card, CardMedia, Rating, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";

const BookTourCard = ({tourId, image, tourTitle, tourLocation, tourDescription, reviews, rating, price, animation}) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();

  const handleNavigate = (tourId) => {
    navigate(`/tourPage/?tourId=${tourId}`);
  };
  return (
    <>
      <Card ref={ref} css={inView ? animation : {}} sx={{display:{xs:'none', sm:'flex', md:'flex'}, borderRadius:'16px', boxShadow:1, height:'300px'}}>
        <CardMedia
          component="img"
          sx={{ display:'flex', width:'30%', height:'300px' }}
          image={image}
          alt="LodhiGarden"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', height:'300px', maxHeight:"300px", p:2}}>
          <Box sx={{ display:'flex', flexDirection:'column', px: 2, mb: 2, height:'20%' }}>
            <Typography component="div" variant="h4" fontWeight="bold">
              {tourTitle}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection:'row', alignItems: 'flex-end', justifyContent:'center', maxHeight:"80%", px: 2}}>
            <Box sx={{display:'flex', flexDirection:'column', width:'80%', maxHeight:"200px", pr:2}}>
              <Typography variant="paragraph" color="text.secondary" sx={{lineHeight:1.4, height:'140px', maxHeight:"140px", overflow: 'hidden'}} component="div">
                {tourDescription}
              </Typography>
              <Box sx={{display:'flex', flexDirection:'row', mt:1}}>
                  <Rating name="half-rating-read" defaultValue={rating} precision={0.5} sx={{mb:2}} readOnly />
                  <Typography>{reviews} reviews</Typography>
              </Box>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', width:'20%', mb:1, mr:1}}>
              <Typography sx={{lineHeight:0.9, pl:2}} gutterBottom={false}>
                from <br/>
              </Typography>
              <Typography sx={{color:'primary.main', fontSize:'24px', fontWeight:'bold',pl:2, lineHeight:1.0}} gutterBottom={false}>{price}<br/></Typography>
              <Typography sx={{lineHeight:0.8, pl:2, pb:2}}>per adult</Typography>
              <Button variant="outlined" onClick={() => handleNavigate(tourId)} sx={{width:'100px'}}>Book Now</Button>
            </Box>
          </Box>
        </Box>
      </Card>
      <Card sx={{display:{xs:'flex', sm:'none', md:'none'}, width:'90%', borderRadius:'16px'}}>
        <Box>
          <CardMedia
            component="img"
            height="220"
            image={image}
            alt="Tourist Attraction"
          />
          <Box sx={{p:2}}>
            <Typography gutterBottom variant="body1" textAlign="center" component="div" sx={{color:'text.primary', fontWeight:'bold'}}>
              {tourTitle}
            </Typography>
            <Typography variant="subtitle2" textAlign="justify" color="text.secondary" sx={{height:'120px', lineHeight:1.4, overflow: 'hidden'}} component="div">
              {tourDescription}
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center', width:'100%', mt:2}}>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} size="small" readOnly />
                <Typography sx={{fontSize:'12px'}}>{reviews} reviews</Typography>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', width:'100%', mt:1}}>
                <Typography sx={{fontSize:'14px', mb:1}}>
                  from <Box component='span' color="primary.main" sx={{fontSize:'18px', fontWeight:'bold'}}>{price}</Box>  per adult
                </Typography>
                <Button variant="outlined" onClick={() => handleNavigate(tourId)} sx={{width:'100px'}}>Book Now</Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default BookTourCard