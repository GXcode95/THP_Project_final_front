import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Fade, Avatar, MenuItem, Menu } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { fetchUserRequest, fetchUserSignOutSuccess, fetchUserError } from 'store/user/actions';
// import APIManager from 'services/Api'
// import { useNavigate } from 'react-router';

const AvatarDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const signOut = async() => {
    // dispatch(fetchUserRequest())
    // const response = await APIManager.signOutUser()
    // response.error ? 
    //   dispatch(fetchUserError) :
    //   dispatch(fetchUserSignOutSuccess)
    // navigate("/")
  }
  return (
    <div>
      <Avatar
      color="inherit"
      id="fade-button"
      onClick={handleClick}
      sx={{ border: 1, BorderColor: 'error.success' }}
      src='../../assets/images/img-avatar.jpg'
      >
      </Avatar>
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
  </div>
  )
}
    
export default AvatarDropdown