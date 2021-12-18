import React from 'react'
import { Card, Box, Typography, Grid } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'
import curvy from "assets/images/hero.svg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const HeroBanner = () => {
  const navigate = useNavigate()
  return (
    <Card sx={{ mb: "1em", borderRadius: "0" }} className="HeroBanner">
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        className="radient-jumbotron"
      >
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={6} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontSize: "1.6rem",
                paddingBottom: 1
              }}
              align="center"
              color="white.main"
              fontWeight="600"
            >
              Parce qu'il n'y a pas que des échecs dans la vie

            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "3.5rem",
                fontWeight: 600
              }}
              align="center"
              color="secondary.main"
              className="title-r"
            >
              Louez, testez, achetez !
            </Typography>
            <Typography align="center" >
              <Button
                sx={{ marginTop: "2.5rem", fontSize: "1.5rem", paddingLeft: "2em", paddingRight: "2em" }}
                color="secondary"
                onClick={e => navigate('/abonnement')}
              >
                S'abonner
              </Button>
            </Typography>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src={curvy} alt="curvy lines" width="100%" style={{ paddingRight: '5%' }} />
          </Grid>
          <Button
            sx={{
              mx: 'auto',
              bgcolor: 'ternary.main',
              color: '#000',
              minWidth: "30px",
              minHeight: "50px",
              borderRadius: "50%",
              textAlign: 'center',
            }}
            href='/#howitworks'
          ><KeyboardArrowDownIcon /></Button>
        </Grid>
      </Box>
    </Card >
  )
}

export default HeroBanner