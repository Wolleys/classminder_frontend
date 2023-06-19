import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/public/login";

const LoginRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default LoginRoute