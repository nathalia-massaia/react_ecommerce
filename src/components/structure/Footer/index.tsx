import Accordion from 'components/ui/Accordion';
import { Facebook as FacebookIcon } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram';
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube';
import { Whatsapp as WhatsappIcon } from '@styled-icons/boxicons-logos/Whatsapp';
import informationMock from 'API/info.json';

import * as S from './styles';
import Button from 'components/generics/Button';

const Footer = () => (
  <S.Wrapper>
    <S.NewsletterWrapper>
      <div>
        Subscribe our newsletter
        <S.InputEmail type="text" placeholder="example@email.pt" />
      </div>
      <Button btntype="primary" fullwidth onClick={() => 'added to newsletter'}>
        Subscribe
      </Button>
    </S.NewsletterWrapper>

    <S.AccordionWrapper>
      {informationMock.map(({ title, description }) => (
        <Accordion key={title} title={title}>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </Accordion>
      ))}
    </S.AccordionWrapper>

    <S.SocialMediaWrapper>
      <p>FOLLOW US ON SOCIAL MEDIA</p>
      <S.SocialMediaIconWrapper>
        <FacebookIcon size={30} />
        <InstagramIcon size={30} />
        <YoutubeIcon size={30} />
        <WhatsappIcon size={30} />
      </S.SocialMediaIconWrapper>
    </S.SocialMediaWrapper>

    <S.CopyrightWrapper>
      <p>
        Made with ❤️ by{' '}
        <a
          href="https://linkedin.com/in/nathalia-massaia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nathália Massaia
        </a>
      </p>
      <p>© 2023 All rights reserved</p>
    </S.CopyrightWrapper>
  </S.Wrapper>
);

export default Footer;
