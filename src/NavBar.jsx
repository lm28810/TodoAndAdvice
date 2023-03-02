import { AppBar, CssBaseline, Toolbar,Typography } from '@mui/material'
import React from 'react'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import { Link } from 'react-router-dom';



function NavBar() {
  return (
      <div>
          <CssBaseline />
          <AppBar position='static'>
              <Toolbar>
                  <SensorOccupiedIcon />
                  <Typography variant='h5'>LifeBox</Typography>
                  
                  <li><Link to="/item">Todo List</Link></li>
                  <li><Link to="/advice">Advice Aoo</Link></li>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default NavBar