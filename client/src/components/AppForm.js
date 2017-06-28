import React from 'react'
import { addApp } from '../actions/apps'
import { updateApp } from '../actions/apps'
import { deleteApp } from '../actions/apps'

class AppForm extends React.Component {
  state = {
    name: '',
    description: '',
    category: '',
    price: '',
    author: '',
    version: '',
  }

    submit = (e) => {
      e.preventDefault();
      let { dispatch } = this.props;
      let { name, description, category, price, author, version } = this.state
      let blog = { name, description, category, price, author, version }
      dispatch(addApp(blog))
    }

    render() {
      let { name, description, category, price, author, version} = this.state;
      return (
        <form>
        <input
          placeholder='Name'
          value={name}
        />
        <input
          placeholder='Description'
          value={description}
        />
        <input
          placeholder='Price'
          value={price}
        />
        <input
          placeholder='Author'
          value={author}
        />
        <input
          placeholder='Version'
          value={version}
        />
        </form>
      )
    }
}

export default AppForm;
