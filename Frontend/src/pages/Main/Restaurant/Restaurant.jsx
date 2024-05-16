import React from 'react'
import { Helmet } from 'react-helmet-async'

function Restaurant() {
  return (
      <>
       <Helmet>
        <title>Restaurant</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
       <div>Restaurant</div>
      </>
   
  )
}

export default Restaurant