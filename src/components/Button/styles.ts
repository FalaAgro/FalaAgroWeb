import styled from 'styled-components'

export const ButtonContainer = styled.button<{ mt?: string, mb?: string }>`
  width: 300px;
  height: 50px;
  border-radius: 25px;
  outline: 0;
  border: 0;
  background: ${(props) => props.theme.primaryGreen};
  font-size: 18px;
  color: ${(props) => props.theme.white};
  margin-top: ${props => props.mt || '0'};
  margin-bottom: ${props => props.mb || '0'};
  transition: .3s ease;
  cursor: pointer;
  
  :hover {
    background: ${(props) => props.theme.black};
  }
  
  :disabled {
    background: ${(props) => props.theme.lightGray};
    cursor: default;
  }
`
