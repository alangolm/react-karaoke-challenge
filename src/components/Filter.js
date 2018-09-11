import React, { Component } from 'react';

const Filter = props => {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input onChange={props.handleSearch} id="title-filter" type="text" />
      </div>
    )
}

export default Filter;
