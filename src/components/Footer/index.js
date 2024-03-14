import styled from 'styled-components';
import Socialmediaicons from '../Socialmediaicons';

const FooterContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 1rem;
  color: white;
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: Aqua;
`;


const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: .5rem;
  color: pink;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: red;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Vivek Vishwanath Patil</Logo>
       
        <Socialmediaicons></Socialmediaicons>
        <Copyright>
          &copy; 2023 Vivek Patil. All rights reserved.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;