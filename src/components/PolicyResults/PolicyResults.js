import React from 'react';
import { PolicyResultsContainer, BlurbContainer } from '../../ui-components/containers';
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
        <React.Fragment>
          <BlurbContainer>
            <p>
              <a href="https://www.yang2020.com/meet-andrew/"
                rel="noopener noreferrer" 
                target="_blank">
                Andrew Yang
              </a> is running for President on a <a 
                href="https://youtu.be/gaN0I4-f3fM" 
                rel="noopener noreferrer" 
                target="_blank">
                campaign of ideas
              </a>
              , bringing
              21st century solutions to 21st century problems.<br/>
              His priority is to build a "trickle up" economy that serves "Humanity First", 
              that empowers local communities and everyday people.
            </p>
          </BlurbContainer>
          <PolicyResultsContainer>
            <p>
              <strong>
                Learn more about Andrew Yang by typing keywords 
                and topics in the search bar above. Policy links 
                will open in a new tab.
              </strong>
            </p>
            <p>
              <strong>You can search categories too:</strong> Culture, Economy, 
              Education, Environment, Foreign Policy, Government, Health, Immigration, 
              Legal, Media, Military, Society, Sports, States Rights, Technology, 
              Voting, and Workers' Rights.
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
            <p>
              <strong>How can I contribute?</strong><br/>
              This project is on <a href="https://github.com/alacritythief/YangSearch/"rel="noopener noreferrer" target="_blank">GitHub</a>, 
              read the Readme there!
            </p>
          </PolicyResultsContainer>
        </React.Fragment>
      )
    } else {
      return (
        <PolicyResultsContainer>
          <h3>Policies related to "{this.props.searchValue}":</h3>
          <PolicyList>
            { this.generateResults() }
          </PolicyList>
        </PolicyResultsContainer>
      )
    }
  }
};

export default PolicyResults;