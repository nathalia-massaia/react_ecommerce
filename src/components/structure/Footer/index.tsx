import Accordion from 'components/ui/Accordion';
import { Facebook as FacebookIcon } from '@styled-icons/boxicons-logos/Facebook';
import { Instagram as InstagramIcon } from '@styled-icons/boxicons-logos/Instagram';
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube';
import { Whatsapp as WhatsappIcon } from '@styled-icons/boxicons-logos/Whatsapp';
import * as S from './styles';

const informationList = [
  {
    title: 'About Us',
    children: (
      <S.AccordionItemContent>
        <p>
          Safoda Lisbon is a Portuguese brand created to celebrate
          &quot;freedom&quot;
        </p>

        <p>A brand inspired by urban subcultures and tailor-made for rebels.</p>

        <p>They will always try to silence us but they will never succeed!</p>

        <p>STAY REBEL - FIGHT BACK !</p>
      </S.AccordionItemContent>
    )
  },
  {
    title: 'Privacy Policy',
    children: (
      <S.AccordionItemContent>
        <p>
          <strong>SAFODA LISBON PRIVACY POLICY</strong>
        </p>
        <p>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          www.safodalisbon.pt
        </p>
        <p>
          <strong>PERSONAL INFORMATION WE COLLECT</strong>
        </p>
        <p>
          When you visit the Site, we automatically collect certain information
          about your device, including information about your web browser, IP
          address, time zone, and some of the cookies that are installed on your
          device. Additionally, as you browse the Site, we collect information
          about the individual web pages or products that you view, what
          websites or search terms referred you to the Site, and information
          about how you interact with the Site. We refer to this automatically-
          collected information as &quot;Device Information&quot;.
        </p>
        <p>We collect Device Information using the following technologies:</p>
        <p>
          - &quot;Cookies&quot; are data files that are placed on your device or
          computer and often include an anonymous unique identifier. For more
          information about cookies, and how to disable cookies, visit
          http://www.allaboutcookies.org.
        </p>
        <p>
          - &quot;Log files&quot; track actions occurring on the Site, and
          collect data including your IP address, browser type, Internet service
          provider, referring/exit pages, and date/time stamps. - &quot;Web
          beacons,&quot; &quot;tags,&quot; and &quot;pixels&quot; are electronic
          files used to record information about how you browse the Site.
        </p>
        <p>
          Additionally when you make a purchase or attempt to make a purchase
          through the Site, we collect certain information from you, including
          your name, billing address, shipping address, payment information
          (including credit card numbers or Paypal Information), email address,
          and phone number. We refer to this information as &quot;Order
          Information&quot;.
        </p>
        <p>
          When we talk about &quot;Personal Information&quot; in this Privacy
          Policy, we are talking both about Device Information and Order
          Information.
        </p>
        <p>
          <strong>HOW DO WE USE YOUR PERSONAL INFORMATION?</strong>
        </p>
        <p>
          We use the Order Information that we collect generally to fulfil any
          orders placed through the Site (including processing your payment
          information, arranging for shipping, and providing you with invoices
          and/or order confirmations). Additionally, we use this Order
          Information to: Communicate with you; Screen our orders for potential
          risk or fraud; and When in line with the preferences you have shared
          with us, provide you with information or advertising relating to our
          products or services.
        </p>
        <p>
          We use the Device Information that we collect to help us screen for
          potential risk and fraud (in particular, your IP address), and more
          generally to improve and optimize our Site (for example, by generating
          analytics about how our customers browse and interact with the Site,
          and to assess the success of our marketing and advertising campaigns).
        </p>
        <p>
          <strong>SHARING YOUR PERSONAL INFORMATION</strong>
        </p>
        <p>
          We share your Personal Information with third parties to help us use
          your Personal Information, as described above. For example we use
          Google Analytics to help us understand how our customers use the
          Site--you can read more about how Google uses your Personal
          Information here: https://www.google.com/intl/en/policies/privacy/.
          You can also opt-out of Google Analytics here:
          https://tools.google.com/dlpage/gaoptout, we also use
          facebook,intagram and other social media third parties.
        </p>
        <p>
          Finally, we may also share your Personal Information to comply with
          applicable laws and regulations, to respond to a subpoena, search
          warrant or other lawful request for information we receive, or to
          otherwise protect our rights.
        </p>
        <p>
          <strong>DO NOT TRACK</strong>
        </p>
        <p>
          Please note that we do not alter our Site’s data collection and use
          practices when we see a Do Not Track signal from your browser.
        </p>
        <p>
          <strong>YOUR RIGHTS</strong>
        </p>
        <p>
          If you are a European resident, you have the right to access personal
          information we hold about you and to ask that your personal
          information be corrected, updated, or deleted. If you would like to
          exercise this right, please contact us through the contact information
          below.
        </p>
        <p>
          Additionally, if you are a European resident we note that we are
          processing your information in order to fulfill contracts we might
          have with you (for example if you make an order through the Site), or
          otherwise to pursue our legitimate business interests listed above.
          Additionally, please note that your information will be transferred
          outside of Europe, including to Canada and the United States.
        </p>
        <p>
          <strong>DATA RETENTION</strong>
        </p>
        <p>
          When you place an order through the Site, we will maintain your Order
          Information for our records unless and until you ask us to delete this
          information.
        </p>
        <p>
          <strong>CHANGES</strong>
        </p>
        <p>
          We may update this privacy policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal or regulatory reasons.
        </p>
        <p>
          <strong>CONTACT US</strong>
        </p>
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at contact@safodalisbon.pt
        </p>
      </S.AccordionItemContent>
    )
  },
  {
    title: 'Returns & Refunds',
    children: (
      <S.AccordionItemContent>
        <p>Returns & Refunds</p>
        <p>
          RETURN/EXCHANGE POLICY: All return/exchange requests must be made
          within 30 days of the purchase date.
        </p>
        <p>
          We only accept merchandise that is unworn, unwashed, and with the tag
          still intact.
        </p>
        <p>
          All returns and exchanges will need to have the return form on the
          back of the packing slip filled out and included with your returned
          package - NO EXCEPTIONS.
        </p>
        <p>
          Please note we do not refund original shipping fees and we do not
          cover return costs for return/exchange requests.
        </p>
        <p>
          To exchange or return a product, please contact us at
          contact@safodalisbon.pt to receive the return form.
        </p>
        <p>
          Safoda Lisbon reserves the right to refuse requests that do not meet
          the requirements of our return policy.
        </p>
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
  </S.Wrapper>
);

export default Footer;
