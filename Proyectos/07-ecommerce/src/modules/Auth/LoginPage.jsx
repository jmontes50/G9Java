import { useForm } from "react-hook-form";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuthStore();

  const navigate = useNavigate();

  const handleLogin = (data) => {

  }

  return (
    <div>LoginPage</div>
  )
}

export default LoginPage
