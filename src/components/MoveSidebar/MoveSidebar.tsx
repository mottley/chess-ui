import React, { FunctionComponent } from 'react';
import { MoveSidebarProps } from './MoveSidebar.types';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';



export const MoveSidebar: FunctionComponent<MoveSidebarProps> = props => {
  return (
    <List>
      {props.moves.map(m =>
        <ListItem>
          <ListItemAvatar>
            <Avatar>{m.number}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={m.move} secondary={`${m.color} (${m.username})`} />
        </ListItem>
      )}
    </List>
  )
}