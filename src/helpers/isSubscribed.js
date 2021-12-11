const isSubscribed = (user) => {
  return (user && user.user_info && user.user_info.subscription_ending)
}
export default isSubscribed