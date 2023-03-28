import React from 'react'
import BookTourCard from '../bookTourCard/bookTourCard.jsx'
import { useState } from "react"
import { Box, FormLabel, FormControl, FormGroup, Paper, Typography } from '@mui/material';
import { CheckboxWithLabel } from "formik-mui";
import { Formik, Form, Field } from "formik";
import Slider from '@mui/material/Slider'

import {languages, duration} from "../../../data/options.js"

const INITIAL_LANGUAGE_STATE = {
  languages: []
};

const INITIAL_DURATION_STATE = {
  duration: []
};

function valueLabelFormat(value) {
  const units = '₹';
  return `${units} ${value}`;
}

const TourContent = () => {
  const [price, setPrice] = useState(1000);
  const handlePrice = (event, newValue) => {
      setPrice(newValue);
  };
  return (
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'flex-start'}}>
      <Box sx={{width:'25%'}}>
        <Paper sx={{p:1, py:2, boxShadow:1, borderRadius:'16px', mr:2}}>
          <Box sx={{ display: 'flex', flexDirection:'column', ml:3, mt:5 }}>
            <Formik initialValues={{...INITIAL_LANGUAGE_STATE}}>
              {({ values }) => {
                return (
                  <Form>
                    <FormControl component="fieldset" style={{ display: "flex" }}>
                      <FormLabel component="legend" sx={{fontWeight:'bold', color:'text.primary'}}>Preferred Languages</FormLabel>
                      <FormGroup>
                        {languages.map(language => (
                          <Field
                            type="checkbox"
                            component={CheckboxWithLabel}
                            name="languages"
                            key={language.value}
                            value={language.value}
                            Label={{ label: language.label }}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Form>
                );
              }}
            </Formik>
            <Box sx={{ width:'90%', mt:2 }}>
              <Typography id="price" fontWeight="bold" gutterBottom>
                Price: {valueLabelFormat(price)}
              </Typography>
              <Slider
                size="small"
                value={price}
                min={200}
                step={100}
                max={4000}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handlePrice}
                valueLabelDisplay="auto"
                aria-labelledby="price"
                sx={{color:'primary.main'}}
              />
            </Box>
            <Formik initialValues={{...INITIAL_DURATION_STATE}}>
              {({ values }) => {
                return (
                  <Form>
                    <FormControl component="fieldset" style={{ display: "flex" }}>
                      <FormLabel component="legend" sx={{fontWeight:'bold', color:'text.primary'}}>Duration</FormLabel>
                      <FormGroup>
                        {duration.map(hours => (
                          <Field
                            type="checkbox"
                            component={CheckboxWithLabel}
                            name="duration"
                            key={hours.value}
                            value={hours.value}
                            Label={{ label: hours.label }}
                          />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Paper>
      </Box>
      <Box sx={{width:'75%'}}>
        <BookTourCard/>
      </Box>
      
    </Box>
  )
}

export default TourContent
