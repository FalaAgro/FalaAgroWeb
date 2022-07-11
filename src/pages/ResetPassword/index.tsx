import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"

import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { Container, FormContainer, LogoImg, Title } from "./styles"

import LogoSVG from "../../assets/logo.svg"

export function ResetPassword() {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { search } = useLocation()
  const token = search.slice(1)

  async function handleSubmit() {
    if (!password || !token) return
    setIsLoading(true)
    const body = {
      token,
      password
    }

    try {
      const response = await api.put('/users/reset-password', body)
      alert(response.data.message)
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
        <Title>Redefinir senha</Title>
        <Input
          type='password'
          placeholder="Nova senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
          mt='50px'
          mb='25px'
        />
        <Input
          type='password'
          placeholder="Cofirme a nova senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          mt='70px'
          mb='60px'
          isLoading={isLoading}
        >
          Trocar senha
        </Button>
      </FormContainer>
    </Container>

  )
}
