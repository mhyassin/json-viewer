import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '../assets/arrow-down.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';

const IconContainer = styled.div`
  display: inline-block;
  width: 17px;
`;

const StyledLabel = styled.span`
  cursor: pointer;
  display: inline-block;
`;

const ContentContainer = styled.div<{isExpanded: boolean}>`
  display: ${props => (props.isExpanded ? 'block' : 'none')}
`;

const ItemsCount = styled.span`
  font-style: italic;
  margin-right: 6px;
  cursor: default;
`;

type ExpandableListItemProps = {
  itemsCount: number;
  label: string;
};

const ExpandableListItem: React.FC<ExpandableListItemProps> = ({ label, itemsCount, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e: React.SyntheticEvent) =>{
    e.stopPropagation();
    if(isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }

  return (
    <>
      <StyledLabel onClick={handleClick}>
        <IconContainer>
          {isExpanded ? <ArrowDown /> : <ArrowRight />}
        </IconContainer>
        "{label}":
        <ItemsCount>{isExpanded ? '' : ' {...}'} {itemsCount} items</ItemsCount>
      </StyledLabel> 

      <ContentContainer isExpanded={isExpanded}>
        {children}
      </ContentContainer>
    </>
  )
}

export default ExpandableListItem;