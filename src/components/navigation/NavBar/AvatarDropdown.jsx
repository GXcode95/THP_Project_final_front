import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Fade, MenuItem, Menu, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchUserRequest, fetchUserSignOutSuccess, fetchUserError } from 'store/users/actions';
import APIManager from 'services/Api'
import { useNavigate } from 'react-router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AvatarDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const signOut = async() => {
    dispatch(fetchUserRequest())
    const response = await APIManager.signOutUser()
    response.error ? 
      dispatch(fetchUserError) :
      dispatch(fetchUserSignOutSuccess)
    navigate(0)
  }
  return (
    <>
      <IconButton
        id="fade-button"
        onClick={handleClick}
      >
        <AccountCircleIcon 
          color="ternary"
          className="icon-hover-effect"
          sx={{fontSize: "1.4em"}}
        />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem >
          <Link to="/profile">
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={signOut}>
          Logout
        </MenuItem>
      </Menu>
  </>
  )
}
    
export default AvatarDropdown