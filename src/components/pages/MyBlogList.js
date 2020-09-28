import React from 'react'
// import { Link } from 'react-router-dom';
export default function MyBlogList(props) {
    return (
        <ul class="card">
            <li class="card-body">
                <h5>{props.title}</h5>
                <p>{props.text}</p><br />
                {/* <Link to={"/edit/"+props.exercise._id}><button className="delbutton">edit</button></Link> | */}
                <button className="delbutton" onClick={() => {props.deleteBlog(props.id)}}>delete</button>
            </li>
        </ul>
    )
}
