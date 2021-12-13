const isAdmin = (user) => {
  return (user && user.user_info && user.user_info.admin)
}
export default isAdmin