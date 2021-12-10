const isSigned = (user) => {
  return (user && user.userInfo && user.userInfo.id)
}
export default isSigned