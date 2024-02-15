import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));
const label = { inputProps: { 'aria-label': 'Color switch demo' } };




const Footer = props => {
  return (
    <>
     <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} defaultChecked color="secondary" />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="default" />
      <PinkSwitch {...label} defaultChecked />
    </div>
    <footer style={{background : 'black'}}>
    <p>Copyright 2024</p>
  </footer>
    </>
  )
}


export default Footer