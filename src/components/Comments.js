import React, {useState} from "react"
import CommentCard from "./CommentCard"

function Comments ({ comments }) {
    const [searchText, setSearchText] = useState("")

    function handlesChange(event){
        setSearchText(event.target.value)
    }

    const filteredComments = comments.filter(function(comment) {
        return comment.user.includes(searchText)
    })

    const commentCards = filteredComments.map(function(comment) {
        return <CommentCard 
            comment = {comment.comment}
            user = {comment.user}
        />
    })
    return (
        <div>
            <h2>{comments.length} Comments</h2>
            <input type="text" placeholder="Search" onChange={handlesChange}></input>
            {commentCards}
        </div>
    )
}

export default Comments 