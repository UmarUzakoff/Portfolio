export const getAccessTokenFromLocalStorage = () => {
  return localStorage.getItem("access-token");
};

export const setAccessTokenToLocalStorage = (token) => {
  return localStorage.setItem("access-token", token);
};