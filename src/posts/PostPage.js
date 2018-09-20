import React, { Component } from 'react'

export default class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <h1>bruh</h1>
        {data.markdownRemark.excerpt}
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
