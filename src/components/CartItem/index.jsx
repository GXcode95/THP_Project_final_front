import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, ListItemButton, ListItemIcon, 
         Typography, Grid, Container, Avatar } from '@mui/material'
import { Image } from 'cloudinary-react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = (props) => {

  const cardHeight = window.screen.width / 5
  const games = props.games
  const cartTotal = (gameObj) => `${gameObj.game.price}€ x ${gameObj.quantity} = ${gameObj.game.price * gameObj.quantity}€ `

  return (
    <div>
        <List sx={{ width: '100%', bgcolor: 'background.primary' }}>
          {games.map( gameObj => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Image
                      cloudName={process.env.REACT_APP_CLOUD_NAME}
                      publicId="default_game"
                      height={cardHeight}
                      crop="scale"            
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText id={gameObj.rent_id} primary={gameObj.game.name} secondary={props.rent? `Quantité: ${gameObj.quantity}` : cartTotal(gameObj)} />
                {props.quantityButton &&
                  <Grid container spacing={2} direction="row"  width='25%'>
                    <ListItemButton 
                      component="button" 
                      onClick={e => props.handleAdd(gameObj.rent_id)} 
                      sx={{display: "flex", justifyContent: "center"}}
                    >
                      <ListItemIcon sx={{display: "flex", justifyContent: "center"}}>
                        <AddIcon />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton 
                      component="button" 
                      onClick={e => props.handleRemove(gameObj.rent_id)} 
                      sx={{display: "flex", justifyContent: "center"}}
                    >
                      <ListItemIcon sx={{display: "flex", justifyContent: "center"}}>
                        <RemoveIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </Grid>
                }
                {props.deleteButton && 
                  <ListItemButton component="button" onClick={e => props.handleDelete(gameObj.rent_id)} sx={{display: "flex", justifyContent: "center"}}>
                    <ListItemIcon >
                      <DeleteRoundedIcon />
                    </ListItemIcon>
                  </ListItemButton>
                }
              </ListItem>
            </>
          ))}

        </List>
    </div>
  )
}

export default CartItem
