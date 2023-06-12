import React from 'react'
import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Stack,
    Slider,
    Typography,
    Button,
  } from "@mui/material";

const FilterPanel = ({languageOptions, languages, setLanguages, valueLabelFormat, price, handlePrice, durationOptions, duration, setDuration, onClose }) => {
  return (
    <Box gap={1} sx={{ display: 'flex', flexDirection:'column' }}>
      <Stack gap={1} alignItems="start">
        <Typography variant="h6">
          Choose Languages
        </Typography>
        <FormGroup>
          <Stack direction="row" flexWrap="wrap" gap={1} width={"100%"}>
            {languageOptions?.map((language) => (
              <FormControlLabel
                sx={{ flexBasis: "250px" }}
                value={language.value}
                key={language.value} 
                control={
                  <Checkbox 
                    checked={languages.includes(language.value)}
                    onChange={(e) => {
                      if(e.target.checked)
                        setLanguages((prev) => [...prev, e.target.value])
                      else
                        setLanguages((prev) => {
                          const recent = prev;
                          if(recent.length)
                            return recent.filter((lang)=> lang !== e.target.value)
                        })
                    }} 
                  />
                }
                label={language.label}
              />
            ))}
          </Stack>
        </FormGroup>
      </Stack>
      <Stack gap={1} alignItems="start">
        <Box sx={{ width:'100%'}}>
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
      </Stack>
      <Stack gap={1} alignItems="start">
        <Typography variant="h6">
          Choose Duration
        </Typography>
        <FormGroup>
          <Stack direction="row" flexWrap="wrap" gap={1} width={"100%"}>
            {durationOptions.map((hours) => (
              <FormControlLabel
                sx={{ flexBasis: "250px" }}
                value={hours.value}
                key={hours.value}
                control={
                  <Checkbox 
                    checked={duration.includes(hours.value)}
                    onChange={(e) => {
                      if(e.target.checked)
                        setDuration((prev) => [...prev, e.target.value])
                      else
                        setDuration((prev) => {
                          const recent = prev;
                          if(recent)
                            return recent.filter((dur)=> dur !== e.target.value)
                        })
                    }}
                  />
                }
                label={hours.label}
              />
            ))}
          </Stack>
        </FormGroup>
      </Stack>
      <Button variant="register" sx={{display:{xs:'block', sm:'block', md:'none', lg:'none'}, width:'100%', p:2}} onClick={() => onClose()}>Apply Filters</Button>
    </Box>
  )
}

export default FilterPanel