import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-angaca.herokuapp.com/api/",
});

export const getReviews = async () => {
  return await gamesApi.get("/reviews");
};

export const getReview = async (review_id) => {
  return await gamesApi.get(`/reviews/${review_id}`);
};

export const getUsers = async () => {
  return await gamesApi.get("/users");
};

export const getUser = async (username) => {
  return await gamesApi.get(`/users/${username}`);
};

export const getCategories = async () => {
  return await gamesApi.get("/categories");
};
