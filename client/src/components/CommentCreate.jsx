import React, { useState } from "react"
import axios from "axios"

export default function CommentCreate({ postId }) {
  const [comment, setComment] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault()
    axios.post(`http://localhost:4001/posts/${postId}/comments`, { comment })
  }

  const handleChange = (event) => setComment(event.target.value)

  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='newComment'>New Comment</label>
          <input
            type='text'
            className='form-control'
            value={comment}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary'>Add Comment</button>
      </form>
    </div>
  )
}
