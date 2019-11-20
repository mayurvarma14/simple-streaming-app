import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = values => {
    this.props.editStream(this.props.match.params.id, values);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h2>Edit a Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
