import { Link } from "react-router-dom";

const LoginAlert = ({ alert, setAlert }) => {
  return (
    <div className={`modal ${alert ? "is-active" : null}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="notification is-warning is-light py-6">
          <button className="delete" onClick={() => setAlert(false)}></button>
          <Link to="/Users">Please Log in first</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginAlert;
