import React from "react";
import { Grid, Box, Container } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import { useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Title, SubTitle, HeroImage } from './hero.js'
import Select from '../../../components/formsUI/Select/index.js';
import Button from '../../../components/formsUI/Button/index.js'
import DateTimePicker from "../../../components/formsUI/DateTimePicker/index.js";
import heroImg from "../../../images/Taj2.jpeg";

const locations = ['New Delhi', 'North Delhi', 'South Delhi'];

const INITIAL_FORM_STATE = {
    location: '',
    date: ''
};

const FORM_VALIDATION = Yup.object().shape({
    location: Yup.string()
      .required('Required'),
    date: Yup.date()
      .required('Required')
});

const Hero = () => {

    // const navigate = useNavigate();

    // const handleSearch = () => {
    //     navigate("/activities");
    // };

return (
    <Grid container spacing={10} justifyContent="center" alignItems="center" >
          <Grid item xs={12} md={7} lg={8}>
                <Box sx={{display: "flex", flexDirection: 'column', alignItems:'center'}} >
                    <Box sx={{width:{xs:'90%', sm:'70%', md:'100%'}}}>
                        <Container>
                            <Title variant='h1'>
                                Discover the diversity and richness of India: A world within a country.
                            </Title>

                            <SubTitle variant='h5'>
                                Life is short and the world is wide. So, better get started.  
                            </SubTitle>
                        </Container>
                    </Box>
                    <Box sx={{width:{xs:'90%', sm:'60%', md:'100%'}, px:3}}>
                       <Formik
                            initialValues={{
                              ...INITIAL_FORM_STATE
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={values => {
                              console.log(values);
                            }}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4}>
                                        <Select
                                          name="location"
                                          label="Location"
                                          options={locations}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <DateTimePicker
                                          name="date"
                                          label="Date"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                        <Button>
                                            <SearchIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik> 
                    </Box>                    
                </Box>
          </Grid>
          <Grid item md={5} lg={4} sx={{display:{ xs:'none', md:'flex', lg:'flex' }}}>
                <Box sx={{display:'flex', mr: 2}}>
                    <HeroImage src={heroImg} alt="heroImg"/>
                </Box>
          </Grid>
        </Grid>

    
  );
};

export default Hero;
