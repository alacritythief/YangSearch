import React from 'react';

class PolicyResults extends React.Component {
  generateResults = () => {
    let policyArray = [];
    let policies = this.props.policies;
    policies.forEach((policy) => {
      policyArray.push(
        <li key={policy.id}>
          <a 
            href={policy.url} 
            rel="noopener noreferrer"
            target="_blank">{ policy.name }
          </a>
        </li>
      )
    });
    return policyArray;
  }

  render () {
    if (this.props.policies.length <= 0) {
      return null;
    } else {
      return (
        <div>
          <h3>Results:</h3>
          <ul>
            { this.generateResults() }
          </ul>
        </div>
      )
    }
  }
};

export default PolicyResults;