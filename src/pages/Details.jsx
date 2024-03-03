import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { readPost } from '../utility/crudUtility'
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom'

export const Details = () => {
  const [post, setPost] = useState(null)
  const param = useParams()
  const navigate=useNavigate()
  console.log(param.id)

  useEffect (() => {
    readPost(param.id, setPost)
  }, [])
  console.log(post)
  return (
    <div className="container dogDetails">
      <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
        {post && <img src={post?.photoUrl} alt={post?.title} className='imgPost' />}
      </div>
      <div style={{margin:"20px 0 10px 0"}}>
        <b>Méret: </b>{post && parse(post.meretek)}
      </div>
      <div style={{margin:"10px 0"}}>
        <b>Szőrzet: </b>{post && parse(post.szorzetek)}
      </div>
      <div className='text-space' style={{display:"flex", marginTop:"10px", fontFamily: "'Courier New', Courier, monospace"}}>
        {post && parse(post.description)}
      </div>
      <div className="d-flex justify-content-center ">
        <button onClick={()=>navigate("/")} className='btn btn-primary '>Vissza</button>
      </div>
    </div>
  )
}
