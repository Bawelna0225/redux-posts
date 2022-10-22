import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postsSlice'

const AddPostForm = () => {
	const dispatch = useDispatch()
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const onTitleChanged = (e) => setTitle(e.target.value)
	const onContentChanged = (e) => setContent(e.target.value)

	const onSavePost = () => {
		if (title && content) {
			dispatch(
				postAdded({
					id: nanoid(),
					title,
					content,
				})
			)
			setTitle('')
			setContent('')
		}
	}

	return (
		<section>
			<h2>Add New Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title:</label>
				<input type="text" id="postTitle" value={title} onChange={onTitleChanged}></input>
				<label htmlFor="postContent">Post Content:</label>
				<input type="text" id="postContent" value={content} onChange={onContentChanged}></input>
				<button type="button" onClick={onSavePost}>
					Save Post
				</button>
			</form>
		</section>
	)
}

export default AddPostForm
