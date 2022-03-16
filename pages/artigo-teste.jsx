import Post from "../components/Post"
import React from 'react'
import { getAllPosts } from "../scripts/blog/getAllPosts"

function ArtigoTeste({ posts }) {
  return (
    <div>
        <Post index="0" posts={posts}/>
    </div>
  )
}

export default ArtigoTeste

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
      props: {
          posts
      }
  }
}