import axios from "axios"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { api } from "../../services/api"
import { Container, FormContainer } from "./styles"

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

        <Input
          placeholder="Nova senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
          mb='25px'
        />
        <Input
          placeholder="Cofirme a nova senha"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        {!isLoading ? (
          <Button
            type="button"
            onClick={handleSubmit}
          >
            Trocar senha
          </Button>
        ) : (
          <span>Loading...</span>
        )}
      </FormContainer>
    </Container>

  )
}
