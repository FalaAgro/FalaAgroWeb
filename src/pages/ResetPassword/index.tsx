import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { Container, FormContainer, LogoImg, Title } from "./styles"

import LogoSVG from "../../assets/logo.svg"
import { Formik } from "formik"

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
            onSubmit={handleSubmitForm}
          >
            {({ handleSubmit, values, handleChange, handleBlur }) => (
              <>
                <Title>Redefinir senha</Title>
                <Input
                  type='password'
                  name="password"
                  placeholder="Nova senha"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  mb='25px'
                />
                <Input
                  type='password'
                  placeholder="Cofirme a nova senha"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
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
