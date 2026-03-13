import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post", formData).then((res) => {
      Navigate("/feed")
    })
      .catch((err) => {
        console.log(err);
        alert("Enter creating post")

      })
  }

  return (

    <section className='create-post-section'>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' placeholder='Enter caption' />
        <button type='submit'>Submit</button>
      </form>
    </section>

  )
}

export default CreatePost