import React from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { Container, Grid, Tab } from '@mui/material'
import Comments from 'components/Comments'
import RatingGame from 'components/RatingGame';
import { useSelector } from 'react-redux'
import isSigned from 'helpers/isSigned';

const GameTabs = ({ game, setGame }) => {
  const [value, setValue] = React.useState('1');
  const userReducer = useSelector( state => state.userReducer)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} px={6} >
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="Description" value="1" />
              <Tab label="Commentaires" value="2" />
              {isSigned(userReducer) && 
                <Tab label="Noter le jeu" value="3" />
              }
            </TabList>
          </Box>
          <TabPanel value="1">{game && game.description}</TabPanel>
          <TabPanel value="2" >
            <Container>
              <Comments comments={game && game.comments} game={game} setGame={setGame} />
            </Container>
          </TabPanel>
          {isSigned(userReducer) && 
            <TabPanel value="3">
              {game && (game.isRanked || game.isRanked === null) ? 'Déjà noté' : <RatingGame game={game} setGame={setGame} />}
            </TabPanel>
          }
        </TabContext>
      </Box>
    </Grid>
  );
}
export default GameTabs;