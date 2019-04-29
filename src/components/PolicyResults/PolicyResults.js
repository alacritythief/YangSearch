import React from 'react';
import { PolicyResultsContainer } from '../../ui-components/containers';
import { PolicyList, PolicyListItem } from './styles';

class PolicyResults extends React.Component {
  generateResults = () => {
    let policyArray = [];
    let policies = this.props.policies;
    let count = 0;
    if (policies.length > 0) {
      policies.forEach((policy) => {
        policyArray.push(
          <PolicyListItem key={count}>
            <a 
              href={policy.url} 
              rel="noopener noreferrer"
              target="_blank">{ policy.name }
            </a>
          </PolicyListItem>
        )
        count++;
      });
    } else {
      policyArray.push(
        <PolicyListItem key={count}>
          No Policies :(
        </PolicyListItem>
      )
    }
    
    return policyArray;
  }

  render () {
    if (this.props.policies.length < 1 && this.props.searchValue.length < 2) {
      return null;
    } else {
      return (
        <PolicyResultsContainer>
          <h2>Policy Results related to "{this.props.searchValue}":</h2>
          <PolicyList>
            { this.generateResults() }
          </PolicyList>
        </PolicyResultsContainer>
      )
    }
  }
};

export default PolicyResults;