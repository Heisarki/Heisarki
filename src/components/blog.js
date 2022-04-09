import React from 'react'
import { useDispatch } from 'react-redux'
import {createPost} from '../state/actions'

export default function Blog() {
  const dispatch = useDispatch()
  return (
      <div>
      <button onClick={
        () => {
          dispatch(createPost({name: 'Ram', age: 20}))
        }
          }>Add from Blog</button>
    </div>
  )
}
