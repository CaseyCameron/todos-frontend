import React, { Component } from 'react';
import { getSharedTodos } from '../utils/todo-api.js';
import './SharedPage.css';

export default class SharedPage extends Component {
  state = {
    todos: []
  }

  async componentDidMount() {
    try {
      const sharedTodos = await getSharedTodos();
      this.setState({ todos: sharedTodos });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    const { todos } = this.state;
    const { userId } = this.props;
    const liStyle = { background: 'green' } ;
    const liStyle2 = { background: 'lightsteelblue' };
    console.log(userId);
    return (
      <div className="SharedPage">
        <p>Shared Todos</p>
        <ul>
          {todos.map(todo => {
            console.log(userId, todo.userId);
            return <li key={todo.id} style={Number(userId) === todo.userId ? liStyle : liStyle2} >
              <h3 className={todo.completed ? 'completed' : 'asdfasdf'}>{todo.task}</h3>
              <h3 className="UserName">User: {todo.userName}</h3>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
