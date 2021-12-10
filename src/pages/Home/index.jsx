import React from 'react'
import Faq from 'components/Faq'
import HowItWorks from 'components/HowItWorks'
import GameCard from 'components/GameCard'
import GameList from 'components/GameList'

const Home = () => {
  return (
    <div className=''>
      <HowItWorks />
      <GameList />
      <Faq />
    </div>
  )
}

export default Home
