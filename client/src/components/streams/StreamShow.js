import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import { fetchStream } from "../../actions";

class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
