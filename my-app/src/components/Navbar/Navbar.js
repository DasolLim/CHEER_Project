import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainNavbarItems } from './consts/navbarItems';

const Navbar = () => {
  const drawerWidth = 240;

  return (
    <Drawer
        // OVERRIDE STYLES HERER WITH 'sx' PROP
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#FFA500',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((text, index) => (
            <ListItem key={text.id}>
              <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}

export default Navbar