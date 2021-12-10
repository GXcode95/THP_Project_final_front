import React from 'react'
import { Box, Button, ButtonGroup, Typography} from '@mui/material'
import { Image } from 'cloudinary-react'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'


const CartItem = () => {

  const cardHeight = window.screen.width / 8
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
            p: 1,
            m: 1
          }}
          className="box-cart"
        >
          <Image
            cloudName={process.env.REACT_APP_CLOUD_NAME}
            publicId="default_game"
            height={cardHeight}
            crop="scale"            
          />
          <Button 
            sx={{
              paddingLeft:"25%",
              paddingTop:"2rem",
              height:"10%",
              textAlign:"center",
              alignItems: "center",
              fontSize:"2rem",
            }}
          >
          Produits
          </Button>
          <ButtonGroup disableElevation variant="contained">
            <Button
              sx={{
                paddingLeft:"25%",
                alignText:"center",
                fontSize:"2rem"
              }}
            >
            +
            </Button>
            <Button
              sx={{
                paddingLeft:"25%",
                alignText:"center",
                fontSize:"2rem"
              }}
            >
            -
            </Button>
            <Button
              sx={{
              paddingLeft:"25%",
              alignText:"center",
              fontSize:"2rem",
              backgroundColor: 'error.main',
              fontSize:"1.5rem"
              }}
            >
              <DeleteRoundedIcon />
            </Button>
          </ButtonGroup>
        </Box>
    </div>
  )
}

export default CartItem
