import axios from "axios";

const KEY = "AIzaSyCmtgQM8miHxg8XO0_q2VZ_nZnzI3RYpsU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
