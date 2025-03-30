import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  styled,
  Box,
  ListItemButton,
  Alert,
  Snackbar,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import FolderIcon from '@mui/icons-material/Folder';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const DrawerWidth = 240;

const StyledDrawer = styled(Drawer)`
  width: ${DrawerWidth}px;
  & .MuiDrawer-paper {
    width: ${DrawerWidth}px;
    box-sizing: border-box;
    background-color: #f8f9fa;
  }
`;

const Logo = styled(Box)`
  padding: 20px;
  img {
    height: 40px;
  }
`;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Portfolio', icon: <FolderIcon /> },
  { text: 'Notifications', icon: <NotificationsIcon /> },
  { text: 'Activities', icon: <DescriptionIcon /> },
  { text: 'Data Upload', icon: <DescriptionIcon /> },
  { text: 'Control Panel', icon: <SettingsIcon /> },
  { text: 'User Management', icon: <GroupIcon /> },
  { text: 'Permissions', icon: <AccountBalanceIcon /> },
];

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState('Portfolio');
  const [showMessage, setShowMessage] = useState(false);

  const handleItemClick = (text) => {
    setSelectedItem(text);
    if (text !== 'Portfolio') {
      setShowMessage(true);
    }
  };

  return (
    <>
      <StyledDrawer variant="permanent" anchor="left">
        <Logo>
          <img src="/logo.png" alt="Resollect" />
        </Logo>
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.text}
              onClick={() => handleItemClick(item.text)}
              sx={{
                backgroundColor: selectedItem === item.text ? '#e3f2fd' : 'transparent',
                color: selectedItem === item.text ? '#1976d2' : 'inherit',
                '&:hover': {
                  backgroundColor: selectedItem === item.text ? '#e3f2fd' : '#f5f5f5',
                },
                borderRadius: '8px',
                margin: '4px 8px',
                padding: '8px 16px',
              }}
            >
              <ListItemIcon
                sx={{
                  color: selectedItem === item.text ? '#1976d2' : 'inherit',
                  minWidth: '40px',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </StyledDrawer>
      <Snackbar
        open={showMessage}
        autoHideDuration={3000}
        onClose={() => setShowMessage(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="info" onClose={() => setShowMessage(false)}>
          This feature is currently under development
        </Alert>
      </Snackbar>
    </>
  );
}

export default Sidebar; 