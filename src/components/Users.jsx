import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";
import { UserContext } from "../contexts/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then(({ data }) => setUsers(data.users));
  }, []);

  return (
    <div className="Users">
      <h3>Please select your user</h3>
      <ul>
        {users.map((user) => {
          return (
            <Link to="/">
              <li key={user.username} onClick={() => setUser(user.username)}>
                {user.username}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
