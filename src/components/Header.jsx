import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <header className="App-header">NC Games</header>
      </Link>
    </div>
  );
};

export default Header;
