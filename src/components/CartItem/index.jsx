import React from 'react'
import { Box, Button, ButtonGroup, Typography, CardContent, CardMedia} from '@mui/material'
import { Image } from 'cloudinary-react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const CartItem = (props) => {

  const subscribeImg = "https://image.api.playstation.com/vulcan/img/cfn/11307-b0qM2qOKxV25opi9wwWhSDvhwrn6AwqYMl0MoJOj6IGxa-cfbnPH22AZQ8a2w9QqCds0Vdqn_1GtJaJMjCrxw61GZG.png?w=780&thumb=false"
  return (
    <div>
        <Typography
            variant="h2"
            color="primary"
            sx={{textAlign:"center"}}
        >
            Mon panier
        </Typography>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            border: 1,
            m: 1
          }}
          className="box-cart"
          backgroundColor='primary'
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            maxWidth="140"
            image={subscribeImg}
          />
          <CardContent >
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Mac Miller
            </Typography>
          </CardContent>

        </Box>
    </div>
  )
}

export default CartItem


