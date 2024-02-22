import React, {useEffect, useState} from 'react';
import Todo from "./todo/todo";
import style from './todo-list.module.scss';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {v4 as uuidv4} from 'uuid';

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
			id: uuidv4(),
		}
		newTodo.text.trim() ? setTodos([...todos, newTodo]) : setText('');
		setText('');
	}

	useEffect(() => {
		console.clear()
		console.log('todos', todos)
	}, [todos]);

	function handleKeyPress (e) {
		if (e.key === 'Enter') {
			handleSubmit(e);
		}
	}
	function deleteAll () {
		setTodos([]);
	}
	function deleteTodo (id) {
		const newArray = todos.filter(todo => todo.id !== id);
		setTodos(newArray)
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

			<div className={style.todos}>
				{todos.map((todo, index) => (
					<Todo
						key={todo.id}
						id={todo.id}
						text={todo.text}
						count={index+1}
						deleteTodo={()=>deleteTodo(todo.id)}
					/>
				))}
			</div>

			<button
				className={style.buttonDelete}
				onClick={deleteAll}
			>
				<p className={style.p}> Delete all</p>
				<DeleteForeverIcon />
			</button>
		</div>
	);
};

export default todoList;
