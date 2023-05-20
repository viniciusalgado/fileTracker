import React from 'react'
import { Grid } from '@mui/material'
import FileExplorer from 'components/FileExplorer'
import Breadcrumbs from 'components/BreadCrumbs'
import TopBar from '../TopBar'
import { Container, MainGrid } from './styles'

const MainPage = () => (
  <Container>
    <TopBar />
    <MainGrid container>
      <Grid item md={12}>
        <Breadcrumbs />
      </Grid>
      <Grid item md={12} sx={{width: '100%'}}>
        <FileExplorer />
      </Grid>
    </MainGrid>
  </Container>
)

export default MainPage
