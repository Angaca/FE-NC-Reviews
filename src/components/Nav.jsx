import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";
import Login from "./Login";

const Nav = () => {
  const { user } = useContext(UserContext);
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar has-shadow is-link is-spaced is-fixed-top">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-3 has-text-weight-bold">
          NC REVIEWS
        </Link>
        <p className="navbar-burger my-auto" onClick={() => toggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </p>
      </div>
      <div className={`navbar-menu ${click ? "is-active" : null}`}>
        <div className="navbar-start" onClick={() => toggleMenu()}>
          <Link
            to={user ? `/Users/${user.username}` : "/Users"}
            className="navbar-item is-italic has-text-weight-semibold"
          >
            {user ? `Logged as: ${user.username} ` : "Not Logged In"}
            {user ? (
              <figure className="image is-32x32 ml-3">
                <img
                  className="is-rounded"
                  src={user.avatar_url}
                  alt="User Avatar"
                />
              </figure>
            ) : null}
          </Link>
          <Link to="/Reviews" className="navbar-item">
            Reviews
          </Link>
          <Link to="/Categories" className="navbar-item">
            Categories
          </Link>
          <Link to="/Users" className="navbar-item">
            Users
          </Link>
          <hr className="navbar-divider"></hr>
        </div>
        <div className="navbar-end" onClick={() => toggleMenu()}>
          <Link to="/Users">
            {user ? null : (
              <button className="button is-info navbar-item ml-3 my-3">
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
