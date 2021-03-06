import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/User";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  if (!user) return null;
  else
    return (
      <div>
        <Link to={`/Users/${user.username}`}>
          <button className="button is-light ml-3">Profile</button>
        </Link>
        <button className="button is-light ml-3" onClick={() => setUser("")}>
          Logout
        </button>
      </div>
    );
};

export default Login;
