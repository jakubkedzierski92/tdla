import styled from "styled-components";

export default styled.button`
display: flex;
  background-color: transparent;
  color: teal;
  padding: 10px;
  outline: none;
  border: none;
  margin: 5px;
  transition: 1s;
  color: teal;
  cursor: pointer;
  
&:hover {
  color: hsl(180, 100%, 30%);
  transform: scale(1.1);
}
&:disabled {
  color: black;
  transform: none;
}
`