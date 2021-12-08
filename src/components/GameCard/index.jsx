import React from 'react'
import {Image} from 'cloudinary-react'
import { Container, Box, Typography, Button, Stack } from '@mui/material'
import GameDescription from './GameDescription';
import GameCredentials from './GameCredentials';
import GameIconsInfos from './GameIconsInfos'



const GameCard = () => {
  const game = {
    name: "Super nom de jeu trop stylé",
    price: "25",
    creator: "petitCochon",
    editor: "La Loutre Edition",
    description: "Sed convallis ex ac consectetur dapibus. Pellentesque fermentum sapien justo, et lacinia purus molestie ornare. Pellentesque eu pretium arcu. Pellentesque nunc diam, blandit et turpis quis, consectetur imperdiet massa. Suspendisse potenti. Vestibulum eget felis at odio mollis pulvinar nec et turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum pharetra, urna in fringilla sodales, tortor erat pellentesque mauris, non hendrerit ex urna vitae libero. Cras mauris lectus, vulputate a ullamcorper vel, vehicula sit amet ipsum. Duis commodo erat nunc, eget vestibulum nulla varius sit amet. Phasellus in nunc nulla. Curabitur rutrum, libero id imperdiet dictum, enim magna sollicitudin lacus, eu pulvinar ex justo vel ligula. Donec fringilla, augue eu auctor egestas, turpis odio pharetra purus, rutrum tincidunt ligula metus in est. In eget tempor tortor. Cras varius dolor eget porttitor euismod. Quisque venenatis feugiat nulla, eget porttitor libero ornare et.",
    min_player: "2",
    max_player: "6",
    min_age: "12",
    release_date: "ça sort le 12",
    sell_stock: "8",
    rent_stock: "12",
    rank: "2"
  }

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Box>
          <Image
            cloudName={process.env.REACT_APP_CLOUD_NAME}
            publicId="default_game"
            className="game-card-image"
            width={window.innerWidth / 4}
            crop="crop"
            // didn't find how to use relative size here, so i put the image resize in the css
          />
        </Box>
        <Box 
          width="50%" 
          px="2em" 
          display="flex" 
          flexDirection="column" 
          justifyContent="space-evenly"
          border="1px solid"
          borderColor="primary.main"
          borderLeft="5px"
        >

          <Typography variant="h4" align="center" noWrap>
            {game.name}
          </Typography>
          
          <GameIconsInfos game={game} />
          <GameDescription game={game}/>
          <GameCredentials game={game} />
          <Stack direction="row" justifyContent="space-evenly">
            <Button disabled>Acheter</Button>
            <Button>Louer</Button>

          </Stack>
        </Box>
      </Box>
    </Container>
  )
}
    
export default GameCard
