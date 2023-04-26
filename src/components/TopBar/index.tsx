import React from 'react'
import { Grid, IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import TopBarGrid from './styles.js'

const TopBar = () => (
  <TopBarGrid container>
    <Grid item>
      <IconButton color="primary" aria-label="Settings">
        <SettingsIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <IconButton color="primary" aria-label="Profile">
        <AccountCircleIcon />
      </IconButton>
  </Grid>
  </TopBarGrid>
)

export default TopBar
