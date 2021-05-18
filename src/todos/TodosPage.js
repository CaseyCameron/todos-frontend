import { Component } from 'react';
import { addTodo, getTodos, deleteTodo } from '../utils/todo-api.js';
import './TodosPage.css';

export default class TodosPage extends Component {
  state = {
    task: '',
    shared: false,
    completed: false,
    todos: []
  }

  async componentDidMount() {
    try {
      const todos = await getTodos();
      this.setState({ todos: todos });
    }
    catch (err) {
      console.log(err);

    }
  }
  handleAdd = async e => {
    e.preventDefault();
    const { task, todos } = this.state;
    console.log(task);
    try {
      const addedTodo = await addTodo(this.state);
      const updatedTodos = [...todos, addedTodo];
      console.log(updatedTodos);
      this.setState({
        todos: updatedTodos,
        task: ''
      }
      );

    }
    catch (err) {
      console.log(err.message);

    }
  }

  handleTaskChange = ({ target }) => {
    this.setState({ task: target.value });
  }

  handleSharedChange = ({ target }) => {
    this.setState({ shared: target.value });
  }

  handleDelete = async id => {
    const { todos } = this.state;
    try {
      await deleteTodo(id);
      const updatedTodos = todos.filter(task => task.id !== id);
      this.setState({ todos: updatedTodos });
    }
    catch (err) {
      console.log(err);
    }
    //console.log('gonna delete', id);
  }

  render() {
    const { task, shared, todos } = this.state;

    return (
      <div className="TodosPage">
        <form onSubmit={this.handleAdd}>
          <p>
            <label>
              <span>Task</span>
              <input name="task" value={task} required={true}
                onChange={this.handleTaskChange}
              />
            </label>
          </p>
          <p>
            <label>
              <span>Shared</span>
              <select value={shared} onChange={this.handleSharedChange}>
                <option value={true}>yes</option>
                <option value={false} defaultValue>no</option>
              </select>
            </label>
          </p>
        </form>
        <ul>
          {todos.map(todo => {
            return <li key={todo.id}>
              <h3>{todo.task}</h3>
              <h3>{todo.completed}</h3>
              <h3>{todo.shared}</h3>
              <button onClick={() => this.handleDelete(todo.id)}>X</button>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
