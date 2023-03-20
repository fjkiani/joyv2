import React from 'react';
import coding from '../../images/coding.png';
import money from '../../images/money.png';
import ecom from '../../images/ecom.png';
import noCode from '../../images/noCode.png';
import ads from '../../images/ads.png';
import support from '../../images/support.png';
import video from '../../images/video.png';
import robot from '../../images/robot.png';



import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Summary = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={coding} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            We build compelling SEO optimized websites for businesses 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={money} />
          <ServicesH2>Point of sale integration</ServicesH2>
          <ServicesP>
            We implement POS solutions for your business and with integrations into your website 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={ecom} />
          <ServicesH2>eCommerce Solutions</ServicesH2>
          <ServicesP>
           We build eCommerce websites to empower entrepreneurs 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={noCode} />
          <ServicesH2>No Code or Low Code Websites</ServicesH2>
          <ServicesP>
            We build websites that can be fully managed by your team without a developer
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={ads} />
          <ServicesH2>Targeted Ad Solutions</ServicesH2>
          <ServicesP>
            We implement ads for your business so you can be discovered by your desired audience
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={support} />
          <ServicesH2>Dedicated Account Support</ServicesH2>
          <ServicesP>
            We provide dedicated account support to track and progress your business growth
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={video} />
          <ServicesH2>Content Creation</ServicesH2>
          <ServicesP>
            We provide full services for content creation from photography and videography to present your story
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={robot} />
          <ServicesH2>Automated Services</ServicesH2>
          <ServicesP>
            We provide automated services for scheduling your social media content, newsletter subscription 
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Summary;
