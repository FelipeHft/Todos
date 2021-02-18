import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

console.log(todoList);

// todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos.forEach( crearTodoHtml ); //esto es lo mismo, se puede obviar el argumento si es solo 1