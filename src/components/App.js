import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, PostDetail, CreatePost, Navbar, Search } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch class="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={PostDetail} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  );
};
export default App;
