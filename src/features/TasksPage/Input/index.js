import styled from "styled-components";

export default styled.input`
  padding: 10px;
  margin-left: 10px;
  outline-color: teal;
  border: 1px solid #ccc;
  flex-basis: 100%;
  &:hover {
    border: 1px solid teal;
  }
  @media (max-width: 767px) {
    margin: 5px;
    flex-basis: 100%;
  }
`;