import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Login from "./components/Login";
import MostVoted from "./components/MostVoted";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Users from "./components/Users";
import Categories from "./components/Categories";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
          <Nav />
          <MostVoted />
        </Route>
        <Route exact path="/Reviews">
          <Reviews />
        </Route>
        <Route exact path="/Users">
          <Users />
        </Route>
        <Route exact path="/Categories">
          <Categories />
        </Route>
        <Route exact path="/Review/:review_id">
          <Review />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
