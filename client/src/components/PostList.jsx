import React, { useEffect, useState } from "react"
import axios from "axios"
import CommentCreate from "./CommentCreate"
import CommentList from "./CommentList"

export default function PostList() {
  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts")
    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const renderedPosts = Object.values(posts).map((post) => (
    <div
      className='card'
      style={{ width: "30%", marginBottom: "20px" }}
      key={post.id}
    >
      <div className='card-body'>
        <h3>{post.title}</h3>
        <CommentList />
        <CommentCreate postId={post.id} />
      </div>
    </div>
  ))

  const postsCount = Object.values(posts).length
  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {postsCount > 0 ? renderedPosts : <p>No Posts...</p>}
    </div>
  )
}
