import Post from "../components/Post"
import React from 'react'
import { getAllPosts } from "../scripts/blog/getAllPosts"

function SegundoArtigo({ posts }) {
  return (
    <div>
        <Post index="1" posts={posts}/>
    </div>
  )
}

export default SegundoArtigo

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
      props: {
          posts
      }
  }
}