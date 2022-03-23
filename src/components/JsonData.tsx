import React from 'react';
import styled from 'styled-components';
import ExpandableListItem from './ExpandableListItem';

const List = styled.ul`
  padding: 0;

  li {
    padding: 3px 5px 3px 20px;
  }
`;

const ListItem = styled.li`
  padding: 3px 5px 3px 20px;
  color: rgb(249, 247, 243);
  letter-spacing: 0.5px;
  border-left: 1px solid rgb(58, 64, 85);
  list-style-type: none;

  > ul {
    list-style-type: none;
  }
`;

const JsonData: React.FC<{data: any}> = ({ data }) => {
  const keys = Object.keys(data);

  return (
    <List>  
      {keys.map(item => {
        const value = data[item];
        return (
          <ListItem key={item}>
            {typeof value === 'object' ? (
              <ExpandableListItem label={item} itemsCount={Object.keys(value).length}>
                <JsonData data={value} />
              </ExpandableListItem>
            ) : `"${item}": ${data[item]}`
            }
          </ListItem>
        );
      })}
    </List>
  );
};

export default JsonData;