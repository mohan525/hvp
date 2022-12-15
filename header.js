import React from 'react';
import "./header.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const Header = () => {
  return (
    <div className='div1'>
      <div className='div2'>
   {/* <center className='center'>  */}
  <FormControl className='form'>
  <RadioGroup
    // style={{ color: "green" }}
    // style={{mt:"50px"}}
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    defaultValue="Basic Information"
    name="row-radio-buttons-group"
    
  >
    
    <FormControlLabel  value="Basic Information" control={
    <Radio color="danger" />} label="Basic Information" />
    </RadioGroup>
    </FormControl>
    </div>
    <div className='div3'>
    <FormControl className='control'>
    <RadioGroup
    // style={{mt:"50px"}}
    row
    aria-labelledby="demo-row-radio-buttons-group-label"
    defaultValue="Basic Information"
    name="row-radio-buttons-group"
  >
    <FormControlLabel value="Communication Details" control={<Radio />} label="Communication Details" />
    {/* <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
  </RadioGroup>
</FormControl>
{/* </center> */}
</div>
</div>


  //   <FormControl>
  // <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  // <RadioGroup
  //   aria-labelledby="demo-radio-buttons-group-label"
  //   defaultValue="female"
  //   name="radio-buttons-group"
  // >

  // </RadioGroup>
  //   <RadioGroup name="use-radio-group" defaultValue="first">
  //     <FormControlLabel value="first" label="First" control={<Radio />} />
  //     <FormControlLabel value="second" label="Second" control={<Radio />} />
  //   </RadioGroup>
  //   </FormControl>
  
     
    // <div className='div-center'>
    //     <Button varient="text">Text</Button>
    //     <Button variant='contained'>Basic information</Button>
    //     <Button variant='outtained'>Communication details</Button> 
    // </div>
  )
}



export default Header;