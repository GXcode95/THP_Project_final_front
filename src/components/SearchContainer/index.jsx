import { Container } from '@mui/material';
import SearchBar from 'components/SearchBar';
import React from 'react';
import { useSelector } from 'react-redux';

const SearchContainer = ({ games, setGames }) => {

  const gameReducer = useSelector(state => state.gamesReducer)
  const [tags, setTags] = React.useState()

  React.useEffect(
    () => {
      const fetchAllTags = async () => {

      }
      fetchAllTags()
    }, []
  )

  return (
    <div>
      <Container>
        {console.log('gameReducer => ', games)}
        <SearchBar games={games} setGames={setGames} />
      </Container>
    </div>
  );
};

export default SearchContainer;