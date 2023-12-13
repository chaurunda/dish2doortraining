import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const HeaderWithDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => {
    console.log('toggle')
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dishonored 2 Door Training
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderWithDrawer
