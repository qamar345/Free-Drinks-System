let token = sessionStorage.getItem("token");

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export default token;