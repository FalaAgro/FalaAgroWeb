import {
  BrowserRouter,
  Routes as Switch,
  Route,
} from "react-router-dom"
import { Home } from "./pages/Home"

import { ResetPassword } from "./pages/ResetPassword"

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="*" element={<Home />} />
      </Switch>
    </BrowserRouter>
  )
}