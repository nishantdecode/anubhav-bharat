import React from 'react'
import { Container } from '@mui/material';

import Navbar from "../../components/navbar/navbar.jsx";

const home = () => {
  return (
    <Container maxWidth="fixed" disableGutters>
      <Navbar/>
    </Container>
  )
}

export default home

