let token = sessionStorage.getItem("Rtoken");

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export default token;