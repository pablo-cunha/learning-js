import react from "react";
import Header from "./Header";
import Bio from "./Bio"

function Post({ posts }) {
    return (
        <div className="post-container">
            <Header>Learning JS</Header>
            {posts[1].content}
            <Bio/>
        </div>
    )
}

export default Post