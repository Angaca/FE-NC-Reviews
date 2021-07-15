import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";
import { UserContext } from "../contexts/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div className="content section container">
      {user ? (
        <h3 className="is-italic is-size-3">Registered users</h3>
      ) : (
        <h3 className="is-italic is-size-3">
          Please Log In first by selecting your username
        </h3>
      )}
      <table class="table">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr
                className="is-size-4"
                key={user.username}
                onClick={() => setUser(user.username)}
              >
                <Link to="/">{user.username}</Link>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
