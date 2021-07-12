import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/Users">
        <button>Users</button>
      </Link>
      <Link to="/Reviews">
        <button> Reviews</button>
      </Link>
      <Link to="/Categories">
        <button>Categories</button>
      </Link>
    </div>
  );
};

export default Nav;
