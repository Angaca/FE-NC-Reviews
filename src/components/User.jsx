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
    <div className="content section container has-text-centered">
      <h3 className="title">About you</h3>
      <figure className="image is-128x128 mx-auto">
        <img className="is-rounded" src={logged.avatar_url} alt="User Avatar" />
      </figure>
      <h4 className="is-size-3">{logged.name}</h4>
      <p className="is-size-4">{logged.username}</p>
      <button className="button is-info">Edit</button>
    </div>
  );
};

export default User;
