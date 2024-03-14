import styled from "styled-components";


export const HeroContainer = styled.div`
  background-color:black;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 95%, 0 100%);
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 130%;
  order: 1;
  @media (max-width: 960px) {
    width:100%;
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    width:100%;
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50px;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  //transform: rotate(10deg); /* Adjust the rotation angle as needed */
  border: 2px solid yellow;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: White;
  line-height: 68px;
  @media (max-width: 960px) {
    font-size: 35px;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 35px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: white;
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: Red;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin: 10px 0 42px;
  color: pink;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    line-height: 32px;
  
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 50%;
    max-width: 300px;
    text-align: center;
    padding: 15px 0;
    color:Black;
    border-radius: 10px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background-color:pink;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
