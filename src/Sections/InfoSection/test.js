import React from 'react';
import homeObjOne from "../InfoSection/Data"

import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';


const InfoSection = () => {
  return (
    <section className="section bg-grey">
      {/* <Title title="services" /> */}
      <div className="section-center services-center">
        {homeObjOne.map(service => {
          const { image, id, headline, InfoSection, description } = service
          console.log(image)
          return (
            <article key={image} className="service">
              
              <h4>{headline}</h4>
              <div className="underline"></div>
              <p>{description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}


// const InfoSection = ({

// }) => {
//   // console.log(image);
//   return (
//     <>
  
    
//       <InfoContainer lightBg={lightBg} id={id}>
//         <InfoWrapper>
//           <InfoRow imgStart={imgStart}>
//             <Column1>
//               <TextWrapper>
//                 <TopLine>{topLine}</TopLine>
//                 <Heading lightText={lightText}>{headline}</Heading>
//                 <Subtitle darkText={darkText}>{description}</Subtitle>
//                 <BtnWrap>
//                   <Button
//                     to='home'
//                     smooth={true}
//                     duration={500}
//                     spy={true}
//                     exact='true'
//                     offset={-80}
//                     primary={primary ? 1 : 0}
//                     dark={dark ? 1 : 0}
//                     dark2={dark2 ? 1 : 0}
//                   >
//                     {buttonLabel}
//                   </Button>
//                 </BtnWrap>
//               </TextWrapper>
//             </Column1>
//             <Column2>
//               <ImgWrap>
//                 <Img src={image} alt={alt} />
//               </ImgWrap>
//             </Column2>
//           </InfoRow>
//         </InfoWrapper>
//       </InfoContainer>
//     </>
//   );
// };

export default InfoSection;




</div>// const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
// }) => {
//   // console.log(img);
//   return (
//     <>
  
    
//       <InfoContainer lightBg={lightBg} id={id}>
//         <InfoWrapper>
//           <InfoRow imgStart={imgStart}>
//             <Column1>
//               <TextWrapper>
//                 <TopLine>{topLine}</TopLine>
//                 <Heading lightText={lightText}>{headline}</Heading>
//                 <Subtitle darkText={darkText}>{description}</Subtitle>
//                 <BtnWrap>
//                   <Button
//                     to='home'
//                     smooth={true}
//                     duration={500}
//                     spy={true}
//                     exact='true'
//                     offset={-80}
//                     primary={primary ? 1 : 0}
//                     dark={dark ? 1 : 0}
//                     dark2={dark2 ? 1 : 0}
//                   >
//                     {buttonLabel}
//                   </Button>
//                 </BtnWrap>
//               </TextWrapper>
//             </Column1>
//             <Column2>
//               <ImgWrap>
//                 <Img src={img} alt={alt} />
//               </ImgWrap>
//             </Column2>
//           </InfoRow>
//         </InfoWrapper>
//       </InfoContainer>
//     </>
//   );
// };

// export default InfoSection;



return  (
  <section className='section'>

  <div className='section-center'>
    {items.map((item, itemIndex) => {
      const {   
        lightBg,
        imgStart,
        topLine,
        lightText,
        headline,
        description,
        buttonLabel,
        image,
        alt,
        id,
        primary,
        darkText,
        dark,
        dark2 } = item;
        console.log(image)
      return (
      <Img src={image} alt={alt} />

        
      
      );
    })}
  

  </div>
</section>
);
}

export default InfoSection;