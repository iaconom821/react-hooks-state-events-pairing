import React, { useState } from "react"

function VideoContent({ video }){
    const { downvotes, createdAt, embedUrl, id, title, upvotes, views } = video
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
            <button className="upvotes">{ upvotes }👍</button><button className="downvotes">{ downvotes}👎︎</button>
            <button className="hide-comments">Hide Comments</button>
        </div>
    )

}

export default VideoContent