import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm function helper은 connect helper와 비슷하대. reducer랑 connect

class PostsNew extends Component {

  renderField(field) {
    //비슷한 함수가 반복되니까 중복되게 안쓰려고 고칠거임

    //return jsx

    //field라는 object에는 event handler가 포함되어 있어서
    //이 event handler는 return할 jsx에 wired up될것임.
    //그래서 Field랑 연결되는거

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          {...field.input}
        />
      </div>
    );
  }


  render() {
    return (
      <form>
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
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
}) (PostsNew);

//위에 쓴 form에 string이 unique해야함.
