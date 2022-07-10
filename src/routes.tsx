import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom"
import { ResetPassword } from "./pages/ResetPassword"


export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reset-password" element={<ResetPassword />} />
      </Switch>
    </BrowserRouter>
  )
}