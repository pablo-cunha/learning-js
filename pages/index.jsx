import React from 'react'
import Header from '../components/Header'
import Articles from '../components/Articles'
import Bio from '../components/Bio'
import Footer from '../components/Footer'

function Home() {
  return ( 
    <>
    <Header>Learning JS</Header>
    <Bio/>
    <Articles/>
    <Footer/>
    </>
  )
}

export default Home