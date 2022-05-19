import React from 'react'
import blogImg from '../public/blogImage.png'

const Blog = (props) => {
  return (
    <div className="col-12 my-3 col-md-4 d-flex justify-content-center align-items-center">
        <div className="blog_container_blog_card">
            <img src={props.img} alt="Blog Image" /> 
            <h3>{props.title}</h3>
            <p>{props.para}</p>
            <a href={props.link} target='_blank' className='text-decoration-none'>
            <div className="buttons_blogCard text-center">
                Read More
            </div>
            </a>                   
        </div>
    </div>
  )
}

export default Blog