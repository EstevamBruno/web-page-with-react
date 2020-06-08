import styled from 'styled-components';

import WaveBackground from '../../assets/images/wave.svg';
import CheckCircle from '../../assets/images/check-circle.svg';

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 1200px;
  
  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 1300px) {
    width: 960px;
  }
`;

// Header Styleas

export const Header = styled.header`
  width: 100%;
  height: 50vh;
  background-color: rgb(49, 87, 175);
  color: #f0f0f5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 24px;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  img {
    border-radius: 50%;
    border: 2px solid #f0f0f5;
    margin-right: 24px;
    transition: box-shadow 0.2s;

    :hover {
      box-shadow: 0 0 5px #f0f0f5;
    }
  }

  @media (max-width: 600px) {
    height: 100vh;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 180px;
      margin-top: 40px;
      margin-right: 0;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (max-width: 600px) {
    justify-content: space-around;

    P, span {
      text-align: center;
    }
  }
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;

    p {
      font-size: 24px;
    }

    span {
      text-transform: uppercase;
      font-size: 12px;
    }

    span + p {
      font-size: 14px;
      margin-top: 32px;
    }

    @media (max-width: 600px) {
      span + p {
        font-size: 16px;
        line-height: 24px;
      }
    }
`;

export const ProfileSocial = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  a + a {
    margin-left: 8px;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

// Skills Styles

export const Skills = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px)  {
    height: 100vh;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1024px) {
    padding: 24px;
  }
`;

export const SkillsList = styled.ul`
  list-style-image: url(${CheckCircle});
  color: #3157af;
  padding: 0 0 0 24px;

  li {
    font-size: 18px;
    line-height: 25px;
    transition: opacity 0.2s;

    :first-child {
      list-style: none;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    :hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 1024px) {
    max-width: 280px;
    margin: 24px 0;
  }
`;

export const ResponsiveSkills = styled.section`
  width: 100%;
  height: 50vh;
  background-color: #3157af;
  color: #f0f0f5;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 24px;
  }
`;

export const ResponsiveSkillsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  p {
    font-size: 24px;
    line-height: 32px;
  }

  div {
    text-align: center;

    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

// Contact styles

export const Contact = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3157af;
  background-image: url(${WaveBackground});
  background-size: cover;
  background-position-y: 100%;

  @media (max-width: 1024px) {
    height: 100vh;
    padding: 0 24px;
  }

  @media (max-width: 1380px) {
    background-image: none;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  div {
    text-align: center;
    margin-top: 40px;

    h1 {
      font-size: 24px;
    }

    img {
      width: 280px;
    }
  }

  ul {
    list-style: none;
    color: #f0f0f5;

    li {
      font-size: 24px;
      line-height: 32px;

      display: flex;
      align-items: center;

      span {
        margin-left: 8px;
      }

      @media (max-width: 1380px) {
        color: #3157af
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 24px;

    ul {
      margin-bottom: 40px;
    }
  }

  @media (max-width: 1024px) {
    ul {
      margin-bottom: 0;
    }
  }
`;

// Footer styles

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3157af;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 8px 0;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f0f0f5;

    span {
      margin-left: 8px;
    }
  }

  span {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    padding: 16px 0;
  }

  @media (max-width: 1204px) {
    margin: 0 24px;
  }
`;