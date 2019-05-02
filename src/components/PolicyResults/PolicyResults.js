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
            <strong>Type any keyword in the search bar  
            above to see Andrew Yang's related policies. 
            Policy links will open in a new tab.</strong>
          </p>
          <p>
            <strong>You can search categories too:</strong> Arts, Capitalism, Culture, Economy, 
            Education, Environment, Foreign Policy, Government, Health, Immigration, 
            Legal, Media, Military, Society, Sports, States Rights, Technology, 
            Univeral Basic Income, Voting, and Workers' Rights.
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
            This website is not affiliated with the official Yang2020 campaign, however it is supported 
            with the help of Yang Gang volunteers across the USA.
          </p>
          <p>
            <strong>New features coming very soon:</strong><br/> Video search with topic timestamps, User submissions, FAQ with Questions &amp; Answers, and volunteer resources.
          </p>
        </PolicyResultsContainer>
      )
    } else {
      return (
        <PolicyResultsContainer>
          <h3><strong>Policies related to "{this.props.searchValue}":</strong></h3>
          <PolicyList>
            { this.generateResults() }
          </PolicyList>
        </PolicyResultsContainer>
      )
    }
  }
};

export default PolicyResults;