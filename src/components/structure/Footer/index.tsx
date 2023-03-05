import Accordion from 'components/ui/Accordion';
import informationMock from 'API/info.json';
import { Facebook as FacebookIcon } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram';
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube';
import { Whatsapp as WhatsappIcon } from '@styled-icons/boxicons-logos/Whatsapp';
import * as S from './styles';

const Footer = () => (
  <S.Wrapper>
    <S.InputEmail type="text" placeholder="example@email.pt" />
    <S.SubscribeButton type="submit" value="SUBSCRIBE">
      SUBSCRIBE
    </S.SubscribeButton>

    <S.AccordionWrapper>
      {informationMock.map(({ title, description }) => (
        <Accordion key={title} title={title}>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </Accordion>
      ))}
    </S.AccordionWrapper>

    <p>FOLLOW US ON SOCIAL MEDIA</p>
    <S.SocialMediaIcon>
      <FacebookIcon size={40} />
      <InstagramIcon size={40} />
      <YoutubeIcon size={40} />
      <WhatsappIcon size={40} />
    </S.SocialMediaIcon>
  </S.Wrapper>
);

export default Footer;
