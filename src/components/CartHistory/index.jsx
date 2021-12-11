import React from 'react'
import { Container, Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import CreditCardIcon from '@mui/icons-material/CreditCard';

const CartHistory = ({carts}) => {

  const formatDate = (stringDate) => {
    let date = stringDate.slice(0,10)
    date = date.split('-')
    return `${date[2]} / ${date[1]} / ${date[0]}`
  }

  return (
    <div>
      <Typography variant="h2" color="primary" align="center">
        Historique d'achat
      </Typography>

      <Container
        className="scroll-no-scrollbar"
        
        sx={{display:"flex", justifyContent:"center", mt: "1em", maxHeight:"60vh"}} 
      >
        <List dense={false}>
         {carts && carts.map( cart => (
            <ListItem key={cart.id}>
              <ListItemIcon>
                <CreditCardIcon />
              </ListItemIcon>
              <ListItemText
                primary={formatDate(cart.updated_at)}
                secondary={`${cart.price} €`}
              />
            </ListItem>)
          )}
        </List>
      </Container>
    </div>
  )
}
    
export default CartHistory
