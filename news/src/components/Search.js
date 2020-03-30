import React from 'react';
import { InputGroup } from 'react-bootstrap'

const Search = ({ onChange, value, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <h1>
          {children}
        </h1>
        <div className="input-group">
          <input className="form-control width100" type="text" onChange={onChange} value={value} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="submit">Search</button>
          </span>
        </div>
      </InputGroup>
    </form >
  )
}

export default Search