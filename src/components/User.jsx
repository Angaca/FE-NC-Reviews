import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../api";
import EditUser from "./EditUser";
import Success from "./Success";

const User = () => {
  const [logged, setLogged] = useState("");
  const [edited, setEdited] = useState(false);
  const [edit, setEdit] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    getUser(username).then(({ data }) => setLogged(data.user));
  }, [username, logged]);

  return (
    <div className="content section container has-text-centered">
      {edited ? <Success setEdited={setEdited} /> : null}
      <h3 className="title">About you</h3>
      <figure className="image is-128x128 mx-auto">
        <img className="is-rounded" src={logged.avatar_url} alt="User Avatar" />
      </figure>
      <h4 className="is-size-3">{logged.name}</h4>
      <p className="is-size-4">{logged.username}</p>
      <button className="button is-success" onClick={() => setEdit(true)}>
        Edit
      </button>
      <EditUser
        user={logged}
        edit={edit}
        setEdit={setEdit}
        setEdited={setEdited}
      />
    </div>
  );
};

export default User;
