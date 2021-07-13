import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user)
    return (
      <div className="Login">
        <h4>Please Log in</h4>
      </div>
    );
  else
    return (
      <div className="Login">
        <p>Logged as: {user}</p>
        <Link to={`/Users/${user}`}>
          <button>Profile</button>
        </Link>
        <button onClick={() => setUser("")}>Logout</button>
      </div>
    );
};

export default Login;
