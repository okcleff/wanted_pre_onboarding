import React, { useState } from 'react';
import styled from 'styled-components';

const example = [
  'BTCUSD.PERP',
  'BCHUSD.PERP',
  'BCXUSD.PERP',
  'ETHUSD.PERP',
  'ETCUSD.PERP',
  'ECHUSD.PERP',
  'LTCUSD.PERP',
  'LRPUSD.PERP',
  'LCXUSD.PERP',
  'XRPUSD.PERP',
  'XCXUSD.PERP',
];

const Dropdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('All Symbols');

  const handleValue = (e) => {
    return setSearchValue(e.target.value);
  };

  const filteredList = [...example].filter((keyword) => {
    return keyword.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <Container>
      <DropdownMenu onClick={() => setIsVisible(!isVisible)}>
        {selectedKeyword}
      </DropdownMenu>
      {isVisible && (
        <SearchListWrapper>
          <Search placeholder='Search Symbol' onChange={handleValue} />
          {['All Symbols', ...filteredList].map((value) => {
            return (
              <KeywordList
                key={value}
                onClick={() => {
                  setIsVisible(false);
                  setSelectedKeyword(value);
                  setSearchValue('');
                }}
              >
                {value}
              </KeywordList>
            );
          })}
        </SearchListWrapper>
      )}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 600px;
  margin-bottom: 50px;
  background-color: #f7f7f7;
`;

const DropdownMenu = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  margin-bottom: 3px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

const SearchListWrapper = styled.div`
  box-shadow: 3px 3px 3px gray;
`;

const Search = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid black;
  background-color: white;
`;

const KeywordList = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 40px;
  background-color: white;
  cursor: pointer;
`;
