import react from "react";
import parse from 'html-react-parser'
import Header from "./Header";
import Bio from "./Bio"
import Footer from "./Footer";

function Post(props) {
    return (
        <div className="post-container">
            <Header>Learning JS</Header>
            {parse(props.posts[props.index].content)}
            <Bio/>
            <Footer/>
        </div>
    )
}

export default Post