import React from 'react'
import { Helmet } from 'react-helmet-async'

function News() {
  return (
      <>
       <Helmet>
        <title>News</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>News</div>
      </>
    
  )
}

export default News