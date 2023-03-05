import Accordion from 'components/ui/Accordion';
import { Facebook as FacebookIcon } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram';
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube';
import { Whatsapp as WhatsappIcon } from '@styled-icons/boxicons-logos/Whatsapp';
import info from 'API/info.json';
import * as S from './styles';

const informationList = [
  {
    title: 'About Us',
    children: (
      <S.AccordionItemContent>{info.description}</S.AccordionItemContent>
    )
  },
  {
    title: 'Privacy Policy',
    children: (
      <S.AccordionItemContent>
        <strong>{info.privacy_policy.title}</strong>
        <p> {info.privacy_policy.description}</p>
      </S.AccordionItemContent>
    )
  },
  {
    title: 'Returns & Refunds',
    children: (
      <S.AccordionItemContent>
        <strong>{info.returns_and_refounds.title}</strong>
        <p>{info.returns_and_refounds.description}</p>
      </S.AccordionItemContent>
    )
  },
  {
    title: 'Contact Us',
    children: (
      <S.AccordionItemContent>
        <p>♠</p>
        <span>Pedro Ataíde</span>
        <span>APARTADO 031 - CCT LINDA-A-VELHA</span>
        <span>Rua Antero de Quental, 15</span>
        <span>2795-999 Linda-a-Velha</span>
        <span>LISBOA-PORTUGAL</span>
        <span>contact@safodalisbon.pt</span>
      </S.AccordionItemContent>
    )
  }
];

const Footer = () => (
  <S.Wrapper>
    <S.InputEmail type="text" placeholder="example@email.pt" />
    <S.SubscribeButton type="submit" value="SUBSCRIBE">
      SUBSCRIBE
    </S.SubscribeButton>

    <S.AccordionWrapper>
      {informationList.map(({ title, children }, index) => (
        <Accordion key={`${title}-${index}`} title={title}>
          {children}
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

    <S.CopyrightWrapper>
      <p>© 2023 All rights reserved</p>
    </S.CopyrightWrapper>
  </S.Wrapper>
);

export default Footer;
