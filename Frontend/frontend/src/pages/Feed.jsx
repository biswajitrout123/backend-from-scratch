import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feed = () => {

  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1761839258289-72f12b0de058?q=80&w=1170&auto=format&fit=crop",
      caption: "Beautiful Picture"
    }
  ])

  useEffect(() => {

    axios.get("http://localhost:3000/posts")
    .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
    })
  },[])

  return (
    <section className="feed-section">

      {
        posts.length > 0 ? (

          posts.map((post) => (
            <div key={post._id} className="post-card">

              <img src={post.image} alt={post.caption} />

              <p>{post.caption}</p>

            </div>
          ))

        ) : (

          <h2>No Posts Available</h2>

        )
      }

    </section>
  )
}

export default Feed