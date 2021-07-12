import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="Reviews">
      <ul>
        <Link to="/Comments">
          <li>
            <h4>Review</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit est magnam veniam illo. Nam perferendis odio dicta
              laudantium ea deleniti quisquam voluptatem magnam exercitationem
              pariatur, modi eveniet nulla illum fugiat.
            </p>
          </li>
        </Link>
        <Link to="/Comments">
          <li>
            <h4>Review</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit est magnam veniam illo. Nam perferendis odio dicta
              laudantium ea deleniti quisquam voluptatem magnam exercitationem
              pariatur, modi eveniet nulla illum fugiat.
            </p>
          </li>
        </Link>
        <Link to="/Comments">
          <li>
            <h4>Review</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit est magnam veniam illo. Nam perferendis odio dicta
              laudantium ea deleniti quisquam voluptatem magnam exercitationem
              pariatur, modi eveniet nulla illum fugiat.
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Reviews;
