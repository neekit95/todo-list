import {createSlice} from "@reduxjs/toolkit";

const todosSlice = createSlice(
	{
		name: 'todos',
		initialState: {
			items: [],
		},
		reducers: {
			addTodo: (state, action) => {
				state.items.push(action.payload);
			},
			deleteTodo: (state, action) => {
				state.items = state.items.filter(todo => todo.id !== action.payload);
			},
			deleteAllTodos: state => {
				state.items = [];
			},
		},
	}
)

export const {addTodo, deleteTodo, deleteAllTodos} = todosSlice.actions;
export default todosSlice.reducer