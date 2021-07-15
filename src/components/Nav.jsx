import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Login from "./Login";

const Nav = () => {
  const { user } = useContext(UserContext);
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
    console.log(click);
  };

  return (
    <nav className="navbar has-shadow is-link is-spaced ">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3 has-text-weight-bold">
          NC GAMES
        </Link>
        <p className="navbar-burger my-auto" onClick={() => toggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
      <div className={`navbar-menu ${click ? "is-active" : null}`}>
        <div className="navbar-start">
          <Link
            to={user ? `/Users/${user}` : "/Users"}
            className="navbar-item is-italic has-text-weight-semibold"
          >
            {user ? `Logged as: ${user}` : "Not Logged In"}
          </Link>
          <Link to={user ? "/Reviews" : "/Users"} className="navbar-item">
            Reviews
          </Link>
          <Link to={user ? "/Categories" : "/Users"} className="navbar-item">
            Categories
          </Link>
          <hr className="navbar-divider"></hr>
        </div>
        <div className="navbar-end">
          <Link to="/Users">
            {user ? (
              <button className="button is-info is-dark navbar-item ml-3 my-3">
                All Users
              </button>
            ) : (
              <button className="button is-info is-dark navbar-item ml-3 my-3">
                Log In
              </button>
            )}
          </Link>
          <Login />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
