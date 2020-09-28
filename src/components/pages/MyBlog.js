import React, { useState, useContext, useEffect } from 'react'
import Axios from "axios";
import MyBlogList from "./MyBlogList"
import UserContext from "../../context/UserContext"

export default function MyBlog() {
    const [blogs, setBlogs] = useState([])
    const { userData } = useContext(UserContext)
    
    useEffect(() => {
        const getMyBlogs = async () => {
          const blogRes = await Axios.get(
            process.env.REACT_APP_BACKEND_URL + '/blog/all',
            { headers: { "x-auth-token": userData.token } }
          );
          setBlogs(blogRes.data) 
          console.log(blogRes)  
        }
        getMyBlogs();
      }, [userData.token]);

      


      const deleteBlog = async (id) =>{
       const deleteResponse = await Axios.delete(process.env.REACT_APP_BACKEND_URL + `/blog/${id}`, 
        {headers: {"x-auth-token": userData.token}})
         console.log(deleteResponse.data) 
         let remainingBlog = blogs.filter(el => el._id !== id)
        setBlogs(remainingBlog)
      }

    //   const blogList = () => {
    //     return blogs.map(currentblog => {
    //       return <MyBlogList blog={currentblog} deleteBlog={deleteBlog} key={currentblog._id} />;
    //     })
    //   }

    

      return (
        <ul>
            {blogs.map(blog => 
                <MyBlogList 
                title={blog.title}
                text={blog.text}
                deleteBlog={deleteBlog}
                key={blog._id}
                id={blog._id}
                />
            )}
        </ul>
    )
}
