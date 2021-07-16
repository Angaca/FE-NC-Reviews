import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../api";
import { capFirstLetter } from "../utils";
import Pagination from "./Pagination";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getReviews(page).then(({ data }) => {
      setReviews(data.reviews);
      setTotal(data.total_count);
    });
  }, [page]);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title has-text-centered">Reviews</h1>
        <Pagination
          pages={Math.ceil(total / 10)}
          total={total}
          page={page}
          setPage={setPage}
        />
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id}>
                <div className="columns">
                  <div className="column is-3"></div>
                  <div className="column is-6">
                    <div className="card my-5">
                      <header className="card-header has-background-success-light">
                        <div>
                          <h4 className="is-size-4 card-header-title has-text-centered has-text-success ">
                            {review.title}
                          </h4>
                          <p className="is-size7 ml-4 mb-2">
                            by {review.owner}
                          </p>
                        </div>
                      </header>

                      <div className="card-content">
                        <p className="is-size-5">
                          {review.review_body.slice(0, 130)}...
                        </p>
                        <p className="is-size-6 my-3">
                          <em>Category: </em>
                          {capFirstLetter(review.category)}
                        </p>
                        <p className="is-size-6 is-italic my-3">
                          {review.votes} votes and {review.comment_count}{" "}
                          comments
                        </p>
                        <Link to={`Reviews/${review.review_id}`}>
                          See the full review
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column is-3"></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
