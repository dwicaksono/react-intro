import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

const Page = (props) => {
  return (
    <Pagination>
      {/* <Pagination.First /> */}
      <Pagination.Prev onClick={props.prev} />
      <Pagination.Next onClick={props.next} />
    </Pagination>

  )
}

export default Page