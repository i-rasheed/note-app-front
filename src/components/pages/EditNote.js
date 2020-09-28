// import React, {useState, useEffect, useContext} from 'react'
// import UserContext from "../../context/UserContext";
// import Axios from "axios";


// export default function EditNote(props) {

// const [title, setTitle] = useState()
// const [text, setText] = useState()
// const { userData } = useContext(UserContext);

// useEffect(() => {
//     const getANote = async () => {
//       const blogRes = await Axios.get(
//         "http://localhost:5000/blog/" + props.match.params.id,
//         { headers: { "x-auth-token": userData.token } }
//       );
//       setTitle(blogRes.data.title)
//       setText(blogRes.data.text) 
//       console.log(blogRes)  
//     }
//     getANote();
//   }, [props.match.params.id, userData.token]);


//   const onChangeTitle = ( e ) => {
//         setTitle(e.target.value)
//   }

//   const onChangeText = ( e ) => {
//     setText(e.target.value)
// }

// const onSubmit =(e) => {
//     e.preventDefault();

//     const blog = {
//       title,
//       text
//     }

//     console.log(blog);

//     const postBlogRes = Axios.post('http://localhost:5000/blog/update/' + props.match.params.id, blog)
//     console.log(postBlogRes.data)
     

//     window.location = '/';
//   }


//     return (
//         <div>
//             <form className="submit-form" onSubmit={onSubmit}>
//                 <label htmlFor="title">Title:</label>
//                 <input type="text" value={title} id="title" onChange={onChangeTitle} /><br/>
//                 <label htmlFor="text">text:</label>
//                 <textarea value={text} id="text" onChange={onChangeText} />  
//                 <button id="blogsubmit">Submit</button>
//             </form>
//         </div>
//     )
// }
