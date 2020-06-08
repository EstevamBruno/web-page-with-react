import React, { useEffect, useState } from 'react';
import {
  FiGithub,
  FiMail,
  FiLinkedin,
  FiPhone,
  FiArrowUpCircle,
  FiWifiOff
} from 'react-icons/fi';

import {
  Container,
  Header, Content,
  HeaderContent,
  Profile,
  ProfileDescription,
  ProfileSocial,
  Skills,
  SkillsContent,
  SkillsList,
  ResponsiveSkills,
  ResponsiveSkillsContent,
  Contact,
  ContactContent,
  Footer,
  FooterContent,
  Offline
} from './styles';

import ImgProfile from '../../assets/images/profile.jpg';
import ImgDevices from '../../assets/images/devices.png';
import ImgPhone from '../../assets/images/phone.png';

const Main: React.FC = () => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', handleNetworkChange);
    window.addEventListener('offline', handleNetworkChange);
  }, [])

  function handleNetworkChange() {
    setOnline(navigator.onLine);
  }

  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <Container>
      <Header>
        <Content>
          <HeaderContent>
            <img src={ImgProfile} alt='Profile' />
            <Profile>
              <ProfileDescription>
                <p>Bruno Kennedy</p>
                <span>front-end web developer</span>
                <span> 27 anos, Mossoró-RN.</span>
                <p>
                  Apaixonado por tecnologia e suas soluções, especificamente no
                  desenvolvimento web, onde conectei trabalho e o prazer em produzir e
                  solucionar problemas. Sempre buscando aprender coisas novas e repassar esses conhecimentos ao próximo.
                </p>
              </ProfileDescription>
              <ProfileSocial>
                <a href="https://github.com/EstevamBruno" rel="noopener noreferrer" target='_blank'>
                  <FiGithub size={24} color='#f0f0f5' />
                </a>
                <a href="mailto:brunokennedy16@gmail.com">
                  <FiMail size={24} color='#f0f0f5' />
                </a>
                <a href="https://www.linkedin.com/in/bruno-kennedy-8b779a1a9/" rel="noopener noreferrer" target="_blank">
                  <FiLinkedin size={24} color='#f0f0f5' />
                </a>
              </ProfileSocial>
            </Profile>
          </HeaderContent>
        </Content>
      </Header>

      <Skills>
        <Content>
          <SkillsContent>
            <SkillsList>
              <li>Tecnologias</li>
              <li>HTML 5</li>
              <li>CSS 3 (Design Responsivo)</li>
              <li>Javascript (ES6+)</li>
              <li>Typescript</li>
              <li>Firebase (Conhecimentos básicos)</li>
            </SkillsList>
            <SkillsList>
              <li>Frameworks/Libs</li>
              <li>Angular 6+</li>
              <li>ReactJS</li>
            </SkillsList>
            <SkillsList>
              <li>Experiência</li>
              <li>ERP</li>
              <li>Gestão de solicitações de benefícios</li>
              <li>Gestão para aplicativo de mobilidade urbana</li>
            </SkillsList>
          </SkillsContent>
        </Content>
      </Skills>

      <ResponsiveSkills>
        <Content>
          <ResponsiveSkillsContent>
            <p>
              Aplicações desenvolvidas pensando sempre na comodidade do usuário,
              fazendo com que o mesmo se sinta confortável ao acessar de qualquer
              dispositivo.
            </p>
            <div>
              <h1>Layouts Responsivos</h1>
              <img src={ImgDevices} alt="devices" />
            </div>
          </ResponsiveSkillsContent>
        </Content>
      </ResponsiveSkills>
    
      <Contact>
        <Content>
          <ContactContent>
            <div>
              <h1>Fale Comigo</h1>
              <img src={ImgPhone} alt="Phone" />
            </div>
            <ul>
              <li>
                <FiPhone size={24} />
                <span>(84) 9 8182-8830</span>
              </li>
              <li>
                <FiMail size={24} />
                <span>brunokennedy16@gmail.com</span>
              </li>
            </ul>
          </ContactContent>
        </Content>
      </Contact>
    
      <Footer>
        <Content>
          <FooterContent>
            <a href="https://github.com/EstevamBruno/web-page-with-react" rel="noopener noreferrer" target='_blank'>
              <FiGithub size={32} color='#f0f0f4' />
              <span>Código fonte</span>
            </a>
            <span>
              <FiArrowUpCircle size={32} color='#f0f0f5' onClick={goToTop} />
            </span>
          </FooterContent>
        </Content>
      </Footer>
    
      { !online && (
        <Offline>
          <span>Você está offline</span> 
          <FiWifiOff size={16} />
        </Offline>
      ) }
    </Container>
  );
}

export default Main;