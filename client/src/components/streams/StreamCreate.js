import React, { Component } from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStream } from "../../actions";
class StreamCreate extends Component {
  onSubmit = values => {
    this.props.createStream(values);
  };

  render() {
    return (
      <div>
        <h2>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
