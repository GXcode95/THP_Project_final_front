import React from 'react'
import {Grid, Typography} from '@mui/material'
import APIManager from 'services/Api'
import {Link} from 'react-router-dom'
const AdminRent = ({rented}) => {
  const [rentsInfo, setRentsInfo] = React.useState()

  React.useEffect(
    () => {
      const fetchRentedGameInfo = async (rent) => {
        const response = await APIManager.getGame(rent.game_id)
        if (response.error) {
          alert(response.error)
          return
        } 
        const currentGame = response
    
        const currentUser = await APIManager.getUserAdmin(rent.user_id)
        if (currentUser.error) {
          alert(currentUser.error)
          return
        }
    
        const formattedRent = {
          rent: rent,
          game: currentGame,
          user: currentUser,
        }

        return (formattedRent)
      }
      const fillRented = async () => {
        let tmp = []
        console.log(
           await rented.map(async (rent, i) => {
           let response = await fetchRentedGameInfo(rent)
           tmp.push(response)
           if(i === rented.length -1) {
             setRentsInfo(tmp)
           }
          })
        )
      }
      if(rented) {
        fillRented()
      }
    }, [rented]
  )

  return (
        <Grid container>
          <Grid item xs={12} />
            <Grid container>
              <Grid item md={4}>
                <Typography variant="h4" component="p">
                Jeux
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h4" component="p">
                Client
                </Typography>
              </Grid>  
              <Grid item md={4}>
                <Typography variant="h4" component="p">
                Adresse
                </Typography>
              </Grid>
              <Grid item md={2}>
                <Typography variant="h4" component="p">
                Téléphone
                </Typography>
              </Grid>
          </Grid>
          <Grid item xs={12}>
          {rentsInfo && rentsInfo.map( (rent,i) => (
                <Grid container key={i}>
                  <Grid item md={4}>
                    <Link to={`jeu/${rent.game.id}`}>
                      { rent.game.name }
                    </Link>
                  </Grid>
                  <Grid item md={2}>
                    {rent.user.user_info.first_name + " " + rent.user.user_info.first_name}
                  </Grid>  
                  <Grid item md={4}>
                    {rent.user.user_info.address}
                  </Grid>
                  <Grid item md={2}>
                    {rent.user.user_info.phone}
                  </Grid>
                </Grid>
          ))}
          </Grid>
     </Grid>
  )
}
export default AdminRent