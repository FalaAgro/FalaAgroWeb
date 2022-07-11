import styled from "styled-components"

export const InputContainer = styled.input<{ mt?: string, mb?: string }>`
  width: 300px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.lightGray};
  padding: 0 20px;
  font-size: 16px;
  caret-color: ${(props) => props.theme.primaryGreen};
  
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};

  ::placeholder {
    color: ${(props) => props.theme.gray};
  }
  :focus {
    border: 2px solid ${(props) => props.theme.primaryGreen};
    outline: 0;
  }
`

