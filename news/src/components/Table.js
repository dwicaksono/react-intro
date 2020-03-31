
import React from 'react'
import { Card } from 'react-bootstrap'
// function isSearched(searchTerm) {
//   return function (item) {
//     return !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   }
// }


// const Table = ({ result, searchTerm, removeId }) => {
//   return (
//     <div>
//       {
//         result.filter(isSearched(searchTerm)).map(item =>
//           <div key={item.objectID}>
//             {/* {JSON.stringify(item)} */}
//             <h1> <a href={item.url}> {item.title}</a>  by: {item.author} </h1>
//             <h4> comment : {item.num_comments} | point : {item.points} </h4>
//             <Button className="btn btn-danger" type="button" onClick={() => removeId(item.objectID)}>Remove me</Button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// const Button = ({ onClick, children }) => <button onClick={onClick} > {children} </button>

const Table = (props) => {
  const style = {
    margin: '2em 2px'
  }
  return (
    <Card body style={style}>
      < div>
        <h2> <a href={props.url}>{props.title}</a></h2>
        <p>author by : {props.author}</p>
        <h4>comment : {props.comment} | point : {props.points}</h4>
        <br></br>
        <button className="btn btn-primary" onClick={props.deleted}>Remove</button>
      </div >
    </Card>
  )
}

export default Table