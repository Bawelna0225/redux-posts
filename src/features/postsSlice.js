import { createSlice } from '@reduxjs/toolkit'

const initialState = [
	{
		id: '1',
		title: 'Placeholder post 1',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
	{
		id: '2',
		title: 'Placeholder post 2',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	},
]

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		postAdded(state, action) {
			state.push(action.payload)
		},
	},
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
