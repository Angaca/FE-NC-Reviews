import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api";

const User = () => {
  const [logged, setLogged] = useState("");
  const { username } = useParams();

  useEffect(() => {
    getUser(username).then(({ data }) => setLogged(data.user));
  }, [username]);

  return (
    <div className="User">
      <h3>Your Info</h3>
      <img src={logged.avatar_url} alt="User Avatar" />
      <h4>{logged.name}</h4>
      <p>{logged.username}</p>
    </div>
  );
};

export default User;
