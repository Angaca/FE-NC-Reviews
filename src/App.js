import "./App.css";
import Header from "./components/Header.jsx";
import Login from "./components/Login";
import MostVoted from "./components/MostVoted";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Nav />
      <MostVoted />
    </div>
  );
}

export default App;
