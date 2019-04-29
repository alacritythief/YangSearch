import React from 'react';
import { PolicyResultsContainer } from '../../ui-components/containers';

class PolicyResults extends React.Component {
  generateResults = () => {
    let policyArray = [];
    let policies = this.props.policies;
    let count = 0;
    policies.forEach((policy) => {
      policyArray.push(
        <li key={count}>
          <a 
            href={policy.url} 
            rel="noopener noreferrer"
            target="_blank">{ policy.name }
          </a>
        </li>
      )
      count++;
    });
    return policyArray;
  }

  render () {
    if (this.props.policies.length < 1 && this.props.searchValue.length < 3) {
      return null;
    } else {
      return (
        <PolicyResultsContainer>
          <h2>Policy Results for "{this.props.searchValue}":</h2>
          <ul>
            { this.generateResults() }
          </ul>
        </PolicyResultsContainer>
      )
    }
  }
};

export default PolicyResults;