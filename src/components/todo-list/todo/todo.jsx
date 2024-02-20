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

	return (
		<div
			className={ done ? style.container2 : style.container}
			onClick={handleClick}
		>
			<input
				className={style.checkbox}
				type="checkbox"
				checked={checked}
			/>

			<div className={ done ? style.text2 : style.text}>
				{props.text}
			</div>
			<div className={style.button}>
				<DeleteIcon />

			</div>
		</div>


	);
};

export default Todo;
