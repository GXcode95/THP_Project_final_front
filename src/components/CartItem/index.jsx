import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, ListItemButton, ListItemIcon,
  Grid, Avatar } from '@mui/material'
import { Image } from 'cloudinary-react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import centToEuro from 'helpers/CentToEuro';

const CartItem = (props) => {
  const games = props.games
  const cartTotal = (gameObj) => `${centToEuro(gameObj.game.price)}€ x ${gameObj.quantity} = ${centToEuro(gameObj.game.price * gameObj.quantity)}€ `
  console.log("HAIFJAAFZAÖF", games)
  const handleCardHeight = () => {
    const screen = window.screen.width
    if (screen > 1500) {
       return 350
    } else if(screen > 1900) {
      return 200
    } else {
      return 300
    }
  }

  return (
    <div>
        <List sx={{ width: '100%', bgcolor: 'background.primary' }}>
          {games && games.map( gameObj => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Image
                      cloudName={process.env.REACT_APP_CLOUD_NAME}
                      publicId={gameObj.images && gameObj.images.length > 0 ? "/seed/" + gameObj.images[0] : "default_game"}
                      height={handleCardHeight()}
                      crop="scale"            
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText id={gameObj.rent_id || gameObj.order_id} primary={gameObj.game.name} secondary={props.rent? `Quantité: ${gameObj.quantity}` : cartTotal(gameObj)} />
                {props.quantityButton &&
                  <Grid container spacing={2} direction="row"  width='25%'>
                    <ListItemButton 
                      component="button" 
                      onClick={e => props.handleAdd(gameObj.rent_id || gameObj.order_id)} 
                      sx={{display: "flex", justifyContent: "center"}}
                    >
                      <ListItemIcon sx={{display: "flex", justifyContent: "center"}}>
                        <AddIcon />
                      </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton 
                      component="button" 
                      onClick={e => props.handleRemove(gameObj.rent_id || gameObj.order_id)} 
                      sx={{display: "flex", justifyContent: "center"}}
                    >
                      <ListItemIcon sx={{display: "flex", justifyContent: "center"}}>
                        <RemoveIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </Grid>
                }
                {props.deleteButton && 
                  <ListItemButton component="button" onClick={e => props.handleDelete(gameObj.rent_id || gameObj.order_id)} sx={{display: "flex", justifyContent: "center"}}>
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
