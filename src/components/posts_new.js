import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm function helper은 connect helper와 비슷하대. reducer랑 connect
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {

  renderField(field) {
    //비슷한 함수가 반복되니까 중복되게 안쓰려고 고칠거임

    //field라는 object에는 event handler가 포함되어 있어서
    //이 event handler는 return할 jsx에 wired up될것임.
    //그래서 Field랑 연결되는거
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (     //return jsx
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
  //{field.meta.error}
  //validate function에 있는 errors의 property의 name과 같은 field의 property가 있으면 error띄워줌
  //foeld.name이 바뀌면 validate 함수의 error.name도 바뀌어야 함

  onSubmit(values) {
    //this === component

    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

//form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 이 문장 이해하는거 어려워
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Show your love!"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  //validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!!";
  }
  if (!values.content) {
    errors.content = "Enter some content!!!";
  }
  //If errors is empty, the form is fine to submit
  //If errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
}) (
  connect(null, { createPost }) (PostsNew)
);
//위에 쓴 form에 string이 unique해야함.
//이미 redux form을 connect한 위의 함수에 actionCreator를 같이 combine하기로 함
//이게 multiple connect ?? helper
