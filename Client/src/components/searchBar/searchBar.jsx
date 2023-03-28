import React from 'react'
import { Box, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
// import { useNavigate } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Select from '../formsUI/Select/index';
import Button from '../formsUI/Button/index'
import DateTimePicker from "../formsUI/DateTimePicker/index";
import Bg from "../../images/searchBg.jpg"

const locations = ['New Delhi', 'North Delhi', 'South Delhi'];
const category = ['Cultural Tourism', 'Heritage Tourism', 'Eco Tours', 'Food Tourism', 'Outdoor Activities', 'Adventure Tourism'];

const INITIAL_FORM_STATE = {
  location: '',
  category: '',
  date: ''
};

const FORM_VALIDATION = Yup.object().shape({
  location: Yup.string()
    .required('Required'),
  category: Yup.string()
    .required('Required'),
  date: Yup.date()
    .required('Required')
});

const SearchBar = () => {
  // const navigate = useNavigate();

  // const handleSearch = () => {
  //   navigate(`/activities/category`);
  // };

    return (
          <Box sx={{display:'flex', width: '100%', height:'400px', justifyContent:'center', alignItems:'center', backgroundImage:`url(${Bg})`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom right", backgroundSize: "cover", backgroundAttachment: "fixed", borderRadius:{sm:'0px', md:'16px'}}}>
              <Paper sx={{p:2, borderRadius:'10px',boxShadow:1, width:{xs:'80%', md:'70%', lg:'65%'}}}>
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
                    <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'column', md:'row', lg:'row'}, justifyContent:'center', alignItems:'center', width:'100%', gap:2}}>
                      <Box sx={{width:{xs:'100%', md:'30%'}}}>
                        <Select
                          name="location"
                          label="Location"
                          options={locations}
                        />
                      </Box>
                      <Box sx={{width:{xs:'100%', md:'30%'}}}>
                        <Select
                          name="category"
                          label="Category"
                          options={category}
                        />
                      </Box>
                      <Box sx={{width:{xs:'100%', md:'30%'}}}>
                        <DateTimePicker
                          name="date"
                          label="Date"
                        />
                      </Box>
                      <Box sx={{width:{xs:'100%', md:'7.6%'}}}>
                        <Button>
                          <SearchIcon />
                        </Button>
                      </Box>
                    </Box>          
                  </Form>
                </Formik>
              </Paper>
          </Box>
    )
}

export default SearchBar