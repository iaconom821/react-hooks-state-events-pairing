import React, { useState } from "react"

function CommentCard ({comment, user}) {
    const [upvotesValue, setUpvotesValue] = useState(0)
    const [downvotesValue, setDownvotesValue] = useState(0)
    const [hidden, setHidden] = useState(false)

    function upvoteClickHandle(event) {
        setUpvotesValue(upvotesValue + 1)
    }

    function downvoteClickHandle(event) {
        setDownvotesValue(downvotesValue + 1)
    }

    function deleteComment(evt){
        setHidden(!hidden)
    }

    return (
        <div hidden={ hidden } className="video-comments">
            <h3 className="user-name">{user}</h3>
            <p className="comment">{comment}</p>
            <br/>
            <button className="upvotes" onClick={upvoteClickHandle}>{ upvotesValue }👍</button><button className="downvotes" onClick={downvoteClickHandle}>{ downvotesValue }👎︎</button>
            <br/>
            <button className="delete" onClick={ deleteComment }>Delete Comment</button>
        </div>
    )
}

export default CommentCard