import { Grid, Container, FormGroup, FormControlLabel, Checkbox, Button } from '@mui/material';
import SearchBar from 'components/SearchBar';
import SearchSelect from 'components/SearchSelect';
import React from 'react';
import { useSelector } from 'react-redux';
import APIManager from 'services/Api';

const SearchContainer = ({ games, setGames }) => {

  const gameReducer = useSelector(state => state.gamesReducer)
  const [tags, setTags] = React.useState()
  const min_prices = ["Aucun Filtre", 5, 15, 30, 50, 80]
  const max_prices = ["Aucun Filtre", 10, 20, 50, 80, 100]
  const min_ages = ["Aucun Filtre", 3, 5, 10, 18]
  const min_players = ["Aucun Filtre", 1, 2, 3, 4, 10]
  const max_players = ["Aucun Filtre", 1, 2, 3, 4, 10]
  const min_rank = ["Aucun Filtre", 1, 2, 3, 4, 5]

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

  const getAllCheckedTags = () => {
    const checkboxLabels = document.querySelectorAll('#form-group-checkboxs-tags>label input')
    let checkedTags = []

    checkboxLabels.forEach(input => {
      if (input.parentElement.classList.contains('Mui-checked'))
        checkedTags.push(parseInt(input.name))
    })
    return checkedTags
  }

  const handleSubmit = (e) => {
    let checkedTags = getAllCheckedTags()
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
    <div>
    <SearchBar setFilter={setFilter} filter={filter} sx={{marginTop:"2rem"}} />
      <Grid container 
        spacing={3}
        sx={{
          padding:"2rem", 
          border:"solid blue 1px"
        }}
      >
     
        <Grid item
        >
          {console.log('GAMES FOR SEARCH => ', games)}
          
          <SearchSelect name="Prix-Min" selectList={min_prices} setFilter={setFilter} filter={filter} />
          <SearchSelect name="Prix-Max" selectList={max_prices} setFilter={setFilter} filter={filter} />
          <SearchSelect name="Age-Min" selectList={min_ages} setFilter={setFilter} filter={filter} />
          <SearchSelect name="Players-Min" selectList={min_players} setFilter={setFilter} filter={filter} />
          <SearchSelect name="Players-Max" selectList={max_players} setFilter={setFilter} filter={filter} />
          <SearchSelect name="Rank-Min" selectList={min_rank} setFilter={setFilter} filter={filter} />
        </Grid>
        
        <Grid item
          direction="row">
          <FormGroup 
            id="form-group-checkboxs-tags"
            sx={{border:"solid 1px red"}} 
          >
            {tags && tags.map(tag => (
              <FormControlLabel
                control={<Checkbox name={tag.id} />}
                label={tag.name}
                key={tag.id}
              />
            ))}
          </FormGroup>
          <Button variant="contained" onClick={handleSubmit}>
              Valider les Catégories
            </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchContainer;