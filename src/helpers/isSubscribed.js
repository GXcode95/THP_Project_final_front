const isSubscribed = (user) => {
  return (user && user.user_info && user.user_info.subscription_status === "active")
}
export default isSubscribed