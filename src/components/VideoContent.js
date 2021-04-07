import React, { useImperativeHandle, useState } from "react"
import Comments from "./Comments"

let showCommentsGlobal

function VideoContent({ video }){
    const { downvotes, createdAt, embedUrl, id, title, upvotes, views } = video
    
    const [upvotesValue, setUpvotesValue] = useState(upvotes)
    const [downvotesValue, setDownvotesValue] = useState(downvotes)
    const [showComments, setShowComments] = useState(true)


    function upvoteClickHandle(event) {
        setUpvotesValue(upvotesValue + 1)
    }

    function downvoteClickHandle(event) {
        setDownvotesValue(downvotesValue + 1)
    }

    function showCommentsHandle(event) {
        setShowComments(!showComments)
    }
    
    // showCommentsGlobal = showComments
    return (
        <div className="video-content">
            <iframe
                width="919"
                height="525"
                src={ embedUrl }
                frameborder="0"
                allowFullScreen
                title={ title }
                />
            <h1 className="video-title">{ title }</h1>
            <p className="video-info">{ views } | { createdAt }</p>
            <button className="upvotes" onClick={upvoteClickHandle}>{ upvotesValue }👍</button><button className="downvotes" onClick={downvoteClickHandle}>{ downvotesValue }👎︎</button>
            <br/><br/>
            <button className="hide-comments" onClick={showCommentsHandle}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            {showComments && <Comments comments= {video.comments}/>}
        </div>
    )
    
}


// export {showCommentsGlobal}
export default VideoContent