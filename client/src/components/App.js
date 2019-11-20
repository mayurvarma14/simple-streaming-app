import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={StreamList}></Route>
          <Route exact path="/streams/new" component={StreamCreate}></Route>
          <Route exact path="/streams/edit/:id" component={StreamEdit}></Route>
          <Route
            exact
            path="/streams/delete/:id"
            component={StreamDelete}
          ></Route>
          <Route exact path="/streams/:id" component={StreamShow}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
