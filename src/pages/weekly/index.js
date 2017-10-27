import React from 'react'
import Link from 'gatsby-link'

const Weekly = () => {
  return (
    <div>
      <h1>Subscribe to Weekly </h1>
      <p>Every weekend we ship our editorialized take on this week in open source and software development. It's the email you need to read to not miss out. No spam!</p>
      <Link to="/weekly/archive">Archive</Link>
    </div>
  )
}


export default Weekly
