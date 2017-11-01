import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexPage = () => (
  <div>
    <HugeFont>
      The Base is a place <FancyFor> for </FancyFor> coders of all backgrounds to learn and share ideas.
      don't forget to subscribe our weekly mail.

    <GoTo to="/weekly"> Go to archive</GoTo>
  </HugeFont>
  </div>
)

const HugeFont = styled.h1`
  font-size: 120pt;
`

const FancyFor = styled.h1`
  font-size: 120pt;
  text-decoration: underline;
  &:hover {
    color: yellow;
  }
`

const GoTo = styled(Link)`
  text-decoration: underline;
  background: black;
  color: #59418b;
  line-height: 1.3;
  &:hover {
    color: yellow;
    background: #59418b;
  }
`

export default IndexPage
