import { useState } from 'react';
import { ChevronDown as ChevronDownIcon } from '@styled-icons/evil/ChevronDown';

import * as S from './styles';

type accordionData = {
  title: string;
  content?: string;
  children?: React.ReactNode;
};

const Accordion = ({
  title = 'Saiba mais',
  content,
  children
}: accordionData) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.Wrapper>
      <S.AccordionTitleWrapper onClick={() => setIsActive(!isActive)}>
        {title}
        <S.IconWrapper isOpen={isActive}>
          <ChevronDownIcon size={40} />
        </S.IconWrapper>
      </S.AccordionTitleWrapper>

      <S.AccordionContentWrapper isOpen={isActive}>
        {content || children}
      </S.AccordionContentWrapper>
    </S.Wrapper>
  );
};
export default Accordion;
