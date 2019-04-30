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
            <strong>Who is Andrew Yang?</strong><br/>
            <a href="https://youtu.be/HeYZlp0IvCo" rel="noopener noreferrer" target="_blank">
            Andrew Yang is running for President (video)</a> as a Democrat in 2020 
            and he's here to remind us that the economy exists to serve 
            the people and not the other way around. His first priority will be to implement a Universal Basic Income
            for every American adult over the age of 18: $1,000 a month, no strings attached, paid for by a new tax on 
            the companies benefiting most from automation. <a href="https://www.yang2020.com/meet-andrew/" rel="noopener noreferrer" target="_blank">
            You can read more about him here</a>.
          </p>
          <p>
            <strong>What is the purpose of this site?</strong><br/>
            To be a quick portal to find everything related to Andrew Yang's 2020 campaign: 
            his policies, interviews, rallies, media appearances, and content from his supporters 
            nicknamed the "Yang Gang". For this first version we have searchable policies. 
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