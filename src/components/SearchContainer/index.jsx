import { Button, Container, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import SearchFilters from './SearchFilters';
import React from 'react';
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import SearchTags from './SearchTags'
const SearchContainer = ({ games, setGames }) => {

  const gameReducer = useSelector(state => state.gamesReducer)
  const [tags, setTags] = React.useState()
  const min_prices = ["Aucun Filtre", 5, 15, 30, 50, 80]
  const max_prices = ["Aucun Filtre", 10, 20, 50, 80, 100]
  const min_ages = ["Aucun Filtre", 3, 5, 10, 18]
  const min_players = ["Aucun Filtre", 1, 2, 3, 4, 10]
  const max_players = ["Aucun Filtre", 1, 2, 3, 4, 10]
  const min_rank = ["Aucun Filtre", 1, 2, 3, 4, 5]
  const [filterMode , setFilterMode] = React.useState()

  const [filter, setFilter] = React.useState({
    tags: "Aucun Filtre",
    min_price: "Aucun Filtre",
    max_price: "Aucun Filtre",
    min_age: "Aucun Filtre",
    min_player: "Aucun Filtre",
    max_player: "Aucun Filtre",
    min_rank: "Aucun Filtre",
    search: ""
  })

  const filterSearch = (filter, games) => {
    return games.filter(game => game.name.toLowerCase().includes(filter.search))
  }

  const filterGames = (filter, arrayTmp, i = 0) => {

    for (i; i < arrayTmp.length; i++) {

      if (filter.min_price !== "Aucun Filtre" && arrayTmp[i].price < filter.min_price) {
        arrayTmp.splice(i, 1)
        return filterGames(filter, arrayTmp, i)
      }
      else if (filter.max_price !== "Aucun Filtre" && arrayTmp[i].price > filter.max_price) {
        arrayTmp.splice(i, 1)
        return filterGames(filter, arrayTmp, i)
      }
      else if (filter.min_age !== "Aucun Filtre" && arrayTmp[i].min_age < filter.min_age) {
        arrayTmp.splice(i, 1)
        return filterGames(filter, arrayTmp, i)
      }
      else if (filter.min_player !== "Aucun Filtre" && arrayTmp[i].min_player < filter.min_player) {
        arrayTmp.splice(i, 1)
        return filterGames(filter, arrayTmp, i)
      }
      else if (filter.max_player !== "Aucun Filtre" && arrayTmp[i].max_player > filter.max_player) {
        arrayTmp.splice(i, 1)
        return filterGames(filter, arrayTmp, i)
      }
      else if (filter.min_rank !== "Aucun Filtre" && arrayTmp[i].rank < filter.min_rank) {
        arrayTmp.splice(i, 1)
        return filterGames(filter, arrayTmp, i)
      }
      else if (filter.tags !== "Aucun Filtre" && filter.tags.length > 0) {
        let needDestroy = true
        for (let tag of arrayTmp[i].tags)
          if (filter.tags.includes(tag.id)) needDestroy = false

        if (needDestroy === true) {
          arrayTmp.splice(i, 1)
          return filterGames(filter, arrayTmp, i)
        }
      }
    }
    return arrayTmp
  }

  const getAllCheckedTagIds = () => {
    const tagChips = document.querySelectorAll('.checked-tags')
    let tagIds = []
    tagChips.forEach(tagChip => 
      tagIds.push( parseInt(tagChip.getAttribute('name')) ) // get the ids of all tag in the array
    ) 
    return tagIds
  }
  const handleClickTags = (e) => {
    const targetedTag = e.target.parentElement
    let checkedTags = getAllCheckedTagIds()
    const tagId = parseInt(targetedTag.getAttribute('name'))
    console.log(tagId)
    if(targetedTag.classList.contains('checked-tags')) {
      checkedTags = checkedTags.filter(id => id !== tagId)
    }else {
      checkedTags.push(tagId) 
    }
    setFilter({ ...filter, tags: checkedTags })
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

  React.useEffect(
    () => {
      if (games && games.length > 0) {
        let arrayTmp = games.map(x => x)
        arrayTmp = filterGames(filter, arrayTmp)
        if (filter.search !== "")
          arrayTmp = filterSearch(filter, arrayTmp)
        setGames(arrayTmp)
      }
    }, [filter]
  )

  return (
    <Container>
      <Stack alignItems="start" spacing={1} my={2}>
          <SearchBar setFilter={setFilter} filter={filter} />
          
          <Button variant="text" color="secondary" onClick={ e =>  setFilterMode(!filterMode)}>
            {filterMode ? "-" : "+"} de filtres...
          </Button>
          
          {filterMode && 
            <>
              <SearchFilters 
                filter={filter}
                setFilter={setFilter}
                min_prices={min_prices}
                min_players={min_players}
                min_ages={min_ages}
                max_prices={max_prices}
                max_players={max_players}
                min_rank={min_rank}
              />
                
              <SearchTags handleClick={handleClickTags} tags={tags}/>
              
            </>
          }
      </Stack>
    </Container>
  );
};

export default SearchContainer;