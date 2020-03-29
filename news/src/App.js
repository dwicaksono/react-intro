import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const lists = [
    {
      id: 1,
      name: 'A',
      author: 'a',
      url: 'https://www.netflix.com/',
      comment: 10,
      point: 100
    },
    {
      id: 2,
      name: 'B',
      author: 'b',
      url: 'https://www.netflix.com/',
      comment: 9,
      point: 90
    },
    {
      id: 3,
      name: 'C',
      author: 'c',
      url: 'https://www.netflix.com/',
      comment: 11,
      point: 100
    }
  ]
  return (
    < div className="App" >
      {
        lists.map(list => {
          return (
            <div key={list.id}>
              <h1> <a href={list.url}>{list.name} </a>by: {list.author}</h1>
              <h5>{list.comment} comment | {list.point} point</h5>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
