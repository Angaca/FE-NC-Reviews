import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getUsers } from "../api";
import { UserContext } from "../contexts/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ data }) => setUsers(data.users));
  }, []);

  let history = useHistory();

  return (
    <div className="content section container">
      {user ? (
        <h3 className="is-italic is-size-3">Registered users</h3>
      ) : (
        <h3 className="is-italic is-size-3">
          Please Log In by selecting your username
        </h3>
      )}
      <ul>
        {users.map((user) => {
          return (
            <li className="is-size-4" key={user.username}>
              <div className="columns">
                <div className="column">
                  <Link to={`/Users/${user.username}`}>{user.username}</Link>
                </div>
                <div className="column">
                  <figure className="image is-64x64 mx-auto">
                    <img
                      className="is-rounded"
                      src={user.avatar_url}
                      alt="User Avatar"
                    />
                  </figure>
                </div>
                <button
                  className="button is-success m-3"
                  onClick={() => setUser(user)}
                >
                  Select
                </button>
                <div className="column is-10"></div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
