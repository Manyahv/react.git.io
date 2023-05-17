import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count}Products</div>
        <div className="filter-gender">
        Filter
        <select>
          <option value="">All</option>
          <option value="F">Female</option>
          <option value="M">Male</option> 
        </select>
        </div>
        <div className="filter-type">
        
        <select>
        <option value="">All</option>
          <option value="basic">Basic</option>
          <option value="polo">Polo</option>
          <option value="hoodie">Hoodie</option>
           
          
        </select>
        </div>
      </div>
    )
  }
}

