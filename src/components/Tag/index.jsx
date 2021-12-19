import React from 'react'
import { Chip } from '@mui/material'

const Tag = ({tag, onClick}) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const tagClass = isChecked ? "checked-tags" : ""
  const tagStyle = isChecked ? {opacity: 1} : {opacity: 0.5}

  const toggleIsChecked = () => {
    setIsChecked(!isChecked)
  }
  const handleClick = (e) => {
    toggleIsChecked()
    onClick(e)
  }

  return (
    <Chip 
      label={tag.name} 
      data-id={tag.id} 
      name={`${tag.id}`} 
      className={tagClass} 
      color="secondary"
      sx={tagStyle}
      onClick={handleClick} 
    />
  )
}
    
export default Tag
