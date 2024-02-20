import React from 'react';
import style from './homepage.module.scss'
import TodoList from '../../components/todo-list/todo-list.jsx';

const Homepage = () => {
	return (
		<div className={style.homepage}>
			<TodoList />
		</div>
	);
};

export default Homepage;
