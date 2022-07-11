import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0 10px;
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

export const Title = styled.h2`
  font-size: 32px;
  color: ${(props) => props.theme.black};
  font-weight: 400;
  margin-bottom: 50px;
  text-align: center;

`

export const LogoImg = styled.img`
  margin: 30px 0;
  height: 60px;
  width: auto;
`
