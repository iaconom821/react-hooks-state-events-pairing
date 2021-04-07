import React, {useState} from "react"
import CommentCard from "./CommentCard"

function Comments ({ comments }) {
    const [searchText, setSearchText] = useState("")
    const [sort, setSort] = useState("All")

    function handlesChange(event){
        setSearchText(event.target.value)
    }

    function handleSelect(evt) {
        setSort(evt.target.value)
    }

    const sortedComments = [...comments]

    if(sort === "descending") {
        sortedComments.sort((commenta, commentb) => {
            let nameA = commenta.user.toUpperCase(); // ignore upper and lowercase
            let nameB = commentb.user.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0
        })
    }

    const filteredComments = sortedComments.filter(function(comment) {
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
            <select onChange={ handleSelect }>
                <option value="All">No Sort</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            {commentCards}
            
        </div>
    )
}

export default Comments 