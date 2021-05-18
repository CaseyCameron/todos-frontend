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
    return (
      <div className="SharedPage">
        <p>Shared Todos</p>
        <ul>
          {todos.map(todo => {
            return <li key={todo.id} >
              <h3 className={todo.completed ? 'completed' : ''}>{todo.task}</h3>
              <h3 className="UserName">User: {todo.userName}</h3>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
