import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
//reduxForm function helper은 connect helper와 비슷하대. reducer랑 connect

class PostsNew extends Component {

  renderTitleField(field) {
    //return jsx

    //field라는 object에는 event handler가 포함되어 있어서
    //이 event handler는 return할 jsx에 wired up될것임.
    //그래서 Field랑 연결되는거

    return (
      <div>
        <input
          {...field.input}
        />
      </div>

    );
  }


  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
}) (PostsNew);

//위에 쓴 form에 string이 unique해야함.
