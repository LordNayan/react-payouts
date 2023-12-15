import debounce from "lodash/debounce";

import styled from "styled-components";
const SearchContainer = styled.form`
  width: 490px;
  height: 45px;
`;

const SearchBarInput = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  outline: none;
  border-radius: 6px;

  &:focus {
    border: 1px solid #008abf;
    transition: 0.35s ease;
    color: #008abf;

    &::placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
`;
const SearchIcon = styled.img`
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -60px;
  right: -10px;
`;

const SearchForm = ({ setUsername }: any) => {
  const handleInputChange = debounce((value: string) => {
    setUsername(value.toLowerCase());
  }, 800); // Adjust the debounce delay as needed

  return (
    <SearchContainer>
      <SearchBarInput
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e.target.value)
        }
        placeholder="Search by username"
      />
      <SearchIcon src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
    </SearchContainer>
  );
};

export default SearchForm;