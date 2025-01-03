export const getToken = () => {
  const tokenString = localStorage.getItem("token");
  if (!tokenString) return null;

  const { value, expiry } = JSON.parse(tokenString);
  const now = new Date().getTime();

  if (now > expiry) {
    localStorage.removeItem("token");
    return null;
  }

  return value;
};
