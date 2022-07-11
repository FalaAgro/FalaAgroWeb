import axios from "axios"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { api } from "../../services/api"

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
    <div>
      <input
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      {!isLoading ? (
        <button
          type="button"
          onClick={handleSubmit}
        >
          Trocar senha
        </button>
      ) : (
        <span>Loading...</span>
      )}
    </div>

  )
}
