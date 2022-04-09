import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../state/actions'

export default function Home() {
  const dispatch = useDispatch()
  const posts = useSelector((state)=>state.posts)
  // console.log(createPost)

  const add = () => { 
    dispatch(createPost({name: "heisarki", age: 23}))   
  }
  const show = () => {
    console.log(`Length of array is ${posts.length}`)
    posts.forEach((post)=>console.log(post))
  }

  useEffect(() => {
    console.log(posts)
  },[])
  return (
    <div>
      {/* {dispatch = useDispatch()} */}
      <button onClick={add}>Add from Home</button>
      <button onClick={show}>Show</button>
    </div>
  )
}
