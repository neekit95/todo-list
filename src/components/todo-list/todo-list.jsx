import React, {useState} from 'react';
import Todo from "./todo/todo";
import style from './todo-list.module.scss';
import AddCircleIcon from "@mui/icons-material/AddCircle";

const todoList = () => {

	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	function handleChange(e) {
		setText(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newTodo = {
			text: text,
			done: false,
			id: todos.length + 1,
		}
		newTodo.text.trim() ? setTodos([...todos, newTodo]) : setText('');
		setText('');
	}

	function handleKeyPress (e) {
		if (e.key === 'Enter') {
			handleSubmit(e);
		}
	}

	return (
		<div className={style.container}>

			<div className={style.inputContainer}
			     onKeyDown={handleKeyPress}
			>
				<input
					className={style.input}
					type="text"
					placeholder="What needs to be done?"
					value={text}
					onChange={handleChange}
				/>
				<button
					className={style.button}
					onClick={handleSubmit}
				>
					Add <AddCircleIcon/>
				</button>
			</div>

			{todos.map((todo, index) => (
				<Todo
					key={index+1}
					id={index+1}
					text={todo.text}
					count={index+1}
				/>
			))}
		</div>
	);
};

export default todoList;
