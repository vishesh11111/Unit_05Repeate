import axios from "axios";

export const GitHubUsers = (q = "vishesh", page = 1) => {
  return axios.get(`https://api.github.com/search/users`, {
    method: "GET",
    params: {
      q,
      per_page: 5,
      page,
    },
  });
};
