import React from 'react'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import FolderIcon from '@mui/icons-material/Folder'
// import { quinaryColor } from 'theme/moreColors.js'
import { SideBar, SideBarButton, SideBarIcon } from './styles.js'

const Sidebar = () => {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  const listItems = (
    <List>
      <SideBarButton>
        <SideBarIcon>
          <FolderIcon />
        </SideBarIcon>
        <ListItemText primary="Item 1" />
      </SideBarButton>
    </List>
  )

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <SideBar open={open} onClose={toggleDrawer}>
        <div
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Box sx={{ height: '100px' }}>
            {/* This should be replaced by a log or something like that */}
          </Box>
          {listItems}
        </div>
      </SideBar>
    </>
  )
}

export default Sidebar
