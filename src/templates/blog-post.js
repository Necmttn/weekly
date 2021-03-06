import React from 'react'

const BlogPostRoute = (props) => {
  const data = props.data.markdownRemark
  console.log(data)
  return (
    <div>
      <h1> {data.frontmatter.title} </h1>
      <div dangerouslySetInnerHTML={{ __html: data.html }}>
      </div>
    </div>
  )
}


export default BlogPostRoute

//  base on i18n.
// export const pageQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(fields: {slug: {eq: $path}}) {
//       fileAbsolutePath
//       html
//       excerpt
//       frontmatter {
//         title
//       }
//     }
//   }
// `;





// export const pageQuery = graphql`
// query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { path: { eq: $path } }) {
//       html
//       frontmatter {
//         path
//         title
//       }
//     }
//   }
// `;

