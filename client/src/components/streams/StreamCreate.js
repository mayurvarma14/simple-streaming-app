import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class StreamCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderField = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(values) {
    console.log("Log: onSubmit -> values", values);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderField}
          label="Enter Title"
        ></Field>
        <Field
          name="description"
          component={this.renderField}
          label="Enter Description"
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = "You must enter a title";
  }
  if (!values.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
