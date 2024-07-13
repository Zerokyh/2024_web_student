import React from 'react';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <List component="nav">
      <ListItem button component={Link} to="/">
        <ListItemText primary="달력" />
      </ListItem>
      <Divider />
      <ListItem button component={Link} to="/another">
        <ListItemText primary="시간표" />
      </ListItem>
      <Divider />
    </List>
  );
};

export default Sidebar;
