import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import * as yup from "yup"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { Container, ErrorMsg, FormContainer, InputContainer, LogoImg, Title } from "./styles"

import LogoSVG from "../../assets/logo.svg"
import { ErrorMessage, Formik } from "formik"

const minError = 'Mínimo de 8 caracteres'
const requiredError = 'Campo obrigatório'
const samePasswordError = 'As senhas devem ser iguais'

interface valuesBody {
  password: string
}

export function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const { search } = useLocation()
  const token = search.slice(1)

  async function handleSubmitForm({ password }: valuesBody) {
    setIsLoading(true)
    const body = {
      token,
      password
    }

    try {
      await api.put('/users/reset-password', body)
      setIsDone(true)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <FormContainer>
        <LogoImg src={LogoSVG} />
        {!isDone ? (
          <Formik
            initialValues={{
              password: '',
              confirmPassword: ''
            }}
            validationSchema={yup.object().shape({
              password: yup.string().required(requiredError).min(8, minError),
              confirmPassword: yup.string().required(requiredError).oneOf([yup.ref('password'), null], samePasswordError),
            })}
            onSubmit={handleSubmitForm}
          >
            {({ handleSubmit, values, handleChange, handleBlur }) => (
              <>
                <Title>Redefinir senha</Title>
                <InputContainer>
                  <Input
                    type='password'
                    name="password"
                    placeholder="Nova senha"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="password">
                    {msg => <ErrorMsg>{msg}</ErrorMsg>}
                  </ErrorMessage>
                  <Input
                    type='password'
                    placeholder="Cofirme a nova senha"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    mt='25px'
                  />
                  <ErrorMessage name="confirmPassword">
                    {msg => <ErrorMsg>{msg}</ErrorMsg>}
                  </ErrorMessage>
                </InputContainer>
                <Button
                  type="button"
                  onClick={() => handleSubmit()}
                  disabled={isLoading}
                  mt='70px'
                  mb='60px'
                  isLoading={isLoading}
                >
                  Redefinir senha
                </Button>
              </>
            )}
          </Formik>
        ) : (
          <Title>
            Sua senha foi atualizada
            com sucesso!
          </Title>
        )}
      </FormContainer>
    </Container>
  )
}
