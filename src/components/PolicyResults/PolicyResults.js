import React from 'react';
import { PolicyResultsContainer } from '../../ui-components/containers';

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
    if (this.props.policies.length < 1) {
      return null;
    } else {
      return (
        <PolicyResultsContainer>
          <ul>
            { this.generateResults() }
          </ul>
        </PolicyResultsContainer>
      )
    }
  }
};

export default PolicyResults;