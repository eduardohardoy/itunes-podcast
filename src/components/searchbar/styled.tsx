import styled from "styled-components";

export const SearchbarContainer = styled.div`
  display: flex;
`;

const RoundedContainer = styled.div`
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 15px;
  display: flex;
  height: 50px;
`;

export const InputContainer = styled(RoundedContainer)`
  flex: 1;
  padding: 0 5px 0 20px;
`;

export const IconContainer = styled(RoundedContainer)`
  cursor: pointer;
  justify-content: center;
  margin-right: 10px;
  width: 50px;
`;

export const Input = styled.input`
  background-color: inherit;
  border: none;
  outline: none;
  margin-left: 10px;
  padding: 10px;
  width: 100%;
`;
