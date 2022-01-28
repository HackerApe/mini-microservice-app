import React, { useState } from "react"
import axios from "axios"

export default function PostCreate() {
  const [title, setTitle] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post(
      "http://localhost:4000/posts",
      { title },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    setTitle("")
  }

  const handleChange = (event) => setTitle(event.target.value)

  return (
    <div>
      <form method='POST' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary mt-3'>Create Post</button>
      </form>
    </div>
  )
}
