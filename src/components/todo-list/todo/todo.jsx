import React from 'react';
import style from './todo.module.scss';
import {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Todo = (props) => {

	const [done, setDone] = useState(false);
	const [checked, setChecked] = useState(false);
	function handleClick() {
		setDone(!done);
		setChecked(!checked);
	}

	function deleteTodo () {
		props.deleteTodo(props.id);
	}

	return (
		<div
			className={ done ? style.container2 : style.container}
			onClick={handleClick}
		>
			<div className={style.counter}>
				{props.count}.
			</div>

			<p className={ done ? style.text2 : style.text}>
				{props.text}
			</p>

			<div
				className={style.button}
				onClick={deleteTodo}
			>
				<DeleteIcon />
			</div>
		</div>


	);
};

export default Todo;
