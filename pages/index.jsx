import React from 'react'
import Header from '../components/Header'
import Articles from '../components/Articles'
import Bio from '../components/Bio'
import Footer from '../components/Footer'
import { getAllPosts } from "../scripts/blog/getAllPosts";

function Home({ posts }) {
  return ( 
    <>
    <Header>Learning JS</Header>
    <Bio/>
    <Articles posts={posts}/>
    <Footer/>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const posts = getAllPosts()

  return {
      props: {
          posts
      }
  }
}