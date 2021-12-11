const isSigned = (user) => {
  return (user && user.user_info && user.user_info.id)
}
export default isSigned