const isAuthor = (user, item) => {
  return (user && user.user_info && item && user.user_info.id === item.user_id)
}
export default isAuthor