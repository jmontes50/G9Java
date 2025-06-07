import { useForm } from "react-hook-form";
import useAuthStore from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuthStore();

  const navigate = useNavigate();

  //data tiene { nombre, email, password }, por como registramos los input
  const handleRegister = async (data) => {
    console.log(data)
    try {
      await registerUser(data);
      navigate('/login');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card w-[400px] shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-center">
            Registrarse
          </h2>
          <form className="mt-4" onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Nombre completo:</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Juan Perez"
                {...register("nombre", { required: "Es obligatorio" })}
              />
            </fieldset>
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
              Confirmar Registro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
