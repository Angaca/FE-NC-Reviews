import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-angaca.herokuapp.com/api/",
});

export const getReviews = async () => {
  return await gamesApi.get("/reviews");
};

export const getMostVotedReview = async () => {
  return await gamesApi.get("/reviews", {
    params: {
      limit: "1",
      sort_by: "votes",
    },
  });
};

export const getComments = async (review_id) => {
  return await gamesApi.get(`/reviews/${review_id}/comments`);
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

export const patchReviews = async (review_id, inc, body) => {
  const update = {};
  if (inc) update.inc_votes = inc;
  if (body) update.review_body = body;
  return await gamesApi.patch(`/reviews/${review_id}`, update);
};

export const patchComment = async (comment_id, inc, body) => {
  const update = {};
  if (inc) update.inc_votes = inc;
  if (body) update.body = body;
  return await gamesApi.patch(`/comments/${comment_id}`, update);
};

export const patchUser = async (username, avatar_url, name) => {
  const update = {};
  if (avatar_url) update.avatar_url = avatar_url;
  if (name) update.name = name;
  return await gamesApi.patch(`/users/${username}`, update);
};
