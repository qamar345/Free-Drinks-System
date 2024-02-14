let token = sessionStorage.getItem("adminToken");

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};

export default token;