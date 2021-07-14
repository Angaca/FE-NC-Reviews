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
    <div className="Users">
      {user ? (
        <h3>Registered users</h3>
      ) : (
        <h3>Please login first by selecting your user</h3>
      )}
      <ul>
        {users.map((user) => {
          return (
            <li key={user.username} onClick={() => setUser(user.username)}>
              <Link to="/">{user.username}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
