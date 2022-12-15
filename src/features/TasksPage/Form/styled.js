import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
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

export const FormButton = styled.button`
  background-color: teal;
  color: white;
  border: #ccc;
  margin: 10px;
  padding: 10px;
  flex-basis: 70%;
  cursor: pointer;
  transition: 1s;
  &:hover {
    color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }
  @media (max-width: 767px) {
    margin: 5px;
    flex-basis: 100%;
  }
`;

export const HiddenDiv1 = styled.div`
  display: flex;
  width: 40%;
  margin-right: 0px;
  justify-content: flex-end;
  
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const HiddenDiv2= styled.div`
  display: flex;
  width: 100%;
  margin-right: 0px;
  justify-content: flex-start;
`;