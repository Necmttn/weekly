import React from 'react'
import Card from '../Card'

// a.k.a each list
const Segment = (props) => {
  const data = props.data
  const cards = props.cards.filter(card => {
    return card.parent === data.id
  }).map(card => {
    return (
      <Card data={card} />
    )
  })
  return (
    <div key={data.id}>
      <h1> {data.name} </h1>
      {cards}
    </div>
  )
}


export default Segment

