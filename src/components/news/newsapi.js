import axios from "axios";

const KEY = "36ddfae6e6474baebb50db8773f0bf3d";

export default axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  params: {
    sortBy: "popularity",
    apiKey: KEY,
  },
});
