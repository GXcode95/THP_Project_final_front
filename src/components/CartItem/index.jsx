import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';


const CartItem = () => {


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
									fontSize:"2rem"
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


