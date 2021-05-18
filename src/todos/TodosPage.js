import { Component } from 'react';
import { addTodo, getTodos } from '../utils/todo-api.js';
import './TodosPage.css';

export default class TodosPage extends Component {
  state = {
    task: '',
    shared: false,
    completed: false,
    tasks: []
  }

  async componentDidMount() {
    try {
      const todos = await getTodos();
      this.setState({ tasks: todos });
      console.log(todos);


    }
    catch (err){
      console.log(err);

    }
  }
  handleAdd = async e => {
    e.preventDefault();
    const todo = this.state;
    const addedTodo = await addTodo(todo);

    console.log('ADDED', addedTodo);
  }

  handleTaskChange = ({ target }) => {
    this.setState({ task: target.value });
  }

  handleSharedChange = ({ target }) => {
    this.setState({ shared: target.value });
  }

  render() {
    const { task, shared } = this.state;

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
                <option value={false} selected>no</option>
              </select>
            </label>
          </p>
        </form>
      </div>
    );
  }
}
