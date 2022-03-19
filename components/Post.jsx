import react from "react";
import Header from "./Header";
import Bio from "./Bio"
import Footer from "./Footer";
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gradientDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default function Post(props) {
    return (
        <div className="post-container">
            <Header>Learning JS</Header>
            <ReactMarkdown components={{ code: ({ node, ...props }) => <SyntaxComponent {...props} /> }}>
                {props.posts[props.index].content}
            </ReactMarkdown>
            <Bio/>
            <Footer/>
        </div>
    )
}

const SyntaxComponent = (props) => {
    return (
        <SyntaxHighlighter language={props.language} style={gradientDark}>
          {props.children}
        </SyntaxHighlighter>
      )
}
