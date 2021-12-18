import React from 'react'
import { Button, Box} from '@mui/material'
import './notFound.scss'
const Dices = () => {

  return (
    <Box display="flex"  gap="5em">
      <div className="scene">
        <div className="cube roll-1 show-front">
          <div className="cube__face cube__face--front">
            <p className="colorize-1">4</p>
          </div>
          <div className="cube__face cube__face--back">
            <p>1</p>
          </div>
          <div className="cube__face cube__face--right">
            <p>0</p>
          </div>
          <div className="cube__face cube__face--left">
            <p>5</p>
          </div>
          <div className="cube__face cube__face--top">
            <p>2</p>
          </div>
          <div className="cube__face cube__face--bottom">
            <p>3</p>
          </div>
        </div>
      </div>

      <div className="scene">
        <div className="cube roll-2 show-front">
          <div className="cube__face cube__face--front">
            <p className="colorize-2">0</p>
          </div>
          <div className="cube__face cube__face--back">
            <p>5</p>
          </div>
          <div className="cube__face cube__face--right">
            <p>2</p>
          </div>
          <div className="cube__face cube__face--left">
            <p>3</p>
          </div>
          <div className="cube__face cube__face--top">
            <p>4</p>
          </div>
          <div className="cube__face cube__face--bottom">
            <p>1</p>
          </div>
        </div>
      </div>

      <div className="scene">
        <div className="cube roll-3 show-front">
          <div className="cube__face cube__face--front">
            <p className="colorize-3">4</p>
          </div>
          <div className="cube__face cube__face--back">
            <p>1</p>
          </div>
          <div className="cube__face cube__face--right">
            <p>0</p>
          </div>
          <div className="cube__face cube__face--left">
            <p>5</p>
          </div>
          <div className="cube__face cube__face--top">
            <p>2</p>
          </div>
          <div className="cube__face cube__face--bottom">
            <p>3</p>
          </div>
        </div>
      </div>
    </Box>
  )
}
    
export default Dices
