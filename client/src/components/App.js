import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={StreamList}></Route>
        <Route exact path="/streams/new" component={StreamCreate}></Route>
        <Route exact path="/streams/edit" component={StreamEdit}></Route>
        <Route exact path="/streams/delete" component={StreamDelete}></Route>
        <Route exact path="/streams/show" component={StreamShow}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
