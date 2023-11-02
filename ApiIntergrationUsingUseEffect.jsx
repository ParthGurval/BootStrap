import React,{useState,useEffect} from 'react'
import axios from 'axios'
const ApiIntergrationUsingUseEffect = () => {

    const [postData,setPostData] =useState([])

    useEffect(()=>{

        const getPostData = async ()=>{
            try {
                const postResponse = await axios.get("https://jsonplaceholder.typicode.com/posts") 
                setPostData(postResponse.data)
            } catch (error) {
               console.log(error) 
            }
        }
        getPostData()
    },[])
  return (
    <>
    <h2>Post List</h2>
    <div>
        <table style={{border:"1px solid black"}}>
            <thead style={{border:"1px solid black"}}>
                <tr style={{border:"1px solid black"}}>
                <th style={{border:"1px solid black"}}>USER ID</th>
                <th style={{border:"1px solid black"}}>TITLE</th>
                <th style={{border:"1px solid black"}}>BODY</th>
                </tr>
            </thead>
            <tbody style={{border:"1px solid black"}}>
                {postData.map(post=>(
                    <tr key={post.id} style={{border:"1px solid black"}}>
                        <td style={{border:"1px solid black"}}>{post.userId}</td>
                        <td style={{border:"1px solid black"}}>{post.title}</td>
                        <td style={{border:"1px solid black"}}>{post.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default ApiIntergrationUsingUseEffect