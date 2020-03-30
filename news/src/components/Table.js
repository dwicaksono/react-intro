
import React from 'react'

function isSearched(searchTerm) {
  return function (item) {
    return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }
}


const Table = ({ result, searchTerm, removeId }) => {
  return (
    <div>
      {
        result.filter(isSearched(searchTerm)).map(item =>
          <div key={item.objectID}>
            {/* {JSON.stringify(item)} */}
            <h1> <a href={item.url}> {item.title}</a>  by: {item.author} </h1>
            <h4> comment : {item.num_comments} | point : {item.points} </h4>
            <Button className="btn btn-danger" type="button" onClick={() => removeId(item.objectID)}>Remove me</Button>
          </div>
        )
      }
    </div>
  )
}

const Button = ({ onClick, children }) => <button onClick={onClick} > {children} </button>

export default Table