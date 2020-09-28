import React, {useState, useContext} from 'react'
import Axios from "axios";
import UserContext from "../../context/UserContext";
import ErrorNotice from "../misc/ErrorNotice";
import { useHistory } from "react-router-dom";
import './PostBlog.css'

export default function PostBlog() {
const [title, setTitle] = useState()
const [text, setText] = useState()
const { userData } = useContext(UserContext);
const [error, setError] = useState();
const history = useHistory();



const handleTitleChange = (e) => {
 setTitle(e.target.value)
}

const handleTextChange = (e) => {
    setText(e.target.value)
   }

const submit = async (e) => {
    e.preventDefault()
    try {
        const post = { title, text};
        const postRes = await Axios.post(
            "http://localhost:5000/blog",
            post,
            { headers: { "x-auth-token": userData.token } }
          );
          console.log(postRes.data)
          history.push('/mynote')
          
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
    };

   
    return (
        <div className="postform">
            {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

<form className="form" onSubmit={submit}>
        <label htmlFor="login-email">Title</label>
        <input
          id="login-email"
          type="text"
          onChange={handleTitleChange}
        />

        <label htmlFor="login-password">Text</label>
        <input
          id="login-password"
          className="loginpword"
          type="text"
          onChange={handleTextChange}
        />

        <button className="delbutton" >Submit</button>
      </form>
    </div>
    )

    }