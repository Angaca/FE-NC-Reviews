import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-games-angaca.herokuapp.com/api/",
});

export const getReviews = async () => {
  const apiReviews = await api.get("/reviews");
  return apiReviews;
};

export const getReview = async (review_id) => {
  const apiReview = await api.get(`/reviews/${review_id}`);
  return apiReview;
};
