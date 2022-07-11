import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 25px;
  outline: 0;
  border: 0;
  background: ${(props) => props.theme.primaryGreen};
  font-size: 18px;
  color: ${(props) => props.theme.white};
`
