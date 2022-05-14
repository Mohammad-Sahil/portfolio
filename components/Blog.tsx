import React from 'react'
import blogImg from '../public/blogImage.png'

const Blog = () => {
  return (
    <div className="col-12 my-3 col-md-4 d-flex justify-content-center align-items-center">
        <div className="blog_container_blog_card">
            <img src={blogImg.src} alt="Blog Image" /> 
            <h3>Digital Menu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nisl lacinia ut molestie viverra in in. </p>
            <a href="#" target='_blank' className='text-decoration-none'>
            <div className="buttons_blogCard text-center">
                Read More
            </div>
            </a>                   
        </div>
    </div>
  )
}

export default Blog