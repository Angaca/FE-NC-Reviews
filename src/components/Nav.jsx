import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="Nav">
      <Link to="/Users">
        {user ? <button>Users</button> : <button>Login</button>}
      </Link>
      <Link to={user ? "/Reviews" : "/Users"}>
        <button> Reviews</button>
      </Link>
      <Link to={user ? "/Categories" : "/Users"}>
        <button>Categories</button>
      </Link>
    </div>
  );
};

export default Nav;
