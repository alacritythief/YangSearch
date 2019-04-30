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
      return (
        <PolicyResultsContainer>
          <p>
            <strong>Type any keyword in the search bar (like: education, health, jobs) 
            above to see Andrew Yang's related policies. 
            Policy links will open in a new tab.</strong>
          </p>
          <p>
            <a href="https://youtu.be/HeYZlp0IvCo">Andrew Yang is running for President</a> as a Democrat in 2020 
            and he's here to remind us that the economy exists to serve 
            the people and not the other way around. <a href="https://twitter.com/hashtag/Yang2020">#Yang2020</a> <a href="https://twitter.com/hashtag/HumanityFirst">#HumanityFirst</a>
          </p>
          <p>
            <strong>New features coming very soon:</strong><br/> Video search with topic timestamps, User submissions, FAQ with Questions &amp; Answers.
          </p>
        </PolicyResultsContainer>
      )
    } else {
      return (
        <PolicyResultsContainer>
          <h2>Policies related to "{this.props.searchValue}":</h2>
          <PolicyList>
            { this.generateResults() }
          </PolicyList>
        </PolicyResultsContainer>
      )
    }
  }
};

export default PolicyResults;