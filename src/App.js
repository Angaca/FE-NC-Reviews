import "./App.css";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./contexts/User";
import MostVoted from "./components/MostVoted";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Users from "./components/Users";
import Categories from "./components/Categories";
import Review from "./components/Review";
import { useState } from "react";
import User from "./components/User";
import EditReview from "./components/EditReview";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/Users/:username">
            <User />
          </Route>
          <Route exact path="/Edit/:review_id">
            <EditReview />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </UserContext.Provider>
  );
}

export default App;
