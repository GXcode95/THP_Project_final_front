import { Button, Container, Stack } from '@mui/material';
import SearchBar from './SearchBar';
import SearchFilters from './SearchFilters';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';
import SearchTags from './SearchTags'
const SearchContainer = ({ games, setGames }) => {

  const gameReducer = useSelector(state => state.gamesReducer)
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
      tagIds.push( parseInt(tagChip.getAttribute('name')) ) // get the ids of all tag in the array
    ) 
    return tagIds
  }

  const handleClickTags = (e) => {
    const targetedTag = e.target.parentElement
    let checkedTags = getAllCheckedTagIds()
    const tagId = parseInt(targetedTag.getAttribute('name'))
    console.log("--------------------->", tagId)

    if(targetedTag.classList.contains('checked-tags')) {
      checkedTags = checkedTags.filter(id => id !== tagId)
    }else {
      checkedTags.push(tagId) 
    }
  
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

    if (tagList) {
      console.log("lsit",tagList)
      tagList.forEach( tag =>{
        games.forEach( game => {
          console.log('*********************************')
          console.log(game.tags)
          console.log(tag)
          console.log('*********************************')
          if(game.tags.includes(tag)) console.log("OKOK")
          if(game.tags.includes(tag) && !tempIds.includes(game.id) ) {
            tempIds.push(game.id)
            tempGames.push(game)
          }
        })
      })
      console.log("---------------------")
      console.log(tempGames)
      console.log("---------------------")
    } else if (checkedTags) {
      checkedTags.forEach( tag =>{
        games.forEach( game => {
          if(game.tags.includes(tag) && !tempIds.includes(game.id) ) {
            tempIds.push(game.id)
            tempGames.push(game)
          }
        })
      })
      console.log("---------------------")
      console.log(tempGames)
      console.log("---------------------")
    } else {
      tempGames = sortedGamesTemp
    }
    
    setGames(tempGames)
  }
  
  const getTagsIds = (game) => {
    console.log("game:", game)
    console.log(game.tags.map( tag => tag.id))
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
      if(games) games.map(game => getTagsIds(games[0]))
      
    }
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