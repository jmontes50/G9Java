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

  const handleLogin = async (data) => {
    try {
      console.log(data);
      await login(data.email, data.password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-[400px] shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-center">
            Ingresar
          </h2>
          <form className="mt-4" onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email:</legend>
              <input
                type="email"
                className="input w-full"
                placeholder="example@domain.com"
                {...register("email", { required: "Es obligatorio" })}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Contraseña:</legend>
              <input
                type="password"
                className="input w-full"
                placeholder="mínimo 6 caracteres"
                {...register("password", { required: "Es obligatorio" })}
              />
            </fieldset>
            <button className="btn btn-accent w-full mt-3">
              Acceder
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
