import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { api } from "../../services/api"

export function ResetPassword() {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { token } = useParams()

  // const a = useQuery
  const test = useLocation()
  console.log(test)
  
  async function handleSubmit() {
    if (!password || !token) return
    setIsLoading(true)
    const body = {
      token,
      password
    }
    console.log(body)

    try {
      const response = await api.put('/users/reset-password', body)
      alert(response.data)
    } catch (err) {
      alert(err.message)
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
