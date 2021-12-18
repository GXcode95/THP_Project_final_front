import { Button, Container, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import SearchFilters from './SearchFilters';
import React, {useState} from 'react';
import APIManager from 'services/Api';
import SearchTags from './SearchTags'
const SearchContainer = ({ games, setGames }) => {

  const [tags, setTags] = React.useState()
  const [checkedTags, setCheckedTags] = React.useState()
  const [price,setPrice] = useState([0,200])
  const [rank,setRank] = useState([0,5])
  const [minAge,setMinAge] = useState(0)
  const [players,setPlayers] = useState([1,20])
  const [query, setQuery] = useState("")
  const [filterMode , setFilterMode] = React.useState()


  const handleSearch = (e) => {
    const query = e.target.value
    setQuery(query ? query.toLowerCase() : "")
    sortGames()
  }

  const getAllCheckedTagIds = () => {
    const tagChips = document.querySelectorAll('.checked-tags')
    let tagIds = []
    tagChips.forEach(tagChip =>
      tagIds.push( parseInt(tagChip.getAttribute('name')) )
    )
    return tagIds
  }

  const handleClickTags = (e) => {
    const targetedTag = e.target.parentElement
    let checkedTags = getAllCheckedTagIds()
    const tagId = parseInt(targetedTag.getAttribute('name'))

    targetedTag.classList.contains('checked-tags') ?
      checkedTags = checkedTags.filter(id => id !== tagId) :
      checkedTags.push(tagId)

    setCheckedTags(checkedTags)
    sortGames(checkedTags)
  }

  const sortGames = (tagList) => {
    const sortedGamesTemp = games.filter(game => {
      return (
        game.price >= price[0] && game.price <= price[1] &&
        game.min_player >= players[0] && game.max_player <= players[1] &&
        game.rank >= rank[0] && game.rank <= rank[1] &&
        game.min_age >= minAge &&
        game.name.toLowerCase().includes(query)
      )
    })

    let tempGames = []
    let tempIds = []
    let tagToCheck = null

    if (tagList && tagList.length > 0)
      tagToCheck = tagList
    else if (checkedTags && !tagList)
      tagToCheck = checkedTags
    

    if(tagToCheck) {
      tagToCheck.forEach( tag =>{
        games.forEach( game => {
          if(getTagIds(game).includes(tag) && !tempIds.includes(game.id) ) {
            tempIds.push(game.id)
            tempGames.push(game)
          }
        })
      })
    } else {
      tempGames = sortedGamesTemp
    }

    setGames(tempGames)
  }

  const getTagIds = (game) => {
    return game.tags.map( tag => tag.id)
  }

  React.useEffect(
    () => {
      const fetchAllTags = async () => {
        const response = await APIManager.getTags()
        setTags(response)
      }
      fetchAllTags()
    }, []
  )

  return (
    <Container>
      <Stack alignItems="start" spacing={1} my={2}>
          <SearchBar handleSearch={handleSearch} />

          <Button variant="text" color="secondary" onClick={ e =>  setFilterMode(!filterMode)}>
            {filterMode ? "-" : "+"} de filtres...
          </Button>

          {filterMode &&
            <>
              <SearchFilters
                games={games}
                setGames={games}
                values={{ players, price, rank, minAge }}
                setValues={{ setPlayers, setPrice, setRank, setMinAge }}
                sortGames={sortGames}
              />

              <SearchTags handleClick={handleClickTags} tags={tags}/>

            </>
          }
      </Stack>
    </Container>
  );
};

export default SearchContainer;