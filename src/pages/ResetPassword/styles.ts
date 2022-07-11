import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const FormContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 42px;
  align-items: center;
`
