const checkUserAuthenticated = () => {
  const userToken = localStorage.getItem("@learn-up:token");

  return !!userToken
}

export default checkUserAuthenticated;
