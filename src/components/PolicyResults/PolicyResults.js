import React from 'react';

class PolicyResults extends React.Component {
  generateResults = () => {
    let policyArray = [];
    let results = this.props.results;
    results.forEach((result) => {
      policyArray.push(
        <li>{ result.name }</li>
      )
    });
    return policyArray;
  }

  render () {
    return (
      <ul>
        { this.generateResults }
      </ul>
    )
  }
};

export default PolicyResults;