import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Segment from '../components/Segment'
import styled from "styled-components"


const Weekly = ({data}) => {
  const segments = data.lists.filter(list => {
    return list.name !== '_meta'
  }).map(list => {
    return (
      <Segment list={list}/>
    )
  })
  return (
    <div>
      <Helmet
        title={data.name}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <EmailWrap>
        <h1> { data.name }</h1>
        {segments}
      </EmailWrap>
    </div>
  )
}


const EmailWrap = styled.div`
  max-width: 600px;
  padding-top: 10px;

`


Weekly.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default Weekly
