import React, {useState} from "react";
import VidComment from "./VidComment";

function Comments({comments}){

    const [commentSearch, setCommentSearch] = useState("");

    const filteredComments = comments.filter((comment)=>{
        return (comment.comment.toLowerCase().includes(commentSearch.toLowerCase()))
    })

    const videoCommentMapped = filteredComments.map((comment) => (
         <VidComment 
         comment={comment.comment} 
         user={comment.user} 
         key={comment.id}/>
        
    ))

    

    return (
    <div>
        
    <input
    type="text"
    placeholder="Search..."
    onChange={(e) => setCommentSearch(e.target.value)}
    />

    
    <h3>{filteredComments.length} Comments</h3>
    {videoCommentMapped}
    </div>
    )
}

export default Comments