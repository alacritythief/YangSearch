import React from 'react';
import { 
  PolicyResultsContainer,
  BlurbContainer,
  FollowContainer
} from '../../ui-components/containers';
import { ReactComponent as FacebookIcon } from '../../img/facebook.svg';
import { ReactComponent as InstagramIcon } from '../../img/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../img/twitter.svg';
import { ReactComponent as YouTubeIcon } from '../../img/youtube.svg';
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
              21st century solutions to 21st century problems. <br/>
              His priority is to build a "trickle up" economy that serves <a 
                href="https://www.yang2020.com/policies/human-capitalism/"
                rel="noopener noreferrer" 
                target="_blank">
                "Humanity First"
              </a>, empowering every citizen and their local communities.
            </p>
          </BlurbContainer>
          <FollowContainer>
            <p>FOLLOW ANDREW YANG ON SOCIAL MEDIA</p>
            <ul>
              <li>
                <a href="https://www.facebook.com/andrewyang2020/" 
                rel="noopener noreferrer" 
                target="_blank">
                  <FacebookIcon/>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/andrewyang2020" 
                rel="noopener noreferrer" 
                target="_blank">
                  <InstagramIcon/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/andrewyang" 
                rel="noopener noreferrer" 
                target="_blank">
                  <TwitterIcon/>
                </a>
                </li>
              <li>
                <a href="https://www.youtube.com/channel/UCriIuQZpMi6gEt_2P7xKCww" 
                rel="noopener noreferrer" 
                target="_blank">
                  <YouTubeIcon/>
                </a>
              </li>
            </ul>
          </FollowContainer>
          <PolicyResultsContainer>
            <p>
              <strong>
                Learn how Andrew Yang is working to improve the lives of every American 
                by typing keywords and topics in the search bar above. Policy links 
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
              To be a quick way to find an Andrew Yang policy relevant to you.
            </p>
            <p>
              This website is not affiliated with the official Yang2020 campaign, however it is supported 
              with the help and hard work of Yang Gang volunteers across the USA.
            </p>
            <p>
              <strong>Latest Update (9/6/19):</strong><br/> Multiple keyword search. You can now enter multiple 
              keywords separated by commas (ex. "medicare, ubi, democracy dollars") and get relevant results for 
              all of those keywords! Also added new policies to the search and updated the logo.
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