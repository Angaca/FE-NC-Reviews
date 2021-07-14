import "./App.css";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import Header from "./components/Header.jsx";
import Login from "./components/Login";
import MostVoted from "./components/MostVoted";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Users from "./components/Users";
import Categories from "./components/Categories";
import Review from "./components/Review";
import { useState } from "react";
import User from "./components/User";
import EditReview from "./components/EditReview";

function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
          <Route exact path="/Reviews/:review_id">
            <Review />
          </Route>
        </Switch>
        <Route exact path="/Users/:username">
          <User />
        </Route>
        <Route exact path="/Edit/:review_id">
          <EditReview />
        </Route>
      </div>
    </UserContext.Provider>
  );
}

export default App;
