import React from 'react'
import { Helmet } from 'react-helmet-async'
import Sectionone from '../sectionone/Sectionone'
import Sectionthree from '../Sectionthree/Sectionthree'
import Sectiontwo from '../sectiontwo/Sectiontwo'

function Home() {
  return (
      <>
       <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Sectionone></Sectionone>
      <Sectiontwo></Sectiontwo>
      <Sectionthree></Sectionthree>
      </>
    
  )
}

export default Home