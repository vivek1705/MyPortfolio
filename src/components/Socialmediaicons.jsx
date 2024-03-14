import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import { Bio } from './constants.js';

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0.3rem;
  font-size: .5rem;
  color: pink;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;

function Socialmediaicons(){
    return(
<SocialMediaIcon>
<SocialMediaIcon href={Bio.facebook} target="display"><GithubIcon /></SocialMediaIcon>
<SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
<SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
<SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
<SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
</SocialMediaIcon>
);
}

export default Socialmediaicons;