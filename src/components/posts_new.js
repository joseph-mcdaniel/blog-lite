import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Title missing"
  } else if (values.title.length < 3) {
    errors.title =  "Title must have at least 3 characters"
  }
  if (!values.categories) {
    errors.categories = "Category missing"
  }
  if (!values.content) {
    errors.content = "Content missing"
  }
}
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
